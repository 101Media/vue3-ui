<template>
    <div class="form-check" :class="`${formClass} ${switches ? 'form-switch' : ''} `">
        <input :class="{is_invalid: this.error, error}" class="form-check-input" type="checkbox" :id="id" v-model="proxyChecked" v-bind="$attrs"
               @change="$emit('change')">

        <label class="form-check-label" :for="id">
            <slot></slot>
        </label>

        <div class="d-block invalid-feedback" v-if="error">{{ error }}</div>
    </div>
</template>

<script>
export default {
    name: 'UCheckbox',
    emits: ['update:checked'],
    props: {
        id: {
            type: String,
            required: false,
            default: 'checkbox'
        },
        switches: {
            default: false,
            type: Boolean,
        },
        error: {
            type: String,
            default: '',
        },
        checked: {
            type: [Array, Boolean],
            default: false,
        },
        value: {
            default: null,
        },
        formClass: {
            type: String,
            default: 'mb-3',
        }
    },
    computed: {
        proxyChecked: {
            get() {
                return this.checked;
            },
            set(val) {
                this.$emit("update:checked", val);
            },
        },
    },
    mounted() {
        console.log(this.value);
    }
}
</script>
