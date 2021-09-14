<template>
    <div class="form-check" :class="`${formClass} ${switches ? 'form-switch' : ''} `">

        <span class="input-group-text" v-if="!!($slotes.prepend)">
        <slot name="prepend"></slot>
        </span>

        <input class="form-check-input" type="checkbox" value="" :id="id" :value="value" v-model="proxyChecked" v-bind="$attrs">

        <span class="input-group-text" v-if="!!($slotes.append)">
        <slot name="append"></slot>
        </span>

        <label class="form-check-label" :for="id">
            <slot></slot>
        </label>
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
}
</script>
