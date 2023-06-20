<template>
  <div class="main">
    <MyInput v-for="label in labels" :key="label.id" :label="label.label" />
    {{ console.log(labels) }}
    <MyButton />
  </div>
</template>

<script>
export default {
  name: "loginWindow",
  data() {
    return {
      labels: [
        { id: 1, label: "What's your login?" },
        { id: 2, label: "What's your password?" },
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
  background: rgba(0, 0, 0, 0.8);
  height: 20rem;
  // border-radius: 2rem;
  backdrop-filter: blur(0.25rem);
  border-width: 3px 3px 5px 5px;
  border-radius: 4% 95% 6% 95%/95% 4% 92% 5%;
}
</style>
