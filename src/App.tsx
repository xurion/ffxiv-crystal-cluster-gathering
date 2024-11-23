import "./App.css";
import { Category } from "./Category";
import { EorzeanTimeTracker } from "./EorzeanTimeTracker";
import { Times } from "./Times";
import { earth, fire, lightning, water, wind } from "./data";

export const App = () => {
  return (
    <main className="flex">
      <Times />
      <EorzeanTimeTracker />
      <Category
        category={earth}
        cellClassName="bg-amber-100 border-b-white border-b-4"
        title="Earth"
        titleClassName="bg-amber-200"
      />
      <Category
        category={fire}
        cellClassName="bg-red-100 border-b-white border-b-4"
        title="Fire"
        titleClassName="bg-red-200"
      />
      <Category
        category={lightning}
        cellClassName="bg-purple-300 border-b-white border-b-4"
        title="Lightning"
        titleClassName="bg-purple-400"
      />
      <Category
        category={water}
        cellClassName="bg-blue-100 border-b-white border-b-4"
        title="Water"
        titleClassName="bg-blue-200"
      />
      <Category
        category={wind}
        cellClassName="bg-green-100 border-b-white border-b-4"
        title="Wind"
        titleClassName="bg-green-200"
      />
    </main>
  );
};
