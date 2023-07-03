<template>
  <div class="main">
    <canvas ref="canvas"></canvas>
    <loginWindow />
    <!-- <MyLoader /> -->
  </div>
</template>

<script>
import octopus from "@/helpers/octopus.js";
export default {
  data() {
    return {};
  },
  mounted() {
    octopus(this.$refs.canvas);
  },
};
</script>

<style lang="scss">
@import url(./styles/styles.scss);
@font-face {
  font-family: "Cyber";
  src: url(../assets/fonts/Technos-PKDZP.otf);
}
@font-face {
  font-family: "Equinox";
  src: url(../assets/fonts/Equinox.otf);
}
@font-face {
  font-family: "Matrix";
  src: url(../assets/fonts/matrix-vs-miltown.otf);
}

.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url(../assets/images/main_background.png);
  // overflow-y: hidden;
}
</style>
