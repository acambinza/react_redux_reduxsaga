import './styles.scss';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3>Name : {props.user.name}</h3>
                <div>Company: {props.user.company.name}</div>
            </div>
        </div>
    )
}

export default Card;