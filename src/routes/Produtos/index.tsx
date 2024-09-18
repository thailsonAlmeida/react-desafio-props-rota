import QueryNavLink from '../../components/QueryNavLink';
import './styles.css'
import { Outlet, Params } from "react-router-dom";

export default function Produtos(){
    return(
        <>

            <main className='containerBody customSubMenu'>
                <QueryNavLink 
                    className={({ isActive } : Params) => isActive ? "nav-notSelectedSub" : "nav-SelectedSub"} 
                    to={'computadores'}>Computadores
                </QueryNavLink>

                <QueryNavLink 
                    className={({ isActive } : Params) => isActive ? "nav-notSelectedSub" : "nav-SelectedSub"} 
                    to={'eletronicos'}>Eletrônicos
                </QueryNavLink>

                <QueryNavLink 
                    className={({ isActive } : Params) => isActive ? "nav-notSelectedSub" : "nav-SelectedSub"} 
                    to={'livros'}>Livros
                </QueryNavLink>
            </main>
            <Outlet />
        
        </>
        
    );
}