import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";

export function TodoGroup({ itens, heading }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <ToDoList>
        {itens
          .filter((t) => !t.completed)
          .map(function (t) {
            return <ToDoItem key={t.id} item={t} />;
          })}
      </ToDoList>
    </>
  );
}
