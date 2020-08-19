package handler

import (
	"scouting-app/backend/dbutils"

	"github.com/gin-gonic/gin"
)

// Recordings returns json serialization of an array of Recordings
func Recordings(c *gin.Context) {
	recordings := []dbutils.Recording{}
	dbutils.SelectRecordings(recordings)
	c.JSON(200, recordings)
}
