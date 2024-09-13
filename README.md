# [Plant Life Nursery](https://plant-life-nursery.vercel.app/)

## Introduction

This is a E-Commerce Nursery Website

## Project Description

This is a online nursery shop. You can buy a plant for this shop. Also you can post your plant and showcase in this online nursery. You can buy a plant cosh on delivery. If you purchase a order your information and order info will send database. The plant you order the quantity will decrise this product in database. If you refresh this website you can see the update real time. If you click in the card component you can also see the product details.

## Features

- Post a product
- Edit a product
- Delete a product
- Search  products
- Order a product
- See the product details

## Technology Stack

- **Forntend Development:**
  - Html
  - React
  - Taliwind
  - TypeScript
  - Redux

- **Backend Development:**
  - Node.js
  - Express.js
  - Mongoose
  - TypeScript

## Installation Guideline
  - Clone the ripo
  - Run `npm i`

### Prerequisites

- MongoDB account

### Installation Steps

  - Then clone the backend repo: ![Backend repo](https://github.com/programmer-jafir/Sports-Facility-Booking-Platform)
  - Then run the below codes in backend terminal:
    1. npm init
    2. npm install express
    3. npm install express --no-save
    4. npm install mongoose --save
    5. npm i ts-node-dev
    6. npm i cors
    7. npm i dotenv
    8. npm i typescript 

### Configuration

1. Create a `.env` file in the root directory of the project of backend.
2. Add necessary configuration variables in the `.env` file.
   Example:
   ```bash
    PORT=5000
    DB_URL=your_db_connection_uri
    NODE_ENV=development
   ```
3. Then go to app.ts: 
app.use(cors({origin: 'your-forntend-url', credentials: true}));
4. Then go to redux api and change it: baseQuery: fetchBaseQuery({baseUrl: "your-backend-url",
        credentials:"include",
    }),
 