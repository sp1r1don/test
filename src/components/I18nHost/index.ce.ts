import I18nHost from 'src/components/I18nHost/I18nHost.ce.vue';
import { defineCustomElement } from 'vue';

const I18nHostEl = defineCustomElement(I18nHost);
window.customElements.define('i18n-host-el', I18nHostEl);
