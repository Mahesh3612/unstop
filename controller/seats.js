const seatModel = require("../model/seats.model")

const getSeats = async (req, res) => {
    try {
        let data = await seatModel.find()
        res.send({he:"got data"})

    } catch (error) {
        res.send(error)
    }

}

const postSeat = async (req, res) => {
    try {
        let res = seatModel(req.body)
        const data = await res.save()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}


const bookSeat = async (req, res) => {
    let seats = req.query.noOfSeats
    let seat = 1

    if (seats <= 7) {
        try {
            for (let i = 0; i < seats; i++) {
                let isItBook = await seatModel.find({ seatNo: seat })
                if (isItBook[0].isBooked == false) {
                    let data = await seatModel.updateOne({ seatNo: seat }, {
                        isBooked: true
                    });
                    seat++
                } else {
                    seats++
                    seat++
                }
            }
            res.send("booked succesfully")
        } catch (e) {
            res.send("error", e)
        }
    } else {
        res.send("cant reserve more than 7 seats at a time")
    }
}



const cancelSeat = async (req, res) => {
    let seat = req.query.seatNO
    console.log(seat)
    let data = await seatModel.updateOne({ seatNo: seat }, {
        isBooked: false
    });
    res.send(data)
}


module.exports = { getSeats, postSeat, bookSeat, cancelSeat } 