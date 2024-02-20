import Counter from 'src/components/Counter/Counter.ce.vue';
import { defineCustomElement } from 'vue';

const CounterEl = defineCustomElement(Counter);
window.customElements.define('counter-el', CounterEl);
