import Image from "next/image";
import svgImage from "../public/programmer_services.png";
import coding_desk from "../public/coding_desk.png";
import cybersecurity from "../public/cybersecurity.png";
import mobile_development from "../public/mobile_development.png";
import services from "../public/services1.png";
import services2 from "../public/services2.png";

const Services = () => {
  return (
    <>
      <section class="container mx-auto px-4 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div class=" mx-auto">
          <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4">
              <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span class="text-primary mb-2 block text-lg font-semibold">
                  Our Services
                </span>
                <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p class="text-body-color text-base">
                  There are many services we offer in dev extrasolutions.
                </p>
              </div>
            </div>
          </div>
          <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                data-aos="fade-up"
                class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg hover:ml-400 md:px-7 xl:px-10 h-[20rem]"
              >
                <div class="flex justify-center items-center">
                  <Image src={svgImage} alt="SVG Image" className="w-[50%]" />
                </div>
                <h4 class="text-dark mb-3 text-xl font-semibold">
                  Refreshing Design
                </h4>
                <p class="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service.
                </p>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-[20rem]"
              >
                <div class="flex justify-center items-center">
                  <Image
                    src={coding_desk}
                    alt="SVG Image"
                    className="w-[50%]"
                  />
                </div>
                <h4 class="text-dark mb-3 text-xl font-semibold">QA Testing</h4>
                <p class="text-body-color">
                  We deploy the best QA testing team, dedicated to work for the
                  clients so we can provide you the best solutions.
                </p>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-[20rem]"
              >
                <div class="flex justify-center items-center">
                  <Image
                    src={cybersecurity}
                    alt="SVG Image"
                    className="w-[50%]"
                  />
                </div>
                <h4 class="text-dark mb-3 text-xl font-semibold">
                  Cybersecurity
                </h4>
                <p class="text-body-color">
                  Our cybersecurity team is all about making your apps secure
                  and hackers free.
                </p>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-[20rem]"
              >
                <div class="flex justify-center items-center">
                  <Image
                    src={mobile_development}
                    alt="SVG Image"
                    className="w-[50%]"
                  />
                </div>
                <h4 class="text-dark mb-3 text-xl font-semibold">
                  Mobile Development
                </h4>
                <p class="text-body-color">
                  We have the best mobile development team to make your apps
                  more industry level.
                </p>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-[20rem]"
              >
                <div class="flex justify-center items-center">
                  <Image src={services2} alt="SVG Image" className="w-[40%]" />
                </div>
                <h4 class="text-dark mb-3 text-xl font-semibold">
                  Professional Envoirment
                </h4>
                <p class="text-body-color">
                  We have professional Envoirment, we handle our clients more
                  effienctly.
                </p>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-[20rem]"
              >
                <div class="flex justify-center items-center">
                  <Image src={services} alt="SVG Image" className="w-[50%]" />
                </div>
                <h4 class="text-dark mb-3 text-xl font-semibold">
                  Regular Updates
                </h4>
                <p class="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
