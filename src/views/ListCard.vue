<template>
  <div>
    <h1>Контакты:</h1>
    <div class="contact__list" :contact="contactList">
      <SharedSearch @search="filterContacts" />
      <transition-group name="fade">
        <SharedContact
          v-for="contact in filteredContacts"
          :key="contact.id"
          :contact="contact"
          @edit="editContact"
          @delete="deleteContact"
        />
      </transition-group>
      <SharedButton size="l" @click="add">Добавить</SharedButton>
    </div>
  </div>
</template>
<script setup lang="ts">
  import SharedButton from '@/components/SharedButton/SharedButton.vue';
  import SharedContact from '@/components/SharedContact/SharedContact.vue';
  import SharedSearch from '@/components/SharedSearch/SharedSearch.vue'
  import { useContactStore } from '@/stores/contacts';
  import { storeToRefs } from 'pinia';
  import router from '@/router';
  import { onMounted } from 'vue';
  import { ref } from 'vue';
  import { watch } from 'vue';

  const contactStore = useContactStore();
  const {contactList} = storeToRefs(contactStore);
  const filteredContacts = ref([...contactList.value]);

  const filterContacts = (query = '') => {
    filteredContacts.value = contactList.value.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const add = () => {
    router.push('/add')
  }

  const editContact = (id: number) => {
    router.push(`/edit/${id}`);
  };

  const deleteContact = (id: number) => {
    contactStore.removeContact(id);
  };

  onMounted(() => {
    const storeContacts = localStorage.getItem('contacts');
    if(storeContacts) {
      contactStore.setContacts(JSON.parse(storeContacts));
      contactList.value = JSON.parse(storeContacts);
    }
  })

  watch(contactList, () => {
    filterContacts();
  });
</script>
<style lang="scss">
  .contact__list {
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>