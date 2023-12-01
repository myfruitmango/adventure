import { useNavigate } from "react-router-dom";
import Components from "../components/home";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Components />
      <button onClick={() => navigate("/about")}>Check About</button>
    </>
  );
};

export default Home;
