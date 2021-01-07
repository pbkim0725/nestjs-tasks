import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../types/task.status.enum';
export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
