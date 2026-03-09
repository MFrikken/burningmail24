<img src="/bm24/next-frontend/public/logo.svg" alt="logo" width="64"/>

# burningmail24.live
A free email subject line generator.

https://burningmail24.live
https://bm24.live

## About
[burningmail24.live](https://burningmail24.live)
is a free website that uses a self-hosted large language model to generate custom subject lines for emails.
While privacy and security are top priorities, we want to put emphasis on usability — thus, _burningmail24.live_ is built to be simple, and a little bold.

### Privacy & Security
Your data stays yours.
This project uses a self-hosted free, open-source [large language model](https://huggingface.co/HuggingFaceTB/SmolLM2-1.7B-Instruct) for subject line generation, and all traffic is SSL-encrypted.
No user data is stored; only system and performance metrics are monitored.
We build things the way we’d want to use them — with integrity and care for good engineering.

## Contribution
The project is open source, but active development remains in our hands.
If you have feature requests or want to report a bug, feel free to contact us.
If you’d like to show appreciation for our work, you can [buy us a coffee](https://paypal.me/frikken).

## Installation (Contributor Setup)
This project consists of a Next.js (TypeScript) application and a separate LLM service, both running on Bun. Both services have their own Dockerfiles and are orchestrated via `docker-compose.yml`.

### Prerequisites
- Docker  
- Docker Compose  
- Bun  

### Clone the Repository
```sh
git clone https://github.com/MFrikken/burningmail24.git
cd bm24/
```

### Install Dependencies
#### Next.js App
From `bm24/`:
```sh
bun install
````

#### LLM Service
The LLM service is located in `bm24/llm-service/`:

```sh
cd bm24/llm-service
bun install
```

### Running via Docker (Recommended)
From `bm24/`: Start both services (Next.js app + LLM service) with:
```bash
docker-compose up --build
```

To start without rebuilding:
```sh
docker-compose up
````

### Local Development Without Docker
From `bm24/`: Run Next.js backend
```sh
bun dev
````

From `bm24/llm-service/`: Run LLM Service
```sh
bun dev
```
