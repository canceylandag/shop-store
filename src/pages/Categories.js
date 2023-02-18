import { useState } from "react";
import {CustomModal} from "../components/modal"
const initialForm={
  id:"",
  name:""
}

const Categories = (props) => {
  const categoryList = props.categories[0];
  const setCategoryList = props.categories[1];

  const[showModal,setShowModal]=useState(false);
  const[showDeleteModal,setShowDeleteModal]=useState(false);
  const[formData,setFormData]=useState(initialForm);
  const[selectedId,setSelectedId]=useState(0);
  const[formSubmitted,setFormSubmitted]=useState(false);

  

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormSubmitted(true);
    

    if (formData.id) {
      if (!(formData.name && formData.id)) {
        return;
      }
      const _list=[...categoryList];
      const index=_list.findIndex(x=>x.id===formData.id);
      _list[index]=formData;
      setCategoryList(_list);
      localStorage.setItem("category-list",JSON.stringify(_list));

      // setList([...list.filter(x=>x.id!==personForm.id),{...personForm}])
    }else{
      if (!(formData.name)) {
        return;
      }
      const biggestElementId=categoryList.length>0?categoryList.sort((a,b)=>b.id-a.id)[0].id:0;
      setCategoryList([...categoryList, { ...formData, id: (biggestElementId + 1) }]);
      localStorage.setItem("category-list",JSON.stringify([...categoryList, { ...formData, id: (biggestElementId + 1) }]));
    }

    resetForm();
    setShowModal(false);
  }

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const deleteCategory= () => {
    if(selectedId!==0){
      const deletedList=[...categoryList].filter(x=>x.id!==selectedId);
      setCategoryList(deletedList);
    localStorage.setItem("category-list",JSON.stringify(deletedList));

    }
  };
  const resetForm=()=>{
    setFormData(initialForm);
  };
  return (
    <div className="list-page">
      <div className="addbar">
        <h1>Kategori Listesi</h1>
        <a onClick={() => setShowModal(true)}>Kategori Ekle</a>
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
            <li><span onClick={()=>{setShowModal(true);setFormData(x)}}>Düzenle</span><span onClick={()=>{setShowDeleteModal(true);setSelectedId(x.id);}}>Sil</span></li>
            </div>)
            
          })}
        </ul>
      </div>
      {showModal &&
        <CustomModal closeModal={()=>{setShowModal(false);resetForm();}}>
          <form>
            <div>
              <label>Kategori Adı</label><br />
              <input type="text" value={formData.name} onChange={handleForm} name="name" />
              {(!formData.name) && formSubmitted &&
                <div>Zorunlu Alanı doldurun</div>
              }
            </div>
            
           
              <button onClick={(e) => handleSubmit(e)}>
                { formData.id?
                  <span>Güncelle</span>
                  :
                  <span>Kaydet</span>
                 }
              </button>
           
            <button onClick={()=>{setShowModal(false);resetForm();}}>Hayır</button>
          </form>
        </CustomModal>}
      {showDeleteModal&&
          <CustomModal closeModal={()=>{setShowDeleteModal(false);setSelectedId(0);}}>
          <div>
          Veriyi Silmek istediğinizden emin misiniz?
          </div>
          <div>
          <button onClick={()=>deleteCategory()}>Evet</button>
            <button onClick={()=>{setShowDeleteModal(false);setSelectedId(0);}}>Hayır</button>
          </div>
          </CustomModal>}
    </div>
  );
};

export default Categories;
