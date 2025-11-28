function Prices () {
    return (
        <section id="price" className="section price">
    <h2>Preise</h2>
    <div id="tablePrices" className="table">
      <table>
        <thead>
          <tr>
            <th>Therapie</th>
            <th>Preis pro Stunde</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gesprächstherapie</td>
              <td>2000€</td>
            </tr>
            <tr>
              <td>Kognitive Verhaltenstherapie</td>
              <td>30€</td>
            </tr>
            <tr>
              <td>Stressbewältigung</td>
              <td>20€</td>
            </tr>
            <tr>
              <td>Angstbewältigung</td>
              <td>400€</td>
            </tr>
          </tbody>
        </table>
      </div>
  </section>
    )
}

export default Prices;