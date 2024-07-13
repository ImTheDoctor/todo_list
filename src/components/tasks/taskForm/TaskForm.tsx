import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { validationSchema } from "../../../utils/validation"
import { addTask } from "../../../redux/slices/tasksSlice";
import { Box, TextField, Button } from "@mui/material";

const TaskForm: React.FC = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            deadline: ''
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            dispatch(addTask(values));
            resetForm()
        }
    })

    return (
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ margin: 2 }}>
            <TextField
                fullWidth
                id="title"
                name="title"
                label="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
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
                InputLabelProps={{ shrink: true }}
                sx={{ marginTop: 2 }}
            />
            <Button type="submit" color="primary" variant="contained" fullWidth sx={{ marginTop: 2 }}>
                Add Task
            </Button>
        </Box>
    )
}

export default TaskForm;