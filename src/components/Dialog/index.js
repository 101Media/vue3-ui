import {createApp} from "vue"
import {merge} from 'lodash';
import {registerComponent, registerComponentProgrammatic} from "../../utils/plugin";
import Dialog from './Dialog'
import {VueInstance} from "../../utils/config";

let localVueInstance;

function open(options) {
    return new Promise((resolve) => {
        const app = localVueInstance || VueInstance
        let defaultOptions = app.config.globalProperties.$ui.config.getOptions().dialog || {};
        const defaultProps = merge(defaultOptions, {
            programmatic: true,
            onConfirm(confirmed) {
                if (confirmed) {
                    resolve(confirmed);
                }
                DialogComponent.unmount();
            }
        });

        const props = merge(defaultOptions, options);

        let DialogComponent = createApp(Dialog, props)

        const wrapper = document.createElement('div');
        DialogComponent.mount(wrapper);
        document.body.appendChild(wrapper);
    })
}

const DialogProgrammatic = {
    alert(params) {
        const defaultParam = {
            canCancel: false,
        }
        const data = merge(defaultParam, params)
        return open(data)
    },
    confirm(params) {
        const defaultParam = {}
        const data = merge(defaultParam, params)
        return open(data)
    }
}


export default {
    install(app) {
        localVueInstance = app
        registerComponent(app, Dialog);
        registerComponentProgrammatic(app, 'dialog', DialogProgrammatic)
    }
}

export {
    DialogProgrammatic,
    Dialog as UDialog
}