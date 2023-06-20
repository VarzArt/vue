<template>
  <div class="test">
    <loginWindow />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url(./styles.scss);
@font-face {
  font-family: "Cyber";
  src: url(../assets/fonts/Technos-PKDZP.otf);
}
@font-face {
  font-family: "Equinox";
  src: url(../assets/fonts/Equinox.otf);
}

.test > * {
  margin-top: 1rem;
}

.test {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(../assets/images/wallpaperflare.com_wallpaper.jpg) no-repeat
    center;
  background-size: cover;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 30%;
    position: absolute;
    background: linear-gradient(to top, black, transparent);
    bottom: 0;
  }
}
</style>
