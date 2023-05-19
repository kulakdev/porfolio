import Image from "next/image";
import React, { CSSProperties } from "react";

const ProjectCard = ({ link, className }: { link: string; className?: string }) => {
  const imageStyle: CSSProperties = { objectFit: "cover" };

  const ImportStyles = "bg-grey-soft w-[400px] h-[275px] relative overflow-hidden " + className;
  console.log("className", className);
  console.log("importstyles", ImportStyles);

  return (
    <div className={ImportStyles}>
      <Image src={link} alt="text" fill={true} style={imageStyle}></Image>
    </div>
  );
};

export default ProjectCard;
