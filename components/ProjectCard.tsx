import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties } from "react";

const ProjectCard = ({
  link,
  image,
  className,
}: {
  link: string;
  image: string;
  className?: string;
}) => {
  const imageStyle: CSSProperties = { objectFit: "cover" };

  const ImportStyles = "bg-grey-soft w-[350px] h-[250px] relative overflow-hidden " + className;
  console.log("className", className);
  console.log("importstyles", ImportStyles);

  return (
    <Link href={link} className={ImportStyles}>
      <Image
        onDragStart={(event) => event.preventDefault()}
        src={image}
        alt="text"
        fill={true}
        style={imageStyle}
      ></Image>
    </Link>
  );
};

export default ProjectCard;
