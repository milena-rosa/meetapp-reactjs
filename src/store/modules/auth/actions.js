// called by the component
// triggers the auth saga signIn
export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password,
    },
  };
}

// called by saga if signin process went all good
export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {
      token,
      user,
    },
  };
}

// called by the component
// triggers the auth saga signUp
export function signUpRequest(name, email, password, password_confirmation) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      password,
      password_confirmation,
    },
  };
}

export function signUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
  };
}

// called by sagas when something goes wrong with signin/signup
export function signFailure(err) {
  return {
    type: '@auth/SIGN_FAILURE',
    payload: {
      message: err.message,
    },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function forgotPasswordRequest(email) {
  return {
    type: '@auth/FORGOT_PASSWORD_REQUEST',
    payload: {
      email,
    },
  };
}

export function resetPasswordRequest(token, password, password_confirmation) {
  return {
    type: '@auth/RESET_PASSWORD_REQUEST',
    payload: {
      token,
      password,
      password_confirmation,
    },
  };
}

export function resetPasswordSuccess() {
  return {
    type: '@auth/RESET_PASSWORD_SUCCESS',
  };
}

export function resetPasswordFailure() {
  return {
    type: '@auth/RESET_PASSWORD_FAILURE',
  };
}
