function CharacterIcons({ characterList }) {
  return (
    <div className='flex gap-8'>
      {characterList.map((character) => (
        <img
          key={character.id}
          src={`${import.meta.env.VITE_API_BASE_URL}${character.icon_location}`}
          alt={character.name}
          className='rounded-full border-2 p-1'
          width={40}
        />
      ))}
    </div>
  );
}

export default CharacterIcons;
