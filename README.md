# e-commerce-backend

This is the project for e-commerce backend only.

## Getting Started

### Prerequisites

- Node.js
- PostgreSQl Database

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

### Create dotenv

1. Create dotenv for develop on local:
   ```bash
   .env.local
   ```
2. Create dotenv for development
   ```bash
   .env.development
   ```
3. Create dotenv for staging
   ```bash
   .env.staging
   ```
4. Create dotenv for production
   ```bash
   .env.production
   ```

### Running the Application

1. Start the application:
   ```bash
   npm run dev
   ```

### Running the Application by docker and docker compose (Release to production, staging, development or local)

##### Start the application for local:

1.  Run docker:

```bash
docker compose up -d --build
```

OR

```bash
npm run build:docker
```

### Note

<!-- Be careful with synchronize: true will make you lose data. when need to change data schema in table should backup data -->
<!-- migration data with coppy data then set the same data to the same column -->
1. change AddForeignKeyToTransactionHistory1699999999993 to be difference AddForeignKeyToTransactionHistory1699999999996
2. change table name or datatype or field that you wanna change
3. run
npx typeorm-ts-node-commonjs migration:run -d src/data-source.ts

<!-- Down container -->

1. Down container:
   ```bash
   sudo docker compose -f <DOCKER-COMPOSE-FILE-NAME> down
   ```
   <!-- Clear cache -->
2. Clear docker image unuse:
   ```bash
   docker image prune -a -f
   ```
   <!-- Build new container -->
3. Build new container:
   ```bash
   sudo docker compose -f <DOCKER-COMPOSE-FILE-NAME> up -d --build
   ```
   <!-- Logs container -->
4. Logs container
   ```bash
    sudo docker logs <CONTAINER-NAME> --tail 100 -f
   ```
# temu-api
# temu-api

# UPDATE product VIP
UPDATE product p
SET product_vip = t.level_vip
FROM (
    SELECT 
        id,
        NTILE(4) OVER (ORDER BY price) - 1 AS level_vip
    FROM product
) t
WHERE p.id = t.id;

# SELECT product VIP
SELECT 
  id,
  price,
  NTILE(4) OVER (ORDER BY price) - 1 AS product_vip
FROM product;