/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" >
        <a className="navbar-brand" href="#">
          NRM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active btn-outline-success" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link btn-outline-success" to="/login">
              ADMIN Dashboard
            </Link>
          </li>
            <li className="nav-item">
              <Link className="nav-link btn-outline-success" to="/login-inventory">
                Inventory Management
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  
      <main role="main" style={{ marginTop: 50 }}>
        {/* Main jumbotron for a primary marketing message or call to action */}
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Welcome to Nice Rice Millers</h1>
            <p>
              Nice Rice Millers, located in Mwea, Kirinyaga county, is the biggest private milling institution in the world and the largest rice milling institution in East Africa. We specialize in the production of pure pishori rice. Our production facility was established in the year 2012 and sits on a three-acre piece of land.
            </p>
            <p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more »
              </a>
            </p>
          </div>
        </div>
        <div className="container">
          {/* Example row of columns */}
          <div className="row">
            <div className="col-md-4">
              <h2>Our Capacity</h2>
              <p>
                Nice Millers has the biggest mills in Africa with a capacity of 70 metric tonnes a day. We mill about 70% of the over 40,000 tonnes of rice produced in Mwea Rice Irrigation Scheme every year, which itself produces 80% of the rice consumed in Kenya.
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Storage Facilities</h2>
              <p>
                Our mill also has a warehouse with a monthly storage space of 30,000 metric tonnes of rice. We provide storage facilities and market space for free and also sell farmers’ rice on commission.
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Community Impact</h2>
              <p>
                The factory currently works with over 5,000 farmers and 300 women traders who mill and retail rice on the premises. The business has created employment for 1,000 youth who operate and ferry paddy rice by motorbikes and donkey carts. We currently employ over 80 permanent staff and 250 casual laborers.
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details »
                </a>
              </p>
            </div>
          </div>
          <hr />
        </div>{" "}
        {/* /container */}
      </main>
      <footer className="container">
        <p>© Nice Rice Millers Ltd. 2023</p>
      </footer>
    </>  
  </div>
  
  )
}

export default Homepage