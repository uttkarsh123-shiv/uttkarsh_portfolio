const Skill = () => {
  return (
    <div className="flex gap-100 h-[270vh]">
    <div className="p-10 w-[30vw]">
    <p className=" dynalight-regular text-5xl mt-2 font-semibold">
        Skills <span className=" text-5xl roboto font-semibold">Set</span>
      </p>
      <p>
      Over the course of my career, I’ve strived to develop a diverse set of core skills.
      </p>
    </div>
      <div className="grid-container mt-50">
  <div className="grid-item">
    <span className="number">01</span>
    <span className="title">UI Design</span>
  </div>
  <div className="grid-item empty">
  </div>
  <div className="grid-item  empty">
  </div>
  <div className="grid-item">
    <span className="number">02</span>
    <span className="title">FrontEnd</span>
  </div>
  <div className="grid-item">
    <span className="number">03</span>
    <span className="title">BackEnd</span>
  </div>
  <div className="grid-item  empty">
  </div>
  <div className="grid-item  empty">
  </div>
  <div className="grid-item">
    <span className="number">04</span>
    <span className="title">Core</span>
  </div>
</div>
    </div>
  );
};

export default Skill;
