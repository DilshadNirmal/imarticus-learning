import { HeroLogo1, HeroLogo2, HeroLogo3, ImarticusHero } from "../assets";

const Hero = () => {
  const highlights = [
    {
      img: HeroLogo1,
      heading: "75,000+",
      para: "placements",
    },
    {
      img: HeroLogo2,
      heading: "50,000+",
      para: "career transitions",
    },
    {
      img: HeroLogo3,
      heading: "20+",
      para: "courses and programs",
    },
  ];

  return (
    <section>
      <div className="flex justify-between items-center gap-4 px-32 py-12">
        <div className="leading-normal">
          <h1 className="text-6xl font-bold leading-tight">
            let&apos;s supercharge <br /> your career
          </h1>
          <p className="mt-6 font-normal text-xl">
            empowering a new generation of professionals.
          </p>
          <div className="mt-12">
            <div className="flex justify-start items-center gap-8 py-2">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex justify-start items-center gap-3"
                >
                  <img src={highlight.img} alt="" />
                  <div>
                    <h3 className="text-2xl font-bold">{highlight.heading}</h3>
                    <p className="font-semibold">{highlight.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button></button>
        </div>
        <div>
          <img src={ImarticusHero} alt="" className="w-96" />
        </div>
      </div>
    </section>
  );
};

export default Hero;