import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getUserById } from "../../Redux/actions"

const UsersProfile = ()=>{
    const {id}= useParams()
    const dispatch=useDispatch()

    console.log(id);

    // useEffect(()=>{
    //     dispatch(getUserById(id))
    // }, [dispatch, id])
    // const otherUser= useState(state=>state.otherUser)

    return (
        <div>
            <p>complicado hacer esto</p>
        </div>
    )
}

export default UsersProfile