<template>
  <slot />
</template>

<script setup lang="ts">
import en from 'src/locales/en.json';
import fr from 'src/locales/fr.json';
import { provide } from 'vue';
import { createI18n, I18nInjectionKey } from 'vue-i18n';

/**
 * create an i18n instance to host for other web components
 */
const i18n = createI18n<false>({
  legacy: false, // must set to `false`
  locale: 'en',
  messages: {
    en,
    fr,
  },
});

provide(I18nInjectionKey, i18n);
</script>
