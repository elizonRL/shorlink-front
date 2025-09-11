const Button = ({children, handelClik, classButon })=>{
    return(
        <button onClick={handelClik} className={classButon}>
            {children}
        </button>
    )
}

export default Button