import { useState } from "react";
import "./App.css";
import { Category } from "./Category";
import { EorzeanTimeTracker } from "./EorzeanTimeTracker";
import { Selector } from "./Selector";
import { Times } from "./Times";
import { earth, fire, ice, lightning, water, wind } from "./data";

type Selection = typeof earth;

export const App = () => {
  const [selected, setSelected] = useState<Selection>(earth);
  const [colour, setColour] = useState("bg-amber-100");
  const [activeColour, setActiveColour] = useState("bg-amber-300");

  return (
    <main className="flex h-full">
      <EorzeanTimeTracker />
      <Times />
      <div className="flex gap-1 h-full relative w-full">
        <Selector
          onEarthSelect={() => {
            setSelected(earth);
            setColour("bg-amber-100");
            setActiveColour("bg-amber-300");
          }}
          onFireSelect={() => {
            setSelected(fire);
            setColour("bg-red-100");
            setActiveColour("bg-red-300");
          }}
          onIceSelect={() => {
            setSelected(ice);
            setColour("bg-blue-100");
            setActiveColour("bg-blue-300");
          }}
          onLightningSelect={() => {
            setSelected(lightning);
            setColour("bg-purple-300");
            setActiveColour("bg-purple-500");
          }}
          onWaterSelect={() => {
            setSelected(water);
            setColour("bg-blue-100");
            setActiveColour("bg-blue-300");
          }}
          onWindSelect={() => {
            setSelected(wind);
            setColour("bg-green-100");
            setActiveColour("bg-green-300");
          }}
        />
        <Category
          activeCellClassName={activeColour}
          cellClassName={colour}
          ephemerals={selected.ephemerals}
          legendaries={selected.legendaries}
        />
      </div>
    </main>
  );
};
