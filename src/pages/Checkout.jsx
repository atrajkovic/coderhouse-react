import Brief from "../components/Brief";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  return (
    <div className="w-full mx-auto max-w-7xl py-4">
      <h1 className="font-semibold text-xl mb-2">Checkout</h1>
      <Brief />
      <div className="w-full px-6 py-4 shadow-md shadow-orange-950/10 rounded-md gap-4 bg-white max-w-7xl my-2">
        <CheckoutForm />
      </div>
    </div>
  );
};

export default Checkout;
