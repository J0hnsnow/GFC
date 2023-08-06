import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useHeaderHeight } from '@react-navigation/elements';
import React, { ReactNode } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface ScreenGradientProps {
  children: ReactNode;
  headerPadding?: boolean;
}

const ScreenGradient: React.FC<ScreenGradientProps> = ({ children, headerPadding }) => {
  const headerHeight = useHeaderHeight();

  return (
    <LinearGradient
   
    // colors={[ 'rgba(4,56,115,1) 91.6% )',' rgba(0,85,255,1) 1.5%', ]}


// colors={['#219BA1','#2675C0','#103F77']
// colors={[ ' rgba(51,15,176,1) 1.5%','rgba(33,155,161,1) 91.6% )' ]}
colors={['rgba(93,52,236,1) 100.2%','rgba(62,161,219,1) 11.2%',]}


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
