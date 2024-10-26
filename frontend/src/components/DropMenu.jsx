function DropMenu({ characters, position }) {
  console.log(position);
  return (
    <ul
      className='absolute z-40 bg-white'
      style={{ top: position.y, left: position.x }}
    >
      {characters.map((character) => (
        <li key={character.characterId}>{character.name}</li>
      ))}
    </ul>
  );
}

export default DropMenu;
