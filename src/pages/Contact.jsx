
import LeafletMap from "../Components/LeafletMap";
import Text from "../Components/Text";
import { contact } from "../Const";
import { AiFillPhone, AiFillMail, AiFillHome } from 'react-icons/ai';

function Contact() {
  return (





    <div className="isolate">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
            <LeafletMap/>
           

            <div className="mt-5">
        <Text
        title={contact.contact.title}
        description={contact.contact.description}
      />
      </div>

      <section className="relative z-10 overflow-hidden  max-w-6xl mx-auto bg-white dark:bg-dark py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4 lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="block mb-4 text-base font-semibold text-primary">
             
              </span>
              <h2 className="text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH WITH US
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco
              </p>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                  <AiFillHome size={32} />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Our Location
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                  </p>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                  <AiFillPhone size={32} />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Phone Number
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    (+62)81 414 257 9980
                  </p>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                  <AiFillMail size={32} />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    info@yourdomain.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus-border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus-border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows="6"
                    placeholder="Your Message optional"
                    className="border-stroke dark:border-dark-3 dark-text-dark-6 dark-bg-dark text-body-color focus-border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full p-3 text-black transition border rounded border-primary bg-primary hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Contact;
