import s from "./createNewColumnPortal.module.css";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
interface CreateNewColumnPortalProps {
  isOpen: Boolean;
  onClose: () => void;
  createNewColumn: (title: string) => void;
}
///////////////////////////////////////////////////////////////////////////////////
export const CreateNewColumnPortal = ({
  isOpen,
  onClose,
  createNewColumn,
}: CreateNewColumnPortalProps) => {
  const [visible, setVisible] = useState(isOpen);
  const [title, setTitle] = useState("");
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    console.log("portal render");
    const portalElement = document.getElementById("portal");
    setPortalContainer(portalElement);
  }, []);

  const handleCancel = () => {
    setVisible(false);
    onClose();
  };

  const handleOk = () => {
    setVisible(false);
    onClose();
    createNewColumn(title);
  };

  if (!visible || !portalContainer) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <div className={s.modal__header}>
          <h2>New column</h2>
        </div>
        <div className={s.modal__header}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={s.modal__footer}>
          <button
            className={s.modal__ok}
            onClick={handleOk}
          >
            CreateColumn
          </button>
          <button
            className={s.modal__cancel}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    portalContainer
  );
};
