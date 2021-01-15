/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  Image,
  TextInput
} from 'react-native';

import AnimatedScreen from  'react-native-animated-screen';
import { widthPercentageToDP } from 'react-native-responsive-screen';
// import style from './style';

const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
const App  = () => {
  const renderItem = useCallback(({ item }) => {
    return (
      <View style={styles.item}>
        <Image 
        // source={img1}
         resizeMode="contain" style={styles.image} />
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  }, []);
  const renderSectionHeader = useCallback(({ section }) => {
    return (
      <View style={styles.section}>
        <Text>{sections.title}</Text>
      </View>
    );
  }, []);
  const getBackgroundOpacity = useCallback(
    (scrollY: Animated.Value) => ({
      backgroundColor: scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: ['#236979', '#6c2379'],
        extrapolate: 'clamp',
      }),
    }),
    [],
  );
  const renderBackground = useCallback(
    (scrollY: Animated.Value) => (
      <Animated.View
        style={[styles.background, getBackgroundOpacity(scrollY)]}
      />
    ),
    [getBackgroundOpacity],
  );
  const headerAnimatedStyle = useCallback(
    scrollY => ({
      transform: [
        {
          scale: scrollY.interpolate({
            inputRange: [0, 200],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
        },
      ],
    }),
    [],
  );

  return (
    <AnimatedScreen.Wrapper
      disableParallaxEffect
      headerMaxHeight={200}
      headerMinHeight={100}
    >
      <AnimatedScreen.Header
        renderBackground={renderBackground}
        withShadow
        style={styles.header}
      >
        <View style={styles.container}>
          <View style={styles.smallHeader}>
            <AnimatedScreen.Element
              interpolate={{ width: [widthPercentageToDP(100) - 20, 30] }}
              style={styles.logoWrapper}
            >
              <Image
              //  source={img1} 
               style={styles.logo} />
            </AnimatedScreen.Element>
            <AnimatedScreen.Element
              interpolate={{ opacity: [0, 1] }}
              animatedStyle={headerAnimatedStyle}
            >
              <Text style={styles.title}>Example 4</Text>
            </AnimatedScreen.Element>
          </View>
          <AnimatedScreen.CollapsibleElement interpolate={{ height: [40, 0] }}>
            <Text style={styles.title}>Example 4</Text>
            <Text style={styles.subtitle}>OnScroll Animated Header</Text>
          </AnimatedScreen.CollapsibleElement>
          <AnimatedScreen.Element interpolate={{ height: [20, 5] }}>
            <View />
          </AnimatedScreen.Element>
          <AnimatedScreen.Element>
            <TextInput style={styles.input} placeholder="Search..." />
          </AnimatedScreen.Element>
        </View>
      </AnimatedScreen.Header>
      <AnimatedScreen.SectionList
        sections={sections.map(section => ({
          title: section,
          data: new Array(Math.floor(Math.random() * 5) + 1).fill(
            `Element in ${section} section`,
          ),
        }))}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
    </AnimatedScreen.Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
  },
  section: {
    backgroundColor: '#e0e0e0',
    padding: 10,
  },
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  spacer: {
    height: 40,
  },
  smallHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  input: {
    width: '100%',
    height: 30,
    backgroundColor: '#e0e0e0',
    opacity: 0.8,
    borderRadius: 15,
    paddingVertical: 0,
    paddingHorizontal: 15,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  item: {
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  
});

export default App;
