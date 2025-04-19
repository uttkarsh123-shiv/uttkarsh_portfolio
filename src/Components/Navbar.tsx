const Navbar = () => {
  const list: string[] = ["@codebyuttkarsh", "PROJECTS", "ABOUT", "RESUME", "CONNECT"];
  const numbers: number[] = [1, 2, 3, 4, 5];
  const resumeLink = "https://drive.google.com/file/d/1hBX85vX9Xa61N-9dNdOrrhXUDfwUP5p2/view";

  return (
    <div className="w-full h-[10vh] flex justify-between items-center px-[3%] border-b bg-[#272626] ">
      <div>
        <img width={13} src="https://media-hosting.imagekit.io/790c56ffad224313/portfolio-logo.png?Expires=1839078379&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TLEaeQgkjy9miNZseXND6lQgov9ffyEIbFbXMIR-MeTQN-Rh-HxkzkanXhVpE9Y9sPKiOEZOLRlrnELiLU9hVB9VbiXX4OPiVHrhaMfq7THqHOhjVhylqPSUGwntniEKaHAiwnJ29Xx1c2KKQpeCDYiBd471IklPFjicE2rTtPAgK~YeGgiuPP3HnqNBH~MzlfEVPiA1wq7x1ve8nxq49FbWd4vDC1ph~hkpdX6ojKRXI3OawPUE4arsNOcbRUrOl2ySpApJmv226MqZOpMDBLZM8Odbd6v1e57IYelUtKBINAiTANM8VmHTt9NWNrCifRBihTeBRAILAmAYMgLzeg__" alt="" />
      </div>
      <ul className="navlink flex justify-between items-center gap-20">
        {list.slice(1, 4).map((item, index) => (
          <li
            key={index}
            className={item === "RESUME" ? "cursor-pointer" : ""}
            onClick={() => {
              if (item === "RESUME") {
                window.open(resumeLink, "_blank");
              }
            }}
          >
            <span className="text-gray-500 mr-1 font-mono">
              {numbers[index].toString().padStart(2, "0")}
            </span>
            <span className="font-semibold">{item}</span>
          </li>
        ))}
      </ul>

      <p
        className="cursor-pointer text-[13px] font-semibold"
        onClick={() =>
          (window.location.href = "mailto:uttkarshsingh450@gmail.com")
        }
      >
        {list[4]}
      </p>
    </div>
  );
};

export default Navbar;
