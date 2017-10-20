/**
 * pumpUpActions-test.js
 *
 * Tests the functionality of the pumpUpActions.js file that contains
 * all pumpUp api calls
 *
 * @author Edmary Rosado
 */

import config from '../config'
import { getProfileInformation, getGalleryImages, getSliderImages } from '../actions/pumpUpActions'
import should from 'should'

const MAX_SLIDER_IMAGES = 5
const MAX_GALLERY_IMAGES = 18

const USER_ID = config.testUser.USER_ID
const PROFILE_ID = config.testUser.USER_PROFILE_ID

describe('pumpUpAction', function(){

  it(`should retrieve a collection of ${MAX_SLIDER_IMAGES} images for slider`, function() {

    return getSliderImages(USER_ID, MAX_SLIDER_IMAGES)
      .then(result => {
        should.exist(result)
        result.should.be.an.instanceOf(Array).and.have.lengthOf(MAX_SLIDER_IMAGES)
      })

  })

  it(`should retrieve a collection of ${MAX_GALLERY_IMAGES} images for gallery`, function() {

    return getGalleryImages(MAX_GALLERY_IMAGES)
      .then(result => {
        should.exist(result)
        result.should.be.an.instanceOf(Array).and.have.lengthOf(MAX_GALLERY_IMAGES)
      })

  })

  it('should retrieve a JSON object returned with profile information', function() {

    return getProfileInformation(PROFILE_ID)
      .then(result => {
        should.exist(result)
        result.should.be.an.instanceOf(Object)
        result.should.have.properties('name', 'bio', 'profileImage')
      })

  })

})

