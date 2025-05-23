import './login.scss';

const Login = (props) => {
    return (
        <div className="login-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block ">
                        <div className="brand">
                            HaiNoEx
                        </div>
                        <div className='detail'>
                            Always go alone   
                        </div>
                    </div>
                    
                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none ">
                            HaiNoEx
                        </div>
                        <input type="text" className="form-control" placeholder="Email or phone number"/>
                        <input type="password" className="form-control" placeholder="Password"/>
                        <button className="btn btn-primary">Login</button>
                        <span className='text-center'><a className='forgot-password' href='#'>Forgot your password</a></span>
                        <hr/>
                        <div className='text-center'>

                            <button className="btn btn-success">Create new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;