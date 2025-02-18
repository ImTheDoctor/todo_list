import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string(),
    deadline: Yup.date().nullable(),
})