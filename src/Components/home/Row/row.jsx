import Card from "../Card/Card.jsx"
import "../../home/Home.scss"
const img_url="https://image.tmdb.org/t/p/w500"
const Row = ({
    title,
    arr = [

          ],
        }) => (
    <div className="row">
        <h2>{title}</h2>
        <div>

            {
                arr.map((item, index) => (
                    <Card key={index} img={`${img_url}/${item.poster_path}`} />
                ))
            }

        </div>
    </div>
)
export default Row;