import type, { Action } from './types'

export const GET_USER_ID = 'GET_USER_ID'
export const SET_USER_ID = 'SET_USER_ID'

export const GET_PROFILE_ID = 'GET_PROFILE_ID'
export const SET_PROFILE_ID = 'SET_PROFILE_ID'

export function getUserId() {
  return null
}

export function setUserId(userId):Action {
  return {
    type: SET_USER_ID,
    payload: userId
  }
}

export function getProfileId() {
  return null
}

export function setProfileId(profileId):Action {
  return {
    type: SET_PROFILE_ID,
    payload: profileId
  }
}