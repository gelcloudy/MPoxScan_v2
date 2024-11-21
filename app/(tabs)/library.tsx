import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import TabButton, { TabButtonType } from '../../components/TabButton';
import { styled } from 'nativewind';

// Import the local images
import MonkeypoxImage from '@/assets/images/monkeypox.jpg';
import ActinicKeratosisImage from '@/assets/images/actinickeratosis.jpg';
import BasalImage from '@/assets/images/basal.jpg';
import BenignImage from '@/assets/images/benign.jpg';
import ChickenPoxImage from '@/assets/images/chickenpox.jpg';
import CowPoxImage from '@/assets/images/cowpox.jpg';
import DermaImage from '@/assets/images/derma.jpg';
import HFMDImage from '@/assets/images/hfmd.jpg';
import MeaslesImage from '@/assets/images/measles.jpg';
import MelanocyticImage from '@/assets/images/melanocytic.jpg';
import MelanomaImage from '@/assets/images/melanoma.jpg';
import SquamousImage from '@/assets/images/squamous.jpg';
import VascularImage from '@/assets/images/vascular.jpg';
import InfectedImage from '@/assets/images/infected.png';
import SignsImage from '@/assets/images/signs.png';
import SymptomsImage from '@/assets/images/symptoms.png';
import IsolationImage from '@/assets/images/isolation.png';


const StyledText = styled(Text);

const Library = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const buttons: TabButtonType[] = [
    { title: 'Skin Lesions' },
    { title: 'Safety Protocols' },
  ];

  return (
    <View style={styles.container}>
      <TabButton
        buttons={buttons}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        style={styles.tabButton} // Apply the style to the TabButton
      />

      <ScrollView 
        style={{ flex: 1, marginTop: 20 }}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {selectedTab === 0 ? (
          // Skin Lesion Tab Content
          <>
            {/* First Row */}
            <View style={styles.row}>
              <View style={styles.card}>
                <Image
                  source={MonkeypoxImage} // Use the local image
                  style={styles.image}
                  resizeMode="cover"
                />
                <StyledText className="text-primary text-s font-intersemibold my-2 ml-2">
                  Monkeypox
                </StyledText>
              </View>

              <View style={[styles.card, { marginLeft: 25 }]}>
                <Image
                  source={ActinicKeratosisImage} // Use the local image
                  style={styles.image}
                  resizeMode="cover"
                />
                <StyledText className="text-primary text-s font-intersemibold my-2 ml-2">
                  Actinic Keratosis
                </StyledText>
              </View>
            </View>

            {/* Second Row */}
            <View style={styles.row}>
              <View style={styles.card}>
                <Image
                  source={BasalImage} // Use the local image
                  style={styles.image}
                  resizeMode="cover"
                />
                <StyledText className="text-primary text-s font-intersemibold my-2 ml-2">
                  Basal Cell Carcinoma
                </StyledText>
              </View>

              <View style={[styles.card, { marginLeft: 25 }]}>
                <Image
                  source={BenignImage} // Use the local image
                  style={styles.image}
                  resizeMode="cover"
                />
                <StyledText className="text-primary text-s font-intersemibold my-2 ml-2">
                  Benign Keratosis
                </StyledText>
              </View>
            </View>

            {/* Third Row */}
            <View style={styles.row}>
              <View style={styles.card}>
                <Image
                  source={ChickenPoxImage} // Use the local image
                  style={styles.image}
                  resizeMode="cover"
                />
                <StyledText className="text-primary text-s font-intersemibold my-2 ml-2">
                  Chickenpox
                </StyledText>
              </View>

              <View style={[styles.card, { marginLeft: 25 }]}>
                <Image
                  source={CowPoxImage} // Use the local image
                  style={styles.image}
                  resizeMode="cover"
                />
                <StyledText className="text-primary text-s font-intersemibold my-2 ml-2">
                  Cowpox
                </StyledText>
              </View>
            </View>

            {/* Fourth Row */}
            <View style={styles.row}>
              <View style={styles.card}>
                <Image
                  source={DermaImage} // Use the local image
                  style={styles.image}
                  resizeMode="cover"
                />
                <StyledText className="text-primary text-s font-intersemibold my-2 ml-2">
                  Dermatofibroma
                </StyledText>
              </View>

              <View style={[styles.card, { marginLeft: 25 }]}>
                <Image
                  source={HFMDImage} // Use the local image
                  style={styles.image}
                  resizeMode="cover"
                />
                <StyledText className="text-primary text-s font-intersemibold my-2 ml-2">
                  HFMD
                </StyledText>
              </View>
            </View>

            {/* Fifth Row */}
            <View style={styles.row}>
              <View style={styles.card}>
                <Image
                  source={MeaslesImage} // Use the local image
                  style={styles.image}
                  resizeMode="cover"
                />
                <StyledText className="text-primary text-s font-intersemibold my-2 ml-2">
                  Measles
                </StyledText>
              </View>

              <View style={[styles.card, { marginLeft: 25 }]}>
                <Image
                  source={MelanocyticImage} // Use the local image
                  style={styles.image}
                  resizeMode="cover"
                />
                <StyledText className="text-primary text-s font-intersemibold my-2 ml-2">
                  Melanocytic Nevus
                </StyledText>
              </View>
            </View>

            {/* Sixth Row */}
            <View style={styles.row}>
              <View style={styles.card}>
                <Image
                  source={MelanomaImage} // Use the local image
                  style={styles.image}
                  resizeMode="cover"
                />
                <StyledText className="text-primary text-s font-intersemibold my-2 ml-2">
                  Melanoma
                </StyledText>
              </View>

              <View style={[styles.card, { marginLeft: 25 }]}>
                <Image
                  source={SquamousImage} // Use the local image
                  style={styles.image}
                  resizeMode="cover"
                />
                <StyledText className="text-primary text-[11px] font-intersemibold my-2 ml-2">
                  Squamous Cell Carcinoma
                </StyledText>
              </View>
            </View>
            
            {/* Seventh Row */}
            <View style={styles.row}>
              <View style={styles.card}>
                <Image
                  source={VascularImage} // Use the local image
                  style={styles.image}
                  resizeMode="cover"
                />
                <StyledText className="text-primary text-s font-intersemibold my-2 ml-2">
                  Vascular Lesion
                </StyledText>
              </View>
            </View>

          </>
        ) : (
          // Safety Protocol Tab Content
          <View>
            {/* First Protocol Container */}
            <View style={styles.protocolContainer}>
              <Image
                source={InfectedImage} // Use the local 'infected.png' image
                style={styles.protocolImage}
                resizeMode="contain"
              />
              <View style={styles.protocolTextContainer}>
                <StyledText className="text-secondary text-lg font-interbold">
                  What to do when infected?
                </StyledText>
                <StyledText className="text-gray-600 text-sm font-interregular">
                  What should you do when you are infected with the virus.
                </StyledText>
              </View>
            </View>
        
            {/* Second Protocol Container */}
            <View style={styles.protocolContainer}>
              <Image
                source={SignsImage} // Use the same or a different image
                style={styles.protocolImage}
                resizeMode="contain"
              />
              <View style={styles.protocolTextContainer}>
                <StyledText className="text-secondary text-lg font-interbold">
                  Signs that you are infected
                </StyledText>
                <StyledText className="text-gray-600 text-sm font-interregular">
                What are the signs that you are likely to be infected?
                </StyledText>
              </View>
            </View>

            {/* Third  Protocol Container */}
            <View style={styles.protocolContainer}>
              <Image
                source={SymptomsImage} // Use the same or a different image
                style={styles.protocolImage}
                resizeMode="contain"
              />
              <View style={styles.protocolTextContainer}>
                <StyledText className="text-secondary text-lg font-interbold">
                  Common Symptoms
                </StyledText>
                <StyledText className="text-gray-600 text-sm font-interregular">
                  Have you got these symptoms?
                </StyledText>
              </View>
            </View>

            {/* Fourth  Protocol Container */}
            <View style={styles.protocolContainer}>
              <Image
                source={IsolationImage} // Use the same or a different image
                style={styles.protocolImage}
                resizeMode="contain"
              />
              <View style={styles.protocolTextContainer}>
                <StyledText className="text-secondary text-lg font-interbold">
                  Self Isolation 101
                </StyledText>
                <StyledText className="text-gray-600 text-sm font-interregular">
                  Quarantine again? It’s already 2024.
                </StyledText>
              </View>
            </View>

          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3', // Optional: Set background color
  },
  tabButton: {
    marginTop: 20, // Add margin at the top
  },
  scrollViewContent: {
    flexDirection: 'column', // Ensure vertical scrolling
    paddingBottom: 20, // Add padding at the bottom
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%', // Ensure the row takes up the full width
  },
  card: {
    width: 156,
    height: 169,
    borderRadius: 10,
    backgroundColor: '#5DB075', // Green color
    overflow: 'hidden', // Ensures the image respects the border radius
    marginLeft: 40,
  },
  image: {
    width: '100%',
    height: 135,
  },

  protocolContainer: {
    flexDirection: 'row', // Align the image and text horizontally
    alignItems: 'center', // Vertically center-align items
    backgroundColor: '#fff', // White background
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // For Android shadow
  },
  protocolImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  protocolTextContainer: {
    flex: 1,
  },
});

export default Library;