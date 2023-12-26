const Service = () => {
            return (
              <div>
                <div className="my-40">
                  <div className="hero min-h-screen bg-[#F5FBFC]">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                      <img
                        src="https://i.ibb.co/X8gnpy1/banner2.png"
                        className="max-w-md rounded-lg"
                      />
                      <div>
                        <h1 className="text-5xl sm:text-2xl md:text-3xl lg:text-5xl   text-[#35B8BE] font-semibold">
                          The home of
                          <br /> fresh products
                        </h1>
                        <p className="break-words">
                          Efficient product delivery is crucial for customer
                          satisfaction. Our streamlined process ensures timely
                          dispatch and secure handling from warehouse to
                          doorstep. With a commitment to reliability, we employ
                          advanced tracking systems, minimizing delays. Embrace
                        </p>
                        <button className="btn bg-[#35B8BE] outline-none border-none text-white hover:btn-error hover:bg-[#35B8BE]">
                          Learn about us
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
};

export default Service;