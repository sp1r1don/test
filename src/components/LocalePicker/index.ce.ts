import LocalePicker from 'src/components/LocalePicker/LocalePicker.ce.vue';
import { defineCustomElement } from 'vue';

const LocalePickerEl = defineCustomElement(LocalePicker);
window.customElements.define('locale-picker-el', LocalePickerEl);
