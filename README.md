# Todo List Application

## Project Overview

This frontend-only Todo List application enables users to efficiently manage their tasks. The app allows users to add, edit, remove, and mark tasks as completed while handling different task states through an intuitive and user-friendly interface.

## How to Use

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ImTheDoctor/todo_list.git
   cd todo-list
   npm install
   npm run dev

## Key Features and User Interactions

### Task Addition
- **Add New Tasks:** Users can add new tasks (todos) with a mandatory title, an optional description, and an optional deadline.

### Task Editing
- **Edit Existing Tasks:** Users can edit the details of existing tasks, including the title, description, and deadline.

### Task Deletion
- **Remove Tasks:** Users can remove tasks, which then move to a 'Trash' section for viewing.

### Task Status Management
- **Task States:** Each task can be in one of four states:
  - **Pending:** Default state when a task is created.
  - **Completed:** Set by the user using a "Mark as Complete" action.
  - **Overdue:** Automatically set when the task's deadline has passed. Overdue tasks cannot be marked as completed.
  - **Removed:** Set when the user commits deletion.

### User Interface
- **Intuitive and Responsive UI:** The application features an intuitive and responsive user interface using either Material Design or Ant Design for UI components.

## Technical Specifications

### Framework and Libraries
- **React:** Used for building the user interface.
- **Redux with Redux Toolkit (RTK):** Used for state management.

### Form Handling
- **Formik or React Hook Form:** Implemented for efficient form state management.
- **Yup:** Used for form validation.

### Language
- **TypeScript:** The application is written in TypeScript.

### Responsive Design (Optional)
- **Responsive Design:** Ensures the application works well on both desktop and mobile devices.