import "./itemGenerators.scss";

export const generateOptions = (name, selectedItem, items, onChange) => (
  <select name={name} value={selectedItem} onChange={onChange}>
    {Object.entries(items).map(([key, value]) => (
      <option key={key} value={key}>{value}</option>
    ))}
  </select>
);
