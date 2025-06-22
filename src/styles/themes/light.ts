import { Theme } from '../../types';
import { palette } from '../palette';

export const light: Theme = {
  colors: {
    background: palette.neutral.gray50,       
    text: palette.neutral.gray900,            
    button: {
      primary: palette.alert.error,           
      secondary: palette.primary.green500,    
      disabled: palette.neutral.gray400,      
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
