<template>
    <div v-if="bView==true">
        <div class="modal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{bdata[bNum].title}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>{{bdata[bNum].content}}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="$emit('bClose')">닫기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
    name:'bModal',
    props:['bdata','bView','bNum'],
}

</script>

<style>

</style>