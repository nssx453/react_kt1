import type { Task } from './types'
import { TaskBoard } from './TaskBoard'

function App() {
    const myTasks: Task[] = [
        { id: 1, title: 'погулять с лилей', isCompleted: true },
        { id: 2, title: 'покормить лилю', isCompleted: false },
        { id: 3, title: 'познакомить филю с лилей', isCompleted: false },
    ]

    return (
        <div>
            <h2>мои задания</h2>
            <TaskBoard tasks={myTasks} />
        </div>
    )
}

export default App
