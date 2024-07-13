export interface Task {
    id: string;
    title: string;
    description?: string;
    deadline?: string;
    status: 'pending' | 'completed' | 'overdue' | 'removed';
}

export interface TasksState {
    tasks: Task[];
    trash: Task[];
}