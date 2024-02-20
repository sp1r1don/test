<template>
  <div class="flex space-x-2">
    <button class="btn" @click="increment">{{ t('counter.plus') }}</button>
    <button class="btn" @click="decrement">{{ t('counter.minus') }}</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const props = defineProps({
  count: { type: [Number, String], required: true },
});

const emit = defineEmits<{
  (e: 'count-changed', value: number): void;
}>();

const { t } = useI18n();

const increment = () => {
  emit('count-changed', Number(props.count) + 1);
};

const decrement = () => {
  emit('count-changed', Number(props.count) - 1);
};
</script>

<style>
@import 'src/main.css';
</style>
