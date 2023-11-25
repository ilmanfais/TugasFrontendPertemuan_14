import React, { useState } from "react";
import Button from "../ui/Button";
import styled from "styled-components";

const AddMovie = (props) => {
  //props yang data nya berasal dari main
  const { movies, setMovies } = props;

  // state yang menghandle proses inputan
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");

  // arrow function manghandlw inputan title
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // arrow function menghandle inputan date
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const genreOptions = ["Action", "Drama", "Horor", "Comedy"];
  // arrow func menghandle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" && date === "") {
      alert("title dan date kosong");
    } else if (title === "") {
      alert("title kosong");
    } else if (date === "") {
      alert("date kosong");
    } else {
      const movie = {
        id: 4,
        title: title,
        date: date,
        Image: image,
        genre: genre,
      };
      setMovies([...movies, movie]);
    }
  };

  return (
    <AddMovieStyle>
      <div className="container">
        <form className="addmovie" onSubit={handleSubmit}>
          <h2>Add Movie</h2>
          <input
            className="addmovie__input"
            id="title"
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="Masukkan Title"
          />
          <input
            className="addmovie__input"
            id="date"
            type="date"
            value={date}
            onChange={handleDate}
          />
          <input
            className="addmovie__input"
            id="image"
            type="text"
            value={image}
            onChange={handleImage}
            placeholder="Masukkan Link"
          />
          <select
            className="addmovie__input"
            id="genre"
            value={genre}
            onChange={handleGenre}
            placeholder="Masukkan genre"
          >
            <option value="" disabled>
              Select a genre
            </option>
            {genreOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}

          </select>
          <Button variant="primary">simpan</Button>
        </form>
      </div>
    </AddMovieStyle>
  );
};

const AddMovieStyle = styled.div`
  .container {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .addmovie {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background: linear-gradient(90deg, rgba(52,150,63,1) 0%, rgba(0,0,0,1) 50%, rgba(52,150,63,1) 100%);
      color: #fff;
        border-radius: 15px;
        color: white;
    }

    .addmovie__title {
        margin-top: 1rem;
        text-align: center;
        font-size: 1.6rem;
        color: white;
    }

    .addmovie__input {
        display: inline-block;
        box-sizing: border-box;
        border-radius: 10px;
        border-style: none;
        padding: 10px;
        margin: 1rem;
        width: 250px;
        height: 40px;
    }

    @media (min-width: 768px) {
        .addmovie {
            margin: 8px;
            max-width: 330px;
            height: auto;
        }
        .addmovie__input {
            width: 260px;
        }
    }
`

export default AddMovie;
