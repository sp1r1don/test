import ControlPane from 'src/components/ControlPane/ControlPane.ce.vue';
import { defineCustomElement } from 'vue';

const ControlPaneEl = defineCustomElement(ControlPane);
window.customElements.define('control-pane-el', ControlPaneEl);
