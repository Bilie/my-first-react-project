import React from 'react';
import './styles/App.scss';
import data from './dummy-data/data';
// import SimpleListItem from './components/simple-list-item';
import SimpleList from './components/simple-list';
import Badge from './components/badge';

const employees = [
  {
      "name": "Jane Doe",
      "role": "designer"
  },
  {
      "name": "Jay Rainafort",
      "role": "developer"
  },
  {
      "name": "John Jaylanfort",
      "role": "devops"
  }
];

// employees[0].name
// employees[0][key]

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
        {/* Using the component and passing props */}
        <Badge text="Admin" theme="orange" size="s" />
        <Badge text="DevOps" />
        <Badge text="Frontend" theme="blue" size="xl" />
      </section>

      <section className="content-section">

      {/* Simple list, stats list */}
      {/* <h2>Offices</h2> */}
        <SimpleList title="Offices" list={data.offices} />

        {/* <ul className="simple-list">
          {
            data.offices.map((office, index) => {
              return (
                <SimpleListItem key={index} item={office} />

                // <li key={index} className="office-list-item">
                //   <p>
                //     <span className="label">City:</span><span>{office.city}</span>
                //   </p>
                //   <p>
                //     <span className="label">Number of employees:</span><span>{office.numberOfEmployees}</span>
                //   </p>
                // </li>
              )
            })
          }
        </ul> */}

        {/* <h2>Cats</h2> */}
        <SimpleList title="Cats" list={[
          {
            petName: 'Nora',
            breed: 'cat'
          }
          ]} />
        {/* <ul className="simple-list">
          <SimpleListItem item={{
            petName: 'Nora',
            breed: 'cat'
          }} />
        </ul> */}

        {/* <h2>Employees</h2> */}
        <SimpleList title="Employees" list={employees} />
        {/* <ul className="simple-list">
          {
            employees.map((employee, index) => {
              return (
                <SimpleListItem key={index} item={employee} />
              )
            })
          }
        </ul> */}
      </section>

      <section className="content-section">
        <h2>Our Products</h2>
        <ul className="products-list">
          {
            data.products.map((product) => {
              return (
                <li key={product.id} className="product-list-item">
                  <h2>{product.name}</h2>
                  {/* <img src={product.image} alt={product.name} className="product-list-item-image" /> */}
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
