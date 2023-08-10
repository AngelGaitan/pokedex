import { useDispatch, useSelector } from "react-redux"
import store from "../store"
import { useRef } from "react"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'
const HomePage = () => {

//  const trainer = useSelector((reducer) => reducer.trainer )

 const  inputTrainer = useRef()
const dispatch = useDispatch()

const navigate = useNavigate()
 const handleSubmit = e => {
    e.preventDefault()
    
    dispatch(setTrainerG(inputTrainer.current.value.trim())
    , navigate('/pokedex')
    )
// e.target.inputTrainer.value
 } 

 return (
    <div className="homepage">
        <img className="homepage_img" src="/pokeimg.png" alt="" />
        <h2 className="homepage_greeting">Hi trainer</h2>
    <p className="homepage_parr">before to continue pls let me know your name trainer</p>
    <form className="homepage_form" onSubmit={handleSubmit}>
        <input className="homepage_input" ref={inputTrainer} type="text" />
        <button className="homepage_btn"> Gotta catch 'em all</button>
    </form>
    <footer className="homepage_footer">
        <div className="homepage_footer_red"></div>
        <div className="homepage_footer_black"> <img className="homepage_img_bolita" src="/bolita.png" alt="wefhoñ" /></div>
    </footer>
    </div>

  )
}

export default HomePage
