package main

import (
	"scouting-app/backend/dbutils"
	"github.com/gin-gonic/gin"
)

func init() {
	dbutils.Open()
}

func main() {
	r := gin.Default()
	// r.GET("/api/recordings",  ) 
	r.Run()
}