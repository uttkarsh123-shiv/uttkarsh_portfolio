const Skill = () => {
  return (
    <div className="border-t pb-[50px] w-[96%] h-[100vh] ml-[2%]  border-gray-800 flex justify-between">
    <p className="skill-heading text-3xl ml-2 mt-2 font-semibold">Skills <span className="italic font-light">Set</span></p>

    <div className=" w-[47.5vw] flex">
        <div className=" left w-[22.25vw] flex flex-col gap-10 ml-3 mt-2">
            <ul >
                <li className="text-[21.08px] flex"><img src="36.png" width={25} height={24} alt="" /> Software & Tech</li>
                <li className="text-gray-700">C++</li>
                <li className="text-gray-700">Python</li>
                <li className="text-gray-700">Java</li>

            </ul>
            <ul className="text-gray-700">
            <li className="text-[21.08px] flex"><img src="8.png" width={30}  alt="" /> Visual design</li>
                <li className="text-gray-700">Figma</li>
                <li className="text-gray-700">UI design</li>
                <li className="text-gray-700">Logo design</li>
            </ul>
        </div>
        <div className="right w-[vw]  ml-5 mt-2">
        <h2 className="text-[21.08px] mb-5 flex">
            <img src="50.png" alt="" width={25} height={23} />
        Web Development
    </h2>

    <ul className="space-y-5">
        <li>
            <h3 className="text-[18px]" >Frontend</h3>
            <ul className="text-gray-700">
                <li>HTML, CSS, Js</li>
                <li>React.Js, Next.Js</li>
            </ul>
        </li>

        <li>
            <h3  className="text-[18px]">Backend</h3>
            <ul className="text-gray-700" >
                <li>Node.Js, Express.Js</li>
                <li>Nest.Js</li>
            </ul>
        </li>

        <li>
            <h3  className="text-[18px]">Databases</h3>
            <ul className="text-gray-700">
                <li>MongoDB, MySQL,</li>
                <li>PostgreSQL</li>
            </ul>
        </li>

        <li>
            <h3  className="text-[18px]">Others</h3>
            <ul className="text-gray-700">
                <li>Restful APIs, GraphQL</li>
                <li>WebSockets</li>
                <li>Authentication (JWT, OAuth)</li>
            </ul>
        </li>
    </ul>
        </div>
    </div>
</div>
  )
}

export default Skill
