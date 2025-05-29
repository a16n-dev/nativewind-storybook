import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

const meta: Meta = {
  title: 'Test',
};

export default meta;

export const Default: StoryObj = {
  render: () =>
      <View style={{flex: 1, flexDirection: 'row', gap: 4}}>
        {/* This is a control, to verify styles in general are working */}
        <View style={{width: 40, height: 40, backgroundColor: 'green'}}/>
        {/* This is a debug syntax from nativewind */}
        <View style={{ $$css: true, test: 'w-10 h-10 bg-blue-500' }} />
        {/* This is what we need to make sure works */}
        <View className={'w-10 h-10 bg-red-500'}/>
      </View>
};