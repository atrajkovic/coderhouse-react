import PropTypes from "prop-types";

export default function Description({ text }) {
  return (
    <>
      <p className="mt-4 opacity-70">Acerca de este café: </p>
      <p>{text}</p>
    </>
  );
}

Description.propTypes = {
  text: PropTypes.string.isRequired,
};
