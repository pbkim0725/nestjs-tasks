import { TaskStatus } from '../types/task.status.enum';

export class UpdateTaskDto {
  title: string;
  description: string;
  status: TaskStatus;
}
