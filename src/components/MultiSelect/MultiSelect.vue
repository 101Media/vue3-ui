<template>
    <div class="form-group" v-if="group">
        <label class="form-label" @click="focus">
            <slot></slot>
        </label>
        <VueFormMultiselect :value="modelValue" @change="(val) => $emit('update:modelValue', val)" :options="options" :mode="mode"
                            :class="{ 'is-invalid': error }"
                            v-bind="$attrs" ref="input"/>
        <div v-if="error" class="invalid-feedback">{{ error }}</div>
    </div>

    <VueFormMultiselect v-else :value="modelValue" @change="(val) => $emit('update:modelValue', val)" :options="options" :mode="mode"
                        :class="{ 'is-invalid': error }"
                        v-bind="$attrs" ref="input"/>
</template>

<script>
import VueFormMultiselect from "@vueform/multiselect";

export default {
    name: 'MultiSelect',
    components: {
        VueFormMultiselect,
    },
    inheritAttrs: false,
    emits: ["update:modelValue", "change"],
    props: {
        modelValue: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: undefined,
        },
        group: {
            type: Boolean,
            default: true,
        },
        mode: {
            type: String,
            default: "single",
        },
        options: {
            type: [Object, Array],
        },
        label: String,
        error: String,
    },
    methods: {
        focus() {
            this.$refs.input.focus();
        },
    },
};
</script>

