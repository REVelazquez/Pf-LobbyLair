import React from "react";
import { useEffect } from "react";
import Style from "./Home.css"; 
import { useNavigate } from 'react-router-dom';
import GamesBar from "../../Components/GamesBar/GamesBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getAllUsers, orderPostByCreation } from "../../Redux/actions";
import { NavLink } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()

  useEffect(() => {
    localStorage.setItem("isAuthenticated", true)
  }, []);

  useEffect(()=>{
    dispatch(getAllPosts())
    dispatch(getAllUsers())
  }, [])

  const posts = useSelector(state => state.posts);
  const prueba = posts
  const handlerOrder= (event)=>{
    dispatch(orderPostByCreation(event.target.value))
  }
      
      return (
        <div  style={{ top:'0'}} className="flex">
          <div  style={{display:'flex'}} className="mt-auto">
          <GamesBar className=' sticky'/>
          <div>
            <h1>Order:
              <select name="Creation Order" key='Order' onChange={handlerOrder} >
                <option value="None">. . .</option>
                <option value="A">Old first</option>
                <option value="D">New first</option>
              </select>
            </h1>
            {prueba.map((post) => {
              if (post && post.id && post.User) { // Verificación de nulidad para post.User
                return (
                <div key={post.id} style={{ width: '40rem', marginLeft: '5em', marginTop: '.5em', borderColor: 'crimson', borderWidth: '2px' }}>
                  <h1>{post.text}</h1>
                  <div style={{ display: 'flex', marginLeft: '35%' }}>
                    <h1 className="text-black font-bold">Game mode: {post.GameMode.name}</h1>
                    <p style={{ marginRight: '0.5em' }}>Posted by:</p>
                    <NavLink to={`/user/${post.User.id}`}>
                      <p>{post.User.name}</p>
                      </NavLink>
                      </div>
                      <div style={{ display: 'flex', marginLeft: '33%' }}>
                        {/* {liked  === true ? (<HiHeart onClick={handleLike} style={{cursor:'pointer', color:'crimson'}} />) : ( <HiHeart onClick={handleLike} style={{cursor:'pointer'}} />)}            */}
                        <p style={{ marginLeft: '1em' }}>Created: {post.createdAt.slice(0, 10).split('-').reverse().join('-')}</p>
                        </div>
                        </div>
                        );
                      } else {
                        return null;
                      }
                      })}
                      </div>
                      </div>    
                      </div>
                      );
                    };

 


export default Home;
