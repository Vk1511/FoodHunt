import React from "react";
import Modal from "react-modal";
import close from "../../assets/close.svg";
import "./RecipeModal.css";

function RecipeModal({
  modal,
  dishName,
  ingredientLines,
  setModal,
  handleRecipeLink,
  dishURL,
}) {
  Modal.setAppElement("#root");

  return (
    <div>
      <Modal isOpen={modal} className="modal_con">
        <div className="modal_head">
          <div className="title">{dishName}</div>
          <button className="cls_btn" onClick={() => setModal(!modal)}>
            <img src={close} alt="close" className="cls_btn_img" />
          </button>
        </div>

        <div className="modal_content">
          <div className="content_head">
            Ingredients
            <hr />
          </div>
          <div className="content_data">
            {ingredientLines.map((ingredientLine, key) => {
              return (
                <ul key={key}>
                  <li className="dishingredient">{ingredientLine}</li>
                </ul>
              );
            })}
          </div>
        </div>

        <div className="footer">
          <span
            className="play_video"
            onClick={() => window.open(dishURL, "_blank")}
          >
            Read Article
          </span>
          <span
            className="play_video"
            onClick={() => handleRecipeLink(dishName)}
          >
            Play Video
          </span>
        </div>
      </Modal>
    </div>
  );
}

export default RecipeModal;
