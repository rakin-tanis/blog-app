
/* CREATE DATABASE IF NOT EXISTS blog;

USE blog; */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;


CREATE TABLE
    IF NOT EXISTS posts (
        id uuid DEFAULT uuid_generate_v4 () not null primary key,
        title varchar(255) not null,
        content text not null,
        author varchar(32) not null,
        createDate timestamp default now() not null,
        category varchar(32) not null,
        likeCount int default 0 not null,
        viewCount int default 0 not null,
        image varchar(255) 
    );

CREATE TABLE 
    IF NOT EXISTS comments (
        id uuid DEFAULT uuid_generate_v4 () not null primary key, 
        name varchar(32) not null,
        email varchar(128) not null,
        createDate timestamp default now() not null,
        content text not null,
        postId uuid not null,
        foreign key (postId) references posts(id)
    );
