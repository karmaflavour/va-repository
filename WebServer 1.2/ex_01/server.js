const fs = require("fs")
const port = 6789

const express = require("express")
const app = express()
app.use(express.static("public"))
const server = app.listen(port)


console.log(`Webserver is running on port ${port}.`)

const socket = require("socket.io")
const io = socket(server)

const feinstaubData = require("./public/data/Feinstaub_2016.json") // load json file


io.sockets.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected.`)

    let disconnect = () => {
        console.log(`Client ${socket.id} disconnected.`)
}

    let get_example_data = (parameters) => {
     console.log(`Received data request with these parameters: ${parameters}`)
     fs.readFile("./public/data/Feinstaub_2016.json", "utf8", (err, data) => {
         if (err) {
             console.error(err)
            return
         }
        let json_data = JSON.parse(data)
        socket.emit("example_data", data)
       })
    }


    let get_feinstaub_2016 = (parameters) =>{
        

        var measurement = feinstaubData.data
      
        //return value and station id of json objects
   
        var final = [];
        for (var key in measurement){
          if (measurement.hasOwnProperty(key)){
            const data = {
              stationId: key,
              value: measurement[key]
            }
            final.push(data);
            }
            
          }
          socket.emit("example_data", final)
    
    }


    socket.on("disconnect", disconnect)
    socket.on("get_example_data", get_example_data)
    socket.on("get_feinstaub_2016", get_feinstaub_2016)
 })