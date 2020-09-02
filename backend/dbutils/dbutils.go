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
	ID                     uint8  `db:"id" json:"id"`
	Team                   uint16 `db:"team" json:"team"`
	StartingLocation       uint8  `db:"starting_location" json:"startingLocation"`
	Moved                  bool   `db:"moved" json:"moved"`
	InnerPort              uint16 `db:"inner_port" json:"innerPort"`
	OuterPort              uint16 `db:"outer_port" json:"outerPort"`
	LowerPort              uint16 `db:"lower_port" json:"lowerPort"`
	ControlPanelStageTwo   bool   `db:"control_panel_stage_two" json:"controlPanelStageTwo"`
	ControlPanelStageThree bool   `db:"control_panel_stage_three" json:"controlPanelStageThree"`
	HangTime               uint8  `db:"hang_time" json:"hangTime"`
	Time                   string `db:"time" json:"time"`
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

// CreateRecording creates a recording row (takes a Recording struct as input)
func CreateRecording(recording Recording) error {
	query, err := DB.Prepare("INSERT INTO Recording (team, starting_location, moved, inner_port, outer_port, lower_port, control_panel_stage_two, control_panel_stage_three, hang_time, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")
	defer query.Close()

	if err != nil {
		log.Fatalf("Prepare err %s\n", err)
		return err
	}

	_, err = query.Exec(recording.Team, recording.StartingLocation, recording.Moved, recording.InnerPort, recording.OuterPort, recording.LowerPort, recording.ControlPanelStageTwo, recording.ControlPanelStageThree, recording.HangTime, recording.Time)
	if err != nil {
		return fmt.Errorf("query exec error: %s", err)
	}

	return nil
}

// GenerateTables inserts rows into the Recording table so that we can have data to display/test
func GenerateTables() {
	data := []Recording{
		{Team: 5829, StartingLocation: 0, Moved: true, InnerPort: 50, OuterPort: 15, LowerPort: 20, ControlPanelStageTwo: true, ControlPanelStageThree: false, HangTime: 20, Time: "2020-01-01 10:10:10"},
		{Team: 118, StartingLocation: 2, Moved: false, InnerPort: 35, OuterPort: 16, LowerPort: 26, ControlPanelStageTwo: false, ControlPanelStageThree: false, HangTime: 0, Time: "2020-01-01 10:10:12"},
		{Team: 360, StartingLocation: 1, Moved: true, InnerPort: 5, OuterPort: 10, LowerPort: 5, ControlPanelStageTwo: false, ControlPanelStageThree: true, HangTime: 15, Time: "2020-03-01 10:10:10"},
		{Team: 69, StartingLocation: 0, Moved: true, InnerPort: 30, OuterPort: 20, LowerPort: 13, ControlPanelStageTwo: true, ControlPanelStageThree: true, HangTime: 21, Time: "2020-05-01 10:10:10"},
		{Team: 420, StartingLocation: 0, Moved: true, InnerPort: 30, OuterPort: 20, LowerPort: 13, ControlPanelStageTwo: true, ControlPanelStageThree: true, HangTime: 21, Time: "2020-01-05 10:10:10"},
	}
	for _, i := range data {
		err := CreateRecording(i)
		if err != nil {
			panic(err)
		}
	}
}
