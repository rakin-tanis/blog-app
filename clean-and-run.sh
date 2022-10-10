#!/bin/bash

docker compose down

docker container rm blog-db-backend-1

docker image rm akin/blog-backend

docker rm -f $(docker ps -a -q)

docker volume rm $(docker volume ls -q)

rm -r blog-db/postgres-data

docker compose up