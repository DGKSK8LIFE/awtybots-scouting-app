package dbutils

import (
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

var (
	// DB = database
	DB  *sqlx.DB
	err error
)

// Recording is the abstraction struct for Recording table
type Recording struct {
	ID                     uint `db:"id" json:"id"`
	Team                   uint `db:"team" json:"team"`
	StartingLocation       uint `db:"starting_location" json:"starting_location"`
	Moved                  bool `db:"moved" json:"moved"`
	InnerPort              uint `db:"inner_port" json:"inner_port"`
	OuterPort              uint `db:"outer_port" json:"out_port"`
	LowerPort              uint `db:"lower_port" json:"lower_port"`
	ControlPanelStageTwo   bool `db:"control_panel_stage_two" json:"control_panel_stage_two"`
	ControlPanelStageThree bool `db:"control_panel_stage_three" json:"contrl_panel_stage_three"`
	HangTime               uint `db:"hang_time" json:"hang_time"`
	Time                   uint `db:"time" json:"time"`
}

// Open opens the DB
func Open() {
	DB, err = sqlx.Connect("mysql", "root:root@tcp(db)/Scout_DB")
	if err != nil {
		panic(err)
	}
}

// SelectRecordings selects all recordings and scans them to an array of Recordings
func SelectRecordings(recording []Recording) {
	DB.Select(&recording, "SELECT * FROM Recording")
}

// CreateRecordings creates a recording row (takes a Recording struct as input)
func CreateRecordings(recording Recording) error {
	query, err := DB.Prepare("INSERT INTO Recording (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")
	defer query.Close()

	if err != nil {
		log.Fatalf("Prepare err %s\n", err)
		return err
	}

	_, err = query.Exec(recording.ID, recording.Team, recording.StartingLocation, recording.Team, recording.StartingLocation, recording.Moved, recording.InnerPort, recording.OuterPort, recording.LowerPort, recording.ControlPanelStageTwo, recording.ControlPanelStageThree, recording.HangTime, recording.Time)
	if err != nil {
		return fmt.Errorf("query exec error: %s", err)
	}

	return nil
}
