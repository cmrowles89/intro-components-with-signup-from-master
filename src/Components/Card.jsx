/* eslint-disable no-undef */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */

import React, { useState, useEffect } from 'react';
import '../Styles/Card.css';

const Card = () => {
  const imgUrl = 'https://dog.ceo/api/breeds/image/random';
  const breedUrl = 'https://dog.ceo/api/breeds/list/random';
  const [breed, setBreed] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
    fetch(breedUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBreed(data);
      });
  }, []);

  useEffect(() => {
    fetch(imgUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImg(data);
      });
  }, []);

  console.log(breed);
  return (
    <div>
      <article className="card-bottom">
        <div className="card-header">
          <img className="author-image" src={img.message} />
          <div className="author-name">{breed.message} </div><br />
        </div>
        <div className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellendus
          unde ex iusto iste eligendi. Fuga architecto ipsum, iste nesciunt repellat,
          modi dolorem laudantium doloribus sed consectetur repudiandae facere maiores.
        </div>
      </article>
    </div>
  );
};

export default Card;
