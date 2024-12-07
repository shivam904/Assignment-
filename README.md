
# Kanban Board using React

A React-based application for managing tasks with features like adding, searching, and organizing tasks via drag-and-drop functionality.

## Features

- **Task Management**: Add, edit, and delete tasks.
- **Drag-and-Drop**: Organize tasks visually.
- **Search Functionality**: Search tasks based on keywords.
- **Interactive Forms**: Easy-to-use forms for task input.

## Project Structure

### Components

1. **Drop** (`Drop.jsx`):  
   Handles drag-and-drop functionality with visual feedback.
   
2. **SearchBar** (`SearchBar.jsx`):  
   Provides a search interface to filter tasks based on user input.

3. **TaskCard** (`TaskCard.jsx`):  
   Displays individual tasks with drag-and-drop and delete functionality.

4. **TaskForm** (`TaskForm.jsx`):  
   Handles task input and submission, including task descriptions.

### Styles

- CSS files for each component to ensure modular styling:
  - `Drop.css`
  - `searchbar.css`
  - `TaskCard.css`
  - `TaskForm.css`

### Assets

- Icons (e.g., delete icon) and any other assets are stored in the `assets` folder.

## Installation

1. Clone the repository:
   ```bash

   git clone <repository-url>
   cd <repository-folder>

   ```

2. Install dependencies:
   ```bash

   npm install

   ```

3. Start the development server:
   ```bash

   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## Usage

1. **Add a Task**: Use the form to input a task title and description, then click "Submit Task."
2. **Search Tasks**: Use the search bar to filter tasks by keywords.
3. **Organize Tasks**: Drag tasks to rearrange them.
4. **Delete a Task**: Click the delete icon on any task card.

## Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling components.

## Future Enhancements

- Add task prioritization.
- Implement user authentication.
- Introduce a backend for data persistence.

