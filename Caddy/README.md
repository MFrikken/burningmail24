# Caddy Test Container
This directory contains files for setting up a Caddy docker container for **local tests only!**


 In case you want to run this project locally, you need to run the [docker-compose.yml](../bm24/docker-compose.yml) in `../bm24/` to start both web-app and llm-service container. However, these containers run in an internal network for security purposes. To access the web-app, you thus need a reverse-proxy to redirect incoming http-requests to the web-app container. For this purpose, this directory contains all necessary files to setup a Caddy container locally. 


 Run the [docker-compose file](docker-compose.yml) inside this directory to start Caddy and access the web-app on [localhost:8080](http://localhost:8080). Note that this Caddy is exposed to the whole local network in order to make it accessable to mobile devices as well. 

 Run from `/Caddy`:
```sh
docker-compose up --build
```