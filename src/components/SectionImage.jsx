
import "./SectionImage.css"
import Pessoas from "../assets/pessoas.png"
import Button from '@mui/material/Button';

function SectionImage(){
    return(
                <section className="sessao-topo">
                     <div className="img">
                        <img src={Pessoas} alt="pessoas"/>
                    </div>
                    <div className="info-principal">
                        <h1><span>Bem-Vindo a </span>STRONGEST <span>GYM</span></h1>
                        <p>Sua Academia completa com equipamentos e personal trainer, inscreva-se já</p>
                        <div className="botao"><Button color="secondary" variant="contained" size="large">Matricule-se</Button></div>
                    </div>
                    
                </section>
             
            
    )
}



export default SectionImage;