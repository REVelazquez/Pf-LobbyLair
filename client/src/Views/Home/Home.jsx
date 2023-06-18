import React, { useEffect } from "react";
import GamesBar from "../../Components/GamesBar/GamesBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, orderPostByCreation } from "../../Redux/actions";
import { NavLink } from "react-router-dom";


const Home = () => {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getAllPosts())
  }, [dispatch])

  const posts=useSelector(state=>state.posts)

  const handlerOrder= (event)=>{
    dispatch(orderPostByCreation(event.target.value))
  }

  return (
    <div  style={{position:'sticky', top:'0'}} className="flex">
      <div  style={{display:'flex'}} className="mt-auto">
      <GamesBar/>
      <div>
        <h1>Order:
          <select name="Creation Order" key='Order' onChange={handlerOrder} >
            <option value="None">. . .</option>
            <option value="A">Old first</option>
            <option value="D">New first</option>
          </select>
        </h1>
      {posts?.map(({id, createdAt, GameMode, text, User})=>{
        return(
          <div key={id} style={{width:'40rem', marginLeft:'5em', marginTop:'.5em', height:'6em', borderColor:'crimson', borderWidth:'2px'}}>
            <h1>{text}</h1>
            <div style={{display:'flex',  marginLeft:'35%'}}>
            <h1 className="text-black font-bold">Game mode: {GameMode.name}</h1>

            <p style={{marginRight:'0.5em'}}>Posted by:</p>
            <NavLink  to={`/user/${User.id}`}>
            <p>{User.name}</p>
            </NavLink>
            </div>
            <div style={{display:'flex', marginLeft:'33%'}}>
              {/* {liked  === true ? (<HiHeart onClick={handleLike} style={{cursor:'pointer', color:'crimson'}} />) : ( <HiHeart onClick={handleLike} style={{cursor:'pointer'}} />)}            */}
            <p style={{marginLeft:'1em'}}>Created: {createdAt.slice(0, 10).split('-').reverse().join('-')}</p>

            </div>



          
          </div>
        )
      })}
      </div>
      </div>
      
    </div>
  );
};

 


export default Home;
