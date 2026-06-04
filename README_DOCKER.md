# Docker Guide

## Run with Docker Compose

```bash
docker compose up --build
```

Open:

```txt
http://localhost:8080
```

## Build manually

```bash
docker build -t it-passport-knowledge-graph .
docker run --rm -p 8080:80 it-passport-knowledge-graph
```

## Notes

- The app is static: React + Vite build served by Nginx.
- No backend, no API key, no database required.
- Progress data is stored in the user's browser localStorage.
- The Nginx config includes SPA fallback so refresh works on all routes.
