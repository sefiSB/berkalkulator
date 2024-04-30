const LabeledInput = ({ active, label, msg, onChange, type,name }) => {
  const changeHandler = () => {
    let name = document.querySelector("#nev").value;
    let brber = document.querySelector("#brber").value;
    onChange(name, +brber);
  };

  return (
    <div>
      <strong>
        <label htmlFor="nev">{label}</label>
      </strong>
      <br />
      <input
        type={type}
        name={name}
        id={name}
        value={type === "text" ? active.name : active.brber}
        onChange={changeHandler}
      />
      <p>{msg}</p>
    </div>
  );
};
export default LabeledInput;
