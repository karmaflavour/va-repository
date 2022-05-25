function print_hello_world() {
  console.log("Hello world!")
}

 const socket = io()
 //var stations
 var data_2016
 var data_2017
 var data_2018
 var data_2019
 var data_2016_avg
 var data_2017_avg
 var data_2018_avg
 var data_2019_avg
 
 socket.on("connect", () => {
 console.log("Connected to the webserver.")
 })
 socket.on("disconnect", () => {
 console.log("Disconnected from the webserver.")
 })
 
//  socket.on("station_data", (obj) => {
//  console.log(obj)
//  stations = obj 
// })

socket.on("data_2016", (obj) => {
  console.log(obj)
  data_2016 = obj 
 })

socket.on("data_2017", (obj) => {
  console.log(obj)
  data_2017 = obj 
})

socket.on("data_2018", (obj) => {
  console.log(obj)
  data_2018 = obj 
})

socket.on("data_2019", (obj) => {
  console.log(obj)
  data_2019 = obj 
})
 
 function request_data() {
 //socket.emit("get_station_data", { example_parameter: "hi" })
 socket.emit("get_data_2016", { example_parameter: "hi" })
 socket.emit("get_data_2017", { example_parameter: "hi" })
 socket.emit("get_data_2018", { example_parameter: "hi" })
 socket.emit("get_data_2019", { example_parameter: "hi" })
 }

 function request_data_2() {
  //socket.emit("get_station_data", { example_parameter: "hi" })
  socket.emit("get_data_task_2", { example_parameter: "hi" })
}

function clean_data_task_2() {
  //socket.emit("get_station_data", { example_parameter: "hi" })
  socket.emit("clean_data_task_2", { example_parameter: "hi" })
}

  function compute_averages_task_2() {
  socket.emit("compute_averages_task_2", { example_parameter: "hi" })
}
 
 function access_data() {
  access_data_2016()
  access_data_2017()
  access_data_2018()
  access_data_2019()
}

function access_data_2016() {
    let data = data_2016.data
    let keys = Object.keys(data)
    let total_sum = 0
    let total_avg = 0
    let anzahl_null = 0
    for (let i = 0; i < keys.length; i++)
    {
      let entry = data[keys[i]]
      let keys_of_entry = Object.keys(entry)
      let sum_of_entry = 0
      let avg_of_entry = 0
      for (let j = 0; j < keys_of_entry.length; j++)
      {
        let item = entry[keys_of_entry[j]]
        sum_of_entry = sum_of_entry + item[2]
      }
      avg_of_entry = sum_of_entry / keys_of_entry.length
      if (avg_of_entry != 0)
      {
      total_sum = total_sum + avg_of_entry
      }
      else
      {
        anzahl_null = anzahl_null + 1
      }
    }
    total_avg = total_sum / (keys.length - anzahl_null)
    data_2016_avg = total_avg
    //console.log("total avg for year 2016: " + data_2016_avg)
  }

function access_data_2017() {
  let data = data_2017.data
    let keys = Object.keys(data)
    let total_sum = 0
    let total_avg = 0
    let anzahl_null = 0
    for (let i = 0; i < keys.length; i++)
    {
      let entry = data[keys[i]]
      let keys_of_entry = Object.keys(entry)
      let sum_of_entry = 0
      let avg_of_entry = 0
      for (let j = 0; j < keys_of_entry.length; j++)
      {
        let item = entry[keys_of_entry[j]]
        sum_of_entry = sum_of_entry + item[2]
      }
      avg_of_entry = sum_of_entry / keys_of_entry.length
      if (avg_of_entry != 0)
      {
      total_sum = total_sum + avg_of_entry
      }
      else
      {
        anzahl_null = anzahl_null + 1
      }
    }
    total_avg = total_sum / (keys.length - anzahl_null)
    data_2017_avg = total_avg
    //console.log("total avg for year 2017: " + data_2017_avg)
}

function access_data_2018() {
  let data = data_2018.data
    let keys = Object.keys(data)
    let total_sum = 0
    let total_avg = 0
    let anzahl_null = 0
    for (let i = 0; i < keys.length; i++)
    {
      let entry = data[keys[i]]
      let keys_of_entry = Object.keys(entry)
      let sum_of_entry = 0
      let avg_of_entry = 0
      for (let j = 0; j < keys_of_entry.length; j++)
      {
        let item = entry[keys_of_entry[j]]
        sum_of_entry = sum_of_entry + item[2]
      }
      avg_of_entry = sum_of_entry / keys_of_entry.length
      if (avg_of_entry != 0)
      {
      total_sum = total_sum + avg_of_entry
      }
      else
      {
        anzahl_null = anzahl_null + 1
      }
    }
    total_avg = total_sum / (keys.length - anzahl_null)
    data_2018_avg = total_avg
    //console.log("total avg for year 2018: " + data_2018_avg)
}

function access_data_2019() {
  let data = data_2019.data
    let keys = Object.keys(data)
    let total_sum = 0
    let total_avg = 0
    let anzahl_null = 0
    for (let i = 0; i < keys.length; i++)
    {
      let entry = data[keys[i]]
      let keys_of_entry = Object.keys(entry)
      let sum_of_entry = 0
      let avg_of_entry = 0
      for (let j = 0; j < keys_of_entry.length; j++)
      {
        let item = entry[keys_of_entry[j]]
        sum_of_entry = sum_of_entry + item[2]
      }
      avg_of_entry = sum_of_entry / keys_of_entry.length
      if (avg_of_entry != 0)
      {
      total_sum = total_sum + avg_of_entry
      }
      else
      {
        anzahl_null = anzahl_null + 1
      }
    }
    total_avg = total_sum / (keys.length - anzahl_null)
    data_2019_avg = total_avg
    //console.log("total avg for year 2019: " + data_2019_avg)
}


let svg = d3.select("#svgRoot")
let g_bars = svg.append("g").attr("class", "g_bar")
let g_xAxis = svg.append("g").attr("class", "g_xAxis")
let g_yAxis = svg.append("g").attr("class", "g_yAxis")
let g_axisTitle = svg.append("g").attr("class", "g_labels")

function drawVis(){
    access_data()
    const margin = {
      top: 50,
      left: 75,
      bottom: 50,
      right: 50,
    }
    let data = [
    {
      year: "2016",
      avg_value: data_2016_avg
    },
    {
      year: "2017",
      avg_value: data_2017_avg
    },
    {
      year: "2018",
      avg_value: data_2018_avg
     },
     {
      year: "2019",
      avg_value: data_2019_avg
    },
    ]
    let width = parseInt(svg.style("width")) 
    let height = parseInt(svg.style("height")) - margin.bottom;

    let scale_x = d3
     .scaleBand()
     .domain(data.map((d) => d.year))
     .range([margin.left, width - margin.right])
     .padding(0.1)

    let scale_y = d3
     .scaleLinear()
     .domain([0, 20])
     .range([height - margin.top, margin.bottom])

     let bars = g_bars.selectAll(".bar").data(data)

     bars
     .enter()
     .append("rect")
     .attr("class", "bar")
     .attr("x", (d) => scale_x(d.year))
     .attr("y", (d) => height - margin.bottom - (scale_y(0) - scale_y(d.avg_value)))
     .attr("width", scale_x.bandwidth())
     .attr("height", (d) => scale_y(0) - scale_y(d.avg_value))
     .attr("fill", "#69b3a2")

     g_xAxis
     .attr("transform", "translate(0, " + (height - margin.bottom) + ")")
     .call(d3.axisBottom(scale_x))

     g_yAxis
     .attr("transform", "translate(" + margin.left + ", 0)")
     .call(d3.axisLeft(scale_y))

     addAxisTitle(["Average particulate matter", "Year"], width, height)

    svg.append("text")
      .attr("x", (width / 2))             
      .attr("y", 10 + (margin.top / 2))
      .attr("text-anchor", "middle")
      .attr("font-family" , "sans-serif")
      .style("font-size", "20px")   
      .text("Average particulate matter per year"); 
}

function addAxisTitle(axisTitles, width, height) {
  let axisTitle = g_axisTitle.selectAll(".axisTitle").data(axisTitles)

  axisTitle
    .enter()
    .append("text")
    .attr("class", "axisTitle")
    .merge(axisTitle)
    .text((d) => d)
    .attr("transform", (d, i) => {
      if (i > 0) {
        return `translate(${width / 2}, ${height + 5})`
      } else {
        return `translate(25, ${height / 2 + 75}) rotate(-90)`
      }
    })
    .attr("font-family" , "sans-serif")
    .attr("font-size" , "16px")
  axisTitle.exit().remove()
}

function paintHistogram() {
  socket.emit("paint_histogram", {example_parameter : "hi"})
}

socket.on("visualisation", (obj) => {
  var values = Object.keys(obj).map(function(key) {return obj[key].avg;});
  let min = d3.min(values)
  let max = d3.max(values)
  //let domain = [min, max];
  let nBin = 50;
  const margin = {top: 75, right: 75, bottom: 100, left: 60},
  width = parseInt(d3.select("#histogram").style("width")) - margin.left - margin.right,
  height = parseInt(d3.select("#histogram").style("height")) - margin.top - margin.bottom;

  const svg = d3.select("#histogram")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const x = d3.scaleLinear()
      .domain([0,30])
      .range([0, width]);
  
      

  const histogram = d3.histogram()
      .domain(x.domain())
      .thresholds(x.ticks(nBin));
  const bins = histogram(values);

  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  svg.append("text")             
    .attr("transform",
          "translate(" + (width/2) + " ," + 
                         (height + margin.top - 15) + ")")
    .style("text-anchor", "middle")
    .attr("font-family" , "sans-serif")
    .style("font-size", "16px") 
    .text("Average particulate measurements");


  const y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0, d3.max(bins, function(d) { return d.length; })]); 
  svg.append("g")
      .call(d3.axisLeft(y));

 svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .attr("font-family" , "sans-serif")
      .style("font-size", "16px") 
      .text("Counts");

  
  svg.selectAll("rect")
      .data(bins)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; }) //the -1 will probably throw an "Error: <rect> attribute width: A negative value is not valid. ("-1")", howeber the visualisation is nicer/seems cleaner
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#69b3a2")


  svg.append("text")
      .attr("x", (width / 2))             
      .attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")
      .attr("font-family" , "sans-serif")  
      .style("font-size", "20px")   
      .text("Distribution of station averages in 2019"); 
})


function paintScatterplot() {
  socket.emit("paint_Scatterplot", {example_parameter : "hi"})
}

socket.on("scatterplot_drawing", (obj) => {
  var values = Object.keys(obj).map(function(key) {return obj[key].avg;});
  let min = d3.min(values)
  let max = d3.max(values)
  var dataset1 = [[90, 20], [20, 100], [66, 44], [53, 80], [24, 182], [80, 72], [10, 76], [33, 150], [100, 15]];


  let dataset2 = [

    {
      "componentCode": "CO",
      "pcaValue_1": 0.5,
      "pcaValue_2": 0.13
    },

    {
      "componentCode": "PM10",
      "pcaValue_1": 0.12,
      "pcaValue_2": 0.38
    },

    {
      "componentCode": "O3",
      "pcaValue_1": 0.7,
      "pcaValue_2": 0.1
    },

    {
      "componentCode": "SO2",
      "pcaValue_1": 0.35,
      "pcaValue_2": 0.43
    },

    {
      "componentCode": "NO2",
      "pcaValue_1": 0.31,
      "pcaValue_2": 0.67
    },

    {
      "componentCode": "PM10",
      "pcaValue_1": 0.2,
      "pcaValue_2": 0.83
    },

    {
      "componentCode": "SO2",
      "pcaValue_1": 0.8,
      "pcaValue_2": 0.4
    },

    {
      "componentCode": "N02",
      "pcaValue_1": 0.44,
      "pcaValue_2": 0.63
    },

    {
      "componentCode": "O3",
      "pcaValue_1": 0.12,
      "pcaValue_2": 0.90
    },

    {
      "componentCode": "PM10",
      "pcaValue_1": 0.77,
      "pcaValue_2": 0.23
    },

    {
      "componentCode": "SO2",
      "pcaValue_1": 0.31,
      "pcaValue_2": 0.33
    },

    {
      "componentCode": "CO",
      "pcaValue_1": 0.44,
      "pcaValue_2": 0.88
    },
    
  ]

// set the dimensions and margins of the graph
const margin = {top: 75, right: 75, bottom: 100, left: 60},
  width = parseInt(d3.select("#scatterplot").style("width")) - margin.left - margin.right,
  height = parseInt(d3.select("#scatterplot").style("height")) - margin.top - margin.bottom;


  //tooltip div that is hidden by default

  var tooltip = d3.select("#scatterplot")
    .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "black")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("color", "white")

  // -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
  var showTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .html("Component: " + d.componentCode)
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var moveTooltip = function(d) {
    tooltip
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var hideTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }


  //------//
//add color range
 var myColor = d3.scaleOrdinal()
 .domain(["CO", "NO2", "O3", "PM10", "SO2"])
 .range(["#ffb8b8", "#85ff85", "#72ffe6", "#56b5ff", "#d889ff"]);

// append the svg object to the body of the page
const svg = d3.select("#scatterplot")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

//Read the data


//Add initial X axis for animation
var x = d3.scaleLinear()
.domain([0, 0])
.range([ 0, width ]);
svg.append("g")
.attr("class", "myXaxis")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x))
.attr("opacity", "0")


  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 1])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  

  
  // Title
        svg.append('text')
        .attr('x', width/2)
        .attr('y', 0)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 20)
        .text('Scatter Plot');
        
  // X label
        svg.append('text')
        .attr('x', width/2)
        .attr('y', height + 50)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('pcaValue_1');
        
   // Y label
        svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(-50,' + height/2 + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('pcaValue_2');


  
  // What to do when one group is hovered
  var highlight = function(d){
    // reduce opacity of all groups
    d3.selectAll(".bubbles").style("opacity", .05)
    // expect the one that is hovered
    d3.selectAll("."+d).style("opacity", 1)
  }

  // And when it is not hovered anymore
  var noHighlight = function(d){
    d3.selectAll(".bubbles").style("opacity", 1)
  }

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(dataset2)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(d.pcaValue_1); } )
    .attr("cy", function (d) { return y(d.pcaValue_2); } )
    .attr("r", 30)
    
    // -3- Trigger the functions for hover
   // .on("mouseover", showTooltip )
   // .on("mousemove", moveTooltip )
   // .on("mouseleave", hideTooltip )
    
    //new X axis
    
    x.domain([0, 1])
    svg.select(".myXaxis")
    .transition()
    .duration(2000)
    .attr("opacity", "1")
    .call(d3.axisBottom(x));

   // return dots animation
    svg.selectAll("circle")
    .transition()
    .delay(function(d,i){return(i*3)})
    .duration(2000)
    .attr("class", function(d) { return "bubbles " + d.componentCode })
    .attr("cx", function (d) { return x(d.pcaValue_1); } )
    .attr("cy", function (d) { return y(d.pcaValue_2); } )
    .attr("r", 7)
    .style("fill", function (d) { return myColor(d.componentCode) } )
        // -3- Trigger the functions for hover
    //.on("mouseover", showTooltip )
    //.on("mousemove", moveTooltip )
    //.on("mouseleave", hideTooltip )
   ;
  
   //add legend for each component
   var size = 20
   var allgroups = ["CO", "NO2", "O3", "PM10", "SO2"]
   svg.selectAll("myrect")
    .data(allgroups)
    .attr("opacity", "1")
    .enter()
    .append("circle")
       .attr("cx", 670)
       .attr("cy", function(d,i){ return 10 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
       .attr("r", 7)
       .style("fill", function(d){ return myColor(d)})
      // .on("mouseover", highlight)
      // .on("mouseleave", noHighlight);

       svg.selectAll("mylabels")
       .data(allgroups)
       .enter()
       .append("text")
         .attr("x", 670 + size*.8)
         .attr("y", function(d,i){ return i * (size + 5) + (size/2)}) 
         .style("fill", function(d){ return myColor(d)})
         .text(function(d){ return d})
         .attr("text-anchor", "left")
         .style("alignment-baseline", "middle")
        // .on("mouseover", highlight)
        // .on("mouseleave", noHighlight)

})
