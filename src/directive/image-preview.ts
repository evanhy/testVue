
import ImageViewer from "@/components/ImageViewer.vue"
import { App, createApp } from "vue"

export function ImagePreviewDirective(app: App) {
  app.directive("image-preview", {
    mounted(el) {
      let componentInstance: any

      el.addEventListener("click", () => {
        if (!componentInstance) {
          const appInstance = createApp(ImageViewer, {
            src: el.src,
          })
          componentInstance = appInstance.mount(document.createElement("div"))
          document.body.appendChild(componentInstance.$el)
        }

        componentInstance.showImage()
      })
    },
  })
}
