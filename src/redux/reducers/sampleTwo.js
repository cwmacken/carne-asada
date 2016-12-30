const initialState = {
    name: "slim shady"
}

const sampleDos = (state = initialState, action) => {
  switch (action.type) {
    case 'SAMPLETWO':
      return {
        name: action.text
      }
    default:
      return state
  }
}

export default sampleDos
