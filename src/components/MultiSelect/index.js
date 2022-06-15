import MultiSelect from './MultiSelect.vue'
import {registerComponent} from "../../utils/plugin";


export default {
    install(app) {
        registerComponent(app, MultiSelect)
    },
}

export {
    MultiSelect as UMultiSelect
}