import { Database } from "../infra/database.js";

class TipsMethods {
    static create(tip) {
        return Database.Tips = [...Database.Tips, ...tip]
    }

    static tips() {
        let random = parseInt(Math.random() * (Database.Tips.length))
        return Database.Tips[random]
    }
} 

export default TipsMethods