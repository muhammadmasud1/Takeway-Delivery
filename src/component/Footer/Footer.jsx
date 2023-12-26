const Footer = () => {


            return (
              <div>
                <div>
                  <footer className="bg-white dark:bg-gray-900">
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                      <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                          <a href="#" className="flex items-center">
                            <img
                              src="https://i.ibb.co/xqJgCvb/brandlogo.png"
                              className="h-8 me-3"
                              alt=""
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                              Takeway & Delivery
                            </span>
                          </a>
                          <p className="px-5">for small - medium businesses.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                          <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                              company
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                              <li className="">
                                <a href="#" className="hover:underline mt-3">
                                  Home
                                </a>
                              </li>
                              <li>
                                <a href="#" className="hover:underline py-3">
                                  Order
                                </a>
                              </li>
                              <li>
                                <a href="#" className="hover:underline ">
                                  FAQ
                                </a>
                              </li>
                              <li>
                                <a href="#" className="hover:underline">
                                  Contact
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                              Follow us
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                              <li className="">
                                <a
                                  href="https://github.com/muhammadmasud1"
                                  className="hover:underline "
                                >
                                  Github
                                </a>
                              </li>
                              <li>
                                <a href="#" className="hover:underline">
                                  Style Guide
                                </a>
                              </li>
                              <li>
                                <a href="#" className="hover:underline">
                                  Changelog
                                </a>
                              </li>
                              <li>
                                <a href="#" className="hover:underline">
                                  Licence
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                              Legal
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                              <li className="mb-4">
                                <a href="#" className="hover:underline">
                                  Privacy Policy
                                </a>
                              </li>
                              <li>
                                <a href="#" className="hover:underline">
                                  Terms &amp; Conditions
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                      <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                          © 2023{" "}
                          <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                          >
                            Takeway & Delivery™
                          </a>
                          . All Rights Reserved.
                        </span>
                        
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            );
};

export default Footer;