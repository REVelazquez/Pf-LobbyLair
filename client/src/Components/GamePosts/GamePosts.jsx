import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import queryString from 'query-string';
import { useDispatch, useSelector } from "react-redux";
import GamesBar from "../GamesBar/GamesBar";
import { getPostsWithPagination, createPost } from "../../Redux/actions";
import Loader from "../Loader/Loader";

const GamePosts = () => {
  const location = useLocation();
  const { gameId, gameModeId } = queryString.parse(location.search);
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const stateUser = useSelector((state) => state.user);
  const currentId=stateUser.id


//------------------esto es para el form------------------------------//
  const [userId, setUserId] = useState(stateUser.id);
  const [text, setText] = useState("");
  const [gameid, setGameid] = useState(gameId);
  const [gamemodeid, setGamemodeid] = useState(gameModeId);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(createPost({ text, userid: userId, gameid, gamemodeid }))

      if (response.ok) {
        // El post se creó exitosamente, puedes realizar alguna acción aquí si es necesario
        console.log("El post se creó exitosamente");
      } else {
        // Hubo un error al crear el post, puedes manejarlo de acuerdo a tus necesidades
        console.error("Error al crear el post");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
    setText("");
  };

//----------posts con paginacion------------------//
//-------constantes y estados-----
const [currentPage, setCurrentPage]=useState(1)
const [btnNext, setBtnNext]=useState(false)
const [btnPrev, setBtnPrev]=useState(true)
const [loading, setLoading]=useState(true)

const post=useSelector(state=>state.pagePosts)
const pagedPosts=post.posts
console.log(pagedPosts);
//----modificacion de estados----///
useEffect(()=>{
  setLoading(true)
  dispatch(getPostsWithPagination(currentPage, gameid, gamemodeid))
  .then(()=>setLoading(false))
}, [currentPage, dispatch, post])


useEffect(()=>{
  if(currentPage === 1){
    setBtnNext(true);
    setBtnPrev(false)
}else if(currentPage === +post.totalPages){
    setBtnNext(true)
    setBtnPrev(false)
}else{
    setBtnNext(false)
    setBtnPrev(false)
}
})

const pages=Array.from({ length: post.totalPages }, (_, index) => index + 1)

const handleOnClick= (event)=>{
  const selectedPage=parseInt(event.target.value)
  if(selectedPage !== currentPage){
      setCurrentPage(selectedPage)

  }
}
const handleNext = (event)=>{
  if(currentPage !== post.totalPages){
    const nextPage=currentPage+1;
    setCurrentPage(nextPage)
  }
}

const handlePrev = ()=>{
  if(currentPage>1){
    const prevPage=currentPage-1;
    setCurrentPage(prevPage)
}
}

  return (
    <div className="flex ml-[15rem] my-[5rem]">
      <GamesBar/>
      <div>
      <form style={{marginTop:'0.75em'}} onSubmit={handleSubmit}>
        <input
           className="items-center justify-center w-[350px] h-[50px] mx-auto my-[5rem] bg-gray-300 rounded-lg p-3 mt-[5rem] ml-[10rem] overflow-wrap-break-word"
        style={{
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
        }}
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Ingrese el texto del post"
        />
        <button className="m-2 bg-black text-white border-none rounded-[5rem] p-3 text-l font-bold cursor-pointer" type="submit">Crear Post</button>
      </form>
      <button onClick={handlePrev} disable={btnPrev} className="bg-black text-white border-none rounded-[5rem] p-3 text-l font-bold cursor-pointer m-2"> Prev </button>
      {loading && <Loader/>}
      {post.totalPages > 1 && pages?.map(e=><button style={{marginLeft:'5px', marginRight:'5px'}} key={e} value={e} onClick={handleOnClick} disabled={currentPage===e}>{e}</button>)}
      <button onClick={handleNext} disable={btnNext} className="bg-black text-white border-none rounded-[5rem] p-3 text-l font-bold cursor-pointer m-2"> Next </button>
      <div className="p-2">
      {pagedPosts?.map(({ id, createdAt, text, User }) => {
        if (User) {
          return (
<div
  key={id}
  className="items-center justify-center w-[300px] h-[110px] mx-auto my-[5rem] bg-gray-300 rounded-lg p-3 ml-[10rem] overflow-hidden"
  style={{
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
  }}
>
  <h1 className="text-black font-bold truncate">{text}</h1>
  <p className="text-black font-bold truncate">Posted by:</p>
  <NavLink to={`/profile/${User.id}`}>
    <p className="text-black font-bold truncate">{User.name}</p>
  </NavLink>
  <p className="text-black font-bold truncate">
    Created: {createdAt.slice(0, 10).split("-").reverse().join("-")}
  </p>
</div>
    )
  } else {
    return null; // O puedes mostrar un mensaje de error
  }
})}
      </div>
      </div>
    </div>
  );
};

export default GamePosts;
