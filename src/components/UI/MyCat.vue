<template>
  <div class="cat">
    <div class="ear ear--left"></div>
    <div class="ear ear--right"></div>
    <div class="face">
      <div class="eye eye--left">
        <div class="eye-pupil"></div>
      </div>
      <div class="eye eye--right">
        <div class="eye-pupil"></div>
      </div>
      <div class="muzzle"></div>
    </div>
    <div class="cat__hands">
      <div class="cat__hands__hand cat__hands__hand--left">
      </div>
      <div class="cat__hands__hand cat__hands__hand--right">
      </div>
    </div>
    <div style="position: absolute; z-index: 5; top: 170px">
      <my-button @click="$router.push('/posts')">
        Django REST + Vue 3 (click)
      </my-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cat {
  position: relative;
  height: var(--size);
  width: calc(var(--size) * 1.13);
}

.ear {
  position: absolute;
  top: -30%;
  height: 60%;
  width: 25%;
  background: var(--color-white);

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 24%;
    height: 10%;
    width: 5%;
    border-radius: 50%;
    background: var(--color-black);
  }

  &::after {
    transform-origin: 50% 100%;
  }
}

.ear--left {
  left: -7%;
  border-radius: 70% 30% 0 0 / 100% 100% 0 0;
  transform: rotate(-15deg);

  &::before,
  &::after {
    right: 10%;
  }

  &::after {
    transform: rotate(-45deg);
  }
}

.ear--right {
  right: -7%;
  border-radius: 30% 70% 0% 0% / 100% 100% 0% 0%;
  transform: rotate(15deg);

  &::before,
  &::after {
    left: 10%;
  }

  &::after {
    transform: rotate(45deg);
  }
}

// Face
.face {
  position: absolute;
  height: 100%;
  width: 100%;
  background: var(--color-black);
  border-radius: 50%;
}

// Eyes
.eye {
  position: absolute;
  top: 35%;
  height: 30%;
  width: 31%;
  background: var(--color-white);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

  // Eyelids
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    border-radius: 0 0 50% 50% / 0 0 40% 40%;
    background: var(--color-black);
    animation: blink 4s infinite ease-in;
  }

  @keyframes blink {
    0% {
      height: 0;
    }
    90% {
      height: 0;
    }
    92.5% {
      height: 100%;
    }
    95% {
      height: 0;
    }
    97.5% {
      height: 100%;
    }
    100% {
      height: 0;
    }
  }

  // Tips of the eyes
  &::before {
    content: '';
    position: absolute;
    top: 60%;
    height: 10%;
    width: 15%;
    background: var(--color-white);
    border-radius: 50%;
  }
}

.eye--left {
  left: 0;

  &::before {
    right: -5%;
  }
}

.eye--right {
  right: 0;

  &::before {
    left: -5%;
  }
}

// Pupils
.eye-pupil {
  position: absolute;
  top: 25%;
  height: 50%;
  width: 20%;
  background: var(--color-black);
  border-radius: 50%;
  animation: look-around 4s infinite;

  @keyframes look-around {
    0% {
      transform: translate(0)
    }
    5% {
      transform: translate(50%, -25%)
    }
    10% {
      transform: translate(50%, -25%)
    }
    15% {
      transform: translate(-100%, -25%)
    }
    20% {
      transform: translate(-100%, -25%)
    }
    25% {
      transform: translate(0, 0)
    }
    100% {
      transform: translate(0, 0)
    }
  }

  .eye--left & {
    right: 30%;
  }

  .eye--right & {
    left: 30%;
  }

  // Glare on the pupil
  &::after {
    content: '';
    position: absolute;
    top: 30%;
    right: -5%;
    height: 20%;
    width: 35%;
    border-radius: 50%;
    background: var(--color-white);
  }
}

// Muzzle
.muzzle {
  position: absolute;
  top: 60%;
  left: 50%;
  height: 6%;
  width: 10%;
  background: var(--color-white);
  transform: translateX(-50%);
  border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
}

/* General page styling */
html {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-black);
}

.cat {
  &__hands {
    height: 1em;
    position: absolute;
    top: -0.5em;
    left: 0;
    width: 100%;
    z-index: 9;

    &__hand {
      background: var(--color-white);
      border-radius: 50%;
      height: 1em;
      overflow: hidden;
      position: absolute;
      top: 10.5em;
      width: 2em;

      &:before {
        border-right: 0.08em solid #333;
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 0.3em;
        width: 0.6em;
      }

      &:after {
        border-left: 0.08em solid #333;
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        height: 0.3em;
        width: 0.6em;
      }

      &--left {
        left: 0;
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
      }

      &--right {
        right: 0;
        -webkit-transform: rotate(20deg);
        transform: rotate(20deg);
      }
    }
  }
}
</style>
<script setup lang="ts">
import MyButton from "@/components/UI/MyButton.vue";
</script>
