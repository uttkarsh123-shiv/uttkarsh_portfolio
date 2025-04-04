import Heading from "../Components/Heading"
import HeadingPara from "../Components/HeadingPara"
import Navbar from "../Components/Navbar"

const First = () => {
  return (
    <>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none aspect-square mx-auto w-[35.375rem] top-20">
  <video autoPlay loop playsInline muted>
    <source src="hero.webm" type="video/webm" />
  </video>
</div>

    <Navbar />
    <Heading />
    <HeadingPara />
    </>
  )
}

export default First
