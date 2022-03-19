import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../features/user/userSlice";

const Home = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const resetUser = () => {
    setNewUser({
      name: "",
      email: "",
    });
  };

  const handleUserName = (e) => {
    setNewUser({
      ...newUser,
      name: e.target.value,
    });
  };

  const handleUserEmail = (e) => {
    setNewUser({
      ...newUser,
      email: e.target.value,
    });
  };

  const handleUser = () => {
    if (newUser.name === "" || newUser.email === "") {
      return alert("Both fields are required.");
    }

    dispatch(createUser(newUser));
    resetUser();
    alert("User data sent successfully!");
  };

  return (
    <div>
      <h1>Testing Redux global state</h1>

      <p>
        <strong>Current user:</strong> {user.name || `Not defined`}
      </p>
      <p>
        <strong>Current user e-mail:</strong> {user.email || `Not defined`}
      </p>

      <div className="input-container">
        <input
          type="text"
          name="name"
          onChange={handleUserName}
          value={newUser.name}
          placeholder="New username"
          required
        />
        <input
          type="email"
          name="email"
          onChange={handleUserEmail}
          value={newUser.email}
          placeholder="New user e-mail"
          required
        />
        <button onClick={handleUser}>Set User Data</button>
      </div>

      <div className="link-container">
        <Link to="/otherpage">Visit other component</Link>
      </div>
    </div>
  );
};

export default Home;
