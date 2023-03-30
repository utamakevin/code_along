-- just a normal text line

-- excel file
CREATE DATABASE game;

-- to connect to a specific database
-- \c
-- \dt describe tables

-- schema
-- excel sheet
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT,
    score INTEGER
);

INSERT INTO players (name, score) VALUES ('tales', 4);
INSERT INTO players (name, score) VALUES ('tom', 5);
INSERT INTO players (name, score) VALUES ('carl', 0);
INSERT INTO players (name, score) VALUES ('whoopi', 2);
INSERT INTO players (name, score) VALUES ('leon', 0);

-- select columns... from tablename;
SELECT name, score FROM players;

-- select all columns
-- select * FROM players;

-- searching
SELECT name, score FROM players WHERE name = 'tom';

-- update an existing
UPDATE players SET score = 1 WHERE name = 'carl';

-- delete
DELETE FROM players WHERE name = 'carl';


-- remove entire table
DROP TABLE players;