import { HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ButtonNormal from "../../components/ButtonNormal";
import Wrapper from "../../components/Wrapper";
import { getAllGearIds, getGearData } from "../../lib/gear";
import { GearItem } from "../../types/dynamic/gear";

import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import NextJsImage from "../../components/NextJsImage";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import usePreventBodyScroll from "../../components/usePreventBodyScroll";
import { Card } from "../../components/Card";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const Gear = ({ gearData }: { gearData: GearItem }) => {
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(0);

  const { disableScroll, enableScroll } = usePreventBodyScroll();

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
        <div className="example [&>*]:box-border" style={{ paddingTop: "100px" }}>
          <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
            <ScrollMenu
              Header={<div>HEADER</div>}
              Footer={<div>FOOTER</div>}
              LeftArrow={<div>Left</div>}
              RightArrow={<div>Right</div>}
              onWheel={onWheel}
            >
              {gearData.images.map((image) => (
                <div key={image} className="w-[320px] h-[180px]">
                  <Image src={image} width={320} height={180} alt=""></Image>
                </div>
              ))}
            </ScrollMenu>
          </div>
        </div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>
        <div>BOTTOM TEXT</div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentImage}
          slides={[
            { src: "/img/image1.jpeg" },
            { src: "/img/evdmscreenshot1.png" },
            { src: "/img/evdmscreenshot2.png" },
            { src: "/img/evdmscreenshot3.png" },
            { src: "/img/evdmscreenshot4.png" },
          ]}
          render={{ slide: NextJsImage }}
          plugins={[Counter]}
          counter={{
            container: {
              style: {
                top: 0,
                bottom: "unset",
                left: "auto",
                right: "auto",
              },
            },
          }}
        ></Lightbox>
      </div>
    </Wrapper>
  );
};

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

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
