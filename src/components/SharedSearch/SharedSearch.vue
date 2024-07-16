<template>
  <div class="search">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Поиск контакта по имени"
      @input="search"
      class="search__input"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, defineEmits } from 'vue';

  const emits = defineEmits(['search']);
  const searchQuery = ref('');

  const search = () => {
    emits('search', searchQuery.value);
  };
</script>
<style>
  .search {
    margin-bottom: 5px;
  }
</style>