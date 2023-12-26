import { useEffect, useState } from "react";
import Card from "./Card";

const Service02 = () => {

             const [loaddata,setData] = useState([])
            useEffect(()=> {
              fetch("service.json")
                .then((res) => res.json())
                .then((data) => setData(data));
            },[])
    
            return (
              <div className="bg-[#F5FBFC]">
                <div className=" h-[220%]  max-w-6xl mx-auto ">
                  <div className=" ">
                    <div className="my-10">
                      <div className="text-center">
                        <h1 className="text-5xl font-bold text-center text-[#35B8BE] ">
                          Browse our menu
                        </h1>
                        <p>
                          Use our menu to place an order online, or phone our
                          store to <br />
                          place a pickup order. Fast and fresh food.
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-5 justify-center">
                          <button className="btn bg-[#35B8BE] outline-none border-none text-white hover:btn-error hover:bg-[#35B8BE]">
                            Burgers
                          </button>
                          <button className="btn btn-outline">Sides</button>
                          <button className="btn btn-outline">Sides</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 text-start items-center gap-6">
                    {loaddata.map((item, index) => (
                      <Card key={item.id} item={item}></Card>
                    ))}
                  </div>
                </div>
                <div className="py-16">
                  <div className="text-center my-16">
                    {" "}
                    <button className="btn btn-md bg-[#35B8BE] text-white">
                      See Full Menu
                    </button>
                  </div>
                </div>
              </div>
            );
};

export default Service02;