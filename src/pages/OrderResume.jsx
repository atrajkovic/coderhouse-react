import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../services/OrderService";

const OrderResume = () => {
  const { orderId } = useParams();

  const [order, setOrder] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    getOrder(orderId)
      .then((order) => setOrder(order))
      .finally(() => setLoading(false));
  }, [orderId]);

  if (loading) {
    return (
      <div className="w-full p-4 flex justify-center items-center gap-2">
        <span className="w-4 h-4 border-2 border-orange-950 border-t-transparent rounded-full animate-spin"></span>
        <span>Cargando detalle de orden...</span>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="w-full p-4 flex justify-center items-center gap-2">
        <span>No hay detalle de orden para mostrar</span>
      </div>
    );
  }
  return (
    <div className="w-full mx-auto max-w-7xl py-4">
      <div className="w-full px-6 py-4 shadow-md shadow-orange-950/10 rounded-md text-center gap-4 bg-white flex flex-col items-center max-w-7xl mx-auto">
        La orden fue registrada con éxito. Su identificador de orden es:{" "}
        <span className="font-semibold">{orderId}</span>
      </div>
    </div>
  );
};

export default OrderResume;
