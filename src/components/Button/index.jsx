import "./button.style.css";

export function ButtonForm({ children, ...rest }) {
  return (
    <button className="button-form" {...rest}>
      {children}
    </button>
  );
}
