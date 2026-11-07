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
 
  Last two exercise repository

Full-stack app repository: [JohnMalNyuoun/My-app](https://github.com/JohnMalNyuoun/My-app)

Exercise 22 (https://github.com/JohnMalNyuoun/My-app/commit/482b45aa6e4d8e0d53709450d497c46ec6ea463a)

Exercise 23 (https://github.com/JohnMalNyuoun/My-app/commit/fbd8a8dc4f1c0ed098fe5043ebceda25a9fb929a)