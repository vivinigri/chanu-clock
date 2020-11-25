import React from "react";
import "./App.css";
import styled from "styled-components";
import useWindowSize from "./hooks/useWindowSize";
import { useMachine } from "@xstate/react";
import machine from "./state/machine";

import CircleMark from "./components/CircleMark";

const Shamash = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  background-color: ${(props) => props.color};
`;

const App = () => {
  const [current] = useMachine(machine);
  const { sec, secs, min, mins, hour, hours, day, days } = current.context;
  const size = useWindowSize();
  const radius = Math.min(size.width, size.height) * 0.3;

  return (
    <div className="App">
      <Shamash
        color={days[0].color}
        x={size.width * 0.5 - 10}
        y={size.height * 0.5 - 10}
      />
      <CircleMark
        group={secs}
        value={sec}
        radius={radius}
        step={(2 * Math.PI) / 60}
        size={size}
      />
      <CircleMark
        group={mins}
        value={min}
        radius={radius * 0.85}
        step={(2 * Math.PI) / 60}
        size={size}
      />
      <CircleMark
        group={hours}
        value={hour}
        radius={radius * 0.7}
        step={(2 * Math.PI) / 24}
        size={size}
      />
      <CircleMark
        group={days}
        value={day}
        radius={radius * 0.55}
        step={(2 * Math.PI) / 8}
        size={size}
      />
      <CircleMark
        group={days}
        value={day}
        radius={radius * 0.45}
        step={(2 * Math.PI) / 8}
        size={size}
      />
      <CircleMark
        group={days}
        value={day}
        radius={radius * 0.35}
        step={(2 * Math.PI) / 8}
        size={size}
      />
      <CircleMark
        group={days}
        value={day}
        radius={radius * 0.25}
        step={(2 * Math.PI) / 8}
        size={size}
      />
      <CircleMark
        group={days}
        value={day}
        radius={radius * 0.15}
        step={(2 * Math.PI) / 8}
        size={size}
      />
    </div>
  );
};

export default App;
