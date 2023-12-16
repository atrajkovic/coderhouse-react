import PropTypes from "prop-types";
import { ItemList } from "../components/ItemList";

export const ItemListContainer = (props) => {
  return (
    <div className="mx-auto w-full max-w-7xl p-4">
      <div className="flex flex-col gap-2">
        {props.greetings ? (
          <div className="bg-amber-200 text-amber-800 rounded-lg text-center p-4 shadow-sm shadow-amber-600">
            {" "}
            {props.greetings}{" "}
          </div>
        ) : null}
        <ItemList />
      </div>
    </div>
  );
};

ItemListContainer.propTypes = {
  greetings: PropTypes.string,
};
