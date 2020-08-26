CREATE DATABASE Scout_DB;
USE Scout_DB;

CREATE TABLE Recording (
    id INT PRIMARY KEY AUTO_INCREMENT,
    team INT NOT NULL,
    starting_location TINYINT NOT NULL,
    moved BOOLEAN NOT NULL,
    inner_port SMALLINT NOT NULL,
    outer_port SMALLINT NOT NULL,
    lower_port SMALLINT NOT NULL,
    control_panel_stage_two BOOLEAN,
    control_panel_stage_three BOOLEAN,
    hang_time TINYINT NOT NULL,
    time TIMESTAMP NOT NULL
);
