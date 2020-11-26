import React, { useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import useWindowSize from "./hooks/useWindowSize";
import { useMachine } from "@xstate/react";
import machine from "./state/machine";
import anime from "animejs/lib/anime.es.js";

import CircleMark from "./components/CircleMark";
import SvgNeon from "./components/SvgNeon";

const Shamash = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size}px;
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  background-color: ${(props) => props.color};
`;

const App = () => {
  const [current] = useMachine(machine);
  const { sec, secs, min, mins, hour, hours, day, days } = current.context;
  const size = useWindowSize();
  const mathmin = Math.min(size.width, size.height);
  const radius = mathmin * 0.3;

  /* const animate = () => {
    const circles = document.querySelectorAll("circle");
    circles.forEach((circle) => {
      anime({
        targets: circle,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: anime.random(1000, 3000),
        delay: anime.random(0, 0),
        loop: true,
        direction: "alternate",
        easing: "easeInOutSine",
        autoplay: true,
      });
      anime({
        targets: circle,
        duration: anime.random(0, 1000),
        delay: anime.random(0, 300),
        opacity: [{ value: 0, duration: anime.random(0, 300) }],
        loop: true,
      });
    });
  }; */

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "#1a1a1a",
          width: `${mathmin * 0.65}px`,
          height: `${mathmin * 0.65}px`,
          borderRadius: `${mathmin * 0.65}px`,
          position: "absolute",
          left: `${size.width * 0.5 - mathmin * 0.315}px`,
          top: `${size.height * 0.5 - mathmin * 0.315}px`,
          zIndex: 0,
        }}
      ></div>
      {/* <SvgNeon
        size={radius * 0.1}
        px={size.width * 0.5}
        py={size.height * 0.5}
        onClick={() => {
          send("START");
          animate();
        }}
      /> */}
      <Shamash
        color={days[0].color}
        size={radius * 0.14}
        x={size.width * 0.5 - radius * 0.07}
        y={size.height * 0.5 - radius * 0.07}
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
