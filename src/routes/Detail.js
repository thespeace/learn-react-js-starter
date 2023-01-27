import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; /*react router dom 에 있는 parameters들을 get할 수 있다. 즉 여기에서는 url에 있는 변수인 id를 받아와 사용할 수 있다는 것!*/

function Detail() {
    const { id } = useParams();
    const getMovie= async()=>{
        const json = await( /*await는 async함수 내부에 있지 않으면 사용할 수 없다.*/
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    };
    useEffect(()=>{
        getMovie();
    }, []);
    return <h1>Detail</h1>;
}
export default Detail;
