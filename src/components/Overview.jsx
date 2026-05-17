import { Link } from "react-scroll";

function Overview() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#6b21a8] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-8">
          <span className="text-pink-400 underline decoration-gray-400 underline-offset-4">
            OVERVIEW
          </span>
          <h2 className="text-4xl font-bold mt-4">OVERVIEW OF THE WORKSHOP</h2>
        </div>

        {/* Glass Container */}
        <div
          className="bg-white/10 backdrop-blur-xl border border-white/20 
                        p-10 rounded-3xl shadow-2xl"
        >
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - TEXT */}
            <div className="text-left max-w-xl space-y-5">
              <p className="text-gray-200 leading-relaxed text-lg text-justify">
                The 5-day Workshop is designed to
                introduce{" "}
                <span className="text-pink-300 font-semibold">
                  the application of Multi Agentic AI techniques in the field of
                  Applied CyberSecurity
                </span>
                , scheduled from 23rd May 2026 to 27th May 2026 (Online Mode).
              </p>

              <p className="text-gray-200 leading-relaxed text-lg text-justify">
                The workshop provides opportunities for learners to explore new
                skills, and enhance their careers with add-on value to their
                skills in a short time. The aim of this workshop is to further
                advance our understanding of these challenging (and open)
                research issues. In this context, this event got highly
                benefitted by high quality invited talks from eminent speech
                processing researchers from academia, industry and R&D labs
                across the world.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="registration"
                  smooth={true}
                  duration={800}
                  className="inline-block px-10 py-3 
                 bg-gradient-to-r from-pink-500 to-purple-600 
                 rounded-full font-semibold text-lg 
                 shadow-xl hover:scale-110 
                 hover:shadow-pink-500/40 
                 transition duration-300 cursor-pointer"
                >
                  Interested
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="flex justify-center">
              <img
                src="/scam.jpg"
                alt="Workshop Image"
                className="w-full max-w-md h-[200px] md:h-[300px] lg:h-[500px] rounded-3xl shadow-2xl 
                           border border-white/20 
                           hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
