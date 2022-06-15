<template>
    <div :class="formClass">
        <input type="radio" :id="slugify(value)" :checked="isChecked" :value="value" @change="$emit('update:modelValue', $event.target.value)">
        <label class="form-label" :for="slugify(value)">
            <slot></slot>
        </label>
    </div>
</template>

<script>
import slugify from 'slugify';

export default {
    name: 'URadio',
    emits: ['update:modelValue'],
    model: {
        prop: 'modelValue',
        event: 'update:modelValue'
    },
    props: {
        class: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: ''
        },
        error: {
            type: String,
            default: '',
        },
        button: {
            type: Boolean,
            default: false
        },
        groupClass: {
            default: 'mb-3'
        },
        formClass: {
            type: String,
            default: 'mb-3',
        }
    },
    computed: {
        isChecked() {
            return this.modelValue === this.value
        }
    },
    methods: {
        slugify(string) {
            return slugify(string);
        }
    }
}
</script>
