import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuItem from "./components/MenuItem";
import ModalPortal from "./components/Modal";
import { menuItems } from "./data";
import { BasketContextProvider } from "./store/basket-context";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <BasketContextProvider>
      <Header openModel={openModal} />
      <main className="bg-gray-800">
        <ModalPortal showModal={showModal} closeModal={closeModal} />
        <Hero />
        <section className="flex justify-center px-16 py-8">
          <div className="w-full max-w-7xl rounded-xl bg-white">
            {menuItems.map((menuItem) => (
              <MenuItem key={menuItem.id} {...menuItem} />
            ))}
          </div>
        </section>
      </main>
    </BasketContextProvider>
  );
}

export default App;
