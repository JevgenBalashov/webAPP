// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import { Theme as MuiTheme } from '@mui/material/styles';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';

declare module '@mui/material/styles' {
  interface ThemeOptions {
    customFont: NextFontWithVariable;
  }

  interface Theme extends ThemeOptions {}
}
