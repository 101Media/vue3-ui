import {merge} from 'lodash';

let config = {
    //
}

export const setOptions = (options) => {
    config = options
}

export const getOptions = () => {
    return config
}

export let VueInstance;

export const setVueInstance = (Vue) => {
    VueInstance = Vue
}

export const Programmatic = {
    getOptions,
    setOptions(options) {
        setOptions(merge(getOptions(), options))
    }
}

export const Plugin = {
    install(Vue, options = {}) {
        setVueInstance(Vue)
        setOptions(merge(getOptions(), options))
    }
}