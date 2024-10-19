"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative mt-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/*  */}
        <div className="w-[300px] h-[400px] xl:w-[450px] xl:h-[600px] mix-blend-normal ">
          <Image
            src="/assets/photo.png"
            priority
            fill
            alt="Ronald Ris"
            className="object-contain"
          />
          
        </div>

        
      </motion.div>
    </div>
  );
};

export default Photo;