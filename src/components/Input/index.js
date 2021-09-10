import Input from './Input.vue'
import {registerComponent} from "../../utils/plugin";


export default {
    install(app) {
        registerComponent(app, Input)
    },
}

export {
    Input as UInput
}