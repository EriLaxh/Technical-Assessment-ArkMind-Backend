import express, { Request, Response, NextFunction } from 'express';
import {
  getItemsController,
  getItemByIdController,
  createItemController,
  updateItemController,
  deleteItemController,
} from '../controllers/item.controller';

const router = express.Router();

// Correctly typed route handlers
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('GET /api/item called');
  next();
}, getItemsController as unknown as express.RequestHandler);

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  console.log(`GET /api/item/${req.params.id} called`);
  next();
}, getItemByIdController as unknown as express.RequestHandler);

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('POST /api/item called');
  console.log('Request body:', req.body);
  next();
}, createItemController as unknown as express.RequestHandler);

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  console.log(`PUT /api/item/${req.params.id} called`);
  console.log('Request body:', req.body);
  next();
}, updateItemController as unknown as express.RequestHandler);

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  console.log(`DELETE /api/item/${req.params.id} called`);
  next();
}, deleteItemController as unknown as express.RequestHandler);

export default router;
