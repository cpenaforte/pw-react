import './Card.css';

const Card = (props) => {
  const { name,value } = props;

  return(
    <div className="card">
      <div className="card-wrapper">
        <h3>{name}</h3>
        <p>{value}</p>
      </div>
    </div>
  )
}


export default Card