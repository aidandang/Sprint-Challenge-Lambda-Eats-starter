import React from 'react';
import ivan from './img/ivan.jpg';
import naitian from './img/naitian.jpg';
import louis from './img/louis.jpg';
import colnutrition from './img/colnutrition.jpg';
import salad from './img/salad.jpg';
import starbucks from './img/starbucks.jpg';
import { Link } from 'react-router-dom';

export default function Home(props) {
  
  return <>
    <div id="hero" className="container carousel slide d-none d-sm-block" data-ride="carousel">
      <h3 className="col-12 text-danger my-3">Hot Deals</h3>
      <ol className="carousel-indicators">
        <li data-target="#hero" data-slide-to="0" className="active"></li>
        <li data-target="#hero" data-slide-to="1"></li>
        <li data-target="#hero" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner custom-height">
        <div className="carousel-item active">
          <img className="d-block w-100" src={ivan} alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="text-white">CHOOSE ANY 2 FOR <span className="text-danger">$5.99</span></h1>
            <Link to="/pizza" className="btn btn-info">Order Now</Link>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={naitian} alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="text-white">CHOOSE ANY 2 FOR <span className="text-danger">$5.99</span></h1>
            <Link to="/pizza" className="btn btn-info">Order Now</Link>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={louis} alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="text-white">CHOOSE ANY 2 FOR <span className="text-danger">$5.99</span></h1>
            <Link to="/pizza" className="btn btn-info">Order Now</Link>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#hero" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#hero" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a> 
    </div>
    <div className="container">
      <h3 className="col-12 text-danger mt-3">Delivery Foods in Gotham City</h3>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card">
            <img className="card-img-top" src={colnutrition} alt="McDonald's" />
            <div className="card-body">
              <h5 className="card-title">McDonald's</h5>
              <p className="card-text"><span className="text-danger">$8.99</span> - McDonald's - Fast Food - Burger</p>
              <div className="border border-info rounded py-1 px-3">20 - 30 mins</div><div className="border border-info rounded py-1 px-3 mt-3"><span className="text-danger">$3.99</span> Delivery Fee</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card">
            <img className="card-img-top" src={salad} alt="Green Salad" />
            <div className="card-body">
              <h5 className="card-title">Green Salad</h5>
              <p className="card-text"><span className="text-danger">$8.99</span> - McDonald's - Fast Food - Burger</p>
              <div className="border border-info rounded py-1 px-3">20 - 30 mins</div><div className="border border-info rounded py-1 px-3 mt-3"><span className="text-danger">$3.99</span> Delivery Fee</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card">
            <img className="card-img-top" src={starbucks} alt="Starbucks" />
            <div className="card-body">
              <h5 className="card-title">Starbucks</h5>
              <p className="card-text"><span className="text-danger">$8.99</span> - McDonald's - Fast Food - Burger</p>
              <div className="border border-info rounded py-1 px-3">20 - 30 mins</div><div className="border border-info rounded py-1 px-3 mt-3"><span className="text-danger">$3.99</span> Delivery Fee</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card">
            <img className="card-img-top" src={salad} alt="Green Salad" />
            <div className="card-body">
              <h5 className="card-title">Green Salad</h5>
              <p className="card-text"><span className="text-danger">$8.99</span> - McDonald's - Fast Food - Burger</p>
              <div className="border border-info rounded py-1 px-3">20 - 30 mins</div><div className="border border-info rounded py-1 px-3 mt-3"><span className="text-danger">$3.99</span> Delivery Fee</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card">
            <img className="card-img-top" src={starbucks} alt="Starbucks" />
            <div className="card-body">
              <h5 className="card-title">Starbucks</h5>
              <p className="card-text"><span className="text-danger">$8.99</span> - McDonald's - Fast Food - Burger</p>
              <div className="border border-info rounded py-1 px-3">20 - 30 mins</div><div className="border border-info rounded py-1 px-3 mt-3"><span className="text-danger">$3.99</span> Delivery Fee</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card">
            <img className="card-img-top" src={colnutrition} alt="McDonald's" />
            <div className="card-body">
              <h5 className="card-title">McDonald's</h5>
              <p className="card-text"><span className="text-danger">$8.99</span> - McDonald's - Fast Food - Burger</p>
              <div className="border border-info rounded py-1 px-3">20 - 30 mins</div><div className="border border-info rounded py-1 px-3 mt-3"><span className="text-danger">$3.99</span> Delivery Fee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}