const Sustained = ({ show }) => {
  if (show) {
    return (
      <div>
        <div>
          <label htmlFor="eltartott">Eltartottak száma:</label>
          <input type="number" name="eltartott" id="eltartott" />

          <label htmlFor="kedv">Kedvezményezettek száma:</label>
          <input type="number" name="kedv" id="kedv" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Sustained;
