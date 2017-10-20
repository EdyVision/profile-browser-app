import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Content, Header, Title, Body } from 'native-base'
import UserGallery from './containers/imageGallerySection/UserGallery'
import UserBlock from './containers/userBioSection/UserBlock'
import UserImageSlider from './containers/imageCarouselSection/UserImageSlider'

export default class App extends Component {
  constructor() {
    super()
    this.state = { imageSources: [] }
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title style = { styles.title }>Profile Browser</Title>
          </Body>
        </Header>
        <Content>
          <View style={{padding: 10}}></View>
          <UserBlock />
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 0.5}}></View>
          <UserImageSlider />
          <UserGallery />
        </Content>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  title: {
    color: '#40beeb'
  },
})
