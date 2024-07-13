import React, { useState } from "react";
import TaskForm from "./taskForm/TaskForm";
import TaskList from "./taskList/TaskList";
import TrashSection from "./trash/TrashSection";
import { Tabs, Tab, Box } from "@mui/material";
import TaskIcon from '@mui/icons-material/Task';
import DeleteIcon from '@mui/icons-material/Delete';
import classes from './task.module.css';

const Task: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <>
            <TaskForm />
            <Box sx={{ width: '100%' }}>
                <Tabs value={activeTab} onChange={handleChange} aria-label="task tabs">
                    <Tab icon={<TaskIcon />} label="Tasks" />
                    <Tab icon={<DeleteIcon />} label="Trash" />
                </Tabs>
            </Box>
            <div className={classes.tabContent}>
                {activeTab === 0 && <TaskList />}
                {activeTab === 1 && <TrashSection />}
            </div>
        </>
    );
}

export default Task;
