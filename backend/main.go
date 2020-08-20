package main

import (
	"scouting-app/backend/dbutils"
	"scouting-app/backend/handler"

	"github.com/gin-gonic/gin"
)

func init() {
	dbutils.Open()
}

func main() {
	r := gin.Default()
	r.GET("/api/read-recordings", handler.ReadRecordings)
	r.POST("/api/create-recording", handler.CreateRecording)
	r.Run()
}
