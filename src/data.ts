type Item = {
  collectable: boolean;
  duration: number;
  job: "BOT" | "MIN";
  level: number;
  name: string;
  stars: number;
  type: "item";
  xy: [number, number];
  zone: string;
};

type Empty = {
  type: "empty";
  duration: number;
};

export type Entry = Item | Empty;

export const earth: Entry[] = [
  {
    collectable: false,
    duration: 4,
    job: "MIN",
    level: 90,
    name: "Prime Siderite",
    stars: 2,
    type: "item",
    xy: [32, 35],
    zone: "Garlemald",
  },
  {
    collectable: false,
    duration: 4,
    job: "BOT",
    level: 60,
    name: "Humic Soil",
    stars: 0,
    type: "item",
    xy: [7, 28],
    zone: "The Dravanian Hinterlands",
  },
  {
    collectable: false,
    duration: 4,
    job: "MIN",
    level: 80,
    name: "Thunder Rock",
    stars: 2,
    type: "item",
    xy: [35, 31],
    zone: "Lakeland",
  },
  {
    collectable: false,
    duration: 4,
    job: "MIN",
    level: 90,
    name: "Prime Siderite",
    stars: 2,
    type: "item",
    xy: [32, 35],
    zone: "Garlemald",
  },
  {
    collectable: false,
    duration: 4,
    job: "MIN",
    level: 80,
    name: "Thunder Rock",
    stars: 2,
    type: "item",
    xy: [33, 19],
    zone: "Kholusia",
  },
  {
    collectable: false,
    duration: 4,
    job: "MIN",
    level: 100,
    name: "Electrocoal",
    stars: 0,
    type: "item",
    xy: [27, 12],
    zone: "Heritage Found",
  },
];

export const fire: Entry[] = [
  {
    collectable: false,
    duration: 4,
    job: "BOT",
    level: 90,
    name: "Prime Haritaki",
    stars: 3,
    type: "item",
    xy: [28, 26],
    zone: "Thavnair",
  },
  {
    collectable: false,
    duration: 4,
    job: "MIN",
    level: 60,
    name: "Radiant Fire Moraine",
    stars: 0,
    type: "item",
    xy: [26, 22],
    zone: "The Dravanian Forelands",
  },
  {
    collectable: false,
    duration: 4,
    job: "BOT",
    level: 90,
    name: "Sophora Roots",
    stars: 2,
    type: "item",
    xy: [11, 35],
    zone: "Labyrinthos",
  },
  {
    collectable: false,
    duration: 4,
    job: "BOT",
    level: 90,
    name: "Prime Haritaki",
    stars: 3,
    type: "item",
    xy: [28, 26],
    zone: "Thavnair",
  },
  {
    collectable: false,
    duration: 4,
    job: "BOT",
    level: 100,
    name: "Volcanic Grass",
    stars: 0,
    type: "item",
    xy: [27, 7],
    zone: "Living Memory",
  },
  {
    type: "empty",
    duration: 4,
  },
];
