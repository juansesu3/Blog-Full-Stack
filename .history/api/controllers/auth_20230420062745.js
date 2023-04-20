import {db} from '../db.js'

export const register =(req, res)=>{

    // CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body,email, req.body.name], (err,data)=>{
        if(err) return res.jso(err)
        if(data.length) return res.status(409).json("User already exists!")

        //Hash the password and create a user 
        var salt = bcrypt.getSaltSync(10);

    })

}

export const login =(req, res)=>{
    
}
export const logout =(req, res)=>{
    
}