import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { deleteUser } from "../features/slices/userSlice";
import { toast } from "react-toastify";
import { ROUTER } from "../constant/Router";

const Home = () => {
  const usersList = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  const removeUser = (user) => {
    dispatch(deleteUser(user));
    toast.success("User Deleted Successfully!", {
      autoClose: 1000,
    });
  };

  return (
    <div className="p-5">
      <div className="table-container">
        <table className="w-100 text-capitalize">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Detail</th>
              <th>Actions</th>
            </tr>
          </thead>
          {usersList.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <Link to={`${ROUTER.Detail}/${user.id}`}>
                  <button
                    type="button"
                    className="btn btn-success text-white px-3 my-1"
                  >
                    <FaRegEye className="fs-2"/>
                  </button>
                </Link>
              </td>

              <td>
                <Link to={`${ROUTER.UpdateUser}/${user.id}`}>
                  <button
                    type="button"
                    className="btn btn-primary text-white mx-3 mb-1"
                  >
                    <FiEdit className="fs-3" />
                  </button>
                </Link>

                <button
                  type="button"
                  className="btn btn-danger text-white mb-1"
                  onClick={() => removeUser(user)}
                >
                  <BsFillTrashFill className="fs-3" />
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Home;
