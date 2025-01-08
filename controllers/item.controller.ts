import { Request, Response } from 'express';
import { getAllItems, getItemById, createItem, updateItem, deleteItem } from '../services/item.service';

// Get all items
export const getItemsController = async (req: Request, res: Response) => {
  try {
    const items = await getAllItems();
    console.log('Items retrieved:', items);
    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get an item by ID
export const getItemByIdController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }

    const item = await getItemById(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    console.log('Item retrieved:', item);
    res.status(200).json(item);
  } catch (error) {
    console.error('Error fetching item by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new item
export const createItemController = async (req: Request, res: Response) => {
  try {
    const { name, price, description } = req.body;

    if (!name || typeof name !== 'string' || name.length > 100) {
      return res.status(400).json({ message: 'Invalid name' });
    }
    if (!price || typeof price !== 'number' || price <= 0) {
      return res.status(400).json({ message: 'Invalid price' });
    }
    if (description && typeof description !== 'string') {
      return res.status(400).json({ message: 'Invalid description' });
    }

    const newItem = await createItem({ name, price, description });
    console.log('Item created:', newItem);
    res.status(201).json({ message: 'Item created successfully', newItem });
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update an item
export const updateItemController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name, price, description } = req.body;

    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }
    if (!name || typeof name !== 'string' || name.length > 100) {
      return res.status(400).json({ message: 'Invalid name' });
    }
    if (!price || typeof price !== 'number' || price <= 0) {
      return res.status(400).json({ message: 'Invalid price' });
    }
    if (description && typeof description !== 'string') {
      return res.status(400).json({ message: 'Invalid description' });
    }

    const updatedItem = await updateItem(id, { name, price, description });
    console.log('Item updated:', updatedItem);
    res.status(200).json({ message: 'Item updated successfully', updatedItem });
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Delete an item
export const deleteItemController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }

    await deleteItem(id);
    console.log(`Item with ID ${id} deleted`);
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
