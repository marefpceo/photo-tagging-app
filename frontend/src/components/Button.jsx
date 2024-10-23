function Button({ type, id, text, className }) {
  return (
    <>
      <button type={type} id={id} className={className}>
        {text}
      </button>
    </>
  );
}

export default Button;
