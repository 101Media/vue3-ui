<template>
    <a href="#" :class="groupClass" id="dropzone" class="h-100" style="border: 2px dashed #12263f;border-radius: .375rem; ">
        <div ref="dropArea" v-bind="{ ...$attrs, class: null }" @dragover.prevent="dragover"
             @dragleave.prevent="dragleave" @drop.prevent="drop" @click="$refs.file.click()">
            <slot></slot>

            <input type="file" class="d-none w-100 h-100" @change="onChange" ref="file" :accept="accept"/>
            <div class="invalid-feedback d-block" v-if="error">{{ error }}</div>
        </div>
    </a>
</template>

<script>
export default {
    name:  "UDragDrop",
    emits: ["update:modelValue", "change"],
    props: {
        modelValue: {
            type:    File,
            default: null,
        },
        groupClass: {
            default: "mb-3",
        },
        class:      {
            type:    String,
            default: "form-group d-flex flex-column position-relative",
        },
        accept:     {
            type:    String,
            default: "",
        },
        error:      {
            type:    String,
            default: "",
        },
    },
    data() {
        return {
            file: null,
        }
    },
    methods: {
        onChange() {
            this.file = [...this.$refs.file.files][0]
            this.$emit("update:modelValue", this.file)
            this.$emit("change", this.file)
        },
        dragover(event) {
            event.preventDefault()
        },
        dragleave(event) {
            event.preventDefault()
        },
        drop(event) {
            event.preventDefault()
            this.$refs.file.files = event.dataTransfer.files
            this.onChange()
        },
    },
}
</script>
