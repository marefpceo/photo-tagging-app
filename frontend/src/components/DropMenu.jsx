function DropMenu({ characters, position, showMenu, handleClick }) {
  return (
    <ul
      className='absolute z-30 m-0 cursor-pointer rounded-md bg-white p-0'
      style={{ top: position.y, left: position.x, display: showMenu }}
    >
      {characters.map((character) => (
        <li
          key={character.characterId}
          className='m-0 border px-2 py-1 text-sm hover:bg-slate-300'
          onClick={() => {
            handleClick(character.characterId);
          }}
        >
          {character.name}
        </li>
      ))}
    </ul>
  );
}

export default DropMenu;
