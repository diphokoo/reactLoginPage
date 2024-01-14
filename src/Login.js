import React from "react";

function Login() {
    return (
        <div className="login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary">
            <form>
                <h3>Sign In</h3>
                <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" className="form-control" required />
                </div>
                <div className="mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="" placeholder="Enter Password" className="form-control" required />
                </div>
                <div>
                    <input type="checkbox" className="custom-control custom-checkbox" id="check" />
                    <label htmlFor="check" className="custom-input-label">
                        Remember me
                    </label>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary">Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default Login