import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

function Product() {
  const [prod, setProd] = useState([]);
  const [scroll, setscroll] = useState(false);
  const data = [
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
    { name: "salman", price: "$90", desc: "yeah yeah", img: "/imgs/k1.jpg" },
  ];
  useEffect(() => {
    function Scrall() {
      console.log("hell0");
    }
    window.addEventListener("scroll", Scrall());
    setProd(data);
  }, []);
  return (
    <div className="pro">
      <Navbar/>
      <div className="pro2">
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: "-10vw" }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {" "}
            <div className="quo1">
              Agar firdaus bar roo-e zameen ast, Hameen ast-o hameen ast-o
              hameen ast.
            </div>
            <div className="quo2">
              Immerse yourself in the vibrant world of Kashmiri crafts, from
              intricately woven Pashmina shawls to handcrafted wooden artistry.
            </div>
          </motion.div>
        </motion.div>
      </div>

      
        <div className="grid grid-cols-3 grid-gap-7 px-10 mt-8 text-white	">
          {prod.map((e,i) => {
            return (
              <div key={i}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg text-white  card">
                  <img
                    className="w-full"
                    src={e.img}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2"></div>
                    <p className="text-black text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block btn rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                      Add to Card
                    </span>
                    <span className="inline-block btn rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                      Buy Now
                    </span>
                    <span className="inline-block btn rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                      Description
                    </span>
                  </div>
                </div>
         <div>
          salman
          </div> 
              </div>
            );
          })}
        </div>
      
    </div>
  );
}

export default Product;
