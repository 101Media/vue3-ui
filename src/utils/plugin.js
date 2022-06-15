import {useProgrammatic} from "./useProgrammatic"
import {getOptions} from "./config"

export const registerPlugin = (app, plugin) => {
    app.use(plugin)
}

export const registerComponent = (app, component) => {
    let props = getOptions()

    if (props.hasOwnProperty(component.name)) {
        Object.entries(props[component.name]).forEach(([key, value]) => {
            component.props[key].default = value
        })
    }

    app.component(component.name, component)
}

export const registerComponentProgrammatic = (app, property, component) => {
    const {ui, addProgrammatic} = useProgrammatic()

    addProgrammatic(property, component)

    if (!(app._context.provides && app._context.provides.ui)) app.provide("ui", ui)
    if (!app.config.globalProperties.$ui) app.config.globalProperties.$ui = ui
}