import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'Yo yo',
    src: 'something-something.jpg'
  }
})

export default app
