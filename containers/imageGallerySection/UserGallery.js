/**
 * User Image Gallery 
 * Sets up 3x18 grid of images for single user
 * @author Edmary Rosado
 */

import React from 'react'
import PhotoGrid from 'react-native-photo-grid'
import { Image, TouchableOpacity } from 'react-native'

export default class UserGallery extends React.Component {
  constructor() {
    super()
    this.state = { imageSources: [] }
  }
  componentDidMount() {
    let imageSources = []

    // Retrieve collection of user images
    return fetch('http://api.pumpup.com/1/functions/feed/popular/load-batch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'isThumbnailsOnly': true,
        'limit': 18,
        '_method': 'POST',
        '_version': '5.0.5',
        '_SessionToken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.result.posts.forEach(function(post){
          let postItem = {
            id: post.objectId,
            src: post.thumbnail
          }
          imageSources.push(postItem)
        })

        this.setState({ imageSources })
      }).catch((error) => {
        console.log(error)
      })
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
          style = {{ flex: 1, margin: 1 }}
          source = {{ uri: item.src }}
        />
      </TouchableOpacity>
    )
  }
}