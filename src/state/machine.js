import { Machine, assign } from "xstate";

const duplicateArr = (arr, times) =>
  Array(times)
    .fill([...arr])
    .reduce((a, b) => a.concat(b));
const arSecs = duplicateArr([{ color: "pink" }], 60);
const arMins = duplicateArr([{ color: "yellow" }], 60);
const arHours = duplicateArr([{ color: "lime" }], 24);
const arDays = duplicateArr([{ color: "#7e57c2" }], 8);

const CONSTANTS = {
  numSecs: 59,
  numMins: 59,
  numHours: 23,
  numDays: 11,
};

const machine = Machine(
  {
    id: "clock",
    context: {
      secs: arSecs,
      sec: 0,
      mins: arMins,
      min: 58,
      hours: arHours,
      hour: 23,
      days: arDays,
      day: 0,
    },
    initial: "running",
    states: {
      idle: {
        on: {
          START: "running",
        },
      },
      running: {
        after: {
          0.01: [
            { target: "running", cond: "notMinute", actions: ["incrementSec"] },
            { target: "running", cond: "notHour", actions: ["incrementMin"] },
            { target: "running", cond: "notDay", actions: ["incrementHour"] },
            { target: "running", cond: "notEnd", actions: ["incrementDay"] },
            { target: "endChag" },
          ],
        },
      },
      endChag: {
        type: "final",
      },
    },
  },
  {
    guards: {
      notMinute: (context) => {
        return context.sec < CONSTANTS.numSecs;
      },
      notHour: (context) => {
        return context.min < CONSTANTS.numMins;
      },
      notDay: (context) => {
        return context.hour < CONSTANTS.numHours;
      },
      notEnd: (context) => {
        return context.day < CONSTANTS.numDays;
      },
    },
    actions: {
      incrementSec: assign({
        sec: (context) => {
          return context.sec + 1;
        },
      }),
      incrementMin: assign({
        sec: () => 0,
        min: (context) => context.min + 1,
      }),
      incrementHour: assign({
        sec: () => 0,
        min: () => 0,
        hour: (context) => context.hour + 1,
      }),
      incrementDay: assign({
        sec: () => 0,
        min: () => 0,
        hour: () => 0,
        day: (context) => context.day + 1,
      }),
    },
  }
);

export default machine;
