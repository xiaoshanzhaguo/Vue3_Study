// 写法1，返回一个渲染函数
export default function () {
    return (<div>小美</div>)
}

// 写法2，使用optionsAPI
import { defineComponent } from "vue";
export default defineComponent({
    data () {
        return {
            age: 23
        }
    },
    
    // 在tsx中使用变量，是使用一个{}
    render () {
        return (<div>{this.age}</div>)
    }
})

// 6.插槽
const A = (_, {slots}) => (<>
    <div>{slots.default ? slots.default() : '默认值'}</div>
    <div>{slots.foo?.()}</div>
</>)
interface Props {
    name?: string
}
// 写法3，setup函数模式
import { defineComponent, ref } from "vue";
export default defineComponent({
    // 5. props, emit
    props: {
        name: String
    },
    emit: ['on-click'],
    setup (props: Props, {emit}) {
        // 1. ref在template自动解包.value，而在tsx中不会
        const flag = ref(false)
        return () => (<div v-show={flag.value}>小美setup</div>)

        // 2. v-if不支持，需要变换一种思想，使用三元表达式代替
        return () => (<>
            <div>{flag.value ? <div>true</div> : <div>false</div>}</div>
        </>)

        // 3. v-for，可以用map代替
        const data = [
            {
                name: "小美1"
            },
            {
                name: "小美2"
            },
            {
                name: "小美3"
            }
        ]
        return () => (<>
            {
                data.map(v => {
                    return <div>{v.name}</div>
                })
            }
        </>)

        // 4. v-bind，{}代替
        return () => (<>
            {
                data.map(v => {
                    return <div name={v.name}>{v.name}</div>
                })
            }
        </>)

        // 5. props, emit
        const fn = (item: any) => {
            // 注意该函数会在编译的时候去调用，因此下面的onClick需要使用函数柯里化，加上() =>
            console.log('触发了', item);
            emit('on-click', item)
        }
        return () => (<>
            <div>props: {props?.name}</div>
            {
                data.map(v => {
                    return <div onClick={() => fn(v)} name={v.name}>{v.name}</div>
                })
            }
        </>)

        // 6. slots
        const slot = {
            default: () => (<div>小美default slots</div>),
            foo: () => (<div>小美 foo slots</div>)
        }
        return () => (<>
            <A v-slots={slot}></A>
            <hr />
            <div>props: {props?.name}</div>
            {
                data.map(v => {
                    return <div onClick={() => fn(v)} name={v.name}>{v.name}</div>
                })
            }
        </>)

        // 7. v-model
        const v = ref<string>('')
        return () => (<>
            <input v-model={v.value} type="text" />
            <div>{v.value}</div>
            <hr />
            <A v-slots={slot}></A>
            <hr />
            <div>props: {props?.name}</div>
            {
                data.map(v => {
                    return <div onClick={() => fn(v)} name={v.name}>{v.name}</div>
                })
            }
        </>)
    }
})

// 在实际使用过程中，写法1和写法3使用较多，写法2使用较少