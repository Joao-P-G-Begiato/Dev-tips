import TipsMethods from "../utils/tip-methods.js"
import TipModel from "../models/tip-model.js"

class Tips {
    static rotas(app) {
        app.get("/tips", (req, res)=>{
            const response = TipsMethods.tips()
            res.status(200).json(response)
        })

        app.post("/create", (req, res)=>{
            const tip =  new TipModel(...Object.values(req.body))
            const response = TipsMethods.create(Object.values(tip))
            res.status(201).json(response)
        })
    }
}


export default Tips