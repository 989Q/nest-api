### env
```bash
# craete new app
nest new landda-api
- pnpm

# mongodb
pnpm i @nestjs/mongoose mongoose

# cors
pnpm i cors
```

### create module
```bash
# cd /src
nest g module Estate
nest g service Estate
nest g controller Estate
```

### nestJS structure
```
src/
├── app/
│   ├── auth/
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   └── index.ts
│   │   ├── services/
│   │   │   ├── google.strategy.ts
│   │   │   └── auth.service.ts
│   │   ├── auth.module.ts
│   │   └── auth.constants.ts
│   ├── estate/
│   │   ├── controllers/
│   │   │   ├── estate.controller.ts
│   │   │   └── index.ts
│   │   ├── models/
│   │   │   ├── estate.model.ts
│   │   │   └── index.ts
│   │   ├── services/
│   │   │   ├── estate.service.ts
│   │   │   └── index.ts
│   │   └── estate.module.ts
│   ├── estate-agent/
│   │   ├── controllers/
│   │   │   ├── estate-agent.controller.ts
│   │   │   └── index.ts
│   │   ├── models/
│   │   │   ├── estate-agent.model.ts
│   │   │   └── index.ts
│   │   ├── services/
│   │   │   ├── estate-agent.service.ts
│   │   │   └── index.ts
│   │   └── estate-agent.module.ts
│   ├── functions/
│   │   └── id-generator.ts
│   └── app.module.ts
├── config/
│   ├── development.env
│   ├── production.env
│   └── index.ts
└── main.ts
```