"use ceient";
// import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    ["/image/p2.png", "/image/p.png", "/image/d3.png"],
    ["/image/cacke.png", "/image/l7.png", "/image/d10.png"],
    ["/image/d9.png", "/image/d1.png", "/image/pritam.png"],
    ["/image/m.png", "/image/l6.png", "/image/d2.png"],
  ];

  const handleImageClick = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [selectedImage]);

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

      {/* Modal for Full-Screen Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-70 pt-20"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              // className="rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.button
              className="absolute top-16 md:right-14 md:top-24 right-8 text-primary-orange text-2xl font-bold"
              onClick={(e) => {
                e.stopPropagation(); // Prevent click event from bubbling to the modal container
                closeModal();
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import PhotoAlbum from "reacpt-hoto-album";
// import { motion } from "framer-motion";

// const PhotoGallery = () => {
// const [selectedImage, setSelectedImage] = useState(null);

// const handleImageClick = (photo) => {
//   setSelectedImage(photo.src);
// };

// const closeModal = () => {
//   setSelectedImage(null);
// };

//   const photos = [
//     { key: 1, src: "/image/p2.png", width: 300, height: 150 },
//     { key: 3, src: "/image/d2.png", width: 350, height: 180 },
//     { key: 2, src: "/image/d3.png", width: 300, height: 200 },
//     { key: 4, src: "/image/d4.png", width: 400, height: 300 },
//     { key: 5, src: "/image/cacke.png", width: 400, height: 300 },
//     { key: 6, src: "/image/d10.png", width: 400, height: 250 },
//     { key: 7, src: "/image/d9.png", width: 400, height: 200 },
//     { key: 8, src: "/image/d1.png", width: 500, height: 300 },
//     { key: 1, src: "/image/linkedin.png", width: 200, height: 150 },
//     { key: 3, src: "/image/j2.png", width: 250, height: 180 },
//     { key: 2, src: "/image/j1.png", width: 300, height: 200 },
//     { key: 4, src: "/image/l7.png", width: 350, height: 400 },
//     { key: 5, src: "/image/p.png", width: 300, height: 400 },
//     { key: 7, src: "/image/l6.png", width: 350, height: 600 },
//     { key: 9, src: "/image/pritam.png", width: 350, height: 600 },
//   ];

// useEffect(() => {
//   if (selectedImage) {
//     document.body.style.overflow = "hidden"; // Disable scrolling
//   } else {
//     document.body.style.overflow = ""; // Restore scrolling
//   }

//   return () => {
//     document.body.style.overflow = ""; // Cleanup on unmount
//   };
// }, [selectedImage]);

//   return (
// <div className="md:px-12 px-2 ">
// <motion.h1
//   className="text-4xl md:text-5xl font-bold flex justify-center py-5 text-gray-800"
//   initial={{ opacity: 0, y: -50 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8, ease: "easeOut" }}
// >
//   Our Celebrations
// </motion.h1>

//       {/* PhotoAlbum with custom rendering */}
//       <PhotoAlbum
//         layout="rows"
//         photos={photos}
//         renderPhoto={({ photo, layout }) => (
//           <motion.img
//             src={photo.src}
//             alt={photo.alt}
//             style={{
//               width: layout.width,
//               height: layout.height,
//               objectFit: "cover",
//               cursor: "pointer",
//               borderRadius: "8px",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//             }}
//             initial={{ scale: 0.95 }}
//             animate={{ scale: 1 }}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             onClick={() => handleImageClick(photo)}
//           />
//         )}
//       />

// {/* Modal for Full-Screen Image */}
// {selectedImage && (
//   <div
//     className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-70 pt-10"
//     onClick={closeModal}
//   >
//     <motion.img
//       src={selectedImage}
//       alt="Selected"
//       initial={{ scale: 0.8, opacity: 1 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     />
//     <button
//       className="absolute top-4 right-4 text-primary-orange text-2xl font-bold"
//       onClick={(e) => {
//         e.stopPropagation(); // Prevent click event from bubbling to the modal container
//         closeModal();
//       }}
//     >
//       ✕
//     </button>
//   </div>
// )}
//     </div>
//   );
// };

// export default PhotoGallery;
