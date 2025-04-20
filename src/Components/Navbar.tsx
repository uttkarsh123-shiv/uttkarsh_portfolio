import { useEffect, useState } from "react";
const Navbar = () => {
  const list: string[] = ["@codebyuttkarsh", "HOME", "ABOUT","SKILL", "CONTACT"];
  const numbers = Array.from({ length: list.length - 1 }, (_, i) => i + 1);

  const resumeLink = "https://drive.google.com/file/d/1hBX85vX9Xa61N-9dNdOrrhXUDfwUP5p2/view";
  const [activeSection, setActiveSection] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["home", "about", "skill", "contact"];
      const offsets = sectionIds.map(id => {
        const el = document.getElementById(id);
        return {
          id: id.toUpperCase(),
          top: el?.offsetTop ?? 0
        };
      });

      const scrollY = window.scrollY;
      const current = offsets.findLast(sec => scrollY >= sec.top - 100);
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full h-[15vh] flex gap-180 items-center px-[3%]  ">
      <div>
        <img width={15} src="https://media-hosting.imagekit.io/10bf9cb65e1848f0/LOGO.png?Expires=1839644942&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=P6E5Nv65KC7gxAuFiqovJGpUCCse3vqRnsQqLmBmL1vGmmDV041QDWlzDxPZ0Kh6zCO0NOz7fxwMMQKXt7uU~mLd5-0MX~rbSnRG~LmqVL3Gbq91oG1ErqmDWCVCOxBajQ5OitG5cUbwiVdp~vSrGkbKcbSqXg81lDHJAZ9WUAujiZxJO1sAzBYCv9sk2D33MhmDRPtTiiyjHvItHWHX1sp6VcjbHXO7CEHcYlme~i~V7TZd1v0wFKNeMfEvCa2wsyRRp6CSlDN~4iQlK0HI~rlnNsGH5GhO-d7hoK6upiFDNBU~aML~pO~fDFt-bC9O2hKcZTJB8sS32iL8QJ6xjg__" alt="" />
      </div>
      <ul className="navlink flex justify-between items-center gap-20">
  {list.slice(1, 5).map((item, index) => (
    <li
      key={index}
      className="flex gap-1 items-center cursor-pointer"
      onClick={() => {
        if (item === "RESUME") {
          window.open(resumeLink, "_blank");
        } else {
          const target = document.getElementById(item.toLowerCase());
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <span className="text-gray-500 font-mono">
        {numbers[index].toString().padStart(2, "0")}
      </span>
      <span className="font-semibold">{item}</span>
    </li>
  ))}
</ul>
    </div>
  );
};

export default Navbar;
