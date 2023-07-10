<template>
  <div class="main" ref="main">
    <button class="singUp" @click="disapear">
      <div class="singUp__text">Sing up ›</div>
    </button>
    <MyInput
      v-for="label in labels"
      :key="label.id"
      :label="label.label"
      :type="label.type"
    />
    <MyButton
      :first="button.first"
      :second="button.second"
      :third="button.third"
    />
  </div>
</template>

<script>
export default {
  name: "loginWindow",
  data() {
    return {
      labels: [
        { id: 1, label: "What's your login?", type: "text" },
        { id: 2, label: "What's your password?", type: "password" },
      ],
      button: { first: "L", second: "o", third: "gin" },
    };
  },
  methods: {
    disapear: function () {
      this.$refs.main.classList.add("disapear");
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  height: 22.5rem;
  backdrop-filter: blur(0.5rem);
  border-radius: 2rem;
  position: absolute;
  box-shadow: 0 3px 60px black, 0 -3px 30px black, 3px 0 30px black,
    -3px 0 30px black;
  padding-bottom: 3rem;

  &.disapear {
    animation: disapear 0.75s cubic-bezier(1, 0.01, 0.08, 0.99) both;
  }

  & .singUp {
    margin-left: auto;
    margin-right: 2rem;
    font-family: "Cyber", sans-serif;
    color: hsl(186 100% 69%);
    opacity: 0.3;
    margin-top: 0.3rem;
    transition: opacity 0.3s ease, transform 0.3s ease;
    font-size: 1rem;
    height: 1.2rem;

    &:hover {
      opacity: 0.7;
      transform: scale(1.2);
    }
  }

  &::after {
    content: "";
    background: url(../../assets/images/loginWindow_bg.png);
    background-position-y: -35%;
    transform: rotate(180deg);
    background-repeat: no-repeat;
    opacity: 0.1;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
}

@keyframes disapear {
  0% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0rem);
  }
  10% {
    opacity: 1;
    transform: scale(0.9);
  }
  20% {
    opacity: 1;
    transform: scale(1);
  }
  30% {
    opacity: 0.7;
    transform: scale(1.3);
    filter: blur(1.3rem);
  }
  40% {
    opacity: 0.6;
    transform: scale(1.4);
    filter: blur(1.4rem);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.5);
    filter: blur(1.5rem);
  }
  60% {
    opacity: 0.4;
    transform: scale(1.6);
    filter: blur(1.6rem);
  }
  70% {
    opacity: 0.3;
    transform: scale(1.7);
    filter: blur(1.7rem);
  }
  80% {
    opacity: 0.2;
    transform: scale(1.8);
    filter: blur(1.8rem);
  }
  90% {
    opacity: 0.1;
    transform: scale(1.9);
    filter: blur(1.9rem);
  }
  100% {
    opacity: 0;
    transform: scale(2);
    filter: blur(2rem);
    pointer-events: none;
  }
}
</style>
