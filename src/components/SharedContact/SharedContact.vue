<template>
  <div class="contact">
    <div class="contact__inner">
      <div class="contact__item">
        <div class="contact__email">Email: {{ contact.email }}</div>
        <div class="contact__name">Name: {{ contact.name }}</div>
        <div class="contact__number">Telephone: {{ contact.phone }}</div>
        <div class="contact__btn">
          <SharedButton size="m" @click="editContact">Редактировать</SharedButton>
          <SharedButton size="m" @click="deleteContact">Удалить</SharedButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  import type { IContact } from '@/stores/contacts.types';
  import SharedButton from '../SharedButton/SharedButton.vue';

  const props = defineProps<{contact:IContact}>();
  const emits = defineEmits(['edit', 'delete'])

  const editContact = () => {
    emits('edit', props.contact.id)
  }
  const deleteContact = () => {
    emits('delete', props.contact.id);
  };
</script>
<style lang="scss">
  .contact {
    &__inner {
      width: 250px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    &__item {
      padding: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      border: 1px solid lightgray;
    }
    &__btn {
      display: flex;
      gap: 5px;
    }
  }
</style>