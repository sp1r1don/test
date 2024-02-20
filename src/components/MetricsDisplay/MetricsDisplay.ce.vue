<template>
  <div>
    <span>{{ t('counter.label') }}</span>
    <span>{{ props.count }}</span>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const props = defineProps({
  count: { type: [Number, String], required: true },
});
</script>

<style>
@import 'src/main.css';
</style>
