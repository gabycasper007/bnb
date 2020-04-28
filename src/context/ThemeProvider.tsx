import React from 'react';
import theme1 from '../themes/theme1';
import theme2 from '../themes/theme2';

export const ThemeContext = React.createContext({
  theme: theme1,
  toggleTheme: () => {}
});

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = React.useState(theme1);

  const toggleTheme = () => {
    if (theme.id === 1) {
      setTheme(theme2);
    } else {
      setTheme(theme1);
    }
  };

  React.useEffect(() => {
    const themeId = localStorage.getItem('theme');
    if (themeId && +themeId === 2) {
      setTheme(theme2);
    } else {
      setTheme(theme1);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('theme', theme.id.toString());
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
