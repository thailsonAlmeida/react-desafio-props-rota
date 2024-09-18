import QueryNavLink from '../QueryNavLink';
import './styles.css';
import { Params } from "react-router-dom";
import iconHome from '../../assets/images/home.svg';
import { Link } from 'react-router-dom';


export default function Header(){
    return(
        <header>
            <div className='container'>
                
                    <QueryNavLink 
                        className={({ isActive } : Params) => isActive ? "nav-notSelectedPrimary" : "nav-SelectedPrimary"} 
                        to={'bemvindo'}>Início
                    </QueryNavLink>

                    <QueryNavLink 
                        className={({ isActive } : Params) => isActive ? "nav-notSelectedPrimary" : "nav-SelectedPrimary"} 
                        to={'produtos'}>Produtos
                    </QueryNavLink>
                    
                    <QueryNavLink 
                        className={({ isActive } : Params) => isActive ? "nav-notSelectedPrimary" : "nav-SelectedPrimary"} 
                        to={'sobrenos'}>Sobre Nós
                    </QueryNavLink>

                    <Link to={'/'}><img src={iconHome} alt="Meu ícone" /></Link>
               
                
            </div>
            
                   
            
        </header>
    );
}