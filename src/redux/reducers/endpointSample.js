const initialState = {
    text: "",
    postText: "",
    postState: true
}

const todo = (state = initialState, action) => {

  switch (action.type) {
    case 'GETRESPONSE':
      return {
        text: action.text,
        postText: state.postText,
        postState: state.postState
      }
    case 'POSTRESPONSE':
      return {
        text: state.text,
        postText: action.postText,
        postState: !state.postState
      }
    default:
      return state
  }
}

export default todo
