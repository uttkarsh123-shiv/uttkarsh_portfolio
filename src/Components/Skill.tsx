const Skill = () => {
  return (
    <div id="skill" className="flex gap-40 h-[270vh]">
    <div className="p-10 w-[43vw]">
    <h1 className="text-[90px] boldonse-regular leading-35 ">MY SKILLSET</h1>
      <p className="text-[30px] Instrument-Serif  text-[#636363]">
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
