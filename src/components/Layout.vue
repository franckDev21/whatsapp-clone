<template>
  <div class="layout">
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="button-static"></slot>
  </div>
</template>

<script>
export default {
  name : "Layout"
}
</script>

<style>

</style>