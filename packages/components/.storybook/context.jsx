import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#167fa6' },
    error: { main: '#ff3860' },
    warning: { main: '#ffdd57' },
    info: { main: '#209cee' },
    success: { main: '#48c774' },
  },
});

export function withContext(Story) {
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
}
