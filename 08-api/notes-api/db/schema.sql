CREATE DATABASE notes_api;

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    content_html TEXT NOT NULL,
    hex_colour TEXT NOT NULL
);

-- ALTER TABLE notes ADD hex_colour TEXT NOT NULL;

-- INSERT INTO notes (contentq) VALUES ('note one');
-- INSERT INTO notes (content) VALUES ('note two');
-- INSERT INTO notes (content) VALUES ('note three');