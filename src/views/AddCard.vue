<template>
  <div class="add">
    <h1>Контакт</h1>
    <SharedInput v-model="contactData.email" name="email" type="text" :error="errors.email">Email</SharedInput>
    <SharedInput v-model="contactData.name" name="name" type="text" :error="errors.name">Name</SharedInput>
    <SharedInput v-model="contactData.phone" name="phone" type="text" :error="errors.phone">Phone</SharedInput>
    <div class="add__btn">
      <SharedButton @click="addContact">Добавить</SharedButton>
    <SharedButton @click="main">Отмена</SharedButton>
    </div>
  </div>
</template>
<script setup lang="ts">
  import SharedButton from '@/components/SharedButton/SharedButton.vue';
  import SharedInput from '@/components/SharedInput/SharedInput.vue';
  import type { IContact} from '@/stores/contacts.types';
  import { computed, ref } from 'vue';
  import { useContactStore } from '@/stores/contacts';
  import router from '@/router';
  const contactStore = useContactStore();

  const contactData = ref<IContact>({
    email:'',
    name:'',
    phone: '',
  })

  const errors = ref<IContact>({
    email:'',
    name:'',
    phone: ''
  })

  const validateEmail = () => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactData.value.email) {
      errors.value.email = 'Email обязателен для заполнения';
    } else if (!emailFormat.test(contactData.value.email)) {
      errors.value.email = 'Некорректный email';
    } else {
      errors.value.email = '';
    }
  };

  const validateName = () => {
    const nameFormat = /^[A-Za-zА-Яа-яЁё]+$/;
    if (!contactData.value.name) {
      errors.value.name = 'Имя обязательно для заполнения';
    } else if (contactData.value.name.length < 2) {
      errors.value.name = 'Имя должно содержать не менее 2 символов';
    } else if (!nameFormat.test(contactData.value.name)) {
      errors.value.name = 'Имя должно содержать только буквы';
    } else {
      errors.value.name = '';
    }
  };

  const validatePhone = () => {
    const phoneFormat = /^\d{11,}$/;
    if (!contactData.value.phone) {
      errors.value.phone = 'Телефон обязателен для заполнения';
    } else if (!phoneFormat.test(contactData.value.phone)) {
      errors.value.phone = 'Телефон должен содержать не менее 11 цифр';
    } else {
      errors.value.phone = '';
    }
  };

  const isFormValid = computed(() => {
    return (
      !errors.value.email &&
      !errors.value.name &&
      !errors.value.phone
    )
  })

  const addContactToStore = () => {
    contactStore.addContact(contactData.value);
    router.push('/')
  }

  const addContact = () => {
    validateEmail()
    validateName()
    validatePhone()
    if(isFormValid.value) {
      addContactToStore()
    }
  };

const main = () => {
  router.push('/')
}

</script>
<style lang="scss">
  .add {
    &__btn {
      display: flex;
      gap: 5px;
    }
  }
</style>