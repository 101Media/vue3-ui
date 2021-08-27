import Ui from './ui';

export default {
    install: (app) => {
        app.config.globalProperties.$ui = Ui
    },
}
