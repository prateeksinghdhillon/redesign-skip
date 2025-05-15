import "./App.scss";
import SkipCard from "./skip-page/SkipCard";
import { SKIP } from "./utils/constant";

function App() {
  const skips = SKIP;
  return (
    <>
    <div className="skip-container">
      {skips.map((skip) => (
        <SkipCard key={skip.id} skip={skip} />
      ))}
    </div>
      </>
  );
}

export default App;
