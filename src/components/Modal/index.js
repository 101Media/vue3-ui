import DefaultModal from './DefaultModal.vue'
import {registerComponent} from "../../utils/plugin";
import {vfmPlugin} from 'vue-final-modal'

export default {
    install(app) {
        registerComponent(app, DefaultModal)

        app.use(vfmPlugin);
    },
}

export {
    DefaultModal as UModal
}