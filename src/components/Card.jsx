
function Card({character}) {
  return (
    <div className="card lg:card-side bg-base-100 md:w-[30%] w-[45%] m-2 shadow-black flex flex-col shadow-xl" >
      <figure><img src={character.image} alt={character.name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{character.name}</h2>
        <p>{character.status}</p>
        <div className="card-actions justify-end">
          <button type="submit" className="btn mt-2 shadow-md shadow-black btn-primary mx-auto">See more</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
