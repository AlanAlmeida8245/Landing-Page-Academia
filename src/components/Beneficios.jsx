
import "./Beneficios.css" //importa o css
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import PersonIcon from '@mui/icons-material/Person';
import RestaurantIcon from '@mui/icons-material/Restaurant';

function Beneficios()
{

        return(
            <section className="background-beneficios" id="beneficios">
                    <div className="beneficios-card">
                     <FitnessCenterIcon sx={{ fontSize: 60 }} color="secondary" />
                        <h1>  Equipamentos de Primeira Linha</h1>
                    </div>
                    <div className="beneficios-card">
                     <SportsGymnasticsIcon sx={{ fontSize: 60 }} color="secondary" />
                        <h1>  Aulas Dinamicas</h1>
                    </div>
                    <div className="beneficios-card">
                     <PersonIcon sx={{ fontSize: 60 }} color="secondary" />
                        <h1>  Personal Trainer</h1>
                    </div>
                    <div className="beneficios-card">
                     <SelfImprovementIcon sx={{ fontSize: 60 }} color="secondary" />
                        <h1>  Treinos Onlines e Yoga Grátis</h1>
                    </div>
                    <div className="beneficios-card">
                     <PriceCheckIcon sx={{ fontSize: 60 }} color="secondary" />
                        <h1>  Pague a Mensalidade direto pelo App</h1>
                    </div>
                    <div className="beneficios-card">
                     <RestaurantIcon sx={{ fontSize: 50 }} color="secondary" />
                        <h1>  Acesso a Dieta balanceada</h1>
                    </div>
            </section> 
        )

}

export default Beneficios;