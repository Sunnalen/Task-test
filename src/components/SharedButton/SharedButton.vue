<template>
  <button :class="['btn', buttonSize[size]]"><slot /></button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { ISharedButtonProps, TButtonSizeClass,  } from './SharedButton.types';

defineProps<ISharedButtonProps>();
const buttonSize: TButtonSizeClass = {
  l: 'btn__large',
  m: 'btn__medium'
};
</script>
<style lang="scss">
  .btn {
    padding: 5px;
    margin-bottom: 5px;
    background-color: blue;
    color: white;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3ms all;

    &:active {
      transform: scale(0.98);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    &__large {
      margin-top: 5px;
      font-size: 16px;
    }

    &__medium {
      font-size: 12px;
    }
  }
</style>