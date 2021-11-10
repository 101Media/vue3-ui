import Radio from './Radio.vue'
import {registerComponent} from "../../utils/plugin";


export default {
    install(app) {
        registerComponent(app, Radio)
    },
}

export {
    Radio
}