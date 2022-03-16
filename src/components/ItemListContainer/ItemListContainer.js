import './ItemListContainer.css';
const ItemListContainer = (props) =>{
    const {greeting} = props;
   
    return (
    <div className="container">
        <div className="row">
             <h1>{greeting}</h1>
       </div>
    </div>
    );
}

export default ItemListContainer;