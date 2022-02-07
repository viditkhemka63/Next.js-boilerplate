import { useState, createContext, useContext } from 'react';

import { lightTheme, darkTheme } from '@/utils/theme';
import { ThemeProvider } from '@mui/material/styles';

interface ThemeContextInterface {
  currentTheme: Theme;
  handleSetTheme: (theme: Theme) => void;
}

const getMaterialTheme = (theme: Theme) => {
  switch (theme) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
};

export const ThemeContext = createContext<ThemeContextInterface>(undefined!);

export const useMyTheme = () => useContext(ThemeContext);

type Theme = 'light' | 'dark';

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setTheme] = useState<Theme>('light');
  const handleSetTheme = (theme: Theme) => setTheme(theme);

  const contextValue: ThemeContextInterface = {
    currentTheme,
    handleSetTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={getMaterialTheme(currentTheme)}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
