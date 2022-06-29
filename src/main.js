import Vue from "vue"
import singleSpaVue from "single-spa-vue"
import App from "./App.vue"

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#product-cart",
    render(h) {
      return h(App, { props: { store: this.store } })
    },
  },
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = (props) => {
  return new Promise(() => {
    if (props.singleSpa.getMountedApps().indexOf("product-detail") !== -1) {
      console.log("test have product-detail ", props.singleSpa.getMountedApps())
      return vueLifecycles.mount(props)
    } else {
      console.log(
        "test haven't product-detail ",
        props.singleSpa.getMountedApps()
      )
      setTimeout(() => vueLifecycles.mount(props), 1000)
    }
  })
}
export const unmount = vueLifecycles.unmount
