import types from './constant'

const defaultData = {
  count: 0,
}

export default {
  RenderData(state = defaultData, action) {
    switch (action.type) {
      case types.RenderData:
        return {...state, ...action.payload}    
      default:
        return state;
    }
  }
}