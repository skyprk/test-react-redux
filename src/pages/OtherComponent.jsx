import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const OtherComponent = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <h1>Other Component</h1>

      <h2>Global user state</h2>
      <p><strong>User name:</strong> {user.name}</p>
      <p><strong>User email:</strong> {user.email}</p>

      <div className="link-container">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default OtherComponent;
