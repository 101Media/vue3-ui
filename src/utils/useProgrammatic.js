const ui = {};

function addProgrammatic(property, component) {
    ui[property] = component;
}

export function useProgrammatic() {
    return {ui, addProgrammatic};
}