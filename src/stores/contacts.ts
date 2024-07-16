import { defineStore } from "pinia";
import { IContact } from "./contacts.types";
import { ref } from "vue";

export const useContactStore = defineStore('contactStore', () => {
  const contactList = ref<IContact[]>([
    {id: 1, email:'andrey@mail.ru', name:'Andrey', phone:'89083714206'},
    {id: 2, email:'valery@mail.ru', name:'Valery', phone:'89164263056'},
    {id: 3, email:'vitya@mail.ru', name:'Vitya', phone:'89605787889'}
  ]);

  //Добавление контакта //
  const addContact = (newContact: IContact) => {
    newContact.id = contactList.value.length + 1
    contactList.value.push(newContact);
    saveContactsToLocalStorage();
  }

  //Редактирование контакта //
  const editContact = (id: number, updatedContact: IContact) => {
    const index = contactList.value.findIndex(contact => contact.id === id);
    if (index !== -1) {
      Object.assign(contactList.value[index], updatedContact);
      saveContactsToLocalStorage();
    }
  }

  //Удаление контакта //
  const removeContact = (id: number) => {
    contactList.value = contactList.value.filter(contact => contact.id !== id);
    saveContactsToLocalStorage();
  }

  // Установка списка контактов //
  const setContacts = (contacts: IContact[]) => {
    contactList.value = contacts;
  };

  // Сохранение контакта в локальном хранилище //
  const saveContactsToLocalStorage = () => {
    localStorage.setItem('contacts', JSON.stringify(contactList.value));
  };

  return {
    contactList,
    addContact,
    setContacts,
    saveContactsToLocalStorage,
    editContact,
    removeContact
  }
});