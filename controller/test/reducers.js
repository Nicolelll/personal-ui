import types from './constant'

const defaultData = {
  count: 0,
}

export default {
  RenderTest(state = defaultData, action) {
    switch (action.type) {
      case types.RenderData:
        return {...state, ...action.payload}    
      case types.TEXT:
        return state
      default:
        return state;
    }
  }
}