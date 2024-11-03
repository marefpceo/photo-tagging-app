function DropMenu({
  characters,
  position,
  showMenu,
  setCharacter,
  target,
  toggleMenu,
}) {
  return (
    <ul
      className='absolute z-30 m-0 cursor-pointer rounded-md bg-white p-0'
      style={{ top: position.y, left: position.x, display: showMenu }}
    >
      {characters.map((character) => (
        <li
          key={character.id}
          className='m-0 border px-2 py-1 text-sm hover:bg-slate-300'
          onClick={() => {
            setCharacter({
              characerId: character.id,
              xCoord: target.x,
              yCoord: target.y,
            });
            toggleMenu();
          }}
        >
          {character.character_name}
        </li>
      ))}
    </ul>
  );
}

export default DropMenu;
