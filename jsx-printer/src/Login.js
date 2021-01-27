import { useState } from "react";
import { Redirect } from "react-router-dom";
function Login() {
  const token = localStorage.getItem("token");
  const initialStatus = !token ? false : true;
  const [loggedStatus, setLoggedStatus] = useState(initialStatus);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "testemail@test.com" && password === "testPassword") {
      localStorage.setItem("token", "sdfsdfsdfsdfs");
      setLoggedStatus(true);
      seterror("");
    } else {
      setLoggedStatus(false);
      seterror("username or password is incorrect");
      localStorage.removeItem("token");
    }
  };
  const handleChange = (e) => {
    if (e.target.name === "email") setemail(e.target.value);
    else setpassword(e.target.value);
  };
  console.log(loggedStatus);
  return !loggedStatus ? (
    <form >
      <div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="email"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="password"
        />
      </div>
      <button type="submit" onClick={handleLogin} disabled={!(email&&password)}>
        login
      </button>
      {error}
    </form>
  ) : (
    <Redirect to="/protected" />
  );
}

export default Login;
