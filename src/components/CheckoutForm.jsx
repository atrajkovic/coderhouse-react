import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useCartContext } from "../hooks/useCartContext";
import { createOrder } from "../services/OrderService";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("El nombre es requerido")
    .min(2, "El firstName debe tener al menos 2 caracteres"),
  lastName: Yup.string()
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .required("El apellido es requerido"),
  phone: Yup.string().required("El teléfono es requerido"),
  email: Yup.string()
    .email("Correo electrónico no válido")
    .required("El email es requerido"),
  emailConfirm: Yup.string()
    .email("Correo electrónico no válido")
    .required("El email es requerido")
    .when(["email"], (email, schema) => {
      return email
        ? schema.oneOf([Yup.ref("email")], "Los emails no coinciden")
        : schema;
    }),
});

const CheckoutForm = () => {
  const { items, emptyCart } = useCartContext();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      emailConfirm: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Aquí puedes manejar la lógica de envío del formulario
      const nwOrder = {
        buyer: {
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          email: values.email,
        },
        items: items,
        date: new Date(),
        status: "created",
      };

      const insertedId = await createOrder(nwOrder);
      emptyCart();
      navigate(`/order/${insertedId}`);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold">Datos personales</h2>
      <div className="flex flex-col">
        <label htmlFor="firstName">Nombre:</label>
        <input
          className="border rounded-md py-1 px-2 border-yellow-950/20"
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-700">{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label htmlFor="lastName">Apellido:</label>
        <input
          className="border rounded-md py-1 px-2 border-yellow-950/20"
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-sm text-red-700">{formik.errors.lastName}</div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone">Teléfono:</label>
        <input
          className="border rounded-md py-1 px-2 border-yellow-950/20"
          type="text"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-sm text-red-700">{formik.errors.phone}</div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <input
          className="border rounded-md py-1 px-2 border-yellow-950/20"
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-sm text-red-700">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label htmlFor="emailConfirm">Confirmar Email:</label>
        <input
          className="border rounded-md py-1 px-2 border-yellow-950/20"
          type="text"
          id="emailConfirm"
          name="emailConfirm"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.emailConfirm}
        />
        {formik.touched.emailConfirm && formik.errors.emailConfirm ? (
          <div className="text-sm text-red-700">
            {formik.errors.emailConfirm}
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        className="bg-yellow-900 text-white px-4 py-2 w-full rounded-md flex gap-2 items-center justify-center hover:bg-yellow-950 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-yellow-900"
        disabled={!formik.isValid || !formik.dirty || items.length === 0}
      >
        Confirmar compra
      </button>
    </form>
  );
};

export default CheckoutForm;
