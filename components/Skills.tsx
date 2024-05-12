import Skill from "./Skill";

function Skills() {
  return (
    <div className='px-4 mt-8'>
      {new Array(4).fill("").map((_, index) => (
        <Skill key={index} />
      ))}
    </div>
  );
}

export default Skills;
