import {RequestHandler} from "express";
import {Ban} from "../entities/Action";
import {User} from "../entities/User";

export const ban : RequestHandler = async (req, res) => {
    const {user_id, student_id} = req.body;
    // const user =
    try{
        const teacher = new User("mcserep@inf.elte.hu");
        const ban = new Ban(teacher.role);
        res.status(200).send({
            message: "banning api",
            success: ban.allowed(),
        })
        console.log(ban.allowed());

    }catch (e) {
        console.error(e);
    }


}
