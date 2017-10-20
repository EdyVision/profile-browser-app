import config from '../config'

/**
 * @return {*} profileInformation
 * @param {*} userProfileId
 */
export async function getProfileInformation(userProfileId) {
  let profileInformation = {}

  await fetch('http://api.pumpup.com/1/classes/User/' + userProfileId, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      '_method': 'GET',
      '_version': config.apiGateway.VERSION,
      '_SessionToken': config.apiGateway.SESSION_TOKEN
    })
  })
    .then((response) => response.json())
    .then((responseJson) => {
      let bioLineItems = responseJson.bio.split('\n')
      let formattedBio = ''

      bioLineItems.forEach(function(line) {
        if (line !== '' || line !== '\n') {
          formattedBio += line + ' '
        }
      })

      profileInformation = {
        name: responseJson.name,
        bio: formattedBio.toString(),
        profileImage: responseJson.profileImage
      }
    }).catch((error) => {
      console.log(error)
    })

  return profileInformation
}

/**
 * @return {*} sliderImages[]
 * @param {*} userId
 * @param {*} maxUserImages
 */
export async function getSliderImages(userId, maxUserImages) {
  let sliderImages = []

  await fetch('http://api.pumpup.com/1/functions/feed/profile/load-batch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'isThumbnailsOnly': true,
      'limit': maxUserImages,
      'userId': userId,
      '_method': 'POST',
      '_version': config.apiGateway.VERSION,
      '_SessionToken': config.apiGateway.SESSION_TOKEN
    })
  })
    .then((response) => response.json())
    .then((responseJson) => {

      responseJson.result.posts.forEach(function(post){
        let postItem = {
          id: post.objectId,
          imagePath: post.thumbnail
        }
        sliderImages.push(postItem)
      })
    }).catch((error) => {
      console.log(error)
    })

  return sliderImages
}

/**
 * @return {*} imageSources[]
 * @param {*} maxUserImages
 */
export async function getGalleryImages(maxUserImages) {
  let imageSources = []

  await fetch('http://api.pumpup.com/1/functions/feed/popular/load-batch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'isThumbnailsOnly': true,
      'limit': maxUserImages,
      '_method': 'POST',
      '_version': config.apiGateway.VERSION,
      '_SessionToken': config.apiGateway.SESSION_TOKEN
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
    }).catch((error) => {
      console.log(error)
    })

  return imageSources
}
