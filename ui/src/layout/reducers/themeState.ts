import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Theme } from '../../constants/types';
import { DEFAULT_THEME } from '../../config/themes/index';

export const themeState = createSlice({
  name: 'themeState',
  initialState: {
    theme: DEFAULT_THEME as Theme,
    status: 'loading' as ThemeStatus,
  },
  reducers: {
    setTheme: (state: { theme: Theme }, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state: { theme: Theme }) => {
      if (state.theme !== 'light') {
        state.theme = 'light';
      } else {
        state.theme = 'dark';
      }
    },
    setStatus: (
      state: { status: ThemeStatus },
      action: PayloadAction<ThemeStatus>
    ) => {
      state.status = action.payload;
    },
  },
});

export type ThemeStatus = 'idle' | 'loading' | 'loaded';

export interface ThemeState {
  themeState: { theme: Theme; status: ThemeStatus };
}

export const { setTheme, toggleTheme, setStatus } = themeState.actions;

export default themeState.reducer;
