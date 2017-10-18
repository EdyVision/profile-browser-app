import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { Container, Content, Header, Title, Button, Grid, Col, Row, Thumbnail, Body } from 'native-base';
import UserGallery from './containers/UserGallery';
import Carousel from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper';

import ReadMore from '@expo/react-native-read-more-text';
// import UserBlock from "./containers/UserBlock";

const deviceWidth = Dimensions.get('window').width;

export default class App extends React.Component {

  render() {
    return (
     <Container>
       <Header>
         <Body>
            <Title>Profile Browser</Title>
         </Body>
       </Header>
       <Content>
         <View style={{padding: 10}}></View>
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
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: .5}}></View>
              <View style={ {margin:20} } >
                <Swiper style={styles.wrapper}>
                  <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                  </View>
                  <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                  </View>
                  <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                  </View>
                </Swiper>
              </View>
            <View style = {{ padding: 10}}></View>
          <UserGallery />
       </Content>
     </Container>
    );
  }
    _renderTruncatedUserInfo = (handlePress) => {
    return (
      <RegularText style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
        Read more
      </RegularText>
    );
  }

  _renderRevealedUserInfo = (handlePress) => {
    return (
      <RegularText style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
        Show less
      </RegularText>
    );
  }

    _handleTextReady = () => {
    console.log('ready!');
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
  wrapper: {
      height: 300
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
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
