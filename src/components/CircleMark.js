import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: ${(props) => props.size}px; //20px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size}px;
  display: block;
  background-color: ${(props) => props.color};
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  box-shadow: 0 0 1vmin ${(props) => props.color};
  opacity: ${(props) => (props.on ? 1 : 0.3)};
  transition: opacity 0.3s ease-in-out;
`;

const CircleMark = ({ group, value, size, radius, step }) => {
  return (
    <>
      {group.map((el, i) => (
        <Circle
          key={`value${i}`}
          x={size.width * 0.5 + radius * Math.cos(0 + step * i)}
          y={size.height * 0.5 + radius * Math.sin(0 + step * i)}
          color={el.color}
          size={radius * 0.07}
          on={i <= value}
        />
      ))}
    </>
  );
};

export default CircleMark;
