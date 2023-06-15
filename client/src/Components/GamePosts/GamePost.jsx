// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// import { getGameById } from "../../Redux/actions";
// import { useParams } from "react-router-dom";


// const GamePost = ()=>{
//     const dispatch= useDispatch()
//     const {id}=useParams()

//     useEffect(()=>{
//         dispatch(getGameById(id))
//     }, [id, dispatch])

//     const game= useSelector(state=>state.game)

//     return(
//         <div>
//             <span>

//             <img src={game.thumbnail} alt="" />
//             <span>
//                 <h1>{game.name}</h1>
//                 <h4>Genres</h4>
//                 {game.genre && game.genre.map(genr=>(<p>{genr.name}</p>))}
//             </span>
//             {/* Introducir filtro por modo de juego aqui */}
//             {/* introducir posteos aqui */}
//             </span>
//         </div>
//     )
// }