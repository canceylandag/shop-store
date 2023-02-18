import { Link } from "react-router-dom";
const Header = (props) => {

    const state=props.sidebars[0];
    const func=props.sidebars[1]; 

    return (
    <div id="header" >
  
      <div className="hamburger-button" onClick={()=>func(!state)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-brand">
      <Link to="/"><h3>Canın Dükkanı</h3></Link>
        <nav>
          <ul>
          <li><Link to="/">Ürün Sayfası</Link></li>
            <li><Link to="categories">Kategori Listesi</Link></li>
          </ul>
        </nav>
      </div>
    </div>
    );
  };
  
  export default Header;
  