/*
    start react route!
    1.npm install react-router-dom
    2.폴더링 및 파일 정리
    3.
*/

import {useEffect, useState} from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    /*useEffect(()=>{
        fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
            .then(response => response.json())
            .then(json => {
                setMovies(json.data.movies);
                setLoading(false);
            });
    },[]);  조금더 게을러져 보자 ==> */

    /*const getMovies = async() => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(()=>{
        getMovies();
    },[]);  더더 게을러져 보자 ==>*/

    const getMovies = async() => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(()=>{
        getMovies();
    },[]);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) =>
                        <Movie
                            key={movie.id} /* 중요! key는 react.js에서만, map안에서 component들을 render할때 사용하는 것*/
                            id={movie.id} /* 동적 url을 만들기위해 props! Home.js => App.js => movie.js*/
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;
