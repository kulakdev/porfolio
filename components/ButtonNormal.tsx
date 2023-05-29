import React from "react";

const ButtonNormal = ({ text }: { text: string }) => {
  return (
    <a className="bg-gold text-black-hard font-[Epilogue] size-[20px] align-middle py-3 px-5 w-max h-fit rounded-lg ">
      {text}
    </a>
  );
};

export default ButtonNormal;
