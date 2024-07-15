import { useNavigate } from 'react-router-dom';
import avatr from './src/avatar.png'
import './CTTobbar.css';
const CTTobbar =()=>{
    const navigate = useNavigate();
   
    return(
       <div className="mian4">
            <img src={avatr}></img><label>Connex IT  User ( System Admin ) </label>
       </div>
    );
}
export default CTTobbar