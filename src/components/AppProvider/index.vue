<template>
  <n-notification-provider>
    <n-message-provider>
      <message-content />
      <slot></slot>
    </n-message-provider>
  </n-notification-provider>
</template>

<script lang="ts" setup>
import MessageContent from "./Plugins/MessageContent.vue";
import { NMessageProvider, NNotificationProvider } from "naive-ui";
</script>
