import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://cdn.technadu.com/wp-content/uploads/2018/07/Amazon-Prime-Day-2018-Featured-Banner.jpg"
        className="home__image"
        alt="kh rakib"
      />

      <div className="home__row">
        <Product
          id="124322"
          title="lorem ispum dolor sit amet"
          price={22.43}
          rating={5}
          image="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
        <Product
          id="124322"
          title="lorem ispum dolor sit amet"
          price={22.43}
          rating={5}
          image="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
      </div>

      <div className="home__row">
        <Product
          id="124322"
          title="lorem ispum dolor sit amet"
          price={22.43}
          rating={5}
          image="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
        <Product
          id="124322"
          title="lorem ispum dolor sit amet"
          price={22.43}
          rating={5}
          image="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />

        <Product
          id="124322"
          title="lorem ispum dolor sit amet"
          price={22.43}
          rating={5}
          image="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
      </div>
    </div>
  );
};

export default Home;
