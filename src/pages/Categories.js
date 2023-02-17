const Categories = (props) => {
  const categoryList = props.categories[0];
  const setCategoryList = props.categories[1];

  const openAddDeleteModal = () => {};

  const addCategory = () => {};

  return (
    <div className="list-page">
      <div className="addbar">
        <a onClick={() => openAddDeleteModal()}>Kategori Ekle</a>
      </div>
      <div className="list-side">
        <ul className="list-header">
          <li>İd</li> <li>Kategori Adı</li><li>İşlemler</li>
        </ul>
        <ul>
          {categoryList.map((x) => {
            
            return(<div className="list-body">
            <li>{x.id}</li>
            <li>{x.name}</li>
            <li><span>Düzenle</span><span>Sil</span></li>
            </div>)
            
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
