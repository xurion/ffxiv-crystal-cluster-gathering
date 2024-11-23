import "./App.css";
import { earth, fire, lightning } from "./data";
import { Entry } from "./Entry";

export const App = () => {
  return (
    <>
      <h1>Crystal & Clustering Gathering</h1>

      <main className="flex">
        <div className="w-1/3">
          <div>Earth</div>
          {earth.map((entry, i) => (
            <Entry entry={entry} key={i} />
          ))}
        </div>
        <div className="w-1/3">
          <div>Fire</div>
          {fire.map((entry, i) => (
            <Entry entry={entry} key={i} />
          ))}
        </div>
        <div className="w-1/3">
          <div>Lightning</div>
          {lightning.map((entry, i) => (
            <Entry entry={entry} key={i} />
          ))}
        </div>
      </main>
    </>
  );
};
