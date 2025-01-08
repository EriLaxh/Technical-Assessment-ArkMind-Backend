import { db } from './database';
import { RowDataPacket } from 'mysql2';

// Get all items
export const getAllItems = async () => {
  console.log('Fetching all items');
  const [rows] = await db.query<RowDataPacket[]>(`SELECT * FROM items`);
  return rows;
};

// Get an item by ID
export const getItemById = async (id: number) => {
  console.log(`Fetching item with ID: ${id}`);
  const [rows] = await db.query<RowDataPacket[]>(`SELECT * FROM items WHERE id = ?`, [id]);
  return rows[0] || null;
};

// Create an item
export const createItem = async (item: { name: string; price: number; description?: string }) => {
  console.log('Creating item:', item);
  const [result] = await db.query(
    `INSERT INTO items (name, price, description, createdAt, updatedAt) VALUES (?, ?, ?, NOW(), NOW())`,
    [item.name, item.price, item.description || 'Default description'] // Add default value for description
  );
  return result;
};

// Update an item
export const updateItem = async (id: number, item: { name: string; price: number; description?: string }) => {
  console.log(`Updating item with ID: ${id}`, item);
  const [result] = await db.query(
    `UPDATE items SET name = ?, price = ?, description = ?, updatedAt = NOW() WHERE id = ?`,
    [item.name, item.price, item.description || 'Default description', id] // Default for description
  );
  return result;
};

// Delete an item
export const deleteItem = async (id: number) => {
  console.log(`Deleting item with ID: ${id}`);
  const [result] = await db.query(`DELETE FROM items WHERE id = ?`, [id]);
  return result;
};
