function DropMenu({ characters, position }) {
  console.log(position);
  return (
    <ul
      className='absolute z-40 bg-white px-2 py-1'
      style={{ top: position.y, left: position.x }}
    >
      {characters.map((character) => (
        <li key={character.characterId} className='hover:bg-slate-300'>
          {character.name}
        </li>
      ))}
    </ul>
  );
}

export default DropMenu;
