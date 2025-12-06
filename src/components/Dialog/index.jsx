import { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  //const dialog = document.querySelector("dialog");
  //nao fazer buscas no dom usando document query selector!!
  // "Show the dialog" button opens the dialog modally

  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.addEventListener("close", onClose);
    return () => {
      dialog?.removeEventListener("close", onClose);
    };
  }, [onClose]);

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
          <div className="btn-close-wrapper">
            <button autoFocus onClick={onClose} className="btn-close">
              <IconClose />
            </button>
          </div>
          <div className="body">{children}</div>
        </dialog>
      </div>
    </>
  );
}
/// <> </> é um fragmento do react
