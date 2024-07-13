import { useDispatch } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { checkOverdueTasks } from './redux/slices/tasksSlice'
import { Container, Typography } from '@mui/material'
import Task from './components/tasks/Task'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkOverdueTasks())
  }, [dispatch])

  return (
    <Container>
      <Typography variant='h3' gutterBottom>
        Todo List
      </Typography>
      <Task />
    </Container>
  )
}

export default App
