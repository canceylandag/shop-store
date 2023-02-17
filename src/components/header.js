import { Link } from "react-router-dom";
const Header = (props) => {

    const state=props.sidebars[0];
    const func=props.sidebars[1]; 

    return (
    <div id="header" onClick={()=>func(!state)}>
  
      <div className="hamburger-button">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-brand">
      <Link to="/"><h3>Canın Dükkanı</h3></Link>
        
      </div>
    </div>
    );
  };
  
  export default Header;
  