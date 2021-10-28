import TextArea from './TextArea.vue'
import {registerComponent} from "../../utils/plugin";


export default {
    install(app) {
        registerComponent(app, TextArea)
    },
}

export {
    TextArea
}