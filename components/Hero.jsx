import Button from "./Button";

const Hero = () => {
  return (
    <div className='bg-pack-train bg-cover'>
      <section className="container mx-auto px-4 text-white body-font background-i">
        <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 data-aos="fade-up" className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Make your business more 
              <br className="hidden lg:inline-block" />
              efficient With <span className="text-6xl font-bold">Devextra</span>
            </h1>
            
            <p data-aos="fade-up" data-aos-delay="100" className="mb-8 leading-relaxed">
            Put your business online and get more sales & leads with the quality and professional web development services.
            </p>

            <div data-aos="fade-up" data-aos-delay="200" className="flex justify-center">
              <Button>Discuss with Us</Button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
