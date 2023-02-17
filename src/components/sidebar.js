import { Link } from "react-router-dom";

const Sidebar = () => {

    

    return (
    <div id="sidebar">
  
      <nav>
        <ul>
            <li><Link to="/">Ürün Sayfası</Link></li>
            <li><Link to="categories">Kategori Listesi</Link></li>

        </ul>
      </nav>
  
    </div>
    );
  };
  
  export default Sidebar;
  