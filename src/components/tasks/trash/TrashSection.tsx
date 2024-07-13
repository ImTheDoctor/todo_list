import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const TrashSection: React.FC = () => {
    const trash = useSelector((state: RootState) => state.tasks.trash)

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Trash
            </Typography>
            {trash.length > 0 ? (
                <List>
                    {trash.map((task) => (
                        <ListItem key={task.id}>
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
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant="body1">
                    Trash is empty
                </Typography>
            )}
        </div>
    )
}

export default TrashSection