import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../constant/Router";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
    // setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = () => {
    if (
      !newUser.firstName ||
      !newUser.lastName ||
      !newUser.email ||
      newUser.age === 0
    ) {
      toast.error("Please fill in all the fields.", {
        autoClose: 1000,
      });
      return;
    }
    const addedUser = {
      id: uuidv4(),
      ...newUser,
    };
    dispatch(addUser(addedUser));
    toast.success("User Added Successfully!", {
      autoClose: 1000,
    });
    setTimeout(() => {
      navigate(ROUTER.Home);
    }, 1100);
    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
    });
  };

  return (
    <>
      <form className="d-flex align-items-center justfy-content-center flex-column">
        <h2 className="my-4" >Add User</h2>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={newUser.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="mx-2"
          name="lastName"
          value={newUser.lastName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Age"
          className="mx-2"
          name="age"
          value={newUser.age}
          onChange={handleInputChange}
        />

        <button
          className="btn btn-info text-white  py-2 px-5 w-25"
          type="button"
          onClick={handleAddUser}
        >
          Add User
        </button>
      </form>
    </>
  );
};

export default AddUser;
