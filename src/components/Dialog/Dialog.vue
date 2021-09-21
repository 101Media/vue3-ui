<template>
    <div id="confirm-modal" class="modal fade show" tabindex="-1">
        <div class="modal-dialog " :class="centered ? 'modal-dialog-centered' : ''">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal(false)"></button>
                </div>
                <div class="modal-body" v-html="message"></div>
                <div class="modal-footer">
                    <button type="button" class="btn" :class="cancelClass" data-bs-dismiss="modal" @click="this.$emit('confirm', false)" v-if="canCancel">
                        {{ cancelText }}
                    </button>
                    <button type="button" class="btn" :class="confirmClass" data-bs-dismiss="modal" @click="this.$emit('confirm', true)">
                        {{ confirmText }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {Modal} from 'bootstrap';

export default {
    props: {
        message: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: false,
            default: 'Confirm'
        },
        confirmClass: {
            type: String,
            required: false,
            default: 'btn-primary'
        },
        confirmText: {
            type: String,
            required: false,
            default: 'Confirm'
        },
        cancelClass: {
            type: String,
            required: false,
            default: 'btn-white'
        },
        cancelText: {
            type: String,
            required: false,
            default: 'Cancel'
        },
        canCancel: {
            type: Boolean,
            default: true,
        },
        centered: {
            type: Boolean,
            default: true,
        }
    },
    data() {
        return {
            modalInstance: null,
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.modalInstance = new Modal(document.getElementById('confirm-modal'), {keyboard: false})

            this.modalInstance.show()
        })
    },
}
</script>
