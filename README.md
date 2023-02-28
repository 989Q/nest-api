### Environment
```bash
nest new landda-api
- pnpm

# ApolloDriver, ApolloDriverConfig
pnpm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express

# mongodb
# last
pnpm i @nestjs/mongoose mongoose

# past
# pnpm install graphql @nestjs/graphql @nestjs/mongoose mongoose
```

### crreate module
```bash
# cd /src 
nest g module blogs
nest g service blogs
nest g resolver blogs

nest g module estate
nest g service estate
nest g resolver estate
```

### Schema 

Estate

Blog