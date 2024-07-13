
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useState } from "react";
import { removeTask, toggleTaskCompleted } from "../../../redux/slices/tasksSlice";

const useTaskList = () => {
    const tasks = useSelector((state: RootState) => state?.tasks.tasks);
    const dispatch = useDispatch();

    const [editTaskId, setEditTaskId] = useState<string | null>(null);

    const handleToggleComplete = (id: string) => {
        dispatch(toggleTaskCompleted(id));
    };

    const handleRemove = (id: string) => {
        dispatch(removeTask(id));
    };

    const handleEditOpen = (id: string) => {
        setEditTaskId(id);
    };

    const handleEditClose = () => {
        setEditTaskId(null);
    };

    return {
        handleEditClose,
        handleEditOpen,
        handleRemove,
        handleToggleComplete,
        tasks,
        editTaskId
    }
}

export default useTaskList