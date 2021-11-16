import s from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, number }) => (
        <li className={s.item} key={id}>
          <span className={s.contactInfo}>
            {name}: {number}
          </span>
        </li>
      ))}
    </ul>
  );
}
