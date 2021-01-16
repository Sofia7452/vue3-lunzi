import { createApp } from 'vue';
import './index.scss';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DiologDemo from './components/DiologDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'
const history = createWebHashHistory();
export const router = createRouter({
  history, routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc, children: [
        { path: '', component: DocDemo },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'diolog', component: DiologDemo },
        { path: 'tabs', component: TabsDemo }
      ]
    }
  ]
});
// router.afterEach(() => {
//   console.log('luyouqiehuan ')
// })