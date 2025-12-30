FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install

RUN groupadd bm24 && useradd -m -g bm24 llm

USER llm

COPY --chown=llm:bm24 server.js ./server.js

EXPOSE 5005

CMD ["bun", "server.js"]
