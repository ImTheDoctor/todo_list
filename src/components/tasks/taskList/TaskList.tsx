import React from "react";
import useTaskList from "./useTaskList";
import { Checkbox, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditTask from "../taskEdit/TaskEdit";

const TaskList: React.FC = () => {
    const { handleEditClose, handleEditOpen, handleRemove, handleToggleComplete, tasks, editTaskId } = useTaskList()

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                List
            </Typography>
            {tasks.length > 0 ? (
                <List>
                    {tasks.map((task) => (
                        <ListItem key={task.id}>
                            <Checkbox
                                edge="start"
                                checked={task.status === 'completed'}
                                onChange={() => handleToggleComplete(task.id)}
                                disabled={task.status === 'overdue'}
                            />
                            <ListItemText
                                primary={task.title}
                                secondary={
                                    <>
                                        <Typography component="span" variant="body2">
                                            {task.description}
                                        </Typography>
                                        <br />
                                        <Typography component="span" variant="body2">
                                            {task.deadline}
                                        </Typography>
                                        <br />
                                        <Typography component="span" variant="body2">
                                            Status: {task.status}
                                        </Typography>
                                    </>
                                }
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" onClick={() => handleEditOpen(task.id)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" onClick={() => handleRemove(task.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant="body1">
                    List is empty
                </Typography>
            )}
            {editTaskId && <EditTask taskId={editTaskId} open={!!editTaskId} onClose={handleEditClose} />}
        </div>
    )
}

export default TaskList