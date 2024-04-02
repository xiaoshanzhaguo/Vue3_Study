<template>
    <div class="sync">
        <div class="sync-content">
            <div><img :src="data.url"></div>
            <div class="sync-pop">
                <div>{{data.name}}</div>
                <div>&nbsp;{{data.age}}</div>
    		</div>
    	</div>
        <hr>
        <div>{{data.desc}}</div>
    </div>
</template>


<script setup lang='ts'>
import {ref, reactive} from 'vue'
import {axios} from '../../server/axios'
// 上面这段语句是引入前面封装好的axios

interface Data {
    data: {
        name: string,
        age: number,
        url: string,
        desc: string
    }
}

const {data} = await axios.get<Data>('./data.json')
</script>