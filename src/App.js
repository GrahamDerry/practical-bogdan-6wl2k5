import "./styles.css";
import ThaiVocabTable from "./components/ThaiVocabTable";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* keep App tidy—table lives in its own component */}
      <ThaiVocabTable />
    </div>
  );
}
