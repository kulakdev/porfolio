import Image from "next/image";
import React, { CSSProperties } from "react";

const ProjectCard = ({ image, className }: { image: string; className?: string }) => {
  const imageStyle: CSSProperties = { objectFit: "cover" };

  const ImportStyles = "bg-grey-soft w-[350px] h-[250px] relative overflow-hidden " + className;
  console.log("className", className);
  console.log("importstyles", ImportStyles);

  return (
    <div className={ImportStyles}>
      <Image
        onDragStart={(event) => event.preventDefault()}
        src={image}
        alt="text"
        fill={true}
        style={imageStyle}
      ></Image>
    </div>
  );
};

export default ProjectCard;
