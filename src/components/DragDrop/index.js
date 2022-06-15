import DragDrop from './DragDrop.vue'
import {registerComponent} from "../../utils/plugin";


export default {
    install(app) {
        registerComponent(app, DragDrop)
    },
}

export {
    DragDrop as UDragDrop
}