/**
 * User Image Slider 
 * Sets up image swipeable slider with up to 5 images
 * @author Edmary Rosado
 */

import React from 'react'
import { View, Image, Text } from 'react-native'
import Swiper from 'react-native-swiper'
import { getSliderImages } from '../../actions/pumpUpActions'

import styles from './styles'
import config from '../../config'

const MAX_USER_IMAGES = 5

export default class UserGallery extends React.Component {

  constructor(props) {
    super(props)
    this.state = { imageSources: [{}], sliderIndex: 0 }
  }

  getProfileSliderImages() {
    return getSliderImages(config.testUser.USER_ID, MAX_USER_IMAGES)
  }
  getFormatedSlides() {
    let slides = []

    this.state.imageSources.map(function(image, index) {
      slides.push(
        <Image key={index} source = {{ uri: image.imagePath }} style = { styles.sliderImage } />
      )
    })
    
    return slides
  }
  async componentDidMount() {
    try {
      const results = await this.getProfileSliderImages(MAX_USER_IMAGES)
      this.setState({ imageSources: results })
    } catch (e) {
      console.log(e)
    }
  }

  getSource(index) {
    console.log(this.state.imageSources[1])
    return this.state.imageSources[1].imagePath
  }

  render() {
    return(
      <View style = { styles.carouselWrapper }>
        <Swiper style={styles.wrapper}
          dot={ <View style={ styles.paginationDot } /> }
          activeDot={ <View style = { styles.activePaginationDot } /> }
          paginationStyle={ styles.sliderPagination }>
          { this.getFormatedSlides() }
        </Swiper>
      </View>
    )
  }
}