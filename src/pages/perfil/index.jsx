import Header from "../../components/header/Header"
import { Link } from 'react-router-dom'



function Perfil() {
    return(
        <>
        <Header /> 
        <section className='container'>
      <div>
        <p> Perfil <br />
        <span>Giovana
            Salgado</span> <br />
        </p>
      </div>

      <div>
      <img id="foto" src="https://media.licdn.com/dms/image/D4D03AQEmhqZ3sJ5Zfw/profile-displayphoto-shrink_800_800/0/1688077000220?e=1716422400&v=beta&t=vA9L2o0WgJQ-VKdiLqFA2wgo4oumQKGxuocdxCUe_ZM" alt="" />
      <Link to="https://www.linkedin.com/in/giovanasalgado/"> 
      <img id="linkedin" src="https://th.bing.com/th/id/R.c6e65d793756fdfc3e624c0d8294b3de?rik=x8ZxlZMw%2ff9SFw&riu=http%3a%2f%2fpngimg.com%2fuploads%2flinkedIn%2flinkedIn_PNG32.png&ehk=GIhs4LNu8TECR%2fJaT7p%2fw1VVVI10%2faqqVVai3oR0qFo%3d&risl=&pid=ImgRaw&r=0" alt="" /> 
      </Link>
      
      </div>

    </section>

    <section className="texto">      
      <div>
      <p>Estudante de Sistemas para Internet, da Universidade Católica de Pernambuco, participante do Embarque Digital.</p> <br />
      <p>Já participei da Residência Digital de 2023.1 e ganhei 1° lugar, junto com minha equipe, da competição Onboard, com o aplicativo Kako, criado com o intuito de ajudar psicólogos infantis.</p>
      
      </div>
    </section>
        </>
    )
}

export default Perfil