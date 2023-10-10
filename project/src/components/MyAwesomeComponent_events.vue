<template>
    <div class="container">
        <button class="button"
            @click="handleMouseEvent"
            @dblclick="handleMouseEvent"
            @mousedown.left="handleMouseEvent"
            @mouseup.right="handleMouseEvent"
            @mousemove.once="handleMouseEvent"
            @mouseover.middle="handleMouseEvent"
            @mouseleave="handleMouseEvent"
            @mousewheel="handleMouseEvent"
            @mouseout="handleMouseEvent"
            @contextmenu.prevent="handleMouseEvent"
        >
            Button
        </button>
        <form class="form" @submit.prevent="sendMessage">
            <input type="text" class="input" placeholder="Type something"
                @keypress.shift.s.exact="handleKeyEvent"
                @keydown="handleKeyEvent"
                @keyup.alt="handleKeyEvent"
            />
            <button class="button">Submit</button>
        </form>
        <p v-show="isMessageSend">Message send</p>
        <div class="outer" @click="handleMouseEvent">
            <div class="inner" @click.stop="handleMouseEvent"></div>
        </div>
        <ul>
            <li v-for="(event, index) in mouseEventsArray" :key="index">{{ event }}</li>
        </ul>
        <ul>
            <li v-for="({key, type}, index) in keyEventsArray" :key="index">{{ key + " " + type }}</li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "MyAwesomeComponent",
    setup() {
        const mouseEventsArray = ref([]);
        const keyEventsArray = ref([]);
        const isMessageSend = ref(false);

        function handleMouseEvent(e) {
            mouseEventsArray.value = [...mouseEventsArray.value, e.type];
        }

        function handleKeyEvent({key, type}) {
            keyEventsArray.value = [...keyEventsArray.value, {key, type}]
        }

        function sendMessage() {
            isMessageSend.value = true;
        }

        return {
            isMessageSend,
            mouseEventsArray,
            keyEventsArray,
            sendMessage,
            handleMouseEvent,
            handleKeyEvent
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.input {
    margin-top: 10px;
}
.button {
    cursor: pointer;
    background-color: transparent;
    color: #000;
    border: 3px solid #000;
    padding: 10px 20px;
    font-size: 24px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.1s ease-in, color 0.1s ease-in,
    border-color 0.1s ease-in;
    margin-top: 10px;

    &:hover {
        background-color: #000;
        color: #fff;
        border-color: #000;
    }
}
.outer {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #42b883;
    margin-top: 10px;
}
.inner {
    width: 50px;
    height: 50px;
    background-color: #35495e;
}
.form {
    display: flex;
    flex-direction: column;
}
</style>