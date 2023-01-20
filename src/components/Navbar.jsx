
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react"

function Navbar()
{
    
    const [openSide, setOpenSide] = useState(false);

    function toggleSideBar(){
        if(openSide === false){
            setOpenSide(true); //ira indentificar que a sidebar está ativa
        }
        else if(openSide === true){
            setOpenSide(false)
        }
        
    }
          
    return(
        <>
        {openSide ? (
                <div className="sidebar">
                <ul className="sidebar-options">
                    <li><a href="#sobre">Sobre Nois</a></li>
                    <li><a href="#planos">Planos</a></li>
                    <li><a href="#beneficios">Beneficios</a></li>
                    <li><a href="#">Faça Parte</a></li>
                </ul>
            </div>
        ): (
                <></>
        )
        }
            

        <nav className="barra">
                     <div className="logo2">
                        <h1>STRONGEST<span>GYM</span></h1>
                    </div>
                <ul>
                    <li><a href="#sobre">Sobre Nois</a></li>
                    <li><a href="#planos">Planos</a></li>
                    <li><a href="#beneficios">Beneficios</a></li>
                    <li><a href="#">Faça Parte</a></li>
                </ul>
                <div className="icon-hamburguer" onClick={toggleSideBar}>
                    <MenuIcon sx={{fontSize: 50}}/>
                </div>
        </nav>

    </>   
    )

}


export default Navbar