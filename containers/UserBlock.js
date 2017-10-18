import React from 'react';
import PhotoGrid from 'react-native-photo-grid';
import { Container, StyleSheet, ScrollView, Image, TouchableOpacity, Text, View, Dimensions } from 'react-native';

import ReadMore from '@expo/react-native-read-more-text';

const deviceWidth = Dimensions.get('window').width;

export default class UserBlock extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
        <Container>
         <View style={styles.userInfoContainer}>
            <View>
                <Image source = {{uri: 'https://avatars0.githubusercontent.com/u/19523360?s=400&v=4' }} style={ styles.profileImage } />
            </View>

            <View style = { styles.userInformation }>
                <View>
                    <Text style = { styles.userName }>User Name</Text>
                </View>
                <View style = { styles.readMoreText }>
                  <ReadMore numberOfLines = { 3 } onReady = { this._handleTextReady } style = { styles.cardText }>
                    <Text style = { styles.cardText }>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                  </ReadMore>
                </View>
            </View>
          </View>
        </Container>
    );
  }

}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
  },
  userName: {
    color: '#40beeb',
    fontWeight: 'bold',
    fontSize: 20
  },
  cardText: {
    fontSize: 14,
    flexWrap: 'wrap',
    flex: 1,
    textAlign: 'center',
  },
  readMoreText: {
    flex:1,
    flexDirection: 'row',
    width: ((deviceWidth - 100) * .85)
  },
  userInfoContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  userInformation: {
    justifyContent: 'center',
    padding: 15
  },

});