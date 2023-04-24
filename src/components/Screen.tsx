import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenProp {
  children?: React.ReactNode;
  title?: string;
  headerVisible?: boolean;
}

const Screen = ({children, title, headerVisible = true}: ScreenProp) => {
  const {goBack, cnaGoBack} = useNavigation();
  const onPressBackButton = useCallback(() => {
    goBack();
  }, [goBack]);
  return (
    <SafeAreaView style={}>
      <Text>Screen</Text>
    </SAfeareavie>
  );
};

export default Screen;
