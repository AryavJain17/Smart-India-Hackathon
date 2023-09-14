import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom'

function Product() {
  const [prod, setProd] = useState([]);
  const [scroll, setscroll] = useState(0);

  // const data = [
  //   { name: "Spices", price: "$90", desc: "yeasdadsadasdsadasasdsh yeah", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeaasdsadasdsadsadsah yeah", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeasadsadsadsah yeah", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeah loremefkhsdbjhfbsdjncby  yeadsaaaaaaaaah", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeah yeahxzcmn bsdficef w fcehfbigxjf", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeah yeah", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeah yeah", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeah yeah", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeah yeah", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeah yeah", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeah yeah", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeah yeah", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeah yeah", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeah yeah", img: "/imgs/k4.jpg" },
  //   { name: "Spices", price: "$90", desc: "yeah yeah", img: "/imgs/k4.jpg" },
  // ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setscroll(1); // Change the background color to black
      } else {
        setscroll(0); // Change it back to transparent
      }
    };
    fetch('http://localhost:80/Api').then((y)=>{
      return y.json()
    })
    .then((x)=>{
  setProd(x);
console.log(x);
})
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const windows=window.innerWidth>786;
  return (
    <div className="pro">
      <Navbar className="z-50"/>
      <div className="pro2">
        <div className="scr">
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
              
              <div className="quo1">
                Agar firdaus bar roo-e zameen ast, Hameen ast-o hameen ast-o
                hameen ast.
              </div>
              <div className="quo2">
                Immerse yourself in the vibrant world of Kashmiri crafts, from
                intricately woven Pashmina shawls to handcrafted wooden
                artistry.
                <motion.div className="quo3"
          style={{textAlign:"center" ,fontSize:"2rem" ,marginTop:"10px", animationFillMode:"backwards"}}
            animate={{ y: "25px" ,opacity: "1" }}
            initial={{ y: "-25px" ,opacity:0 }}
            transition={{  type: "spring", // Use spring animation
            stiffness: 100, // Stiffness of the spring
            damping: 20, duration: 2 ,delay:1 ,  repeat: "infinite" }}
            > Scroll Down <br/> ↡
            </motion.div>
              </div>
              
        
            </motion.div>
          </motion.div>

            
        </div>
      </div>

      <motion.div
        animate={{ opacity: windows?scroll:1 }}
        initial={{ opacity:  windows?scroll:1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-3 grid-gap-7 px-10 mt-8 	cards">
          {prod.map((e, i) => {
            return (
              <div key={i}>
                <div className="max-w-sm rounded-2xl	 overflow-hidden text-white  card">
                  <img
                    className="w-full border-white	border-2	"
                    src={`/imgs/${e.filename}`}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4 text-center	">
                    <div className="font-bold text-xl mb-2"></div>
                    <h1>{e.productName}</h1>
                    <p className="text-white text-base">
                      {e.description}
                    </p>
                    <h1>Rs.{e.sellingPrice}</h1>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block btn bg-gray-100 rounded px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                      Add to Card
                    </span>
                    <span className="inline-block btn bg-gray-100 rounded px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                      Buy Now
                    </span>
                    <Link to="/Negotiate" className="cursor-pointer inline-block btn bg-gray-100 rounded px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                     Negotiate
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Product;
