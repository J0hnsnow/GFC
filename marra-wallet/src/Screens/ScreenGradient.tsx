import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useHeaderHeight } from '@react-navigation/elements';
import React, { ReactNode } from 'react';

interface ScreenGradientProps {
  children: ReactNode;
  headerPadding?: boolean;
}

const ScreenGradient: React.FC<ScreenGradientProps> = ({ children, headerPadding }) => {
  const headerHeight = useHeaderHeight();

  return (
    <LinearGradient
    colors={['#000000','#1E0323','#331D2C','#2E0249','#570A57','#A91079','#F806CC','#930E17']}
      // colors={['black', 'black','#1E0323','#1E0323','purple' ,'#930E17']}
      start={{ x: 0.9, y: 0.1 }}
      style={{
        flex: 1,
      
        borderRadius: 5,
        // height: 20,
        // width: 350,
        paddingTop: headerPadding ? headerHeight : 0,
      }}
    >
      {children}
    </LinearGradient>
  );
};

export default ScreenGradient;
