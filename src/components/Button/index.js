import Button from './Button.vue'
import {registerComponent} from "../../utils/plugin";


export default {
    install(app) {
        registerComponent(app, Button)
    },
}

export {
    Button as UButton
}