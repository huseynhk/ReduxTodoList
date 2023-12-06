import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../features/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../constant/Router";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isExistUser = useSelector((state) =>
    state.users.users.find((user) => user.id === userId)
  );

  const [updatedUser, setUpdatedUser] = useState({
    id: isExistUser.id,
    firstName: isExistUser.firstName,
    lastName: isExistUser.lastName,
    email: isExistUser.email,
    age: isExistUser.age,
  });

  const handleAddUser = () => {
    dispatch(updateUser(updatedUser));
    toast.success("User Edited Successfully!", {
      autoClose: 1000,
    });
    setTimeout(() => {
      navigate(ROUTER.Home);
    }, 1100);
    setUpdatedUser({
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
    });
  };

  const handleUpdateChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });
  };

  return (
    <>
      <form className="d-flex align-items-center justfy-content-center flex-column">
        <h2 className="my-4" >Edit User</h2>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={updatedUser.firstName}
          onChange={handleUpdateChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="mx-2"
          name="lastName"
          value={updatedUser.lastName}
          onChange={handleUpdateChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={updatedUser.email}
          onChange={handleUpdateChange}
        />
        <input
          type="number"
          placeholder="Age"
          className="mx-2"
          name="age"
          value={updatedUser.age}
          onChange={handleUpdateChange}
        />

        <button
          className="btn btn-info text-white  py-2 px-5 w-25"
          type="button"
          onClick={handleAddUser}
        >
          Edit User
        </button>
      </form>
    </>
  );
};

export default UpdateUser;
