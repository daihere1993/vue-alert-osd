import Alert from '../src'

console.log('tests')

document.querySelector('[showbase]').addEventListener('click', () => {
  Alert('I\'m a message')
})
