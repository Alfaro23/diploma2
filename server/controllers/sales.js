import OverAllStat from "../models/OverAllStat.js";

export const getSales = async (req, res) => {
    try{
        const overAllStats = await OverAllStat.find();

        res.status(200).json(overAllStats[0]);
    } catch(err){   
        res.status(404).json({ message: err.message })
    }
}