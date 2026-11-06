# Full-stack app environments

This exercise reuses the todo app source in `todo-app` and provides development
and production container setups in `my-app`.

Start the development environment from this directory:

```powershell
docker compose -f my-app/docker-compose.dev.yml up
```

The development setup bind-mounts the frontend and backend source for live
updates. Start the production environment with:

```powershell
docker compose -f my-app/docker-compose.yml up --build
```

Both environments are available through Nginx at
[http://localhost:8080](http://localhost:8080). The frontend sends API requests
through Nginx at `/api`; only Nginx publishes a host port.

Full-stack app repository: [JohnMalNyuoun/My-app](https://github.com/JohnMalNyuoun/My-app)
