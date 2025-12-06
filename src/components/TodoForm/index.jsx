import "./to-do-form.style.css";
import { TextInput } from "../TextInput";
import { ButtonForm } from "../Button";

export function TodoForm({ onSubmit, defaultValue }) {
  return (
    <form action={onSubmit} className="to-do-form">
      <TextInput
        name="description"
        required
        placeholder="Digite o item que deseja adicionar"
        defaultValue={defaultValue}
      />
      <ButtonForm>Salvar item</ButtonForm>
    </form>
  );
}
