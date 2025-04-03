const About = () => {
  return (
    <div className="w-full mt-80 pb-80">

    <div className="w-full flex justify-between h-[50vh] p-[2%]">
      <p className="text-0.8xl ml-2 mt-4">ABOUT ME</p>
      <p className="about text-[50px] w-[70vw] text-[black]">I'm a passionate Computer Science and Engineering student at MAIT College, with a strong interest in designing      development. I enjoy transforming        ideas into  <span className="italic">functional</span> + delightful solutions and continuously strive to enhance my      skills.</p>
    </div>
    <button className="ml-100 mt-30 border p-4 pl-10 pr-10 rounded-full  z-3 cursor-pointer"><span className='z-3 flex items-center justify-between'>MORE ABOUT ME <svg className="icon:s"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" strokeWidth="0.75px"></path>
                        <path d="M17 7l-10 10" stroke="#101010" fill="none" strokeWidth="0.75px"></path>
                        <path d="M8 7l9 0l0 9" stroke="#101010" fill="none" strokeWidth="0.75px"></path>
                    </svg></span></button>


    {/* <div className="button-grp ml-[20vh] mt-[5vh] gap-10 flex ">
      <button className="p-4 pl-8 pr-8 border-1 rounded-full border-dotted border-gray-500 z-3 cursor-pointer"><span className='z-3'>  <a href="mailto:uttkarshsingh450@gmail.com">uttkarshsingh450@gmail.com</a></span></button>
      <button className="p-4 pl-8 pr-8 border-1 rounded-full border-dotted border-gray-500"><span className='z-3'>+91-9582189958</span></button>
    </div> */}
</div>
  )
}

export default About
