package main

import (
	"scouting-app/backend/dbutils"
	"scouting-app/backend/handler"

	"github.com/gin-gonic/gin"
)

func init() {
	dbutils.Open()
	dbutils.GenerateTables()
}

func main() {
	r := gin.Default()
	r.GET("/api/read", handler.ReadRecordings)
	r.POST("/api/create", handler.CreateRecording)
	r.Run()
}
