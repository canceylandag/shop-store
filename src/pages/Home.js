
const Home=(props)=>{
    const productsList = props.products[0];
    const setProductsList = props.products[1];


    return(<div className="list-page">
    <div className="addbar">
      <a>Kategori Ekle</a>
    </div>
    <div className="list-side">
      
      <ul>
        {productsList.map((x) => {
          
          return(<div className="list-body product">
          <li>{x.name}</li>
          <li>{x.category}</li>
          <li>{x.price}</li>
          <li>{x.desc}</li>

          <li><span>Düzenle</span><span>Sil</span></li>
          </div>)
          
        })}
      </ul>
    </div>
  </div>)
}

export default Home;