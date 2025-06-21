import React, { useContext, createContext, useMemo, useEffect, useState } from "react";
import { Theme, ThemeName } from "../types";
import themes from "../themes";

interface DSContextType {
  changeTheme: (theme: ThemeName) => void;
  theme: Theme;
}

const DSContext = createContext<DSContextType | undefined>(undefined)

export const DSProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(themes.light);

  useEffect(() => {

  }, []);
  
  const changeTheme = (_theme: ThemeName) => {
    console.log(`Theme set to: ${theme}`);
    setTheme(themes[_theme]);
  };

  const value = useMemo(() => ({ changeTheme, theme }), [changeTheme, theme]);

  return (
    <DSContext.Provider value={value}>
      {children}
    </DSContext.Provider>
  );
}

export const useDS = (): DSContextType => {
  const context = useContext(DSContext);

  if (!context) {
    throw new Error('useDS must be used within a DSProvider');
  }

  return context;
};



// import { View, Text } from 'react-native'
// // import React from 'react'

// function Block1() {

//   const {  } = useDS();
//   return (
//     <View>
//       <Text>designSystem</Text>
//     </View>
//   )
// }

// function Block2() {
//   const { } = useDS();
//   return (
//     <DSProvider>
//       <View>
//         <Text>designSystem</Text>
//       </View>
//       <Block1 />
//     </DSProvider>
//   )
// }