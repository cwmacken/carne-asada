const initialState = {
    num: 0
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'SAMPLEONE':
      return {
        num: state.num + 1
      }
    default:
      return state
  }
}

export default todo
