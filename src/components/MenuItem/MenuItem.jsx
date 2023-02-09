import MenuItemDetails from "./MenuItemDetails";
import MenuItemForm from "./MenuItemForm";

const MenuItem = (props) => {
  return (
    <div className="flex items-center justify-between border-b p-6 last-of-type:border-b-0">
      <MenuItemDetails {...props} />
      <MenuItemForm id={props.id} />
    </div>
  );
};

export default MenuItem;
