const About = () => {
  return (
    <div
      id="about"
      className="w-[100vw] h-[200vh] flex justify-center items-center"
    >
      <div className="h-[60vh] w-[100vw]  flex">
        <div className="w-[15vw] ml-80 mt-40 ">
          <img
            src="https://media-hosting.imagekit.io/ffe1026bca644b40/Picture8.png?Expires=1839575316&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZJknAbPsYJVzr1sfgdGy1AEwgPqG-ikYuzmrrUt1vqKeFWDRCXOdAZd8Hk7aM2S-bTChLhr8yioAAmPLpWhEVVjGbsEncfMC4GHjsrMHr8hWYd1hdCTfthAPZ0zIE10KLIZV9mAlFT0yK1LeZocM42cQKD01MruIpfuVpME-z5IrTqM6g~xaUho4vzPdOJD-cmZRvAn0yvxMSF5h6OXqMGMHCMvCtPSPt8uLeNCmP7RxJnqyyVvzVCa7x1063eG0b3b7fGLjPM9fAawyqxFCcagedmC0M0-wR~9yjIomSM0Q3aByMr7ZkNXIRa26RzxzPZw~79ro3XruvUvnrTyBPg__"
            alt=""
          />
        </div>
        <div className="w-[80vw] h-[100vh] ml-20 ">
        <h1 className="text-[70px] boldonse-regular leading-35 ">ABOUT ME</h1>

          <p className="Instrument-Serif mt-10 text-[30px] w-[46vw] text-[#636363] ">
            I'm a passionate Computer Science and Engineering student at MAIT
            College, with a strong interest in designing development. I enjoy
            transforming ideas into functional +
            delightful solutions and continuously strive to enhance my skills.
          </p>

          <div className="cv flex gap-5 items-center mt-20">
            <p className="font-semibold text-[20px]">Download CV</p>
            <div
              className="border border-dotted p-3 rounded-full cursor-pointer"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1hBX85vX9Xa61N-9dNdOrrhXUDfwUP5p2/view"
                )
              }
            >
              <span>
                <svg
                  viewBox="0 0 16 16"
                  preserveAspectRatio="none"
                  width="16"
                  height="16"
                >
                  <defs>
                    <svg viewBox="0 0 16 16" id="svg-234516503_244">
                      <path
                        d="M8 11.7 4.3 8V6.3l3 3V1h1.4v8.3l3-3V8L8 11.7Z"
                        data-name="Layer_1"
                      ></path>
                      <path d="M2.4 13.9H1.2V11l1.2 1v1.9zm11.2 0h1.2V11l-1.2 1v1.9z"></path>
                      <path d="M14.8 13.7v1.2H1.2v-1.2z"></path>
                    </svg>
                  </defs>
                  <g>
                    <path
                      d="M8 11.7 4.3 8V6.3l3 3V1h1.4v8.3l3-3V8L8 11.7Z"
                      data-name="Layer_1"
                    ></path>
                    <path d="M2.4 13.9H1.2V11l1.2 1v1.9zm11.2 0h1.2V11l-1.2 1v1.9z"></path>
                    <path d="M14.8 13.7v1.2H1.2v-1.2z"></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
