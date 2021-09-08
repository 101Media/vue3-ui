import {useProgrammatic} from "./useProgrammatic";

export const registerPlugin = (app, plugin) => {
    app.use(plugin);
}

export const registerComponent = (app, component) => {
    app.component(component.name, component);
}

export const registerComponentProgrammatic = (app, property, component) => {
    const {ui, addProgrammatic} = useProgrammatic();

    addProgrammatic(property, component);

    if (!(app._context.provides && app._context.provides.ui)) app.provide('ui', ui);
    if (!app.config.globalProperties.$ui) app.config.globalProperties.$ui = ui;
}