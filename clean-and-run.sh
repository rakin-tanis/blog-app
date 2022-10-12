#!/bin/bash
cd blog-db

docker compose down

docker container rm blog-db-backend-1

docker image rm akin/blog-backend

docker container rm blog-db-frontend-1

docker image rm akin/blog-frontend

# docker rm -f $(docker ps -a -q)

docker volume rm $(docker volume ls -q)

rm -r postgres-data

docker compose up