import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Label, { Orientation } from 'react-native-label';

const Main = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="rgb(250, 250, 250)"
        style={{ borderRadius: 15 }}
        onPress={() => navigation.navigate('Home')}>
        <View style={styles.fitContents}>
          <Label
            orientation={Orientation.BOTTOM_RIGHT}
            containerStyle={{}}
            style={{ fontSize: 20 }}
            title="Games"
            color="#f77"
            extent={0}
            distance={150}>
            <View style={styles.contentContainer}>
              <Icon style={styles.gamesIcon} name="sports-esports" size={30} />
            </View>
          </Label>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="rgb(250, 250, 250)"
        style={{ borderRadius: 15 }}
        onPress={() => alert('Pressed!')}>
        <View style={styles.fitContents}>
          <Label
            orientation={Orientation.BOTTOM_RIGHT}
            containerStyle={{}}
            style={{
              fontSize: 20,
            }}
            title="Movies"
            color="#f77"
            extent={0}
            distance={150}>
            <View style={styles.contentContainer}>
              <Icon style={styles.gamesIcon} name="local-movies" size={30} />
            </View>
          </Label>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="rgb(250, 250, 250)"
        style={{ borderRadius: 15 }}
        onPress={() => alert('Pressed!')}>
        <View style={styles.fitContents}>
          <Label
            orientation={Orientation.BOTTOM_RIGHT}
            containerStyle={{}}
            style={{
              fontSize: 20,
            }}
            title="Recommendations"
            color="#f77"
            extent={0}
            distance={150}>
            <View style={styles.contentContainer}>
              <Icon
                style={styles.gamesIcon}
                name="local-fire-department"
                size={30}
              />
            </View>
          </Label>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="rgb(250, 250, 250)"
        style={{ borderRadius: 15 }}
        onPress={() => alert('Pressed!')}>
        <View style={styles.fitContents}>
          <Label
            orientation={Orientation.BOTTOM_RIGHT}
            containerStyle={{}}
            style={{
              fontSize: 20,
            }}
            title="All Contents"
            color="#f77"
            extent={0}
            distance={150}>
            <View style={styles.contentContainer}>
              <Icon style={styles.gamesIcon} name="view-list" size={30} />
            </View>
          </Label>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Main;
const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  gamesIcon: {
    display: 'flex',
    color: '#FBFFE2',
    fontSize: 150,
    // flexGrow: 1,
    textAlign: 'center',
  },
  contentContainer: {
    display: 'flex',
    // margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFAFAF',
    padding: 10,
    borderRadius: 15,
  },
  fitContents: {
    margin: 5,
    padding,
  },
});
