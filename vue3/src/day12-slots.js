const SuYan = {
    template: `<div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>`
}

const Root = {
    template: `<SuYan>
    <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
    </SuYan>`,
    data() {
        return {
            title: '前端小课'
        }
    }
};

const app = Vue.createApp(Root);

app.mount('#suyan-app');
