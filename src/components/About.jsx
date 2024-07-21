import { DegreeLogo, IncrementGraph } from "../assets";

const About = () => {
  return (
    <section className="text-white bg-[url('./assets/aboutimarticus.webp')] bg-center bg-bg-no-repeat bg-cover">
      <div className="w-4/5 mx-auto py-20 ">
        <p className="text-3xl font-bold my-2">About</p>
        <h2 className="text-8xl font-bold mb-4">Imarticus Learning</h2>

        <div className="flex justify-start items-center gap-32 mt-8">
          <p className="text-justify w-2/3 mb-4">
            Imarticus Learning is an award-winning ed-tech company offering
            finance, <br /> analytics, technology and marketing courses. We are
            a classroom and online training institute that provides
            certification programs, interview-guaranteed, executive and
            university-assured courses. <br /> Our vision is to prepare the
            global community with the best educational programs for the new-age
            market. We are present globally, and in India, we have our centres
            in Mumbai, Thane, Pune, Ahmedabad, Jaipur, Delhi, Gurgaon, Noida,
            Patna, Lucknow, Dehradun, Bangalore, Chennai, Hyderabad, Coimbatore,
            Cochin and Kolkata.
          </p>
          <div className="flex flex-col justify-center items-start ">
            <div className="flex justify-center items-center gap-4 pb-12 border-b-rose-100 border-b-[1px]">
              <img src={DegreeLogo} alt="" />
              <div>
                <h3 className="text-4xl font-bold">10,00,000+</h3>
                <p className="font-semibold">Learners</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 pt-10">
              <img src={IncrementGraph} alt="" />
              <div>
                <h3 className="text-4xl font-bold">67%</h3>
                <p className="font-semibold">Average Salary Hike</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
