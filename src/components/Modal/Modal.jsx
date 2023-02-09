import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import BasketContext from "../../store/basket-context";
import ModalRow from "./ModalRow";

const Modal = ({ showModal, closeModal }) => {
  const CartContext = useContext(BasketContext);

  if (showModal) {
    return (
      <div className="absolute top-0 left-0 z-20 grid h-full w-full place-items-center bg-black/40">
        <div className="z-30 flex w-full max-w-2xl flex-col gap-6 rounded-xl bg-white p-8">
          <div className="flex flex-col">
            {CartContext.contents.length > 0 ? (
              CartContext.contents.map((item) => (
                <ModalRow key={item.id} id={item.id} amount={item.amount} />
              ))
            ) : (
              <p>The cart is empty.</p>
            )}
          </div>
          <div className="flex justify-end gap-4">
            <button
              onClick={closeModal}
              className="w-fit self-end rounded-full border-2 border-red-900 py-3 px-6 font-bold text-red-900"
            >
              Close
            </button>
            <button className="w-fit self-end rounded-full border-2 border-red-900 bg-red-900 py-3 px-6 font-bold text-white hover:bg-red-900/80">
              Order
            </button>
          </div>
        </div>
      </div>
    );
  }
};

const ModalPortal = ({ showModal, closeModal }) => {
  return ReactDOM.createPortal(
    <Modal showModal={showModal} closeModal={closeModal} />,
    document.getElementById("root-modal")
  );
};

export default ModalPortal;
