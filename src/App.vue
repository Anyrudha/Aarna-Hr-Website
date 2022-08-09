<template>
  <component :is="layout" class="app-container" id="app">
    <router-view />
    <!-- <zohochat v-model="chat" /> -->
  </component>
</template>

<script>
import "@/assets/js/app.min";
// import { AppLayout } from "./common/appConstant";
import { subscribe, OPEN_CHAT } from "@/common/globalEmitter";

export default {
  name: "App",
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  data() {
    return {
      chat: false,
    };
  },
  created() {
    subscribe(OPEN_CHAT, () => {
      this.$data.chat = !this.$data.chat;
    });
  },
};
</script>
