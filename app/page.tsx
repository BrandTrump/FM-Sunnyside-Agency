import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex pt-24 pb-52 md:pt-24 md:pb-52 flex-col items-center gap-32 md:gap-28 bg-header-mobile bg-cover bg-center 2xl:h-[80vh] md:bg-header-desktop">
        <h1 className="font-fraunces font-extrabold uppercase text-4xl md:text-7xl tracking-widest text-white text-center z-30">
          We are creatives
        </h1>
        <div className="relative h-32 w-10 md:h-24 md:w-8 animate-bounce">
          <Image src={"/images/icon-arrow-down.svg"} alt="arrow" fill />
        </div>
      </section>

      <section className="w-full">
        <article className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full">
            <div className="px-10 py-20 md:p-4 lg:p-8 flex flex-col gap-4 xl:p-32 text-center md:text-start">
              <h1 className="font-extrabold font-fraunces text-3xl md:text-4xl xl:text-5xl">
                Transform your brand
              </h1>
              <p className="font-barlow text-gray-500 xl:text-lg">
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <Link
                href={"/"}
                className="font-extrabold font-fraunces underline decoration-4 decoration-yellow-300 hover:decoration-yellow-500 transition-colors duration-300 uppercase"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="w-full aspect-square bg-egg-mobile md:bg-egg-desktop bg-cover bg-center -z-30 overflow-y-hidden"></div>
        </article>

        <article className="flex flex-col-reverse md:flex-row-reverse items-center">
          <div className="w-full">
            <div className="px-10 py-20 md:p-4 lg:p-8 flex flex-col gap-4 xl:p-32 text-center md:text-start">
              <h1 className="font-extrabold font-fraunces text-3xl md:text-4xl xl:text-5xl">
                Stand out to the right audience
              </h1>
              <p className="font-barlow text-gray-500 xl:text-lg">
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
              <Link
                href={"/"}
                className="font-extrabold font-fraunces underline decoration-4 decoration-red-200 uppercase hover:decoration-red-400 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="w-full aspect-square bg-stand-out-mobile md:bg-stand-out-desktop bg-cover bg-center"></div>
        </article>

        <article className="flex flex-col md:flex-row text-black/50 w-full">
          <div className="relative w-full aspect-square bg-center bg-cover bg-no-repeat bg-cherry-mobile md:bg-cherry-desktop">
            <div className="absolute flex flex-col top-[55%] 2xl:top-[60%] justify-start items-center text-center px-10 lg:px-2 xl:px-32 gap-8">
              <h1 className="font-extrabold font-fraunces text-3xl md:text-3xl 2xl:text-5xl">
                Graphic Design
              </h1>
              <p className="font-barlow text-sm lg:text-lg 2xl:text-xl">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>
          <div className="relative w-full aspect-square bg-center bg-cover bg-no-repeat bg-orange-mobile md:bg-orange-desktop">
            <div className="absolute flex flex-col top-[55%] 2xl:top-[60%] justify-start items-center text-center px-10 lg:px-2 xl:px-32 gap-8">
              <h1 className="font-extrabold font-fraunces text-3xl md:text-3xl 2xl:text-5xl">
                Photography
              </h1>
              <p className="font-barlow text-sm lg:text-lg 2xl:text-xl">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="my-14">
        <Wrapper>
          <h1 className="text-center font-bold font-fraunces uppercase text-gray-400 mt-12 md:mt-20 text-lg md:text-xl tracking-widest">
            Client Testimonials
          </h1>

          <div className="flex flex-col md:flex-row md:gap-8 md:my-20">
            <article className=" flex flex-col items-center text-center gap-8 mt-10 mb-4 md:my-0">
              <div className="relative h-16 w-16">
                <Image
                  src={"/images/image-emily.jpg"}
                  alt="testimoinal profile"
                  fill
                  className="rounded-full"
                />
              </div>

              <div className="space-y-6">
                <p className="font-barlow text-gray-500">
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
                <div className="space-y-2">
                  <h2 className="font-fraunces font-extrabold text-lg">
                    Emily R.
                  </h2>
                  <h3 className="font-barlow text-sm text-gray-400/80 font-bold">
                    Marketing Director
                  </h3>
                </div>
              </div>
            </article>

            <article className="flex flex-col items-center text-center gap-8 my-4 md:my-0">
              <div className="relative h-16 w-16">
                <Image
                  src={"/images/image-thomas.jpg"}
                  alt="testimoinal profile"
                  fill
                  className="rounded-full"
                />
              </div>

              <div className="space-y-6">
                <p className="font-barlow text-gray-500">
                  Sunnyside’s enthusiasm coupled with their keen interest in our
                  brand’s success made it a satisfying and enjoyable experience.
                </p>
                <div className="space-y-2">
                  <h2 className="font-fraunces font-extrabold text-lg">
                    Thomas S.
                  </h2>
                  <h3 className="font-barlow text-sm text-gray-400/80 font-bold">
                    Chief Operating Officer
                  </h3>
                </div>
              </div>
            </article>

            <article className="flex flex-col items-center text-center gap-8 mt-4 mb-10 md:my-0">
              <div className="relative h-16 w-16">
                <Image
                  src={"/images/image-jennie.jpg"}
                  alt="testimoinal profile"
                  fill
                  className="rounded-full"
                />
              </div>

              <div className="space-y-6">
                <p className="font-barlow text-gray-500">
                  Incredible end result! Our sales increased over 400% when we
                  worked with Sunnyside. Highly recommended!
                </p>
                <div className="space-y-2">
                  <h2 className="font-fraunces font-extrabold text-lg">
                    Jennie F.
                  </h2>
                  <h3 className="font-barlow text-sm text-gray-400/80 font-bold">
                    Business Owner
                  </h3>
                </div>
              </div>
            </article>
          </div>
        </Wrapper>
      </section>

      <section className="flex flex-col w-full md:flex-row">
        <div className="flex md:flex-grow">
          <div className="w-full aspect-square md:aspect-[4/5]  bg-milkbottles-desktop bg-cover bg-center"></div>
          <div className="w-full  aspect-square md:aspect-[4/5] bg-gallery-orange-desktop bg-cover bg-center"></div>
        </div>

        <div className="flex md:flex-grow">
          <div className="w-full aspect-square md:aspect-[4/5] bg-cone-desktop bg-cover bg-center"></div>
          <div className="w-full aspect-square md:aspect-[4/5] bg-sugar-desktop bg-cover bg-center"></div>
        </div>
      </section>

      <footer className="bg-[#90d4c5] text-black/50">
        <Wrapper>
          <div className="mt-10 md:mt-16 w-40 h-8 relative left-1/2 -translate-x-1/2">
            <Image src={"/images/logo-footer.svg"} alt="logo" fill />
          </div>
          <div className="mt-6 w-full flex items-center gap-8 md:gap-16 justify-center text-[#488e7e] text-lg">
            <Link
              href={"/"}
              className="font-barlow hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href={"/"}
              className="font-barlow hover:text-white transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href={"/"}
              className="font-barlow hover:text-white transition-colors duration-200"
            >
              Projects
            </Link>
          </div>

          <div className="my-12 md:my-20 flex justify-center items-center gap-4 fill-[#2c7466]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6 hover:fill-white transition-colors duration-200 cursor-pointer"
            >
              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6 hover:fill-white transition-colors duration-200 cursor-pointer"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 hover:fill-white transition-colors duration-200 cursor-pointer"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="w-6 h-6 hover:fill-white transition-colors duration-200 cursor-pointer"
            >
              <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
            </svg>
          </div>
        </Wrapper>
      </footer>
    </main>
  );
}
