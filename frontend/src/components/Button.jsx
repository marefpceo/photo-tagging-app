function Button({ type, id, text, className, onClick }) {
  return (
    <>
      <button type={type} id={id} className={className} onClick={onClick}>
        {text}
      </button>
    </>
  );
}

export default Button;
