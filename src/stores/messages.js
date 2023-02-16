import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', {

    state: () => {
        return { messages: [
            {text:"Good day Professor", userId: 'student', createdAt: Date.now(), document: {size: 3.8, version: 1, name: "project", filetype: 'pdf', date: Date.now(), url:"http://pdf.com/project.pdf"}},
            {text:"Good work, but i think you should check point 3", userId: 'tutor', createdAt: Date.now()},
         
        ],
    }
      },

      actions: {
        sendMessage(newMessage) {
          this.messages.push(newMessage);
        },
        loadMessages(){
            alert("loading messages");
        },
      },
})