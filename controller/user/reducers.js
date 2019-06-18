import types from './constant'

const defaultData = {
  title: 'hello',
}

export default {
  RenderUser(state = defaultData, action) {
    switch (action.type) {
      case types.RenderData:
        return {...state, ...action.payload}    
      default:
        return state;
    }
  }
}