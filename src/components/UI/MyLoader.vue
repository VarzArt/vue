<template>
  <div class="main">
    <canvas ref="cvs"></canvas>
    <div class="spanContainer">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import loader from "@/helpers/loaderLogic.js";
export default {
  name: "MyLoader",
  data() {
    return {};
  },
  mounted() {
    loader(this.$refs.cvs);
  },
};
</script>

<style scoped lang="scss">
body {
  position: relative;
  margin: 0;
  background: #000;
  overflow: hidden;

  & .main {
    width: 100%;
    height: 100%;

    & .spanContainer {
      position: absolute;
      top: 50%;
      left: 50%;
      font-family: "Matrix", sans-serif;
      transform: translateX(-50%) translateY(-50%) scale(1);
      width: 80rem;
      opacity: 0;
      text-align: center;
      animation: opa 3s ease both;
      animation-delay: 2.5s;
      user-select: none;

      & span {
        font-size: 4rem;
        color: white;
        width: 5rem;
        text-align: center;
        display: inline-block;
        color: #05d9e8;
        transition: text-shadow 0.25s ease;
      }
    }
  }

  @keyframes opa {
    0% {
      opacity: 0;
    }

    20% {
      opacity: 0.2;
    }

    21% {
      opacity: 0;
    }

    25% {
      opacity: 0.25;
    }

    60% {
      opacity: 0.6;
    }
    61% {
      opacity: 0;
    }
    65% {
      opacity: 0.65;
    }

    70% {
      opacity: 0.7;
    }
    71% {
      opacity: 0;
    }
    75% {
      opacity: 0.75;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
