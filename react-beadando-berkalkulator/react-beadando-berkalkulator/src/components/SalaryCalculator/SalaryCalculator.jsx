const SalaryCalculator = ({ active }) => {
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
