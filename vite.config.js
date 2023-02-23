import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://harrysharma1.github.io/react-todo-app/',
  plugins: [react()],
})
