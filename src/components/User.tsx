import { MdLocationPin } from "react-icons/md";
import { UserProps } from "../types/user";
import { Link } from "react-router-dom";

export const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className="bg-[#2b3566] p-[2rem] rounded-[1rem] flex flex-col items-center justify-center gap-[1.2rem]">
      <img
        src={avatar_url}
        alt={login}
        className="border-2 border-[#644aff] rounded-[50%]"
        width={140}
        height={140}
      />
      <h2 className="text-[1.8rem] font-bold">{login}</h2>
      {location && (
        <p className="flex items-center gap-[0.4rem] justify-center">
          <MdLocationPin fill="#4ed8c7" size={24} />
          <span className="text-[#9da5d1] font-bold">{location}</span>
        </p>
      )}
      <div className="flex">
        <div className="flex flex-col px-[1rem] gap-[0.4rem] border-r border-[#9da5d1]">
          <p>Seguidores:</p>
          <p className="bg-[#4ed8c7] py-[0.2rem] px-[0.4rem] rounded-[3px]">
            {followers}
          </p>
        </div>
        <div className="flex flex-col px-[1rem] gap-[0.4rem]">
          <p>Seguindo:</p>
          <p className="bg-[#4ed8c7] py-[0.2rem] px-[0.4rem] rounded-[3px]">
            {following}
          </p>
        </div>
      </div>

      <Link
        to={`/repos/${login}`}
        className="text-center bg-[#644aff] p-[1rem] rounded-[5px] opacity-80 transition-opacity duration-300 hover:opacity-100"
      >
        Ver melhores projetos
      </Link>
    </div>
  );
};
