# Todo App

A simple and elegant task management application built with React, TypeScript, and DaisyUI.

## Features

- **Task Management**: Add, delete, and mark tasks as complete
- **Priority Levels**: Organize tasks by priority (Urgente, Moyenne, Basse)
- **Filtering**: Filter tasks by priority or view all
- **Batch Selection**: Select multiple tasks and complete them at once
- **Theme Switching**: Toggle between Light, Dark, and System themes
- **Persistence**: Tasks and theme preferences are saved to localStorage

## Technologies

| Technology                                    | Purpose       |
| --------------------------------------------- | ------------- |
| [React](https://react.dev/)                   | UI Library    |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety   |
| [Tailwind CSS](https://tailwindcss.com/)      | Styling       |
| [DaisyUI](https://daisyui.com/)               | UI Components |
| [Vite](https://vitejs.dev/)                   | Build Tool    |

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation bar with theme selector
│   └── Navbar2.tsx         # Alternative navbar with system theme support
├── context/
│   ├── ThemeContext.ts     # Theme context definition
│   └── ThemeProvider.tsx   # Theme provider with localStorage persistence
├── App.tsx                 # Main application component
├── main.tsx                # Application entry point
└── index.css               # Global styles with DaisyUI config
```

## Getting Started

### rerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### nstallation

1. Clone the repository:

   ```bash
   git clone https://github.com/Haroldrivail/todoApp.git
   cd todoApp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at [http://localhost:5173](http://localhost:5173)

### uild for Production

```bash
npm run build
```

## Theme Support

The app supports three theme modes:

| Mode      | Description                |
| --------- | -------------------------- |
| ☀️ Light  | Light color scheme         |
| 🌙 Dark   | Dark color scheme          |
| 🖥️ System | Follows your OS preference |

Theme preferences are automatically saved and persist across sessions.

## Usage

1. **Add a task**: Type in the input field, select a priority, and click "Ajouter"
2. **Filter tasks**: Use the filter buttons (Tous, Urgente, Moyenne, Basse)
3. **Complete tasks**: Check the checkbox next to tasks, then click "Finir la sélection"
4. **Delete a task**: Click the delete icon on a task
5. **Change theme**: Use the dropdown in the navbar

## License

This project is open source and available under the [MIT License](LICENSE).
