import { Star } from "../utils/testimonialAsset";
import { testimonialDatas } from "../utils/testimonialData";

const Testimonial = () => {
  return (
    <section className="bg-cyan-700 text-white">
      <div className="w-4/5 mx-auto py-12">
        <h2 className="text-5xl font-bold tracking-wide mb-4">
          We develop the leaders of Tomorrow
        </h2>
        <p className="text-xl font-semibold mb-6">
          Read about a few success stories that were created with imarticus
          learning
        </p>
        <div className="grid grid-cols-4 gap-1">
          {testimonialDatas.map((tdata, index) => (
            <div
              key={index}
              className="bg-white rounded-xl text-slate-950 flex flex-col gap -2 justify-center items-start m-2 px-4 py-2"
            >
              <div className="flex justify-center items-start gap-4 pt-3">
                <img src={tdata.profileImage} alt="" className="w-16 h-16 rounded-full" />
                <div>
                  <h4 className="text-2xl font-semibold">{tdata.studentName}</h4>
                  <h5 className="font-medium uppercase text-fuchsia-400">{tdata.courseTaken}</h5>
                </div>
              </div>
              <div className="text-sm text-pretty mt-3"> 
                {tdata.review} <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span className="text-fuchsia-400">see more....</span>
              </div>
              <div className="flex justify-start items-center gap-4 pt-3 pb-2">
                  <div className="flex justify-center items-center gap-2">
                    {
                        Array.from({length: tdata.starCount}, (_, i) => (
                            <img src={Star} alt="" key={i} className="w-4 h-4" />
                        ))
                    }
                  </div>
                    <span>{tdata.starCount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
