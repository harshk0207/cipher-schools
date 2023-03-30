import React,{useState,useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

const Signup = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenicated, register, loadUser, user } = authContext;

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    first_name:"",
    last_name:"",
    password: "",
    cnf_password: ""
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
    register(form);
  };
  return (
    <div className="container align-items-center my-3">
    <div className="row">
      <div className="col-md-6 m-auto">
        <div className="card card-body">
          <h1 className="text-center mb-3">
            <i className="fas fa-sign-in-alt"></i> Signup
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
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="form-control my-2"
                placeholder="Enter First Name"
                value={form.first_name}
                onChange={onchange}
              />
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="form-control my-2"
                placeholder="Enter Last Name"
                value={form.last_name}
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
              <label htmlFor="cnf_password">Confirm Password</label>
              <input
                type="password"
                id="cnf_password"
                name="cnf_password"
                className="form-control my-2"
                placeholder="Confirm Password"
                value={form.cnf_password}
                onChange={onchange}
              />
              <button
                type="submit"
                className="btn btn-outline-primary btn-block my-2"
                onClick={onSubmit}
              >Signup</button> 
            </div>
            </div>
            </div>

  </div>
  )
}

export default Signup