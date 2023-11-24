import React, { useEffect, useState } from 'react';
import GetDetailMovie from '../../utils/networks/GetDetailMovie';
import { useParams } from 'react-router-dom';
import Button from '../../components/ui/Button';
import styled from 'styled-components';

const Detail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const [genres, setGenres] = useState([])

    const url_image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
    const backdropUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    const [productionCompanies, setProductionCompanies] = useState([]);

    const getDetail = async (id) => {
        const data = await GetDetailMovie(id)
        await setMovie(data)
        await setGenres(data.genres)
        await setProductionCompanies(data.production_companies);
    }

    useEffect(() => {
        getDetail(id)
    }, [id]);

    console.log(movie);

    return (
        <DetailStyle className="container"  >
            <section className="hero" style={{ backgroundImage: `url(${backdropUrl})` }}>
            <div className="hero__overlay">
                <div className="hero__left">
                    <h2 className="hero__title">{movie.original_title}</h2>
                    <h3 className="hero__tagline">{movie.tagline}</h3>
                    <p className="hero__desc">{movie.overview}</p>
                    {
                        genres.map(
                            function (item) {
                                return (
                                    <p className="hero__genre">{item.name}</p>
                                )
                            }
                        )
                    }
                    <p className="hero__date">{movie.release_date}</p>
                    <div className="hero__production-companies">
                        <h4>Production Companies:</h4>
                        <ul>
                            {productionCompanies.map((company) => (
                                <li key={company.id}>
                                    {company.logo_path && (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w92/${company.logo_path}`}
                                            alt={`${company.name} Logo`}
                                        />
                                    )}
                                    <span>{company.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Button variant="primary">Wacth</Button>
                </div>
            </div>
                <div className="hero__right">
                    <img className="hero__image" src={url_image} alt='' />
                </div>
            </section>
        </DetailStyle>
    );
}

const DetailStyle = styled.div`
    .container {
         margin: 1rem;
    }

    .hero {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

  .hero__left {
    color: #fff; 
  }

  .hero__title {
    font-size: 2.5rem;
  }

  .hero__tagline {
    font-size: 1.5rem;
  }

  .hero__desc {
    font-size: 1.2rem;
  }

  .hero__genres {
    margin-bottom: 1rem;

    .hero__genre {
      color: #fff;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      font-size: 1rem;
      font-weight: bold;
      padding: 0.3rem 0.5rem;
      background-color: #2c3e50;
      border-radius: 5px;
    }
  }

  .hero__date {
    color: #fff;
    margin-bottom: 1rem;
    font-size: 0.80rem;
  }

  .hero__status {
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .hero__production-companies {
    margin-top: 1rem;

    h4 {
      color: #fff;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;

        img {
          width: 30px;
          height: 30px;
          margin-right: 0.5rem;
          border-radius: 5px;
        }

        span {
          color: #fff;
        }
      }
    }
  }

`

export default Detail;
