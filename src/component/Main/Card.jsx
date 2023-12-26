

const Card = ({item}) => {
            
      const { productImage, productName, productDescription, productPrice } = item;
      console.log(item)
            return (
              <div className="">
                <div className="px-5">
                  <div className="bg-white flex items-center gap-5">
                    <div className="w-64">
                      <img src={productImage} alt="" />
                    </div>
                    <div className="p-0">
                      <div className="flex items-center gap-4 p-0">
                        <h4 className="">{productName}</h4>
                        <p className="text-[#35B8BE]">{productPrice}</p>
                      </div>
                      <p className="p-0 m-0">{productDescription}</p>
                      <div className="flex gap-4 mt-2 items-center">
                        <input
                          className="input input-bordered input-primary w-20 h-10 border  border-cyan-500"
                          type="number"
                          value={1}
                        />
                        <button className="btn btn-md bg-[#35B8BE]">
                          Add to card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
};

export default Card;