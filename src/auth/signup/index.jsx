import style from "./index.module.css"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import * as Yup from "yup";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import { Icon } from "@iconify/react";
import loadingLoop from "@iconify/icons-line-md/loading-loop";
import 'react-toastify/dist/ReactToastify.css';

const Signup =()=>{
    let url = "http://localhost:8080/api/v1/user/signUp";

    const [isLoading,setIsLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordToggle = () =>{
        setShowPassword(!showPassword)
    }

    const validationSchema = Yup.object().shape({
        name : Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces')
            .required("Name is required"),
        mail :Yup.string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Must be a valid email Address')
            .required('Email Address is required')
            .email("invalid email address"),
        password : Yup.string()
            .required("Password is required"),
        confirmPassword:Yup.string()
            .required("Confirm Password is required")
    })
    // const history = useHistory()
    const navigate = useNavigate();
    const handleSubmit = async  (values,{resetForm}) =>{
        try {
            setIsLoading(true);
            const payload = {
                mail: values.mail,
                name : values.name,
                password:values.password,
                confirmPassword :values.confirmPassword
            };
            const response = await  axios.post(url,payload);
            console.log(response)
            if (response.data.successful){
                toast.success(`Account Created For ${values.name}`,{
                    position : "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setIsLoading(false);
                navigate("/signIn")
                resetForm();
            }else {
                toast.error('Account Not Created. Please try again', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setIsLoading(false);
            }
        }catch (error){
            console.error("Error When Creating :",error);
            toast.error("Account Not Created, Please try again", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsLoading(false);
        }
    };
    return(
        <div className={style.mainCont}>
            <div className={style.signUpTable}>
                <h3>Welcome To BookFinder</h3>
                <p>Already have an account ?<Link to={"/signIn"}>Sign in</Link></p>
                <Formik
                    initialValues={{
                        mail : "",
                        name : "",
                        password : "",
                        confirmPassword:""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    >
                    {({ values, errors , touched,
                          handleChange, handleBlur }) =>(
                        <Form>
                            <div className={style.inputSection}>
                                <div>
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            borderColor: (errors.name && touched.name) ? "red" : "inherit",
                                        }}
                                    />
                                    {errors.name && touched.name && (
                                        <div className={style.error}>{errors.name}</div>
                                    )}
                                </div>

                                <div>
                                    <Field
                                        type="text"
                                        name="mail"
                                        placeholder="Enter Your mail"
                                        value={values.mail}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            borderColor: errors.mail && touched.mail ? "red" : "inherit",
                                        }}
                                    />
                                    {errors.mail && touched.mail && (
                                        <div className={style.error}>{errors.mail}</div>
                                    )}
                                </div>

                                <div style={{ position: 'relative' }}>
                                    <Field
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            borderColor: errors.password && touched.password ? "red" : "inherit",
                                        }}
                                    />
                                    <span
                                        style={{
                                            position: 'absolute',
                                            top: '45%',
                                            right: '10px',
                                            transform: 'translateY(-50%)',
                                            cursor: 'pointer'
                                        }}
                                        onClick={handlePasswordToggle}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                          {showPassword ? '👁️‍🗨️' : '👁️'}
                                        </span>
                                    {errors.password && touched.password && (
                                        <div className={style.error}>{errors.password}</div>
                                    )}
                                </div>

                                <div style={{position: 'relative'}}>
                                    <Field
                                        type="text"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            borderColor: errors.confirmPassword && touched.confirmPassword ? "red" : "inherit",
                                        }}
                                    />
                                    <span
                                        style={{
                                            position: 'absolute',
                                            top: '45%',
                                            right: '10px',
                                            transform: 'translateY(-50%)',
                                            cursor: 'pointer'
                                        }}
                                        onClick={handlePasswordToggle}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                          {showPassword ? '👁️‍🗨️' : '👁️'}
                                        </span>
                                    {errors.confirmPassword && touched.confirmPassword && (
                                        <div className={style.error}>{errors.confirmPassword}</div>
                                    )}
                                </div>

                            </div>
                            <div className={style.button}>
                                <button className={style.submit} type={"submit"}>
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <Icon width={24} height={24} icon={loadingLoop}/>
                                        </div>
                                    ) : (
                                        "Create An  Account"
                                    )}
                                </button>
                                <p>Already have an account ?<Link to={"/signIn"}>Sign in</Link></p>
                                </div>
                        </Form>
                    )}
                    </Formik>
                    <ToastContainer/>
            </div>

        </div>
    )
}
export default Signup