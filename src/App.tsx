import "./App.css";
import { Category } from "./Category";
import { Times } from "./Times";
import { earth, fire, lightning, water, wind } from "./data";

export const App = () => {
  return (
    <main className="flex">
      <Times />
      <Category
        category={earth}
        cellClassName="bg-amber-100"
        title="Earth"
        titleClassName="bg-amber-300"
      />
      <Category
        category={fire}
        cellClassName="bg-red-100"
        title="Fire"
        titleClassName="bg-red-300"
      />
      <Category
        category={lightning}
        cellClassName="bg-purple-300"
        title="Lightning"
        titleClassName="bg-purple-400"
      />
      <Category
        category={water}
        cellClassName="bg-blue-100"
        title="Water"
        titleClassName="bg-blue-300"
      />
      <Category
        category={wind}
        cellClassName="bg-green-100"
        title="Wind"
        titleClassName="bg-green-300"
      />
    </main>
  );
};
