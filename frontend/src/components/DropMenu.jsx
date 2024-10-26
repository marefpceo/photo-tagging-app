function DropMenu({ characters, position, showMenu }) {
  console.log(position);
  return (
    <ul
      className='absolute z-40 m-0 cursor-pointer rounded-md bg-white p-0'
      style={{ top: position.y - 5, left: position.x + 10, display: showMenu }}
    >
      {characters.map((character) => (
        <li
          key={character.characterId}
          className='m-0 border px-2 py-1 text-sm hover:bg-slate-300'
        >
          {character.name}
        </li>
      ))}
    </ul>
  );
}

export default DropMenu;
