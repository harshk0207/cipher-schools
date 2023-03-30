import React,{useState,useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext';

const Login = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenicated, login, loadUser, user } = authContext;

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  
  useEffect(() => {
    // If user is authenticated, redirect to dashboard
    const redirectToDashboard = async () => {
      await loadUser();
      if (user) {
        navigate("/profile");
      }
    };
  
    if (isAuthenicated || localStorage.getItem("isAuthenicated")) {
      redirectToDashboard();
    }
    // eslint-disable-next-line
  }, [isAuthenicated, user]);
  
  const onchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    login(form);
  };
  return (
    <div className="container align-items-center my-3">
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt"></i> Login
            </h1>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control my-2"
                  placeholder="Enter Email"
                  value={form.email}
                  onChange={onchange}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control my-2"
                  placeholder="Enter Password"
                  value={form.password}
                  onChange={onchange}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-block my-4"
                  onClick={onSubmit}
                >Login</button>
                <button
                  type="submit"
                  className="btn btn-outline-primary btn-block my-2"
                  onClick={()=>{navigate('/signup')}}
                >Signup</button> 
              </div>
              </div>
              </div>

    </div>
  )
}

export default Login