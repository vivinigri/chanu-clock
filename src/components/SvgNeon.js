import React from "react";
import styled from "styled-components";

const Neon = styled.svg`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: absolute;
  left: ${(props) => props.px}px;
  top: ${(props) => props.py}px;
`;

const SvgNeon = ({ size, px, py }) => {
  if (!size) return <></>;
  return (
    <Neon size={size * 2} px={px - size} py={py - size}>
      <circle className="st0 letter" cx={size} cy={size} r={size * 0.8} />
      <circle className="st1" cx={size} cy={size} r={size * 0.82} />
      <circle className="st2" cx={size} cy={size} r={size * 0.84} />
      <circle className="st3" cx={size} cy={size} r={size * 0.86} />
      <circle className="st4" cx={size} cy={size} r={size * 0.88} />
      <circle className="st5" cx={size} cy={size} r={size * 0.9} />
      <circle className="st5" cx={size} cy={size} r={size * 0.75} />
    </Neon>
  );
};

export default SvgNeon;
