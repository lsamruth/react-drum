import boom from "./sounds/boom.wav";
import hihat from "./sounds/hihat.wav";
import openhat from "./sounds/openhat.wav";
import snare from "./sounds/snare.wav";
import tom from "./sounds/tom.wav";
import clap from "./sounds/clap.wav";
import kick from "./sounds/kick.wav";
import ride from "./sounds/ride.wav";
import tink from "./sounds/tink.wav";

export let drumData = [
  {
    key: "A",
    audio: boom,
    name: "boom",
  },
  {
    key: "S",
    audio: hihat,
    name: "hihat",
  },
  {
    key: "D",
    audio: openhat,
    name: "openhat",
  },
  {
    key: "F",
    audio: snare,
    name: "snare",
  },
  {
    key: "G",
    audio: tom,
    name: "tom",
  },
  {
    key: "H",
    audio: clap,
    name: "clap",
  },
  {
    key: "J",
    audio: kick,
    name: "kick",
  },
  {
    key: "K",
    audio: ride,
    name: "ride",
  },
  {
    key: "L",
    audio: tink,
    name: "tink",
  },
];
