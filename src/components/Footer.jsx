
import TextField from '@mui/material/TextField';
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MapIcon from '@mui/icons-material/Map';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

function Footer()
{
    return(
        <footer>
                    <div className="logo">
                        <h1>STRONGEST<span>GYM</span></h1>
                    </div>
                <div className="body-footer">
                    
                    <div className='Column-card'>
                        <h2>Redes Sociais</h2>
                        <div className="social-media">
                            <p> <FacebookIcon /> Facebook</p>
                            <p> <InstagramIcon /> Instagram</p>
                            <p> <LinkedInIcon /> Linkedin</p>
                        </div>
                    </div>
                    <div className='Column-card'>
                        <h2>Baixe nosso App</h2>
                        <div className="social-media">
                            <p> <AndroidIcon /> Google Play</p>
                            <p> <AppleIcon /> App Store</p>
                  
                        </div>
                    </div>
                    <div className='Column-card'>
                        <h2>Nossas Localidades</h2>
                        <div className="social-media">
                            <p>Salvador - BA</p>
                            <p>Camaçari - BA</p>
                            <p>Simões Filho - BA</p>
                        </div>
                    </div>
                </div>

        </footer>
    )
}

export default Footer