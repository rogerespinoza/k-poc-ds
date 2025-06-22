import { Theme } from '../../types';
import { palette } from '../palette';

export const christmas: Theme = {
  colors: {
    background: palette.neutral.gray900,      
    text: palette.neutral.gray50,             
    button: {
      primary: palette.primary.green900,      
      secondary: palette.secondary.blue700,   
      disabled: palette.neutral.gray500,      
    },
  },
  spaces: {
    size_4: 4,
    size_8: 8,
  },
  corner_radius: {
    corner_radius_0: 0,
    corner_radius_2: 2,
  },
};
