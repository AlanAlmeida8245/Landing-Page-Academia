import MulherAcademia from "../assets/mulher-academia.jpg"
import "./Informação.css"

function Informação()
{
    return(
        <div className="containerInfo" id="sobre">
                <div className="imagem-container">
                    <img src={MulherAcademia} alt="imagem-princiapal"  className="imagem"/>
                </div>

                <div className="info">
                        <h1>Junte-se a está familia</h1>
                        <p>A Strongest Academy é uma Academia criada a 3 anos e tem o objetivo de ajudar você a ter uma saude melhor através de exercicios fisicos constantes e bem aplicados e com ajuda de grandes personal trainers para ajudar a efetuar as tarefas e com equipamentos super facéis de usar e de otima qualidade</p>
                </div>

                
        </div>
    )
}   

export default Informação;