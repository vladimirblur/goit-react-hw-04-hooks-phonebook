import { v4 as uuidv4 } from "uuid";
export default function Filter({ value, onChange }) {
  const filterId = uuidv4();

  return (
    <div className="{filter}">
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        id={filterId}
        onChange={onChange}
      ></input>
    </div>
  );
}
