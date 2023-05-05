## branches 🦋

### rest-dev
nestJS structure & google gmail authentication

### rest
@nestjs/mongoose mongoose

### apollo
@nestjs/graphql @nestjs/apollo graphql apollo-server-express

@nestjs/mongoose mongoose

## nest-api

Node.js framework NestJS project structure

### Configuration

1. Create a `.env` file
    - Rename the [.env.sample](.env.sample) file to `.env` to fix it.
2. Edit env config
    - Edit the file in the [config](src/config) folder.
    - `default`, `development`, `production`, `test`

### Installation

```sh
# 1. node_modules
pnpm ci
# 1-1. npm < v7 or Node.js <= v14
pnpm i
# 2. When synchronize database from existing entities
pnpm run entity:sync
# 2-1. When import entities from an existing database
pnpm run entity:load
```

If you use multiple databases in `entity:load`, [modify them.](bin/entity.ts#L45)

### Development

```sh
npm run dev
# https://docs.nestjs.com/recipes/repl
npm run start:repl
```

Run [http://localhost:5000](http://localhost:5000)

### Test

```sh
pnpm test # exclude e2e
pnpm run test:e2e
```

### Production

```sh
pnpm run lint
pnpm run build
# define environment variable yourself.
# NODE_ENV=production PORT=8000 NO_COLOR=true node dist/app
node dist/app
# OR
pnpm start
```
