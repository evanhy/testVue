import { App } from "vue";
import { ImagePreviewDirective } from "./image-preview";

export function directive(app: App) {
  ImagePreviewDirective(app);
}
