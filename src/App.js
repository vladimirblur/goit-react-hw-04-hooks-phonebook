import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "./hooks/useLocalStorage";
import ContactForm from "./components/ContactForm/ContactForm";
import Container from "./components/Container";
import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
const contactsArr = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", contactsArr);
  const [filter, setFilter] = useState("");
  const visibleContacts = getFilteredContacts();

  function addContact(info) {
    const contact = {
      id: uuidv4(),
      ...info,
    };

    setContacts([contact, ...contacts]);
  }

  function getFilteredContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  function changeFilter(e) {
    setFilter(e.currentTarget.value);
  }

  return (
    <div className="App">
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={visibleContacts} />
      </Container>
    </div>
  );
}

export default App;
