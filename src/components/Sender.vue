<script>
import DownloadUrl from './DownloadUrl.vue';
import {getFormattedDate} from '../utils'
export default {
    components: { DownloadUrl },
    props: ['message'],
    data () {
    return {
        date: getFormattedDate(this.message.createdAt)
      }
    },
}
</script>
<template>

    <DownloadUrl :data="message.document"  />
<!-- chat message -->
    <div class="flex items-center flex-row-reverse mt-4">
        <div class="flex-none flex flex-col items-center space-y-1 ml-4">
            <img class="rounded-full w-8 h-8"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        </div>
        <div class="flex flex-col bg-blue-500 text-white p-2 mb-2 relative">
            <div>{{ message.text }}</div>
            <div>{{ date }}</div>
            <!-- arrow -->
            <div class="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-blue-500"></div>
            <!-- end arrow -->
        </div>
    </div>
<!-- end chat message -->
</template>





