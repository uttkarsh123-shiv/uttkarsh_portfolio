// import { useEffect } from "react";

const Navbar = () => {
    const list: string[] = ["@codebyuttkarsh", "PROJECTS", "ABOUT", "RESUME", "CONNECT"];

    // mailto:uttkarshsingh450@gmail.com

  return (
    <div className="w-full h-[8vh]  flex justify-between items-center px-[3%] border-b text-[#2A3439] border-gray-300">
        <div>{list[0]}</div>
      <ul className="navlink flex justify-between items-center gap-20">
        {list.slice(1,4).map((item,index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
       
        <div className="cursor-pointer" onClick={()=> window.location.href = `mailto:uttkarshsingh450@gmail.com`}>{list[4]}</div>
    </div>
  )
}

export default Navbar
