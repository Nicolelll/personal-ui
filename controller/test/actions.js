import types from './constant'

export default {
  RenderData (count) {
    return { type: types.RenderData, payload: {...count} }
  },
  Test() {
    return { type:types.TEXT }
  }
}