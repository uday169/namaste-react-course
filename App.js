import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head">Namaste React Title component🚀🚀🚀</h1>
);

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-rvl8dcIzywaUG3PHHEtTAyS9mU4Yi9sT8vx66b1rbnQfQNl3"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul className>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturentCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
        alt="rest image"
      />
      <h3>Burger King</h3>
      <h3>burger, French fries, Ice cream</h3>
      <h3>4.1 stars</h3>
      <h3>Shivaji Nagar</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="res-body">
      <div className="res-search">Search</div>
      <div className="res-container">
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
