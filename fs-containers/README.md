# Full-stack app development environment

This exercise reuses the todo app source in `todo-app` and provides a separate
containerized development setup in `my-app`. Dependencies are installed into
the development images, and the app source is bind-mounted into the frontend
and backend containers so edits are picked up while the containers are running.

Start the development environment from this directory:

```powershell
docker compose -f my-app/docker-compose.dev.yml up
```

Open [http://localhost:8080](http://localhost:8080). The frontend sends API
requests through Nginx at `/api`; only Nginx publishes a host port.

Full-stack app repository: [JohnMalNyuoun/My-app](https://github.com/JohnMalNyuoun/My-app)
