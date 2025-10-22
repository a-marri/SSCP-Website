import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import './assets/css/styles.css'

const app = createApp(App)

// Configure Vue Motion plugin
app.use(MotionPlugin, {
  directives: {
    'fade-up': {
      initial: {
        opacity: 0,
        y: 50
      },
      visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 800,
          type: 'spring',
          stiffness: 50
        }
      }
    },
    'fade-in': {
      initial: {
        opacity: 0
      },
      visibleOnce: {
        opacity: 1,
        transition: {
          duration: 1000,
          ease: 'easeOut'
        }
      }
    },
    'slide-in': {
      initial: {
        opacity: 0,
        x: -100
      },
      visibleOnce: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 600,
          type: 'spring',
          stiffness: 80
        }
      }
    }
  }
})

app.use(router)

app.mount('#app')