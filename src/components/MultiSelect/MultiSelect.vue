<template>
    <div class="form-group" v-if="group">
        <label class="form-label" @click="focus">{{ label }}</label>
        <Multiselect v-model="modelValue" @change="(val) => $emit('update:modelValue', val)" :options="options" :label="optionLabel" :mode="mode"
                     :class="{ 'is-invalid': error }" v-bind="$attrs"
                     ref="input">
            <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
                <slot :name="slot" v-bind="scope"/>
            </template>
        </Multiselect>
        <div v-if="error" class="invalid-feedback">{{ error }}</div>
    </div>
    <Multiselect v-else v-model="modelValue" @change="(val) => $emit('update:modelValue', val)" :options="options" :label="optionLabel" :mode="mode"
                 :class="{ 'is-invalid': error }" v-bind="$attrs"
                 ref="input">
        <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
            <slot :name="slot" v-bind="scope"/>
        </template>
    </Multiselect>
</template>

<script>
import Multiselect from "@vueform/multiselect"

export default {
    name:       "UMultiSelect",
    components: {
        Multiselect,
    },

    inheritAttrs: false,

    props: {
        group:       {
            type:    Boolean,
            default: true,
        },
        mode:        {
            type:    String,
            default: "single",
        },
        options:     {
            type: [Object, Array],
        },
        modelValue:  {
            type: [String, Number, Array],
        },
        label:       String,
        optionLabel: {
            type:    String,
            default: "label",
        },
        error:       String,
    },

    emits: ["update:modelValue"],

    methods: {
        focus() {
            this.$refs.input.focus()
        },
    },
}
</script>

