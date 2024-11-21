import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { styled } from 'nativewind';

const { width: screenWidth } = Dimensions.get('window');

const StyledText = styled(Text);

const AboutUs = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Image
        source={require('../../assets/images/AboutUs.png')} // Adjust the path as necessary
        style={{ width: screenWidth, height: 224 }}
      />
      <View style={{ width: '100%', paddingHorizontal: 20 }}>
        <StyledText className="font-interbold text-secondary text-[20px] text-left my-5">
          What is MPoxScan?
        </StyledText>
        <Text className="text-justify text-black-100 text-[14px]" >MpoxScan is a mobile app designed to empower communities by 
          providing a fast and accessible way to detect Monkeypox and other s
          kin lesions. Using advanced AI, the app analyzes images directly 
          from your smartphone to deliver quick, reliable screening results.
          {'\n\n'}Please note: MpoxScan is not a diagnostic tool but a preliminary 
          screening aid to guide your next steps. Always consult a healthcare 
          professional for official diagnosis and treatmen
          </Text>
          <StyledText className="font-interbold text-secondary text-[20px] text-left my-5">
          Why choose MPoxScan?
          </StyledText>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}>
            <StyledText className="font-interbold text-secondary text-[16px]">
              Fast:
            </StyledText>
            <StyledText className="text-black-100 text-[16px]">
              {' '}Quick assessments on the go.
            </StyledText>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}>
            <StyledText className="font-interbold text-secondary text-[16px]">
              Easy:
            </StyledText>
            <StyledText className="text-black-100 text-[16px]">
              {' '}User-friendly for everyone
            </StyledText>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}>
            <StyledText className="font-interbold text-secondary text-[16px]">
              Reliable:
            </StyledText>
            <StyledText className="text-black-100 text-[16px]">
              {' '}Powered by advanced machine learning.
            </StyledText>
          </View>
      </View>
      {/* Add more content here */}
    </View>
  );
};

export default AboutUs;