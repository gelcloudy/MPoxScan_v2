import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, GestureResponderEvent } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

interface CustomButtonProps {
  title: string;
  handlePress: (event: GestureResponderEvent) => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading = false,
}) => {
  return (
    <StyledTouchableOpacity
      onPress={handlePress}
      activeOpacity={0.9}
      className={`bg-primary rounded-3xl min-h-[52px] min-w-[200px] justify-center items-center ${isLoading ? 'opacity-50' : ''} ${containerStyles}`}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#ffffff" />
      ) : (
        <StyledText className={`text-secondary text-lg font-intersemibold ${textStyles}`}>
          {title}
        </StyledText>
      )}
    </StyledTouchableOpacity>
  );
};

export default CustomButton;