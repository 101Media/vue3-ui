<template>
    <div :class="block ? 'd-grid gap-2' : ''">
        <button class="btn" v-bind="{ ...$attrs, class: null }" :type="type" @click="$emit('click')">
            <slot/>
        </button>
    </div>
</template>

<script>

export default {
    name:  "UButton",
    emits: ["click"],
    props: {
        type:  {
            default: "button",
            type:    String,
        },
        class: {
            default:  "btn-primary",
            required: false,
            type:     String,
        },
        block: {
            default: false,
            type:    Boolean,
        },
    },
}
</script>