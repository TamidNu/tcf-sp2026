import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header name="Pablo Costa Sada" />

      <div className="compass">
        <div className="line north"></div>
        <div className="line east"></div>
        <div className="line south"></div>
        <div className="line west"></div>
        <div className="center-image">
        <img src="/center-compass.png" alt="Center" />
        </div>
      </div>
    </>
  );
}