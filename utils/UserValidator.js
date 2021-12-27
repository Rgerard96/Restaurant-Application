export const UserRegisterValidator = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (firstName.trim() === '') {
    errors.firstName = 'First name must not be empty';
  }
  if (lastName.trim() === '') {
    errors.lastName = 'Last name must not be empty';
  }
  if (email.trim() === '') {
    errors.email = 'Email must not be empty';
  } else {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email address';
    }
  }

  if (password === '') {
    errors.password = 'Password must not be empty';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
export const UserLoginValidator = (email, password) => {
  const errors = {};
  if (email.trim() === '') {
    errors.email = 'Email must not be empty';
  } else {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email address';
    }
  }

  if (password === '') {
    errors.password = 'Password must not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export const UserUpdateValidator = (
  firstName,
  lastName,
  email,
  oldPassword,
  newPassword,
  confirmNewPassword
) => {
  const errors = {};
  if (firstName.trim() === '') {
    errors.firstName = 'First name must not be empty';
  }
  if (lastName.trim() === '') {
    errors.lastName = 'Last name must not be empty';
  }
  if (email.trim() === '') {
    errors.email = 'Email must not be empty';
  } else {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email address';
    }
  }

  if (oldPassword === '') {
    errors.oldPassword = 'Old password must not be empty';
  }

  if (newPassword !== confirmNewPassword) {
    errors.confirmNewPassword = 'New passwords must match';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
export const UserProfileUpdateValidator = (firstName, lastName, email) => {
  const errors = {};
  if (firstName.trim() === '') {
    errors.firstName = 'First name must not be empty';
  }
  if (lastName.trim() === '') {
    errors.lastName = 'Last name must not be empty';
  }
  if (email.trim() === '') {
    errors.email = 'Email must not be empty';
  } else {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email address';
    }
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
