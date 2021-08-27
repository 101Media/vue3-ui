import Dialog from './Dialog.vue';
import {createApp} from "vue"
import {merge} from 'lodash';

function open(data) {
    return new Promise((resolve) => {
        let DialogComponent = createApp(Dialog, {
            message: data.message,
            title: data.title,
            confirmClass: data.confirmClass,
            confirmText: data.confirmText,
            cancelClass: data.cancelClass,
            cancelText: data.cancelText,
            canCancel: data.canCancel,
            onConfirm(confirmed) {
                if (confirmed) {
                    resolve(confirmed);
                }
                DialogComponent.unmount();
            }
        })

        const wrapper = document.createElement("div")
        DialogComponent.mount(wrapper)
        document.body.appendChild(wrapper)
    })
}

const index = {
    alert(params) {
        if (typeof params === 'string') {
            params = {
                message: params
            }
        }
        const defaultParam = {
            canCancel: false
        }
        const data = merge(defaultParam, params)
        return open(data)
    },
    confirm(params) {
        const defaultParam = {}
        const data = merge(defaultParam, params)
        return open(data)
    },
}
export default index;
