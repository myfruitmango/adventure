const Button = (props) => {
  return (
    <div>
      <button onClick={() => props.clicked()}>click me!</button>
    </div>
  );
};
export default Button;
