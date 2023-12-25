import React from "react";
import customerCareImg from "../../assets/customerCare.png";

const CustomerCare = () => {
  return (
    <>
      <div className="customerCareContainer" >
        <div>
          <h1>CUSTOMER</h1>
          <h2>SERVICE</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolores
            possimus reiciendis numquam perspiciatis, eius commodi quis debitis?
            Laborum maxime dolor cupiditate delectus iusto quo sunt rerum harum
            nobis excepturi. Quo eveniet dicta, nihil molestiae hic laborum cum
            blanditiis sapiente fuga aliquid, pariatur repellat itaque excepturi
            debitis ab. Accusamus unde architecto magni vitae? Sequi sed, nemo
            laudantium nam consequuntur eligendi? Ipsam consectetur dolores
            autem rem illum necessitatibus enim ab deserunt fugit voluptatem
            minima distinctio sint fugiat deleniti quis natus est mollitia
            doloribus, nobis, ducimus veritatis ipsa. Consequatur possimus iusto
            nobis.
          </div>
          <button>READ MORE</button>
        </div>
        <div>
        <img className="customerCareContainerimg" src={customerCareImg} alt="customer care picture" />
        </div>
      </div>
    </>
  );
};

export default CustomerCare;
