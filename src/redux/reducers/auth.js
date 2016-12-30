

const initialState = {
		currently: "ANONYMOUS",
		email: null,
		uid: null,
		errorCode: null,
		errorMessage: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'STARTAUTH':
      return {
				currently: "AWAITING_AUTH_RESPONSE",
				email: null,
				uid: null
			};
		case 'USERINFO':
      return {
				currently: "USER_AUTHED",
				email: action.user.email,
				uid: action.user.uid
			};
		case 'CREATEACCCOUNTERROR':
      return {
				currently: "ERROR",
				email: null,
				uid: null,
				errorCode: action.errorCode,
				errorMessage: action.errorMessage
			};
		case 'SIGNOUTBROKE':
      return {
				currently: "ERROR",
				email: null,
				uid: null,
				errorCode: action.errorCode,
				errorMessage: action.errorMessage
			};
		case 'SIGNOUTWORKED':
      return initialState;
    default:
      return state
  }
}

export default auth
