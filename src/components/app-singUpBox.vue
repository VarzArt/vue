<template>
  <div class="main">
    <MyInput
      v-for="label in labels"
      :key="label.id"
      :label="label.label"
      :type="label.type"
    />
    <MyButton
      :first="button.first"
      :second="button.sesond"
      :third="button.third"
    />
  </div>
</template>

<script>
export default {
  name: "singUpPage",
  data() {
    return {
      labels: [
        { id: 1, label: "Enter your login", type: "text" },
        { id: 2, label: "Enter your password", type: "password" },
        { id: 3, label: "Confirm your password", type: "password" },
        { id: 4, label: "Enter your email", type: "text" },
      ],
      button: {
        first: "Si",
        sesond: "n",
        third: "gup",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: absolute;
  width: 30rem;
  height: 70%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.5rem);
  border-radius: 2rem;
  box-shadow: 0 3px 60px black, 0 -3px 30px black, 3px 0 30px black,
    -3px 0 30px black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
