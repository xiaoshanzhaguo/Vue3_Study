import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/Card.vue'
import mitt from 'mitt'

const Mit = mitt()

export const app = createApp(App)

// $env在任何一个vue组件都可以直接去使用
app.config.globalProperties.$env = 'dev'

app.config.globalProperties.$filters = {
    format<T> (str: T) {
        return `小美-${str}`
    }
}

type Filter = {
    format<T>(str: T):string
}

// 解决App.vue里的报错
declare module 'vue' {
    export interface ComoponentCustomProperties {
        $filters: Filter,
        $env: string
    }
}


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