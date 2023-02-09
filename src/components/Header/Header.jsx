import CartButton from "./CartButton";

const Header = ({ openModel }) => {
  return (
    <header
      className="flex items-center justify-between bg-red-700 px-16 py-8 text-white"
      onClick={openModel}
    >
      <span className="text-4xl font-bold">ReactMeals</span>
      <CartButton />
    </header>
  );
};

export default Header;
