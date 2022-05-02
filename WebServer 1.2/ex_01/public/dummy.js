//retrieve the station id as array
function getStationID(data){
    var measurement = data.data
    var stationId = [];
  
    for (var id in measurement){
      if (measurement.hasOwnProperty(id)){
        var temp ={}
        temp = id
  
        stationId.push(temp)
      }
     }
    return stationId
  }
  

async function testDataChart() {
    const feinstaubData = await d3.json("./data/Feinstaub_2016.json") // load json file
    var measurement = feinstaubData.data
  
    //stationId = getStationID(feinstaubData)
  
    //console.log(stationId)
  
  
    //return value of json objects
    var final = [];
    for (var key in measurement){
      if (measurement.hasOwnProperty(key)){
        //console.log(key + ":" + measurement[key])
        //console.log(key)
        //console.log(measurement[key])
        const data = {
          stationId: key,
          value: measurement[key]
        }
        final.push(data);
        }
        
      }
    console.log(final)
  
    /*
    const yAccessor = d => d["component"]
    console.log(yAccessor(data[0]))
    */
  
  }