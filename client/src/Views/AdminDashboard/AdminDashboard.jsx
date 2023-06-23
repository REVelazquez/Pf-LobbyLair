import { useState } from "react"
import AddAdmin from "../../Components/Add Admin/AddAdmin"
import DeleteGame from "../../Components/DeleteGame/DeleteGame"
import DeleteUser from "../../Components/DeleteUser/DeleteUser"
import NewGame from "../../Components/NewGame/NewGame"
import DeleteAdmin from "../../Components/Delete Admin/Delete Admin"


const AdminDashboard = ()=>{
    const [show, setShow] = useState(false)
    const [showD, setShowD]=useState(false)
    const [showU, setShowU]=useState(false)
    const [showM, setShowM]=useState(false)
    const [showA, setShowA]=useState(false)


    const handleNewGame=()=>{
       if(!show) setShow(true)
       if(show) setShow(false)
       if(showD || showM || showU || showA){ 
        setShowD(false)
        setShowU(false)
        setShowM(false)
        setShowA(false)
    }
    }
    const handleOnNewGame= ()=>{
        setShow(false)
    }
    const handleDeleteGame=()=>{
        if(!showD) setShowD(true)
        if(showD)setShowD(false)
        if(show || showM || showU || showA){ 
            setShow (false)
            setShowU(false)
            setShowM(false)
            setShowA(false)
        }
    }

    const handleOnDelete=()=>{
        setShowD(false)
    }

    const handleAddAdmin=()=>{
        if(!showM) setShowM(true)
        if(showM)setShowM(false)
        if(show || showD|| showU || showA){ 
            setShow (false)
            setShowU(false)
            setShowD(false)
            setShowA(false)
        }
    }

    const handleAddedAdmin=()=>{
        setShowM(false)
    }
    const handleDeleteUser=()=>{
        if(!showU) setShowU(true)
        if(showU)setShowU(false)
        if(show || showD|| showM || showA){ 
            setShow (false)
            setShowM(false)
            setShowD(false)
            setShowA(false)
        }
    }

    const afterDelete=()=>{
        setShowU(false)
    }
    
    const handleDeleteAdmin=()=>{
        if(!showA) setShowA(true)
        if(showA)setShowA(false)
        if(show || showD|| showM || showU){ 
            setShow (false)
            setShowM(false)
            setShowD(false)
            setShowU(false)
        }
    }
    const afterDeleteAdmin=()=>{
        setShowA(false)
    }
  
    return(<div>
        <div className="mb-4">
            <h1>Imagen con posteos favoritos/juegos mas jugados</h1>
        </div>
        <div>
            <button className="ml-4 mr-4 cursor-pointer" onClick={handleNewGame}><h1>New Game</h1></button>
            <button className="ml-4 mr-4 cursor-pointer" value='Del game' onClick={handleDeleteGame}>Delete Game</button>
            <button className="ml-4 mr-4 cursor-pointer" value='Mod Admin' onClick={handleAddAdmin}>Add Admin</button>
            <button className="ml-4 mr-4 cursor-pointer" value='Del User' onClick={handleDeleteAdmin}>Delete an admin</button>
            <button className="ml-4 mr-4 cursor-pointer" value='Del User' onClick={handleDeleteUser}>Delete an User</button>
            
        </div>
        <div>
        {show && <div><NewGame handleOnNewGame={handleOnNewGame} /> <button onClick={()=>setShow(false)}>Cancel</button></div>
    } 
    </div>  
        {showD && <div><button onClick={()=>setShowD(false)} className='text-red-700'>Cancel</button><DeleteGame handleOnDelete={handleOnDelete} /></div>} 
    <div>
        {showM && <div><button onClick={()=>setShowM(false)}>Cancel</button><AddAdmin handleAddedAdmin={handleAddedAdmin} /></div>}
    </div>
    <div> 
        {showA && <div><button onClick={()=>setShowA(false)}>Cancel</button><DeleteAdmin afterDeleteAdmin={afterDeleteAdmin} /></div>}
    </div>
    <div>
        {showU && <div><button onClick={()=>setShowU(false)}>Cancel</button><DeleteUser afterDelete={afterDelete} /></div>}
    </div>

    </div>
    )
}

export default AdminDashboard