
import React, { useState } from "react"
import Navbar from "../../navbar"
import Footer from "../../Footer"

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
        <>
        <Navbar />
        <div className="Auth-form-container mt-5 mb-5" >
            <form className="Auth-form d-flex justify-content-center" >
                <div className="Auth-form-content w-50 ">
                    <h3 className="Auth-form-title">Log In</h3>
                    <div className="text-center">
                        Not registered yet?{" "}
                        <span className="link-primary "  onClick={changeAuthMode}>
                            Sign Up
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1 input-lg"
                            placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password" />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary btn-lg">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot password?
                        
                    </p>
                </div>
            </form>
        </div>
        <Footer />
        </>
    )}}
  

 