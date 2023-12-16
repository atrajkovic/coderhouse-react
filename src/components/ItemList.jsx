import { useEffect, useMemo, useState } from "react";
import { categoryToUrl } from "../helpers/categoryParser";
import { getCategories, getItems } from "../services/ItemsService";
import { Item } from "./Item";
import { useParams } from "react-router-dom";

export const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  const categories = getCategories();

  useEffect(() => {
    getItems()
      .then((res) => {
        setItems(res);
        setLoading(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const currentCategory = useMemo(() => {
    if (!categoryId) {
      return null;
    }

    return categories.find(
      (category) => categoryToUrl(category.name) === categoryId,
    );
  }, [categories, categoryId]);

  const itemsToShow = useMemo(() => {
    if (!currentCategory) {
      return items;
    }

    return items.filter((item) => item.category == currentCategory.id);
  }, [currentCategory, items]);

  if (loading) {
    return (
      <div className="w-full p-4 flex justify-center items-center gap-2">
        <span className="w-4 h-4 border-2 border-orange-950 border-t-transparent rounded-full animate-spin"></span>
        <span>Cargando café...</span>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="w-full p-4 flex justify-center items-center">
        <span>No hay cafés para mostrar</span>
      </div>
    );
  }

  return (
    <div className="w-full p-4 flex flex-col gap-4">
      {currentCategory ? (
        <h1 className="font-medium text-5xl text-center">
          Café de {currentCategory.name}
        </h1>
      ) : (
        <h1 className="font-medium text-5xl text-center">Todo el café</h1>
      )}
      <div className="grid grid-cols-3 gap-4 py-4">
        {itemsToShow.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
