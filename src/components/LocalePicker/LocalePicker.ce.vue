<template>
  <div class="flex items-center space-x-2">
    <button
      class="px-2 py-1 border border-white disabled:bg-white disabled:text-black hover:opacity-80"
      v-for="sLocale in availableLocales"
      :key="sLocale"
      :disabled="sLocale === locale"
      @click="switchLang(sLocale)"
    >
      {{ sLocale }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n();

function switchLang(newLocale: string) {
  locale.value = newLocale;
}
</script>

<style>
@import 'src/main.css';
</style>
