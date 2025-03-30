"use client";
import React from "react";
import BusinessProfilemobile from "../../component/mobileConponent/BusinessProfilemobile";
import { data } from "../../component/Alldata";
import Contactus from "../../component/Contactus";
const Mobiledevlopment = ({ params }) => {
  const { id } = params;
  const project = data.find((proj) => proj.id === id);

  if (!project) {
    return <p className="text-red-500">Project not found</p>;
  }
  return (
    <>
      <div className="mx-4 lg:mx-28 pt-24">
        <h1>Hello</h1>
        <div className="">
          <BusinessProfilemobile data={project} />
        </div>
      </div>
      <div className="p-4 py-2 pb-8 bg-warm-gray ">
        <div className="p-1 rounded-lg shadow-2xl">{/* <Contactus /> */}</div>
      </div>
    </>
  );
};

export default Mobiledevlopment;
