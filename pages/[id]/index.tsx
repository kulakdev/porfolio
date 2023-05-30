import { HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ButtonNormal from "../../components/ButtonNormal";
import Wrapper from "../../components/Wrapper";
import { getAllGearIds, getGearData } from "../../lib/gear";
import { GearItem } from "../../types/dynamic/gear";

const Gear = ({ gearData }: { gearData: GearItem }) => {
  return (
    <Wrapper title={gearData.title}>
      <div className="flex flex-col justify-start w-[1250px]">
        {/* <div className="font-[Epilogue] font-bold text-[20px]">{gearData.discipline}</div> */}
        <div className="font-[Ledger] text-[16px] mt-9">{gearData.description}</div>
        <div className="w-[1250px] h-[50px] my-9 flex justify-between">
          <div className="flex flex-col [&>span]:font-bold [&>span]:font-[Epilogue] [&>span]:text-[20px] font-[Ledger] text-[16px]">
            <span>Tech Used</span>
            {gearData.tech}
          </div>
          <ButtonNormal text="deployment"></ButtonNormal>
        </div>
        <div
          className="block overflow-x-scroll h-[210px]"
          onWheel={(e) => {
            // here im handling the horizontal scroll inline, without the use of hooks
            const strength = Math.abs(e.deltaY);
            if (e.deltaY === 0) return;

            const el = e.currentTarget;
            if (
              !(el.scrollLeft === 0 && e.deltaY < 0) &&
              !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 && e.deltaY > 0)
            ) {
              e.preventDefault();
            }
            el.scrollTo({
              left: el.scrollLeft + e.deltaY,
              // large scrolls with smooth animation behavior will lag, so switch to auto
              behavior: strength > 70 ? "auto" : "smooth",
            });
          }}
        >
          <HStack>
            {gearData.images.map((image: string, id: number) => (
              <Image
                alt="projects"
                src={image}
                key={id}
                width={320}
                height={180}
                onDragStart={(event) => event.preventDefault()}
                onClick={(event) => event.preventDefault}
              ></Image>
            ))}
          </HStack>
        </div>
      </div>
    </Wrapper>
  );
};

export async function getStaticPaths() {
  // Return a list of possible values for id
  const paths = getAllGearIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data using params.id
  const gearData = getGearData(params.id);
  return {
    props: {
      gearData,
    },
  };
}

export default Gear;
