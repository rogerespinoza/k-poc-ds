export interface Space {
  size_4: number;
  size_8: number;
}

export interface CornerRadius {
  corner_radius_0: number;
  corner_radius_2: number;
}

export interface Color {
  background: string;
  text: string;
  button: {
    primary: string;
    secondary: string;
    disabled: string;
  };
}

export interface Theme {
  colors: Color;
  spaces: Space;
  corner_radius: CornerRadius;
}

export type ThemeName = 'light' | 'christmas';