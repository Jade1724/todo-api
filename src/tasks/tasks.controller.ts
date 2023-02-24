import { AppDataSouce } from '../..';
import { Task } from './tasks.entity';
import { instanceToPlain } from 'class-transformer';

export class TasksController {
    
    constructor(
        private taskRepository = AppDataSouce.getRepository(
            Task,
        ),
    ) {}


    public async getAll(): Promise<Task[] | undefined> {
        // Declare a variable to hold all tasks
        let allTasks: Task[];

        // Fetch all tasks using the repository
        try {
            allTasks = await this.taskRepository.find({
                order: {
                    date: 'ASC',
                },
            });

            // Conver the tasks instance to an array of objects
            allTasks = instanceToPlain(allTasks) as Task[];
            return allTasks;
        } catch (errors) {
            console.log(errors);
            return;
        }

    }
}