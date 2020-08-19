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
	r.GET("/api/recordings", handler.Recordings)
	r.Run()
}
