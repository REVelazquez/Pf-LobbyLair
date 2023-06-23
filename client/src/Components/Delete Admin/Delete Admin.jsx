import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUsers, updateUser } from "../../Redux/actions";

const DeleteAdmin = ({ afterDeleteAdmin }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminUsers());
  }, [dispatch]);

  const adminUsers = useSelector((state) => state.admins);

  const handleDeleteAdmin = (adminId) => {
    const adminToUpdate = adminUsers.find((admin) => admin.id === adminId);
    if (adminToUpdate) {
      const updatedAdmin = {
        ...adminToUpdate,
        isAdmin: false,
      };
      dispatch(updateUser(adminId, updatedAdmin));
      afterDeleteAdmin();
    }
  };

  return (
    <div>
      {adminUsers.map((admin) => {
        return (
          <div key={admin.id}>
            <label htmlFor="Name">{admin.name}</label>{" "}
            <button onClick={() => handleDeleteAdmin(admin.id)}>
              Delete admin
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DeleteAdmin;
