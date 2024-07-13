import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TasksState } from "./interface";

const initialState: TasksState = {
    tasks: [],
    trash: [],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<Omit<Task, 'id' | 'status'>>) {
            const newTask: Task = { id: Date.now().toString(), ...action.payload, status: 'pending' };
            state.tasks.push(newTask);
        },
        editTask(state, action: PayloadAction<Task>) {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
        removeTask(state, action: PayloadAction<string>) {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            if (index !== -1) {
                const [removedTask] = state.tasks.splice(index, 1);
                state.trash.push({ ...removedTask, status: 'removed' });
            }
        },
        toggleTaskCompleted(state, action: PayloadAction<string>) {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task && task.status !== 'overdue') {
                task.status = task.status === 'completed' ? 'pending' : 'completed';
            }
        },
        checkOverdueTasks(state) {
            const now = new Date().toISOString();
            state.tasks.forEach(task => {
                if (task.deadline && task.deadline < now && task.status !== 'completed') {
                    task.status = 'overdue';
                }
            });
        },
    },
});

export const { addTask, editTask, removeTask, toggleTaskCompleted, checkOverdueTasks } = tasksSlice.actions
export default tasksSlice.reducer