import type { Task } from './types'

interface TaskItemProps {
    task: Task
}

export const TaskItem = ({ task }: TaskItemProps) => {
    return (
        <li style={{ textDecoration: task.isCompleted ? 'line-through' : 'none', color: task.isCompleted ? '#888' : '#d71797' }}>
            {task.title}
        </li>
    );
};