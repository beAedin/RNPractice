import React from 'react';
import type {FC, ReactNode, ComponentProps} from 'react';
import {TouchableOpacity, View} from 'react-native';
import type {StyleProp, ViewStyle} from 'react-native';

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>;

// intersection type -> get TouchableOpacityProps part
export type TouchableViewProps = TouchableOpacityProps & {
  // children?: ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
};

// rest operator -> return TouchableOpacity
export const TouchableView: FC<TouchableViewProps> = ({
  children,
  viewStyle,
  ...touchableProps
}) => {
  return (
    <TouchableOpacity {...touchableProps}>
      <View style={[viewStyle]}>{children}</View>
    </TouchableOpacity>
  );
};
