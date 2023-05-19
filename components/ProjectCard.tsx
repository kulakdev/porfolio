import Image from "next/image";
import React, { CSSProperties } from "react";

const ProjectCard = ({ imagelink }: { imagelink: string }) => {
  const imageStyle: CSSProperties = { objectFit: "cover" };

  return (
    <div className=" bg-grey-soft w-[400px] h-[275px] relative overflow-hidden">
      <Image src={imagelink} alt="text" fill={true} style={imageStyle}></Image>
    </div>
  );
};

export default ProjectCard;
