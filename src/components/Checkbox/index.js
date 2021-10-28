import Checkbox from './Checkbox.vue'
import {registerComponent} from "../../utils/plugin";


export default {
    install(app) {
        registerComponent(app, Checkbox)
    },
}

export {
    Checkbox
}