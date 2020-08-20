package handler

import (
	"scouting-app/backend/dbutils"

	"github.com/gin-gonic/gin"
)

// ReadRecordings returns json serialization of an array of Recordings
func ReadRecordings(c *gin.Context) {
	recordings := []dbutils.Recording{}
	dbutils.SelectRecordings(recordings)
	c.JSON(200, recordings)
}
