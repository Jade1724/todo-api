import { Router, Request, Response } from 'express';
import { TasksController } from './tasks.controller';

// Fire the router function
export const tasksRouter: Router = Router();

// Create a default route
tasksRouter.get(
  '/tasks',
  async (req: Request, res: Response) => {
    const taskController = new TasksController();
    const allTasks = await taskController.getAll();
    res.json(allTasks).status(200);
  },
);
