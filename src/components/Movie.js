import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres }) { /* Movie Component가 이 정보들을 Parent Component로부터 받아온다. 하여 받아오는 properties를 적어준다.
                                                            props는 object일 뿐이고, 우리는 그걸 열어서 item을 꺼내쓰는 것이라는 걸 기억하기!*/
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2> {/* 이 component들은 movies array에 있는 각 movie에서 변형되어서 나온 것을 기억하자*/}
            <p>{summary}</p>
            <ul>
                {genres.map((g,index) => (
                    <li key={index}>{g}</li> /* key에는 무조건 고유값만! g는 고유값이 되기 충분하기때문에 기입*/
                ))}
            </ul>
        </div>
    );
}

Movie.propsTypes = {
    id:PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
