<template>
  <div class="field">
    <span class="field__name"><slot/></span>
    
      <input :class="{'field__input':true, 'field__input-error': error}" v-model="input" :type="type" :name="name">
   
    <span class="field__error" v-if="error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
  import { defineEmits, defineProps, computed } from 'vue';
  import type { ISharedInputProps, ISharedInputEmits } from './SharedInput.types';
  
  const emits = defineEmits<ISharedInputEmits>();
  const props = defineProps<ISharedInputProps>();

  const input = computed({
    get() {
        return props.modelValue
    },
    set(value: string) {
        emits('update:modelValue', value)
    }
  });
</script>
<style lang="scss">
  .field {
    width: 200px;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;

    &__name {
      font-size: 16px;
    }

    &__input {
      border: 1px solid black;
      border-radius: 5px;

      &:focus {
        border: 1px solid blue;
        outline: none;
      }

      &-error {
        border: 1px solid red;
        outline: none;
      }
    }

    &__error {
      font-size: 12px;
      color: red;
    }
  }
</style>