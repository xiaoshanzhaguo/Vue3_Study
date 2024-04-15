import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/Card.vue'
import mitt from 'mitt'

const Mit = mitt()

export const app = createApp(App)

// 在全局，扩展globalProperties的声明
declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}

// 这样挂载后，并不会有对应的ts帮我们去声明
app.config.globalProperties.$Bus = Mit

app.component('Card', Card)

app.mount('#app')

// 这是链式调用的写法
// createApp(App).component('Card', Card).mount('#app')