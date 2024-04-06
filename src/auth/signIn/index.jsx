import style from "./index.module.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {Field, Form, Formik} from "formik";
import {Icon} from "@iconify/react";
import loadingLoop from "@iconify/icons-line-md/loading-loop";
const SignIn = ()=>{

    let url = "http://localhost:8080/api/v1/user/signIn";

    const [isLoading,setIsLoading] = useState(false)

    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordToggle = () =>{
        setShowPassword(!showPassword)
    }

    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        mail :Yup.string()
            .required('Email Address is required'),
        password : Yup.string()
            .required("Password is required"),
    })

    const handleSubmit = async (values,{resetForm})=>{
        try{
            setIsLoading(true);
            const payload = {
                mail : values.mail,
                password : values.password
            };
            localStorage.setItem("mail",values.mail)
            const response = await axios.post(url,payload)
            console.log(response)
            if (response.data.successful){
                toast.success("You have successfully signed in",{
                    position : "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setIsLoading(false);
                navigate("/searchPage")
                resetForm();
            }else {
                toast.error('Unable to Login . Please try again', {
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
            console.error("Error When Creating ",error);
            toast.error("Unable To Login . Please try again later",{
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
            <div className={style.signInTable}>
                <h3>Welcome Back</h3>
                <Formik
                    initialValues={{
                        mail : "",
                        password : "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>

                    {({values,errors,touched,
                       handleChange,handleBlur}) =>(
                        <Form>
                            <div className={style.inputSection}>
                                <div>
                                    <Field
                                        type="text"
                                        name="mail"
                                        placeholder="Enter Your Mail"
                                        value={values.name}
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

                                <div style={{position: 'relative'}}>
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
                            </div>

                            <div className={style.button}>
                                <button className={style.submit} type={"submit"}>
                                    {isLoading ? (
                                        <div className={"flex items-center justify-center"}>
                                            <Icon width={24} height={24} icon={loadingLoop}/>
                                        </div>
                                    ) : (
                                        "SignIn"
                                    )}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <ToastContainer/>
            </div>
        </div>
    )
}
export default SignIn