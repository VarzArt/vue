<template>
  <div class="main">
    <MyInput
      v-for="label in labels"
      :key="label.id"
      :label="label.label"
      :type="label.type"
    />
    <MyButton />
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
    };
  },
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 30rem;
  background: rgba(0, 0, 0, 0.5);
  height: 22.5rem;
  backdrop-filter: blur(0.5rem);
  border-radius: 2rem;
  position: absolute;
  box-shadow: 0 3px 60px black, 0 -3px 30px black, 3px 0 30px black,
    -3px 0 30px black;

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
</style>
