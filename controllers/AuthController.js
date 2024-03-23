import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { firstname, email, password } = req.body;

    //validate
    
    if (!firstname) {
        return res.status(400).send({success:false,mesasge:"Please Provide "+ firstname})
    }
    
    if (!email) {
        return res.status(400).send({success:false,mesasge:"Please Provide " + email})
    }
    
    if (!password) {
        return res.status(400).send({success:false,mesasge:"Please Provide " + password})
    }

    const userAlreadyExist = await User.findOne({email});

    if(userAlreadyExist){
        return res.status(200).send({success:false,message:"User Already Exist"});
    }

    const user = await User.create({firstname,email,password});

    res.status(200).send({success:true,message:"User Register Succesfully.",user});

  } catch (error) {
    console.log("Error in Register: ");
    res
      .status(400)
      .send({ message: "Error in Register", success: false, error });
  }
};
