function Movie({coverImg, title, summary, genres }) { /* Movie Component가 이 정보들을 Parent Component로부터 받아온다. 하여 받아오는 properties를 적어준다. */
    return <div>
        <img src={coverImg} alt={title}/>
        <h2>{title}</h2> {/* 이 component들은 movies array에 있는 각 movie에서 변형되어서 나온 것을 기억하자*/}
        <p>{summary}</p>
        <ul>
            {genres.map((g,index) => (
                <li key={index}>{g}</li> /* key에는 무조건 고유값만! g는 고유값이 되기 충분하기때문에 기입*/
            ))}
        </ul>
    </div>;
}
export default Movie;
