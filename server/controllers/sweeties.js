import Sweeties from "../models/index.js"

//GET ALL BLOGS
export const getSweeties = async (req, res) => {
    try {
      const sweeties = await Sweeties.find();
      res.status(200).json(sweeties);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };