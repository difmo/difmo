"use ceient";
import { motion } from "framer-motion";

export default function PhotoGallery() {
  const images = [
    ["/image/p2.png", "/image/p.png", "/image/d3.png"],
    ["/image/cacke.png", "/image/l7.png", "/image/d10.png"],
    ["/image/d9.png", "/image/d1.png", "/image/pritam.png"],
    ["/image/m.png", "/image/l6.png", "/image/d2.png"],
  ];

  return (
    <>
      <motion.h1
        className="text-4xl md:text-5xl font-bold flex justify-center py-5 text-deep-blue"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Celebrations
      </motion.h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((column, columnIndex) => (
          <div key={columnIndex} className="grid gap-4">
            {column.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  className="h-auto max-w-full rounded-lg cursor-pointer"
                  src={src}
                  alt=""
                  onClick={() => handleImageClick(src)}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

