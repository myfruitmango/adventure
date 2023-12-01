import "./App.css";
import Button from "./components/ui/button";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <h1>Hello Welcome To Jungler</h1>
        <Button />
        <Footer />
      </section>
    </div>
  );
};

export default App;
