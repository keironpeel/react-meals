const MenuItemDetails = ({ id, name, description, cost }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xl font-bold">{name}</span>
      <span className="italic">{description}</span>
      <span className="text-l font-bold text-red-900">€{cost}</span>
    </div>
  );
};

export default MenuItemDetails;
