import { useNavigate } from "react-router-dom";


const AdminNav = ()=>{
    const navigate=useNavigate()


   return( <nav className="">
    <div className="ml-96 mr-96 max-h-14 bg-[#1f2937]">

        <button className="ml-12 mr-12 mt-2 mb-4 font-bold text-white hover:text-gray-300 " onClick={()=>navigate('/admindashboard/dataset')}>Dataset</button>
        <button className="ml-12 mr-12 mt-2 mb-4 font-bold text-white hover:text-gray-300 " onClick={()=>navigate('/admindashboard/settings')}>AdminSettings</button>
        <button className="ml-12 mr-12 mt-2 mb-4 font-bold text-white hover:text-gray-300 " onClick={()=>navigate('/admindashboard')}>Statistics</button>
        <button className="ml-12 mr-12 mt-2 mb-4 font-bold text-white hover:text-gray-300 " onClick={()=>navigate('/admindashboard/users')}>Users</button>
    </div>
    </nav>)
}
export default AdminNav;