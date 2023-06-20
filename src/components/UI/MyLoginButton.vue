<template>
  <div class="mainBtn">
    <!-- <img
      src="../../../assets/images/1904671-arrow-arrow-right-change-direction-next-page-right_122521.svg"
      width="36"
      height="36"
      alt=""
    /> -->
    <span class="mainBtn__fullSpan">
      <span class="mainBtn__fullSpan_firstLetter">L</span>
      <span class="mainBtn__fullSpan_faltyLetter">o</span>
      <span class="mainBtn__fullSpan_end">gin</span></span
    >
  </div>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped lang="scss">
$mainColor: hsl(186 100% 69%);
.mainBtn {
  font-family: "Cyber", sans-serif;
  padding: 0.75rem;
  border: 0.2rem solid $mainColor;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  perspective: 2rem;
  box-shadow: inset 0px 0px 0.5rem 0px $mainColor, 0px 0px 0.5rem 0px $mainColor;
  width: 15rem;
  animation: border-flicker 2s linear infinite;
  cursor: pointer;
  color: $mainColor;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em $mainColor;

  & img {
    fill: #fff;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    text-shadow: none;
    animation: none;

    &::before {
      filter: blur(2rem);
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }

    & .mainBtn__fullSpan {
      animation: none;
    }

    & .mainBtn__fullSpan_faltyLetter {
      animation: none;
      text-shadow: none;
      opacity: 1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    filter: blur(1em);
    transform: translateY(120%) rotateX(95deg) scale(1, 0.35);
    background: $mainColor;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    background-color: $mainColor;
    box-shadow: 0 0 2rem 0.2rem $mainColor;
    transition: opacity 100ms linear;
    border-radius: 0.7rem;
  }

  & img {
    justify-self: flex-start;
  }

  &__fullSpan {
    font-size: 2rem;
    text-align: center;
    font-weight: 900;
    letter-spacing: 1rem;

    margin: 0 0.5rem;
    width: 10rem;
    position: relative;
    text-transform: uppercase;
    animation: text-flicker 3s linear infinite;

    &_faltyLetter {
      opacity: 0.5;
      animation: faulty-flicker 2s linear infinite;
    }
  }
}

@keyframes faulty-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 0.1;
  }
  4% {
    opacity: 0.5;
  }
  19% {
    opacity: 0.5;
  }
  21% {
    opacity: 0.1;
  }
  23% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  83% {
    opacity: 0.4;
  }

  87% {
    opacity: 1;
  }
}

@keyframes text-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 0.1;
  }

  9% {
    opacity: 1;
  }

  12% {
    opacity: 0.1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0.3;
  }
  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }
  72% {
    opacity: 0.2;
  }

  77% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}

@keyframes border-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 1;
  }
  4% {
    opacity: 0.1;
  }

  8% {
    opacity: 1;
  }
  70% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
</style>
