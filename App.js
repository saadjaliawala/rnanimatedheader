/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AnimatedScreen from  'react-native-animated-screen';
// import style from './style';

const App  = () => {
  return (
    <AnimatedScreen.Wrapper disableParallaxEffect>
      <AnimatedScreen.Header backgroundColor="#f1f1f1" withShadow>
        <View style={styles.container}>
          <Text style={styles.title}>Example 1</Text>
          <AnimatedScreen.CollapsibleElement>
            <Text style={styles.subtitle}>Simple header with ScrollView</Text>
          </AnimatedScreen.CollapsibleElement>
        </View>
      </AnimatedScreen.Header>
      <AnimatedScreen.ScrollView>
        <View style={styles.body}>
          <View style={styles.container}>
            <Text>
              Fusce fermentum. Pellentesque egestas, neque sit amet convallis
              pulvinar, justo nulla eleifend augue, ac auctor orci leo non est.
              In turpis. Cras ultricies mi eu turpis hendrerit fringilla.
              Maecenas nec odio et ante tincidunt tempus. Aliquam lobortis.
              Etiam vitae tortor. Suspendisse pulvinar, augue ac venenatis
              condimentum, sem libero volutpat nibh, nec pellentesque velit pede
              quis nunc. Etiam vitae tortor. Cras ultricies mi eu turpis
              hendrerit fringilla. Morbi mattis ullamcorper velit. Proin
              viverra, ligula sit amet ultrices semper, ligula arcu tristique
              sapien, a accumsan nisi mauris ac eros. Vivamus elementum semper
              nisi. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec, purus. Etiam vitae tortor.
            </Text>
            <View style={styles.imgWrapper}>
              {/* <Image source={img1} /> */}
            </View>
            <Text>
              Fusce fermentum. Pellentesque egestas, neque sit amet convallis
              pulvinar, justo nulla eleifend augue, ac auctor orci leo non est.
              In turpis. Cras ultricies mi eu turpis hendrerit fringilla.
              Maecenas nec odio et ante tincidunt tempus. Aliquam lobortis.
              Etiam vitae tortor. Suspendisse pulvinar, augue ac venenatis
              condimentum, sem libero volutpat nibh, nec pellentesque velit pede
              quis nunc. Etiam vitae tortor. Cras ultricies mi eu turpis
              hendrerit fringilla. Morbi mattis ullamcorper velit. Proin
              viverra, ligula sit amet ultrices semper, ligula arcu tristique
              sapien, a accumsan nisi mauris ac eros. Vivamus elementum semper
              nisi. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec, purus. Etiam vitae tortor.
              ortor. Suspendisse pulvinar, augue ac venenatis
              condimentum, sem libero volutpat nibh, nec pellentesque velit pede
              quis nunc. Etiam vitae tortor. Cras ultricies mi eu turpis
              hendrerit fringilla. Morbi mattis ullamcorper velit. Proin
              viverra, ligula sit amet ultrices semper, ligula arcu tristique
              sapien, a accumsan nisi mauris ac eros. Vivamus elementum semper
              nisi. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec, purus. Etiam vitae tortor.
            </Text>
          </View>
        </View>
      </AnimatedScreen.ScrollView>
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
  body: {
    paddingVertical: 10,
  },
  imgWrapper: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default App;
