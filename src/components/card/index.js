import '../../App.css';
import "./index.css"
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../store/cart';
import { useDispatch } from 'react-redux'

function Card(props) {


  const dispatch = useDispatch()

  const nevigate = useNavigate()

  const { title, price, description, image, id } = props

  return (

    <div class="col-3 cardd">
      {console.log("id", id)}
      <img className='cardImg' src={image}></img><br></br>
      <p>{price}</p>
      <h4>{title}</h4>
      <p>{description}</p>

      <button onClick={() => nevigate(`/details/${id}`)}>Details</button>
      <button onClick={() => dispatch(addToCart(props))}>Add</button>
    </div>

  )
}

export default Card;