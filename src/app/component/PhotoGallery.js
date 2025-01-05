"use client";
import PhotoAlbum from "react-photo-album";

const photos = [
  { key: 1, src: "/image/p2.png", width: 300, height: 150 },
  { key: 3, src: "/image/d2.png", width: 350, height: 180 },
  { key: 2, src: "/image/d3.png", width: 300, height: 200 },
  { key: 4, src: "/image/d4.png", width: 400, height: 300 },
  { key: 5, src: "/image/cacke.png", width: 400, height: 300 },
  { key: 6, src: "/image/d10.png", width: 400, height: 250 },

  { key: 7, src: "/image/d9.png", width: 400, height: 200 },
  { key: 8, src: "/image/d1.png", width: 500, height: 300 },
  { key: 1, src: "/image/linkedin.png", width: 200, height: 150 },
  { key: 3, src: "/image/j2.png", width: 250, height: 180 },
  { key: 2, src: "/image/j1.png", width: 300, height: 200 },
  { key: 4, src: "/image/l7.png", width: 350, height: 400 },
  { key: 5, src: "/image/p.png", width: 300, height: 400 },
  // { key: 6, src: "/image/p3.png", width: 400, height: 600 },
  { key: 7, src: "/image/l6.png", width: 350, height: 600 },
  { key: 9, src: "/image/pritam.png", width: 350, height: 600 },
];

export default function Gallery() {
  return (
    <div className="md:px-12 px-2">
      <h1 className="text-4xl sm:text-5xl font-bold flex justify-center py-5 text-gray-800">
        Our Celebrations
      </h1>
      <PhotoAlbum layout="rows" photos={photos} />;
    </div>
  );
}
