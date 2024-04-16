const SalaryCalculator = ({ active, onNewMemberSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('nev');
    const brber = formData.get('brber');
    onNewMemberSubmit({ name, brber });
  };
  return (
    <div>
      <h1>{active} BÉRÉNEK KISZÁMÍTÁSA</h1>

      <form action="">
        <strong><label htmlFor="nev">Családnév</label></strong> <br />
        <input type="text" name="nev" id="nev" />
        <p>Add meg a családtagod nevét!</p>

        <strong><label htmlFor="brber">Bruttó bér</label></strong> <br />
        <input type="number" name="brber" id="brber" />
        <p>Add meg a bruttó béredet!</p>
      </form>
    </div>
  );
};

export default SalaryCalculator;
