import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', {

    state: () => {
        return { messages: [
            {text:"This is a ttest", userId: 'test', createdAt: Date.now(), document: {size: 3.8, version: 1}},
            {text:"This is the love of my life!", userId: 'test2', createdAt: Date.now()},
            // {text:"This is a ttest", userId: 'test2',},
            // {text:"This is a ttest", isFile: true,},
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