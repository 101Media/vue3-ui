<template>
    <div class="form-group" v-if="group === true">
        <label v-if="$slots.default" class="form-label" :for="modelValue">
            <slot></slot>
        </label>

        <span class="input-group-text" :id="modelValue">
        <slot name="prepend"></slot>
        </span>

        <input
            :id="modelValue"
            v-bind="{ ...$attrs, class: null }"
            :class="{ 'is-invalid': error }"
            :type="type"
            class="form-control"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" ref="input"/>
        <div v-if="error" class="invalid-feedback">{{ error }}</div>

        <span class="input-group-text" :id="modelValue">
        <slot name="append"></slot>
        </span>

    </div>

    <slot name="prepend"></slot>

    <input
        v-else
        :id="modelValue"
        v-bind="{ ...$attrs, class: null }"
        :class="{ 'is-invalid': error }"
        :type="type" class="form-control"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        ref="input"/>

    <slot name="append"></slot>

</template>


<script>
export default {
    name: 'UInput',
    props: {
        modelValue: {},
        id: {
            default: 'input',
        },
        class: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        error: {
            type: String,
            default: '',
        },
        group: {
            type: Boolean,
            default: true
        },
        groupClass: {
            default: 'input-group'
        },
        type: {
            default: 'text',
            type: String,
        }
    },
    emits: ['update:modelValue'],
    methods: {
        focus() {
            this.$refs.input.focus()
        }
    }
}
</script>

