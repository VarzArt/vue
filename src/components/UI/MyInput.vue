<template>
  <div>
    <input
      ref="input"
      name="userLogin"
      class="inputLogin"
      required
      autocomplete="off"
    />
    <label for="userLogin"
      ><span>{{ label }}</span></label
    >
    <button
      class="showPassword"
      v-if="this.type === 'password'"
      @mousedown="show"
      @mouseup="hide"
    >
      <img src="../../../assets/images/Eye.svg" alt="Show password" />
    </button>
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    label: {
      type: String,
      required: true,
      validator(value) {
        return typeof value === "string" ? true : false;
      },
    },
    type: {
      type: String,
      required: true,
      validator(value) {
        return typeof value === "string" ? true : false;
      },
    },
  },
  mounted() {
    if (this.type === "password") {
      this.$refs.input.type = "password";
    } else {
      this.$refs.input.type = "text";
    }
  },
  methods: {
    show() {
      this.$refs.input.type = "text";
    },
    hide() {
      this.$refs.input.type = "password";
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  z-index: 1;
  position: relative;
}

input,
span,
label {
  font-family: "Equinox", sans-serif;
  display: block;
  margin: 10px;
  padding: 5px;
  border: none;
  font-size: 22px;
}

input:focus {
  outline: 0;
}
/* inputLogin */

button {
  position: absolute;
  right: -10%;
  width: 2rem;
  height: 2rem;
  top: 15%;
  transform: translate(-85%);

  img {
    fill: #05d9e8;
  }
}

.inputLogin {
  font-size: 2rem;
  font-weight: 300;
  border-radius: 0.2rem;
  margin: 0;
  border: none;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden;
  color: #d1f7ff;

  & + label {
    display: block;
    position: relative;
    white-space: nowrap;
    padding: 0;
    margin: 0;
    width: 10%;
    border-top: 0.2rem solid rgba(255, 42, 109, 0.4);
    transition: width 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    height: 0px;
    cursor: default;

    & > span {
      font-weight: 300;
      margin: 0;
      position: absolute;
      color: rgba(209, 247, 255, 0.5);
      font-size: 2rem;
      top: -3rem;
      left: 0px;
      z-index: -1;
      transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
    }
  }

  &:focus + label {
    width: 90%;
    border-color: rgba(255, 42, 109, 0.7);

    & > span {
      top: -5rem;
      font-size: 1.5rem;
      color: #05d9e8;
    }
  }

  &:valid + label {
    border-color: rgba(255, 42, 109);
    box-shadow: 0 0 2rem 0.2rem rgba(255, 42, 109);

    & > span {
      top: -5rem;
      font-size: 1.5rem;
      color: #05d9e8;
    }
  }

  &:invalid {
    box-shadow: none;
  }

  &:valid ~ input[type="submit"] {
    animation: appear 1s forwards;
  }

  &:invalid ~ input[type="submit"] {
    display: none;
  }
}

input[type="submit"] {
  transition: opacity 0.2s ease, background 0.2s ease;
  display: block;
  opacity: 0;
  margin: 10px 0 0 0;
  padding: 10px;

  &:hover {
    background: #eee;
  }

  &:active {
    background: #999;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}
</style>
