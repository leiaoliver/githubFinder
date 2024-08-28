import { useState } from "react";
import { BsSearch } from "react-icons/bs";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className="bg-[#2b3566] p-[2rem] rounded-[1rem] flex flex-col justify-center items-center gap-[1rem] mb-[1.5rem]">
      <h2 className="font-bold text-[1.8rem]">Busque por um usuário:</h2>
      <p className="text-[#9da5d1]">Conheça seus melhores repositórios</p>
      <div className="flex gap-[0.5rem]">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
          className="p-[0.6rem] rounded-[3px] border border-none text-[#2b3566]"
        />
        <button
          onClick={() => loadUser(userName)}
          className="p-[0.6rem] rounded-[3px] border border-none bg-[#0e1129] cursor-pointer"
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
