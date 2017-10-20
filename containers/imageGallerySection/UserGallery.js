/**
 * User Image Gallery 
 * Sets up 3x18 grid of images for single user
 *
 * @author Edmary Rosado
 */

import React from 'react'
import PhotoGrid from 'react-native-photo-grid'
import { Image, TouchableOpacity } from 'react-native'
import { getGalleryImages } from '../../actions/pumpUpActions'

const MAX_USER_IMAGES = 18

export default class UserGallery extends React.Component {
  constructor() {
    super()
    this.state = { imageSources: [] }
  }
  getUserGalleryImages(maxNumberImages) {
    return getGalleryImages(maxNumberImages)
  }
  async componentDidMount() {
    try {
      const results = await this.getUserGalleryImages(MAX_USER_IMAGES)
      this.setState({ imageSources: results })
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return(
      <PhotoGrid
        data = { this.state.imageSources }
        itemsPerRow = { 3 }
        itemMargin = { 1 }
        renderItem = { this.renderItem }
      />
    )
  }

  renderItem(item, itemSize) {
    return(
      <TouchableOpacity
        key = { item.id }
        style = {{ width: itemSize, height: itemSize }}
        onPress = { () => {
          // TODO: Write logic to view image in larger format with @mentions and applied #hashtags
        }}>
        <Image
          resizeMode = "cover"
          style = {{ flex: 1, margin: 0.25 }}
          source = {{ uri: item.src }}
        />
      </TouchableOpacity>
    )
  }
}