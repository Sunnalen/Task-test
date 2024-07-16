<template>
  <div>
    <h1>Редактировать контакт</h1>
    <form @submit.prevent="submit">
      <SharedInput id="email" v-model="contact.email" name="email" type="email" required>Email</SharedInput>
      <SharedInput id="name" v-model="contact.name" name="name" type="text" required>Name</SharedInput>
      <SharedInput id="phone" v-model="contact.phone" name="phone" type="phone" required>Phone</SharedInput>
      <SharedButton size="m" type="submit">Сохранить</SharedButton>
    </form>
  </div>
</template>
<script setup>
  import { onMounted, reactive } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useContactStore } from '@/stores/contacts';
  import SharedButton from '@/components/SharedButton/SharedButton.vue';
  import SharedInput from '@/components/SharedInput/SharedInput.vue';

  const route = useRoute();
  const router = useRouter();
  const contactStore = useContactStore();

  const contact = reactive({
    email: '',
    name: '',
    phone: ''
  });

  const submit = () => {
    contactStore.editContact(Number(route.params.id), contact);
    router.push('/');
  };

  onMounted(() => {
    const id = Number(route.params.id);
    const existingContact = contactStore.contactList.find(c => c.id === id);
    if (existingContact) {
      contact.email = existingContact.email;
      contact.name = existingContact.name;
      contact.phone = existingContact.phone;
    } else {
      router.push('/');
    }
  });
</script>
  