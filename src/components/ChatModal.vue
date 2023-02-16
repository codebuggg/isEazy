<script>
import Receiver from './Receiver.vue';
import Sender from './Sender.vue';
import {useMessagesStore} from '../stores/messages'

var messagesStore;

const messages = [
"perfect, excellent work",
"this looks good to me",
"good work",
]

export default {
    components: { Sender, Receiver },
    setup() {
      // intialize store
      messagesStore = useMessagesStore();
    },
    data () {
      return {
        messagesStore,
        loggedInUserId: "student",
        inputText: "",
      }
    },
    methods: {
      sendMessage(){
        // check to prevent empty message from being sent.
        if (this.inputText.length == 0){
          return
        }

        // For versioning our documents, we try to get previously updated documents and then with the information we discover,
        // we know the next version to assign the next document being uploaded to.
        const messagesWithDocuments  = messagesStore.messages.filter(message => Boolean(message.document))
        let newMessage = {text: this.inputText, userId: this.loggedInUserId, createdAt: Date.now(), document: {
          size: Math.floor(Math.random() * 10 + 1).toFixed(1), version: messagesWithDocuments.length + 1, name: `project${messagesWithDocuments.length + 1}`, filetype: 'pdf', date: Date.now(), url:"http://pdf.com/project.pdf"
        } };
        messagesStore.sendMessage(newMessage);

        // We have some predefined recipient messages. To get a random message, 
        // we generate a random number between 1 and the length of the predefined messages array.
        // The resolved message is used as the next recipient message.
        const randomNumber =Math.floor(Math.random() * (messages.length - 1 + 1)) + 1
        messagesStore.sendMessage({userId: "tutor", text:messages[randomNumber - 1] , createdAt: Date.now()});
        this.inputText = '';
      }
    }
}
</script>

<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          -->
          <div class="relative transform rounded-lg bg-white  pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 h-full w-1/2 max-w-4xl md:h-auto ">
            <!-- Modal header -->
            <div class="flex item-center border-b-2 border-black  rounded-t w-full px-4">
              <div class="grow"></div>
              <div class="w-1/2 text-center text-xl font-semibold text-gray-900">Comentarios</div>
              <div class="grow flex justify-end">
                  <button type="button" class="text-blue-500 bg-transparent hover:bg-blue-200 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-blue-600 dark:hover:text-white" data-modal-hide="staticModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> 
                  </button>
              </div> 
            </div>
            <!-- End Modal header-->
            <div class="overflow-y-auto max-h-96">
              <div v-for="(message, index) in messagesStore.messages" class="flex-1 px-12 py-4 overflow-y-auto">
              <Sender :message="message" v-if="message.userId === loggedInUserId " />
              <Receiver :message="message" v-else/> 
              </div>
            </div>
            

            <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
              <div class=" flex w-full">
                <input :autofocus="true" @keyup.enter="sendMessage" @keydown.space.prevent v-model="inputText" type="text" class="w-full focus:outline-none focus:placeholder-gray-400 bg-gray-200 rounded-full py-1 px-4">
                <div class="right-0 items-center inset-y-0 hidden sm:flex">
                    <button @click="sendMessage" type="button" class="ml-3 inline-flex items-center justify-center rounded-full px-1 py-1 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4  transform rotate-90">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                      </svg>
                    </button>
                </div>
              </div>
            </div>
            
          <div>
                  
        </div>
          
      </div>
        </div>
      </div>
      
  </div>

</template>

