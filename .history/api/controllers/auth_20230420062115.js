import {db} from '../db.js'

export const register =(req, res)=>{

    // CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body,email])

}

export const login =(req, res)=>{
    
}
export const logout =(req, res)=>{
    
}