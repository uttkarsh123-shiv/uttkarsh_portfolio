const HeadingPara = () => {
  const smoothScrollTo = (targetY: number, duration: number): void => {
    const startY = window.scrollY;
    const difference = targetY - startY;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      window.scrollTo(0, startY + difference * easeInOutQuad(progress));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const easeInOutQuad = (t: number): number =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    requestAnimationFrame(step);
  };
  return (
    <div className='w-[70vw] flex justify-between items-center pl-[7%] p-[2%]'>
      <p className="text-0.5xl text-[#2F4F4F] ml-[5%] headingpara">Hello there — I'm Uttkarsh, an agile designer hopping <br /> across digital and physical worlds. Currently creating <br /> impactful visual experiences.</p>

      <button type="button" onClick={() => smoothScrollTo(window.innerHeight, 1200)} className=" cursor-pointer border border-black p-4 pl-10 pr-10 rounded-full "><span className='z-3 flex items-center justify-between gap-x-3 text-black'>SCROLL TO EXPLORE<svg fill="currentColor" viewBox="0 0 10 16" width="10" height="16">
        <path stroke="#101010"  d="M5 15V1m0 14-4-4m4 4 4-4" fill="#101010"></path>
      </svg> </span></button>
    </div>
  )
}

export default HeadingPara
