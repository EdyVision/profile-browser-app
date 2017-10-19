import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width
let React = require('react-native')

let {
  StyleSheet,
} = React

module.exports = StyleSheet.create({

  profileImage: {
    left: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    color: '#777',
    fontWeight: 'bold',
    fontSize: 20
  },
  cardText: {
    fontSize: 14,
    flexWrap: 'wrap',
    flex: 1,
  },
  readMoreText: {
    flex:1,
    flexDirection: 'row',
    width: ((deviceWidth - 100) * 0.85)
  },
  button: {
    color: '#40beeb',
    marginTop: 5
  },
  userInfoContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  userInformation: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    bottom: 15
  },
  hashTag: {
    fontWeight: 'bold',
    color: '#40beeb'
  },
  url: {
    color: '#40beeb',
    textDecorationLine: 'underline',
  },
  email: {
    textDecorationLine: 'underline',
  },
  mention: {
    fontWeight: 'bold',
    color: '#40beeb'
  },
  text: {
    width: ((deviceWidth - 100) * 0.85),
    flexShrink: 1,
  }

})