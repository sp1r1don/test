import ControlPane from 'src/components/ControlPane/ControlPane.ce.vue';
import Counter from 'src/components/Counter/Counter.ce.vue';
import MetricsDisplay from 'src/components/MetricsDisplay/MetricsDisplay.ce.vue';
import { defineCustomElement } from 'vue';

const CounterEl = defineCustomElement(Counter);
const MetricsDisplayEl = defineCustomElement(MetricsDisplay);
const ControlPaneEl = defineCustomElement(ControlPane);

customElements.define('counter-el', CounterEl);
customElements.define('metrics-display-el', MetricsDisplayEl);
customElements.define('control-pane-el', ControlPaneEl);
