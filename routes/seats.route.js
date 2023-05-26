const express = require("express")
const {getSeats ,bookSeat, cancelSeat} = require("../controller/seats")

const seatRouter = express.Router()

seatRouter.get("/",getSeats)
// seatRouter.post("/",postSeat)
seatRouter.put("/booking",bookSeat)
seatRouter.post("/cancel",cancelSeat)

module.exports = seatRouter