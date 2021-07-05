import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ToolTabs from './components/ToolTabs/ToolTabs';

const toolTabs = [
  {
    id: 1,
    title: "Length",
    units: [
      "kilometer",
      "meter",
      "centimeter",
      "millimeter",
      "mile",
      "yard",
      "foot",
      "inch",
    ],
  },
  { id: 2, title: "Temperature", units: ["celsius", "fahrenheit"] },
  {
    id: 3,
    title: "Weight",
    units: [
      "kilogram",
      "gram",
      "milligram",
      "tonne",
      "stone",
      "pound",
      "ounce",
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <ToolTabs toolTabs={toolTabs} />
      <Footer />
    </div>
  );
}

export default App;
