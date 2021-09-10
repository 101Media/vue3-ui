<template>
    <div :class="block ? 'd-grid gap-2' : ''">
        <button class="btn" :class="class" :type="type" v-bind="$attrs">
            <slot/>
        </button>
    </div>
</template>

<script>

export default {
    name: 'UButton',
    props: {
        type: {
            default: 'button',
            type: String,
        },
        class: {
            default: 'btn-primary',
            required: false,
            type: String,
        },
        block: {
            default: false,
            type: Boolean
        },
    },
}
</script>