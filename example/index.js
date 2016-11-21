import Alert from '../src'

Alert.set('duration', 2000)

document.querySelector('[success]').addEventListener('click', () => {
  Alert('I\'m a success message')
})

document.querySelector('[info]').addEventListener('click', () => {
  Alert('I\'m a info message', 'info')
})

document.querySelector('[warning]').addEventListener('click', () => {
  Alert('I\'m a warning message', 'warning')
})

document.querySelector('[danger]').addEventListener('click', () => {
  Alert('I\'m a danger message', 'danger')
})
