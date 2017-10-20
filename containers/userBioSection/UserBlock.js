/**
 * User Bio Block
 * Sets up user profile image, name, and description block at top of screen
 *
 * @author Edmary Rosado
 */

import React from 'react'
import { Image, Text, View, TouchableHighlight } from 'react-native'
import ParsedText from 'react-native-parsed-text'
import { getProfileInformation } from '../../actions/pumpUpActions'

import config from '../../config'

import styles from './styles'

export default class UserBlock extends React.Component {
  constructor() {
    super()
    this.state = { userProfileInformation: {}, showTruncated: true, maxNumberOfLines: 3 }
  }
  getUserProfileInformation() {
    return getProfileInformation(config.testUser.USER_PROFILE_ID)
  }
  async componentDidMount() {
    try {
      const results = await this.getUserProfileInformation()
      this.setState({ userProfileInformation: results })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return(

      <View style = { styles.userInfoContainer }>
        <View>
          <Image source = {{ uri: this.state.userProfileInformation.profileImage }} style = { styles.profileImage } />
        </View>

        <View style = { styles.userInformation }>
          <View>
            <Text style = { styles.userName }>{ this.state.userProfileInformation.name }</Text>
          </View>
          <View style = { styles.readMoreText } >
            <Text numberOfLines = { this.state.showTruncated ? this.state.maxNumberOfLines : null }
              onReady = { this._handleTextReady } style = { styles.cardText }>
              <ParsedText
                style = { styles.cardText }
                parse = {
                  [
                    { type: 'url',        style: styles.url, onPress: this.handleUrlPress },
                    { type: 'phone',      style: styles.phone, onPress: this.handlePhonePress },
                    { type: 'email',      style: styles.email, onPress: this.handleEmailPress },
                    { pattern: /42/,      style: styles.magicNumber },
                    { pattern: /#(\w+)/,  style: styles.hashTag },
                    { pattern: /@(\w+)/,  style: styles.mention }
                  ]
                }>
                { this.state.userProfileInformation.bio }
              </ParsedText>

            </Text>
          </View>

          <TouchableHighlight
            onPress = { () => this.setState({ showTruncated: !this.state.showTruncated })}
          >
            <Text style = { styles.button }>
              { this.state.showTruncated ? 'Read more' : 'Show Less' }
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}