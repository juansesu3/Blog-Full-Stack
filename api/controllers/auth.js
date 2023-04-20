import {db} from '../db.js';
import bcrypt from 'bcryptjs'

export const register =(req, res)=>{

    // CHECK EXISTING USER
    const q = "SELECT * FROM user WHERE email = ? OR username = ?"

    db.query(q, [req.body,email, req.body.name], (err,data)=>{
        if(err) return res.jso(err)
        if(data.length) return res.status(409).json("User already exists!")

        //Hash the password and create a user 
        const salt = bcrypt.getSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO user (`username`,`email`,`password`) VALUES (?)"});
        const values =[
            req.body.username,
            req.body.email,
            hash,   
        ];

        db.query(q, [values], (err,data)=>{
            if(err) return res.jso(err)
        return res.status(200).json("User has been created.")

        })

}

export const login =(req, res)=>{
    
}
export const logout =(req, res)=>{
    
}