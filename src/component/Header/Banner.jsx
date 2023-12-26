import banner from './banner.module.css'
import { MdOutlineGeneratingTokens } from "react-icons/md";
const Banner = () => {
            return (
              <div>
                <div className="hero min-h-screen bg-[#F5FBFC]">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                      src="https://i.ibb.co/ZHhy5Ng/banner.png"
                      className="max-w-md rounded-lg"
                    />
                    <div>
                      <h1 className="text-6xl  font-semibold">
                        Beautiful food & takeaway,{" "}
                        <span className={banner.span}>delivered </span>to your
                        door.
                      </h1>
                      <p className={banner.p}>
                        Efficient product delivery is crucial for customer
                        satisfaction. Our streamlined process ensures timely
                        dispatch and secure handling from warehouse to doorstep.
                        With a commitment to reliability, we employ advanced
                        tracking systems, minimizing delays. Embrace a seamless
                        experience with our swift delivery services,
                        guaranteeing your product reaches you promptly and in
                        pristine condition. Your satisfaction is our priority.
                      </p>
                      <button className="btn bg-[#35B8BE] outline-none border-none text-white hover:btn-error hover:bg-[#35B8BE]">
                        Place an Order
                      </button>
                      <div>
                        <div className="icon flex gap-5 my-4 items-center">
                          <span className="text-3xl">
                            {" "}
                            <MdOutlineGeneratingTokens />
                          </span>
                          <h3 className="text-2xl text-black font-semibold">
                            Trustpilot
                          </h3>
                        </div>
                        <h4 className="text-[#35B8BE]">
                          4.8 out of 5 <a href="#"  className='text-[#000]'>based on 2000+ reviews</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
};

export default Banner;