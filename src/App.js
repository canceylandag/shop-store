import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import { useEffect, useState } from "react";

const initialCategoryList=[{id:"01",name:"Elektronik"},
                           {id:"02",name:"Kozmetik"},
                           {id:"03",name:"İçecek"}];

const initialProductList=[{name:"Elma",category:"03",price:"10",id:"01",img:["sfsdf.png","sdfs.png"],desc:"dsfsfs sd f sdfss"},
                          {name:"Laptop",category:"01",price:"25000",id:"02",img:["sfsdf.png","sdfs.png"],desc:"sadasd gh gh ghfjhgh"},
                          {name:"Parfüm",category:"01",price:"120",id:"03",img:["sfsdf.png","sdfs.png"],desc:"kı jhgj 8uıuuy"}]

function App() {
const[categoryList,setCategoryList]=useState([]);
const[productList,setProductList]=useState([]);

  useEffect(()=>{
    if(localStorage.getItem("category-list")){
      let obj=JSON.parse(localStorage.getItem("category-list"));
      setCategoryList(obj);
    }else{
      setCategoryList(initialCategoryList);
      localStorage.setItem("category-list",JSON.stringify(initialCategoryList));
    }
    if(localStorage.getItem("product-list")){
      let obj=JSON.parse(localStorage.getItem("product-list"));
      setProductList(obj);
    }else{
      setProductList(initialProductList);
      localStorage.setItem("product-list",JSON.stringify(initialProductList));
      
    }
    
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home products={[productList,setProductList]}/>} />
          <Route path="categories" element={<Categories categories={[categoryList,setCategoryList]} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
