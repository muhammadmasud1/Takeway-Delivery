const Service01 = () => {
            return (
              <div className="max-w-6xl mx-auto">
                <div className="my-20">
                  <h1 className="text-4xl text-center font-semibold text-[#35B8BE]">
                    How it works.
                  </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:text-center sm:items-start items-center text-start sm:px-5 px-5">
                  <div>
                    <img src="https://i.ibb.co/SnCmXyP/product01.png" alt="" />
                    <h4>Adapt your menu items</h4>
                    <p>
                      Easily adapt your menu using the webflow CMS and allow
                      customers to browse your items.
                    </p>
                  </div>
                  <div>
                    <img src="https://i.ibb.co/VN0bZvL/product02.png" alt="" />
                    <h4>Accept online orders & takeout</h4>
                    <p>
                      Let your customers order and pay via the powerful
                      ecommerce system, or simple let them call your store.
                    </p>
                  </div>
                  <div>
                    <img src="https://i.ibb.co/LkJ1zZg/product03.png" alt="" />
                    <h4>Manage delivery or takeout</h4>
                    <p>
                      Manage your own logistics and take orders simply through
                      the ecommerce system.
                    </p>
                  </div>
                </div>
              </div>
            );
};

export default Service01;