import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  display: block;
  background-color: ${(props) => props.color};
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  box-shadow: 0 0 0.75vmin ${(props) => props.color};
  opacity: ${(props) => (props.on ? 1 : 0.3)};
  transition: opacity 0.3s;
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
          on={i <= value}
        />
      ))}
    </>
  );
};

export default CircleMark;
