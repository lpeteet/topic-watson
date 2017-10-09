### Schema

CREATE DATABASE IF NOT EXISTS watson_db;
USE watson_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	loggedIn BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE topics
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	user_id int NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
	PRIMARY KEY (id)
);

