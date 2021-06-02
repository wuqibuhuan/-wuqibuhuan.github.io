<template>
  <div class="loading">
    <div class="loading-layer"></div>
    <img src="../assets/1.gif" alt="" />
  </div>
</template>
 
<script>
export default {};
</script>
 
<style>
.loading-layer {
  height: 100%;
  width: 100%;
}
.loading {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 100;
  border-radius: 0 !important;
  background-color: rgba(0, 0, 0, 0) !important;
  padding: 0 !important;
}
.loading .loading-layer {
  background-color: rgba(0, 0, 0, 0.2);
}
.loading img {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 101;
}
</style>