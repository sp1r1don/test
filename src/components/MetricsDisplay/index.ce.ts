import MetricsDisplay from 'src/components/MetricsDisplay/MetricsDisplay.ce.vue';
import { defineCustomElement } from 'vue';

const MetricsDisplayEl = defineCustomElement(MetricsDisplay);
window.customElements.define('metrics-display-el', MetricsDisplayEl);
