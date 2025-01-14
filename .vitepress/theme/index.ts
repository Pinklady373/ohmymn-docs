import { h } from "vue"
import Theme from "vitepress/theme"
import { inBrowser } from "vitepress"
import "../style/main.css"
import "../style/vars.css"
import "uno.css"
import HomePage from "../components/HomePage.vue"
import Feature from "../components/Feature.vue"

if (inBrowser) import("./pwa")

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      "home-features-before": () => h(Feature),
      "home-features-after": () => h(HomePage)
    })
  }
}
