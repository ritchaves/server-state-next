import { Pokemon } from "../lib/models/pokemon";

const Pokedex = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="bg-eggshell p-20 rounded-lg col-start-2 col-end-3 row-start-2 row-end-3 drop-shadow-lg">
      <div className="flex m-auto place-content-center h-90">
        <div className="flex flex-col place-items-center w-[250px]">
          <div className="rounded-full w-[80px] h-[80px] bg-[#fff] opacity-75 relative" />
          <img
            src={pokemon.sprites.front_default}
            className="w-[100px] absolute"
          />
          <p className="bg-mediumchampagne p-2 w-fit rounded-full mt-10 font-bold">
            #{pokemon.id} - {pokemon.name}
          </p>
        </div>
        <div className="w-[250px]">
          <table className="table-auto">
            <tbody className="leading-8">
              <tr>
                <td className="font-bold pr-[56px]">No. {pokemon.id}</td>
                <td>{pokemon.name}</td>
              </tr>
              <tr>
                <td className="font-bold">BASE EXP</td>
                <td>{pokemon.base_experience}</td>
              </tr>
              <tr>
                <td className="font-bold">TYPE</td>
                <td>{pokemon.types?.[0].type?.name}</td>
              </tr>
              <tr>
                <td className="font-bold">HEIGHT</td>
                <td>{pokemon.height} dm</td>
              </tr>
              <tr>
                <td className="font-bold">WEIGHT</td>
                <td>{pokemon.weight} hg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
