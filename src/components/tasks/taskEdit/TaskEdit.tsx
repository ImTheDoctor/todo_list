import React from "react";
import { EditTaskProps } from "./interface";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { editTask } from "../../../redux/slices/tasksSlice";
import { RootState } from "../../../redux/store";
import { validationSchema } from "../../../utils/validation"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

const EditTask: React.FC<EditTaskProps> = ({ taskId, open, onClose }) => {
    const dispatch = useDispatch()
    const task = useSelector((state: RootState) => state.tasks.tasks.find(task => task.id === taskId));

    const formik = useFormik({
        initialValues: {
            title: task?.title || '',
            description: task?.description || '',
            deadline: task?.deadline || '',
        },
        validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            if (task) {
                dispatch(editTask({ ...task, ...values }))
                onClose()
            }
        }
    })

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit task</DialogTitle>
            <DialogContent>
                <Box component="form" onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="title"
                        name="title"
                        label="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                        sx={{ marginTop: 2 }}
                    />
                    <TextField
                        fullWidth
                        id="description"
                        name="description"
                        label="Description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                        sx={{ marginTop: 2 }}
                    />
                    <TextField
                        fullWidth
                        id="deadline"
                        name="deadline"
                        label="Deadline"
                        type="date"
                        value={formik.values.deadline}
                        onChange={formik.handleChange}
                        error={formik.touched.deadline && Boolean(formik.errors.deadline)}
                        helperText={formik.touched.deadline && formik.errors.deadline}
                        sx={{ marginTop: 2 }}
                        InputLabelProps={{ shrink: true }}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={formik.handleSubmit} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditTask