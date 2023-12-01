import "./App.css";
import Button from "./components/ui/button";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";

const App = () => {
  const title = "Mango";

  const clicked = () => {
    return alert("button dipencet");
  };

  const Paragraph = () => {
    return (
      <div>
        <i>Mantap Mang</i>
        {/*
        ini sebenarnya running tes namun
        `Do not use <marquee> elements as they can create visual accessibility issues and are deprecated`
        <marquee>Ini berjalan</marquee>
        */}
      </div>
    );
  };

  return (
    <div>
      <section>
        <Navbar title={title} />
        <h1>Hello Welcome To Jungler</h1>
        <Button clicked={clicked} />
        <Footer paragraf={Paragraph} />
      </section>
    </div>
  );
};

export default App;
