import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import SocialButtons from "@/components/Social";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-4 mb-8 mt-0 xl:pt-0 xl:pb-24 ">

          {/* text */}
          <div className="text-center xl:text-left flex flex-col items-center xl:items-start xl:w-1/2">
            <span className="mb-4 text-xl">Software Developer</span>
            <h1>
              Hello I'm <span className="text-accent" >Ronald Ris  </span>
            </h1>
            <p className="place-content-center max-w-[500px] text-white/80">I excel at crafting elegan digital experiences and I am proficient in various programming languages and technologies.</p>

            {/* social btns */}
            <div className=" ">
              <Button variant="outline" size="lg" className="my-8 uppercase flex items-center gap-3">
                <span>Download CV</span> <FiDownload className="text-xl " />
              </Button>
              <SocialButtons containerStyles="flex gap-6 items-center justify-center"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center "
                 />

              <div
                class=""
              ></div>
            </div>

          </div>
          {/* photo */}
          <div className="xl:w-1/2">
            <Photo />
          </div>

        </div>
      </div>

    </section>
  );
}

export default Home;

