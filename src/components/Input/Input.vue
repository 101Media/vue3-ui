<template>
    <div :class="groupClass" v-if="groupInput">
        <label v-if="$slots.default" class="form-label" :for="modelValue">
            <slot></slot>
            <span class="text-danger" v-if="required">*</span>
        </label>

        <div class="input-group">
            <span class="input-group-text" v-if="!!($slots.prepend)">
            <slot name="prepend"></slot>
            </span>

            <input
                :id="modelValue"
                v-bind="{ ...$attrs, class: null }"
                :class="{ 'is-invalid': error }"
                :type="type"
                class="form-control"
                :value="modelValue"
                :required="required"
                @input="$emit('update:modelValue', $event.target.value)" ref="input"/>

            <span class="input-group-text" v-if="!!($slots.append)">
                <slot name="append"></slot>
             </span>
        </div>
    </div>

    <div v-if="error" class="invalid-feedback">{{ error }}</div>

    <div v-if="group === false">
        <input
            :id="modelValue"
            v-bind="{ ...$attrs, class: null }"
            :class="{ 'is-invalid': error }"
            :type="type" class="form-control"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            ref="input"/>
    </div>
</template>


<script>
export default {
    name:     "UInput",
    props:    {
        modelValue: {},
        class:      {
            type:    String,
            default: "",
        },
        label:      {
            type:    String,
            default: "",
        },
        error:      {
            type:    String,
            default: "",
        },
        group:      {
            type:    Boolean,
            default: true,
        },
        groupClass: {
            default: "mb-3",
        },
        type:       {
            default: "text",
            type:    String,
        },
        required:   {
            type:    Boolean,
            default: false,
        },
    },
    emits:    ["update:modelValue"],
    methods:  {
        focus() {
            this.$refs.input.focus()
        },
    },
    computed: {
        groupInput() {
            if (this.group) {
                return true
            }
            return !!(this.$slots.prepend || this.$slots.append)
        },
    },
}
</script>

