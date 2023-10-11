import s from "./createNewBoardPortal.module.css";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
interface CreateNewBoardPortalProps {
  isOpen: Boolean;
  onClose: () => void;
  createNewBoard: (title: string) => void;
}
///////////////////////////////////////////////////////////////////////////////////
export const CreateNewBoardPortal = ({
  isOpen,
  onClose,
  createNewBoard,
}: CreateNewBoardPortalProps) => {
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
    createNewBoard(title);
  };

  if (!visible || !portalContainer) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <div className={s.modal__header}>
          <h2>New board</h2>
        </div>
        <div className={s.modal__header}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={s.modal__header}>
          <h2>iconsRow</h2>
        </div>
        <div className={s.modal__header}>
          <h2>Background</h2>
        </div>
        <div className={s.modal__footer}>
          <button
            className={s.modal__ok}
            onClick={handleOk}
          >
            CreateBoard
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

{
  /* <div style={{ backgroundColor: "blue" }}>
        <div>
          <h3>New board</h3>
          <div>pic</div>
        </div>
        <div>
          <form>
            <input
              placeholder="Title"
              value=""
            />
            <div>
              <h1>Icons</h1>
              <div>
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value="icon-project"
                    checked
                  />
                  <svg
                    width="15"
                    height="15"
                  >
                    <use href="/static/media/sprite.5898f3f1818a0a93fe6997e27f1b4d93.svg#icon-project"></use>
                  </svg>
                </label>
                <p>Другие ваши элементы radio с иконками</p>
              </div>
            </div>
            <div>
              <h1>Background</h1>
              <div>
                <label>
                  <input
                    type="radio"
                    name="background"
                    value="default"
                    checked
                  />
                </label>
                <p>Другие ваши элементы radio с изображениями фонов</p>
              </div>
            </div>
            <button type="submit">
              <span>
                <svg
                  width="14"
                  height="14"
                >
                  <use href="/static/media/sprite.5898f3f1818a0a93fe6997e27f1b4d93.svg#icon-plus"></use>
                </svg>
              </span>
              Create
            </button>
          </form>
        </div>
      </div> */
}
