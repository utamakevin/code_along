CREATE DATABASE notes_api;

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    content_html TEXT NOT NULL,
    hex_colour TEXT NOT NULL
);

-- ALTER TABLE notes ADD hex_colour TEXT NOT NULL;

-- INSERT INTO notes (content) VALUES ('note one');
-- INSERT INTO notes (content) VALUES ('note two');
-- INSERT INTO notes (content) VALUES ('note three');


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_digest TEXT NOT NULL
);