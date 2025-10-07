import { Request, Response } from "express";
import { authService } from "./auth.service";
const loginAdmin = async (req: Request, res: Response) => {
  try {
    const result = await authService.loginAdmin(req.body);
    const accessToken = result.accessToken
    res.cookie("accessToken", accessToken,{
       httpOnly: true,      
      secure: true,
      sameSite: "none",   
    })
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
};

export const authController = {
  loginAdmin,
};
