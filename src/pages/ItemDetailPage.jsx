import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { ItemDetail } from "../components/ItemDetail";
import { getItemById } from "../services/ItemsService";

export const ItemDetailPage = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    getItemById(itemId)
      .then((res) => setItem(res))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return (
      <div className="w-full p-4 flex justify-center items-center gap-2">
        <span className="w-4 h-4 border-2 border-orange-950 border-t-transparent rounded-full animate-spin"></span>
        <span>Cargando café...</span>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="w-full p-4 flex justify-center items-center">
        <div className="w-full px-6 py-4 shadow-md shadow-orange-950/10 rounded-md text-center gap-4 bg-white flex flex-col items-center max-w-7xl">
          <span className="text-lg font-semibold">
            El café solicitado no existe...
          </span>
          <span>No te preocupes, podés seguir viendo nuestros productos</span>
          <NavLink
            to="/"
            className="bg-yellow-950 text-white px-4 py-2 rounded-md flex gap-2 items-center"
          >
            <FaHome />
            Volver al inicio
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl p-4">
      <ItemDetail item={item} />
    </div>
  );
};
