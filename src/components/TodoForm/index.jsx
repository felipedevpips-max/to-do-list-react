import "./to-do-form.style.css";
import { TextInput } from "../TextInput";
import { ButtonForm } from "../Button";

export function TodoForm({ onSubmit }) {
  return (
    <form action={onSubmit} className="to-do-form">
      <TextInput name="description" required placeholder="Digite o item que deseja adicionar" />
      <ButtonForm>Salvar item</ButtonForm>
    </form>
  );
}
