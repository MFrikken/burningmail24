# Burningmail24 Local Setup
If you want to run this project locally, you can simply run the [docker-compose file](infra/docker-compose.yml) from `/bm24/infra`: 
```sh
docker-compose up --build
```


**Careful!** This compose file will start two containers running inside an internal network. If you haven't created this network yet, create it first by running: 
```sh
docker network create --driver bridge --internal bm24-internal
```


For security reasons, this network is meant to be internal and not exposed to the internet. Thus, the web-app is not available via your web browser by default. To make it accessible refer to the [Caddy documentation](../Caddy/README.md).