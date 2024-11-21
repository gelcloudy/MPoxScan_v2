// Import dependencies
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Redirect, router } from 'expo-router';

// Import images
import MPoxLogo from '@/assets/images/MpoxScanUp.png';
import Rect from '@/assets/images/Rectangle.png';
import CustomButton from '@/components/CustomButton';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <View style={{ flex: 1, backgroundColor: '#primary', alignItems: 'center', justifyContent: 'center' }}>
        {/* Image of the logo */}
        <Image
          source={MPoxLogo}
          style={{
            width: 350,
            height: 350,
            marginBottom: 100, // Adds spacing between logo and Rect
          }}
        />

        {/* Rectangle image at the bottom */}
        <Image
          source={Rect}
          style={{
            width: '100%', // Make the rectangle stretch across the screen
            height: 305, // Adjust height as needed
            position: 'absolute', // Position it absolutely at the bottom
            bottom: 0, // Stick to the bottom of the screen
          }}
        />
        
        {/* Overlapping text */}
        <Text style={{ top: 0, fontSize: 30, fontFamily: 'Inter-SemiBold', color: 'white', textAlign: 'center' }}>
          Instant Skin Lesion{'\n'}Insights
        </Text>
          
        <Text style={{ top: 20, fontSize: 16, fontFamily: 'Inter-Regular', color: 'white', textAlign: 'justify', marginTop: 10 }}>
         Capture, scan, and gain insights on skin lesion {'\n'}with ease. Detect and monitor with confidence.
      </Text>
      
      <CustomButton
          title="Get Started"
          handlePress={() => router.push('/mainmenu')}
          containerStyles="absolute bottom-5 w-[200px] mb-7"
        />
    
      </View>

      <StatusBar backgroundColor='#161622' 
      style={'dark'}/>
    </SafeAreaProvider>
  );
}
