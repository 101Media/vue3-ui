<template>
    <vue-final-modal v-slot="{ close }" v-bind="$attrs" classes="modal d-block" content-class="modal-dialog modal-dialog-centered" :z-index-base="1050">
        <div class="modal-content">
            <div class="modal-card card">
                <div class="card-header">
                    <h4 class="card-header-title">
                        <slot name="title">Bevestigen</slot>
                    </h4>
                </div>
                <div class="card-body">
                    <slot/>
                </div>
                <div class="card-footer text-end">
                    <button type="button" class="btn btn-outline-secondary me-2" @click="close()">
                        <slot name="cancel-text">Bevestigen</slot>
                    </button>
                    <button type="button" class="btn btn-danger" @click="$emit('confirm', close)">
                        <slot name="confirm-text">Bevestigen</slot>
                    </button>
                </div>
            </div>
        </div>

    </vue-final-modal>
</template>

<script>
import VueFinalModal from "vue-final-modal"

export default {
    name:         "UModal",
    inheritAttrs: false,
    components:   {VueFinalModal},
    emits:        ["cancel", "confirm"],
}
</script>