const isValidEmail = str => !str.match(/^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/)

const isValidName = (str) => {
  if (str.length > 0) {
    return str.match(/^\d+$/) || str.length < 3
  }
  return true
}

const isValidMessage = str => str.length < 10

const validateEmail = (rule, value, callback) => {
  if (!value) {
    callback('Email is empty')
    return
  }
  const err = []
  if (isValidEmail(value)) {
    err.push('Not valid e-mail')
  }
  callback(err)
}

const validateName = (rule, value, callback) => {
  if (!value) {
    callback('Name is empty')
    return
  }
  const err = []
  if (isValidName(value)) {
    err.push('Not valid name')
  }
  callback(err)
}

const validateMessage = (rule, value, callback) => {
  if (!value) {
    callback('Message is empty')
    return
  }
  const err = []
  if (isValidMessage(value)) {
    err.push('Not valid message')
  }
  callback(err)
}

export { validateEmail, validateName, validateMessage }
