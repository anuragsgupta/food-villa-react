import { Link } from "react-router-dom";
export const Title = () => (
    <>
    <div>
    <a href='/'>
    <img className=' h-24 mr-[100px]  py-1' alt='logo' src='https://image.freepik.com/vetores-gratis/food-house-logo-do-restaurante_7791-250.jpg'
     /> </a>
    </div>
    <div className="flex items-center">
     <h1 id='title' className=" text-4xl   ">Food Villa</h1>
     </div>
     </>
  );
  
  
  const HeaderComponent = () => {
    return (
      <div className="header bg-slate-400 shadow-lg mb-2 ">
      <div className="container  px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
        <Title/>
        <div/>
      
       <ul className=" ml-[200px] flex space-x-4 ">
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/contact">Contacts</Link> </li>
        <li><Link to="/cart">Cart</Link> </li>
        <li><button>Login</button> </li>
       </ul>
        </div>
      </div>
      </div>
       
    );
  };
  
export default HeaderComponent