import React from 'react';
import './styles/App.scss';
import data from './dummy-data/data';

console.log(data);

const currencyFormatter = new Intl.NumberFormat(
  'de-DE',
  {
    style: 'currency',
    currency: 'EUR'
  });

function App() {
  return (
    <div className="App">
      <div className="hero">
        <h1>Company name: {data.name}</h1>
        <p className="lead">Company moto: {data.moto}</p>
      </div>

    <section className="content-section">
      <h2>Offices</h2>

      <ul className="offices-list">
        {
          data.offices.map((office, index) => {
            return (
              <li key={index} className="office-list-item">
                <p>
                  <span className="label">City:</span><span>{office.city}</span>
                </p>
                <p>
                  <span className="label">Number of employees:</span><span>{office.numberOfEmployees}</span>
                </p>
              </li>
            )
          })
        }
        {/* <li>
          <p>
            City: {data.offices[0].city}
          </p>
          <p>
            Number of employees: {data.offices[0].numberOfEmployees}
          </p>
        </li> */}
      </ul>
    </section>

    <section className="content-section">
      <h2>Our Products</h2>
      <ul className="products-list">
        {
          data.products.map((product) => {
            return (
              <li key={product.id} className="product-list-item">
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} className="product-list-item-image" />
                <p className="product-list-item-description">{product.description}</p>

                <p className="product-list-item-price product-list-item-price--old">{currencyFormatter.format(product.oldPirce)}</p>
                <p className="product-list-item-price">{currencyFormatter.format(product.price)}</p>

                {
                  product.inStock ?
                  <span className="product-list-item-stock-label">In stock</span> :
                  <span className="product-list-item-stock-label product-list-item-stock-label--out">Sold out</span>
                }
              </li>
            )
          })
        }
        {/* <li>
          <h2>{data.products[0].name}</h2>
          <img src={data.products[0].image} alt={data.products[0].name} />
          <p>{data.products[0].description}</p>
        </li> */}
      </ul>
    </section>
    </div>
  );
}

export default App;
