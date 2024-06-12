import {LOGO_URL} from '../utils/constant' 
const Header=()=>{
    return(
        <div className='header'>
            <div className="logo">
                <img className="header-logo"
                src={LOGO_URL}
        
                
                />
            </div>
            <div className="nav-container">
                <ul>
                    <li>MagicPin Corporate</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header