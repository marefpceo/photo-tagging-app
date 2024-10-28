function CharacterIcons({ characterList }) {
  return (
    <div className='flex gap-8'>
      {characterList.map((character) => (
        <img
          key={character.characterId}
          src={character.icon}
          alt={character.name}
          className='rounded-full'
          width={40}
        />
      ))}
    </div>
  );
}

export default CharacterIcons;
