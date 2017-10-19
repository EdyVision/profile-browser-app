/**
 * User Bio Block
 * Sets up user profile image, name, and description block at top of screen
 * @author Edmary Rosado
 */

import React from 'react'
import { Image, Text, View, TouchableHighlight } from 'react-native'
import ParsedText from 'react-native-parsed-text'

const sessionToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'

import styles from './styles'

export default class UserBlock extends React.Component {
  constructor() {
    super()
    this.state = { userProfileInformation: {}, showTruncated: true, maxNumberOfLines: 3 }
  }

  componentDidMount() {
    let userProfileInformation = {}

    // Retrieve user profile data and image
    return fetch('http://api.pumpup.com/1/classes/User/318381', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        '_method': 'GET',
        '_version': '5.0.5',
        '_SessionToken': sessionToken
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

        userProfileInformation = {
          name: responseJson.name,
          bio: formattedBio.toString(),
          profileImage: responseJson.profileImage
        }

        this.setState({ userProfileInformation })
      }).catch((error) => {
        console.log(error)
      })
  }

  _handlePress(isTruncated) {
    this.setState({showTruncated: isTruncated})
  }

  render() {
    return(

      <View style={styles.userInfoContainer}>
        <View>
          <Image source = {{uri: this.state.userProfileInformation.profileImage }} style={ styles.profileImage } />
        </View>

        <View style = { styles.userInformation }>
          <View>
            <Text style = { styles.userName }>{this.state.userProfileInformation.name}</Text>
          </View>
          <View style = { styles.readMoreText } >
            <Text numberOfLines = {this.state.showTruncated ? this.state.maxNumberOfLines : null} onReady = { this._handleTextReady } style = { styles.cardText }>
              <ParsedText 
                style = { styles.cardText }
                parse={
                  [
                    {type: 'url',        style: styles.url, onPress: this.handleUrlPress},
                    {type: 'phone',      style: styles.phone, onPress: this.handlePhonePress},
                    {type: 'email',      style: styles.email, onPress: this.handleEmailPress},
                    {pattern: /42/,      style: styles.magicNumber},
                    {pattern: /#(\w+)/,  style: styles.hashTag},
                    {pattern: /@(\w+)/,  style: styles.mention}
                  ]
                }>
                { this.state.userProfileInformation.bio }
              </ParsedText>

            </Text>
          </View>

          <TouchableHighlight
            onPress={()=> this.setState({showTruncated: !this.state.showTruncated})}
          >
            <Text style={styles.button}>
              { this.state.showTruncated ? 'Read more' : 'Show Less' }
            </Text> 
          </TouchableHighlight>
        </View>
      </View>
    )
    
  }
}