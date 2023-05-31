import { HStack, Image, Icon } from "@chakra-ui/react";
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import PageTitle from "./PageTitle";
import { useRouter } from "next/router";
import Link from "next/link";

const HeaderDesktop = ({ title }) => {
  const router = useRouter();
  return (
    <div className="hidden lg:block">
      <header className="flex bg-[transparent] mt-[95px] text-white-soft mx-auto lg:max-w-[1250px]  fixed md:relative md:flex md:justify-between md:items-center md:text-center">
        <h1 className="font-[Epilogue] font-bold text-[64px]">{title}</h1>

        <HStack>
          {router.pathname != "/" ? (
            <Link href="/">
              <Icon as={FaHome} className="text-3xl"></Icon>
            </Link>
          ) : (
            <></>
          )}
          <Link href="">
            <Icon as={FaGithub} className="text-3xl"></Icon>
          </Link>
          <Link href="">
            <Icon as={FaLinkedin} className="text-3xl"></Icon>
          </Link>
        </HStack>
      </header>
    </div>
  );
};

export default HeaderDesktop;
