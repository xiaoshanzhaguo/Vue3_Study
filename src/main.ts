import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/Card.vue'

export const app = createApp(App)

app.component('Card', Card)

app.mount('#app')

// 这是链式调用的写法
// createApp(App).component('Card', Card).mount('#app')