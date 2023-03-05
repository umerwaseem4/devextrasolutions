import React from "react";

const Stats = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="w-full px-4">
            <div
              data-aos="fade-up"
              class="mx-auto mb-[60px] max-w-[510px] text-center"
            >
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
              >
                Statistically Data
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                class="text-body-color text-base"
              >
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              class="p-4 sm:w-1/4 w-1/2"
            >
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                2.7K
              </h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              class="p-4 sm:w-1/4 w-1/2"
            >
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                40+
              </h2>
              <p class="leading-relaxed">Projects</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              class="p-4 sm:w-1/4 w-1/2"
            >
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                35
              </h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              class="p-4 sm:w-1/4 w-1/2"
            >
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                35
              </h2>
              <p class="leading-relaxed">Clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
