function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <h2>{character.status}</h2>
      <img
        className="img-fluid rounded-pill"
        src={character.image}
        alt={character.name}
      />
      <p>{character.origin.name}</p>
      <p>{character.location.name}</p>
    </div>
  );
}

export default Character;
