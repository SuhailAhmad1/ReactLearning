export default function TabButton(props) {
  return (
    <li>
      <button
        className={props.isSelected ? "active" : null}
        onClick={props.onSelect}
      >
        {props.children}
      </button>
    </li>
  );
}
