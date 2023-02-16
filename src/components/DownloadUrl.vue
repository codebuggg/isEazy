<script>
import { getFormattedDate } from '../utils';

    export default {
        props: ["data"],
        date: () => {
            return {
                date:getFormattedDate(data.date)
            }
        }
    }
</script>

<template>
<!--Download URL -->
    <div class="flex border-b-2 border-t-2 border-gray-200 mx-8 pt-4 pb-2 sm:mb-2 justify-between">
        <div class="flex flex-col">
            <div class="uppercase">VERSION {{ data.version }}</div>
            <div class="text-blue-500">Some description here</div>

            <div class="flex flex-row items-center text-xs">

                <div class="text-gray-5 mr-1">Documents / {{String(data.filetype).toUpperCase()}}</div>
                <div class="text-gray-500 mr-1">({{ data.size }} MB)</div>
            <div class="text-gray-600">{{date}}</div>
            </div>
        </div>
        <div class="inline-block align-middle h-full mt-4">
            <button class="">
                <img src="../assets/downloadicon.png" alt="">
            </button>
        </div>
    </div>
<!--Download URL -->
</template>

