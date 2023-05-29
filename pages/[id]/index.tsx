import React from "react";
import ButtonNormal from "../../components/ButtonNormal";
import Wrapper from "../../components/Wrapper";
import { getAllGearIds, getGearData } from "../../lib/gear";
import { GearItem } from "../../types/dynamic/gear";

const Gear = ({ gearData }: { gearData: GearItem }) => {
  return (
    <Wrapper title={gearData.title}>
      <div className="flex flex-col justify-start w-[1250px]">
        <div className="font-[Epilogue] font-bold text-[20px]">{gearData.discipline}</div>
        <div className="font-[Ledger] text-[16px]">{gearData.description}</div>
        <div className="w-[1250px] h-[50px]">
          <div className="flex flex-col [&>span]:font-bold">
            <span>Tech Used</span>
            {gearData.tech}
          </div>
          <ButtonNormal text="forward"></ButtonNormal>
          <div></div>
          <div></div>
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
