import { Tabs } from 'expo-router';
import { View, Image } from 'react-native';

// Import activated and non-activated icons
import LibraryAIcon from '../../assets/icons/LibraryA.png';
import LibraryNIcon from '../../assets/icons/LibraryN.png';
import ScanAIcon from '../../assets/icons/ScanA.png';
import ScanNIcon from '../../assets/icons/ScanN.png';
import AboutUSAIcon from '../../assets/icons/AboutUsA.png';
import AboutUSNIcon from '../../assets/icons/AboutUsN.png';

// Define a type for the TabIcon props
type TabIconProps = {
  activeIcon: any; // Icon for activated state
  inactiveIcon: any; // Icon for non-activated state
  focused: boolean;
  isScan?: boolean; // Optional prop to style Scan icon differently
};

// Define TabIcon component to display icon and label
const TabIcon: React.FC<TabIconProps> = ({ activeIcon, inactiveIcon, focused, isScan }) => {
  const icon = focused ? activeIcon : inactiveIcon;
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isScan ? -30 : 0, // Move Scan icon above
      }}
    >
      <Image
        source={icon}
        style={{
          width: isScan ? 70 : 24, // Larger size for Scan icon
          height: isScan ? 70 : 24,
        }}
      />
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#5DB075', // Set the navigation bar color to green
        },
        tabBarLabelStyle: {
          color: '#FFFFFF', // Set the title color to white
        },
      }}
    >
      <Tabs.Screen
        name="library"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#5DB075', 
          },
          headerTintColor: '#FFFFFF', // Set the header text color to white
          headerTitleStyle: {
            fontSize: 20, // Adjust the font size
            fontFamily: 'Inter-SemiBold', // Adjust the font family
          },
          title: 'Library',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              activeIcon={LibraryAIcon}
              inactiveIcon={LibraryNIcon}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mainmenu"
        options={{
          headerShown: true,
          title: '',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              activeIcon={ScanAIcon}
              inactiveIcon={ScanNIcon}
              focused={focused}
              isScan={true} // Set isScan to true for special styling
            />
          ),
        }}
      />
      <Tabs.Screen
        name="aboutus"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#5DB075', 
          },
          headerTintColor: '#FFFFFF', // Set the header text color to white
          headerTitleStyle: {
            fontSize: 20, // Adjust the font size
            fontFamily: 'Inter-SemiBold', // Adjust the font family
          },
          title: 'About Us',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              activeIcon={AboutUSAIcon}
              inactiveIcon={AboutUSNIcon}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
