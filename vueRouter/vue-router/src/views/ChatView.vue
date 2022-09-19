<template>
    <div v-for="msg in messagesFiltered" :key="msg.id">
        {{ msg.text }}
    </div>
</template>

<script>
export default {
    props: {
        chatId: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            messages: [
                { id:1, text:'Message 1', author: 1 },
                { id:2, text:'Message 2', author: 3 },
                { id:3, text:'Message 3', author: 2 },
                { id:4, text:'Message 4', author: 2 },
                { id:5, text:'Message 5', author: 1 },
            ]
        }
    }, 
    computed: {
        messagesFiltered() {
            return this.messages.filter((msg) => {
                return `${msg.author}` === this.chatId
            })
        }
    }
}
</script>