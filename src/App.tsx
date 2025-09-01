import React from 'react';
import { AppRouter } from './AppRouter';
import { ThemeProvider } from './context/ThemeContext';
export function App() {
  return <ThemeProvider>
      <AppRouter />
    </ThemeProvider>;
}