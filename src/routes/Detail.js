import { useParams } from "react-router-dom"; /*react router dom 에 있는 parameters들을 get할 수 있다. 즉 여기에서는 url에 있는 변수인 id를 받아와 사용할 수 있다는 것!*/

function Detail() {
    const { id } = useParams();
    const
    return <h1>Detail</h1>;
}
export default Detail;
