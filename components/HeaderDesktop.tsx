import { HStack, Image, Icon } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

const HeaderDesktop = () => {
  // const router = useRouter();
  return (
    <div className="hidden lg:block">
      <header className="flex bg-[transparent] mt-[100px] text-white-soft p-4 mx-auto lg:max-w-[1250px]  fixed md:relative md:flex md:justify-between md:items-center md:text-center">
        <h1 className="font-[Epilogue] font-bold text-[64px]">projects</h1>

        <HStack>
          <a>
            <Icon as={FaGithub} className="text-3xl"></Icon>
          </a>
          <a>
            <Icon as={FaLinkedin} className="text-3xl"></Icon>
          </a>
        </HStack>
      </header>
    </div>
  );
};

export default HeaderDesktop;
