import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const boxVariants = {
  hover: { scale: 1.2, rotateZ: 90 },
  click: {
    scale: 0.8,
    borderRadius: "100px",
  },
};

function Drag() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          variants={boxVariants}
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          whileDrag="drag"
          whileHover="hover"
          whileTap="click"
        ></Box>
      </BiggerBox>
    </Wrapper>
  );
}

export default Drag;
