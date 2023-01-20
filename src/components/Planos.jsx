
import "./Planos.css"
import Button from '@mui/material/Button';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Beneficios from "./Beneficios";

function Planos(){

    return(
        <>
                  <h1 className="tittle" id="planos">Confira nossos Planos</h1>
                 <div className="container-planos">
                  
                        <div className="Card-basico">
                                <div className="titulo-card">
                                    <h1>Básico</h1>
                                    <h2 className="subtitulo">Nosso Plano Basico</h2>
                                </div>
                                <div className="body-card">
                                        <p>Treine a qualquer hora <CheckCircleIcon color="success" /></p>
                                        <p>Roupas da Academia <CheckCircleIcon color="success"/></p>

                                        <p>Área de musculação e aeróbicos <CheckCircleIcon color="success"/></p>
                                        <p>Treinos Onlines <CheckCircleIcon color="success" /></p>
                                        <p>Acesso ilimitado a +1.000 academias da rede <BlockIcon color="error"/></p>
                                        <p>Leve amigos para treinar com você <BlockIcon color="error"/></p>
                                        <p>Cadeira de massagem <BlockIcon color="error" /></p>
                                        <p>Kit de Suplementos gratuito <BlockIcon color="error" /></p>
                                </div>
                                <h2 className="preço">R$39,90</h2>
                               <div className="Botão"><Button variant="contained" color="secondary" size="large" >Assinar</Button></div>
                        </div>

                        <div className="Card-basico">
                                <div className="titulo-card">
                                    <h1>Médio</h1>
                                    <h2 className="subtitulo">Nosso Plano Médio</h2>
                                </div>
                                <div className="body-card">
                                        <p>Treine a qualquer hora <CheckCircleIcon color="success" /></p>
                                        <p>Roupas da Academia <CheckCircleIcon color="success"/></p>

                                        <p>Área de musculação e aeróbicos <CheckCircleIcon color="success"/></p>
                                        <p>Treinos Onlines <CheckCircleIcon color="success" /></p>
                                        <p>Acesso ilimitado a +1.000 academias da rede <CheckCircleIcon color="success" /></p>
                                        <p>Leve amigos para treinar com você <CheckCircleIcon color="success" /></p>
                                        <p>Cadeira de massagem <BlockIcon color="error" /></p>
                                        <p>Kit de Suplementos gratuito <BlockIcon color="error" /></p>
                                </div>
                                <h2 className="preço">R$49,90</h2>
                               <div className="Botão"><Button variant="contained" color="secondary" size="large">Assinar</Button></div>
                        </div>

                        <div className="Card-basico">
                                <div className="titulo-card">
                                    <h1>Avançado</h1>
                                    <h2 className="subtitulo">Nosso Plano Premium</h2>
                                </div>
                                <div className="body-card">
                                        <p>Treine a qualquer hora <CheckCircleIcon color="success" /></p>
                                        <p>Roupas da Academia <CheckCircleIcon color="success"/></p>

                                        <p>Área de musculação e aeróbicos <CheckCircleIcon color="success"/></p>
                                        <p>Treinos Onlines <CheckCircleIcon color="success" /></p>
                                        <p>Acesso ilimitado a +1.000 academias da rede <CheckCircleIcon color="success"/></p>
                                        <p>Leve amigos para treinar com você <CheckCircleIcon color="success"/></p>
                                        <p>Cadeira de massagem <CheckCircleIcon color="success"/></p>
                                        <p>Kit de Suplementos gratuito <CheckCircleIcon color="success"/></p>
                                </div>
                                <h2 className="preço">R$59,90</h2>
                               <div className="Botão"><Button variant="contained" color="secondary" size="large">Assinar</Button></div>
                        </div>
                   
                </div>
                 
         </>       
         
    )
}

export default Planos;