<template>
  <button class="btn" @click="onReset">{{ t('counter.reset') }}</button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const emit = defineEmits<{
  (e: 'count-reset'): void;
}>();

function onReset() {
  emit('count-reset');
}
</script>

<style>
@import 'src/main.css';
</style>
