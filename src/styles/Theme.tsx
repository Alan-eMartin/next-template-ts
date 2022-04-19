import { ThemeProvider } from 'styled-components';

export default function Theme({ children }: { children: React.ReactNode }) {
  // Make API calls to get the theme or use a default theme
  const theme = {
    colors: {
      black: '#282828',
      white: '#fff',
      primary: '#F8E4C4',
      secondary: '#C9E0EC',
      success: '#CCDDC0',
      error: '#F3D5DB',
    },
    fontSizes: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
    },
    headings: {
      sm: '2rem',
      md: '2.5rem',
      lg: '3rem',
      xl: '4rem',
    },
    spacing: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      xl: '1.5rem',
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
