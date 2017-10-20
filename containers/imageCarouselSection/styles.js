import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width
let React = require('react-native')

let {
  StyleSheet,
} = React

module.exports = StyleSheet.create({
  wrapper: {
    height: 400
  },
  carouselWrapper: {
    padding: 15,
  },
  imageWrapper: {
    height: 350
  },
  sliderImage: {
    width: (deviceWidth - deviceWidth * 0.10),
    height: 350
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  paginationDot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginLeft: 8,
    marginRight: 8
  },
  activePaginationDot: {
    backgroundColor: '#40beeb',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginLeft: 8,
    marginRight: 8
  },
  sliderPagination: {
    top: 380
  }
})