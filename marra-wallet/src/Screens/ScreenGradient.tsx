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
   

// colors={['black',' rgba(0,0,0,1) 100.2%',' rgba(9,29,85,1) 0.2%','#219BA1','#2675C0','#103F77']}
// colors={['#219BA1','#2675C0','#103F77']}
colors={[ 'rgba(4,56,115,1) 91.6% )',' rgba(0,85,255,1) 1.5%', ]}


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
