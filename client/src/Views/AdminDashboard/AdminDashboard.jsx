import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const AdminDashboard = ()=>{


    
    return(<div>
        <div>
            <h1>Imagen con posteos favoritos/juegos mas jugados</h1>
        </div>
        <button>New Game</button>
        <button>Delete Game</button>
        <button>Modify Admin</button>
        <button>Delete an User</button>
    </div>)
}

export default AdminDashboard