import { useRef } from "react";
import "./dialog.style.css";

export function Dialog() {
  //const dialog = document.querySelector("dialog");
  //nao fazer buscas no dom usando document query selector!!
  // "Show the dialog" button opens the dialog modally

  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // "Close" button closes the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };
  return (
    <>
      <div className="modal">
        <dialog className="modal" ref={dialogRef}>
          <button autoFocus onClick={closeDialog}>
            Close
          </button>
          <input
            className="input"
            type="text"
            placeholder="Digite o item que deseja adicionar"
          />
        </dialog>
        <button onClick={openDialog}>Show the dialog</button>
      </div>
    </>
  );
}
/// <> </> é um fragmento do react
