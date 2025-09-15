import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Card = ({person}) => {
  return (
    <div className="flex p-8 bg-white rounded-lg shadow-lg shadow-grey-400 w-75/100 items-center gap-8">
      <img src={person.image} alt="Profile pic" className="w-1/3" />
      <div className="flex flex-col gap-4">
        <h1 className="text-xl text-underline">{person.name}</h1>
        <p>{person.description}</p>
        <div className="flex gap-4">
          <a href={person.linkedin}><FaLinkedin className="text-4xl text-blue-500"/></a>
          <a href={person.email}><SiGmail className="text-4xl text-red-400"/></a>
          <a href={person.github}><FaGithub  className="text-4xl"/></a>
        </div>
      </div>
    </div>
  );
};

export default Card;
