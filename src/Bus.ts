type BusClass = {
    // (name: string) 为自定义事件的名称
    emit: (name: string) => void
    // emit的参数后面会传递给on里面的callback回调函数中
    on: (name: string, callback: Function) => void
}

type PramsKey = string | number | symbol

type List = {
    [key: PramsKey]: Array<Function>
}

class Bus implements BusClass {
    list: List
    constructor() {
        this.list = {}
    }

    // emit是触发回调函数，所以是发布者。on是收集函数，所以是订阅者。

    emit (name: string, ...args: Array<any>) {
        let eventName: Array<Function> = this.list[name]
        eventName.forEach(fn => {
            fn.apply(this, args)
        })
    }

    on (name: string, callback: Function) {
        let fn: Array<Function> = this.list[name] || []
        fn.push(callback)
        this.list[name] = fn
    }
}

export default new Bus()