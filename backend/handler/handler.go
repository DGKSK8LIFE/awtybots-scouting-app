package handler

import (
	"encoding/json"
	"scouting-app/backend/dbutils"

	"github.com/gin-gonic/gin"
)

// ReadRecordings returns json serialization of an array of Recordings
func ReadRecordings(c *gin.Context) {
	recordings := []dbutils.Recording{}
	dbutils.SelectRecordings(recordings)
	c.JSON(200, recordings)
}

// CreateRecording creates a recording from a json request body
func CreateRecording(c *gin.Context) {
	decoder := json.NewDecoder(c.Request.Body)

	var recording dbutils.Recording

	err := decoder.Decode(&recording)

	if err != nil {
		c.Error(err)
	}

	_, err = dbutils.CreateRecording(recording)

	if err != nil {
		c.Error(err)
	}
}
