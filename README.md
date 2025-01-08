# Item Management Backend

This repository contains the backend for the Item Management application built with Express.js and TypeScript. The backend provides a RESTful API to manage items in a MySQL database.

## Features
- CRUD operations for items
- TypeScript for better type safety
- MySQL database integration

## Prerequisites
- Node.js (>=14.x)
- MySQL (>=8.x)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=items_db
   PORT=3000
   ```

4. Run the database migrations or ensure the database is set up with the required schema:
   ```sql
   CREATE DATABASE items_db;
   USE items_db;
   CREATE TABLE items (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     price DECIMAL(10, 2) NOT NULL,
     description VARCHAR(255),
     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

6. Access the API at `http://localhost:3000/api/item`.

## API Endpoints

### GET `/api/item`
Fetch all items.

### GET `/api/item/:id`
Fetch an item by ID.

### POST `/api/item`
Create a new item. 
- **Request Body**:
  ```json
  {
    "name": "Sample Item",
    "price": 19.99,
    "description": "Sample description"
  }
  ```

### PUT `/api/item/:id`
Update an item by ID.
- **Request Body**:
  ```json
  {
    "name": "Updated Item",
    "price": 25.99,
    "description": "Updated description"
  }
  ```

### DELETE `/api/item/:id`
Delete an item by ID.

## Scripts

- `npm install`: Install all dependencies.
- `npm run dev`: Run the development server.
- `npm run build`: Build the application.
- `npm run start`: Start the production server.

## Known Issues
- Ensure MySQL service is running before starting the server.

## Future Enhancements
- Add authentication for API endpoints.
- Implement pagination for fetching items.
