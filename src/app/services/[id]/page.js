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
      <div className=" pt-24  ">
        <div className="">
          <BusinessProfilemobile data={project} />
        </div>
      </div>
     
    </>
  );
};

export default Mobiledevlopment;
