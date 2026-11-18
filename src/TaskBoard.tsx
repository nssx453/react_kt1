import type { Task } from './types';
import { TaskItem } from './TaskItem';

interface TaskBoardProps {
    tasks: Task[];
}

export const TaskBoard = ({ tasks }: TaskBoardProps) => {

    if (tasks.length === 0) {
        return <p style={{ fontSize: '18px', color: '#72217c' }}>Задач нет</p>;
    }

    return (
        <ul style={{ padding: 0, margin: 0 }}>
            {tasks.map((task: Task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    )
}