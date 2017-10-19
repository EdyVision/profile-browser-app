import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Container, Content, Header, Title, Body } from 'native-base'
import UserGallery from './containers/imageGallerySection/UserGallery'
import ImageCarousel from './containers/imageCarouselSection/Carousel'
import UserBlock from './containers/userBioSection/UserBlock'

// import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel'
// import Carousel from 'react-native-snap-carousel';
// import Swiper from 'react-native-swiper';

export default class App extends Component {
  constructor() {
    super()
    this.state = { imageSources: [] }
  }
  componentDidMount() {
    let imageSources = []

    // Retrieve collection of user feed images
    return fetch('http://api.pumpup.com/1/functions/feed/profile/load-batch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'isThumbnailsOnly': true,
        'limit': 5,
        'userId': 2707798,
        '_method': 'POST',
        '_version': '5.0.5',
        '_SessionToken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.result.posts.forEach(function(post){
          // let postItem = {
          //   id: post.objectId,
          //   imagePath: post.thumbnail
          // }
          // imageSources.push(postItem);
          imageSources.push(
            <View key = {post.objectId} style = { styles.slide1 }>
              <Image source = {{uri: post.thumbnail }} style={{width: 250, height: 250}}/>
            </View>
          )
        })

        this.setState({ imageSources })
      }).catch((error) => {
        console.log(error)
      })
  }
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
          <UserBlock />
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 0.5}}></View>
          <View style={styles.carouselWrapper}>
            <ImageCarousel style={styles.imageWrapper}>
              { this.state.imageSources }
            </ImageCarousel>
          </View>
          <View style = {{ padding: 10}}></View>
          <UserGallery />
        </Content>
      </Container>
    )
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
  carouselWrapper: {
    padding:15
  },
  imageWrapper: {
    height: 250
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 14,
    flexWrap: 'wrap',
    flex: 1,
    textAlign: 'center',
  }
})
