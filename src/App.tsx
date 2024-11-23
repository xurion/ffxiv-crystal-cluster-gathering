import "./App.css";
import { Category } from "./Category";
import { earth, fire, lightning, water, wind } from "./data";

export const App = () => {
  return (
    <>
      <h1>Crystal & Clustering Gathering</h1>

      <main className="flex">
        <Category category={earth} title="Earth" />
        <Category category={fire} title="Fire" />
        <Category category={lightning} title="Lightning" />
        <Category category={water} title="Water" />
        <Category category={wind} title="Wind" />
      </main>
    </>
  );
};
