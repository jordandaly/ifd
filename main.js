const baseURL = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/annualavg/";

function getData19201939(type, country, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/1920/1939/"+ country + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function getData19401959(type, country, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/1940/1959/"+ country + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function getData19601979(type, country, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/1960/1979/"+ country + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function getData19801999(type, country, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/1980/1999/"+ country + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function getData20202039(type, country, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/2020/2039/"+ country + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function getData20402059(type, country, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/2040/2059/"+ country + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function getData20602079(type, country, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/2060/2079/"+ country + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function getData20802099(type, country, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/2080/2099/"+ country + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

/*

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {

        data.forEach(function(item) {
            console.log(typeof(item.annualData));
            el.innerHTML += "<p>" + item.annualData + "</p>";
        });
    });
}
*/

function makeGraph(type,country) {
    
    
    var dataArrayPr = [
        {"date": "1920-1939", "precipitation": ""},
        {"date": "1940-1959", "precipitation": ""},
        {"date": "1960-1979", "precipitation": ""},
        {"date": "1980-1999", "precipitation": ""},
        {"date": "2020-2039", "precipitation": ""},
        {"date": "2040-2059", "precipitation": ""},
        {"date": "2060-2079", "precipitation": ""},
        {"date": "2080-2099", "precipitation": ""}
];

  var dataArrayTas = [
        {"date": "1920-1939", "temperature": ""},
        {"date": "1940-1959", "temperature": ""},
        {"date": "1960-1979", "temperature": ""},
        {"date": "1980-1999", "temperature": ""},
        {"date": "2020-2039", "temperature": ""},
        {"date": "2040-2059", "temperature": ""},
        {"date": "2060-2079", "temperature": ""},
        {"date": "2080-2099", "temperature": ""}
];



    getData19201939(type, country, function(data) {
        var responseCount = 0;
        var runnningTotal = 0;
        var overallAverage = 0;

        data.forEach(function(item) {
          runnningTotal  += Number(item.annualData);
           responseCount++; 
        });
        
       overallAverage = (runnningTotal / responseCount);
       console.log("19201939 responseCount:" + responseCount);
       console.log(type);
       if (type == 'pr') {
       dataArrayPr[0].precipitation = overallAverage;
       } else if (type == 'tas') {
       dataArrayTas[0].temperature = overallAverage;    
       }
       
        
        });
        
    getData19401959(type, country, function(data) {
        var responseCount = 0;
        var runnningTotal = 0;
        var overallAverage = 0;

        data.forEach(function(item) {
          runnningTotal  += Number(item.annualData);
           responseCount++; 
        });
        
       overallAverage = (runnningTotal / responseCount);
       if (type == 'pr') {
       dataArrayPr[1].precipitation = overallAverage;
       } else if (type == 'tas') {
       dataArrayTas[1].temperature = overallAverage;    
       }
       
        
        });
        
    getData19601979(type, country, function(data) {
        var responseCount = 0;
        var runnningTotal = 0;
        var overallAverage = 0;

        data.forEach(function(item) {
          runnningTotal  += Number(item.annualData);
           responseCount++; 
        });
        
       overallAverage = (runnningTotal / responseCount);
       if (type == 'pr') {
       dataArrayPr[2].precipitation = overallAverage;
       } else if (type == 'tas') {
       dataArrayTas[2].temperature = overallAverage;    
       }
       
        
        });
        
    getData19801999(type, country, function(data) {
        var responseCount = 0;
        var runnningTotal = 0;
        var overallAverage = 0;

        data.forEach(function(item) {
          runnningTotal  += Number(item.annualData);
           responseCount++; 
        });
        
       overallAverage = (runnningTotal / responseCount);
       if (type == 'pr') {
       dataArrayPr[3].precipitation = overallAverage;
       } else if (type == 'tas') {
       dataArrayTas[3].temperature = overallAverage;    
       }
       
        
        });
        
    getData20202039(type, country, function(data) {
        var responseCount = 0;
        var runnningTotal = 0;
        var overallAverage = 0;

        data.forEach(function(item) {
          runnningTotal  += Number(item.annualData);
           responseCount++; 
        });
        
       overallAverage = (runnningTotal / responseCount);
       console.log("20202039 responseCount:" + responseCount);
       if (type == 'pr') {
       dataArrayPr[4].precipitation = overallAverage;
       } else if (type == 'tas') {
       dataArrayTas[4].temperature = overallAverage;    
       }
       
        
        });
        
    getData20402059(type, country, function(data) {
        var responseCount = 0;
        var runnningTotal = 0;
        var overallAverage = 0;

        data.forEach(function(item) {
          runnningTotal  += Number(item.annualData);
           responseCount++; 
        });
        
       overallAverage = (runnningTotal / responseCount);
       if (type == 'pr') {
       dataArrayPr[5].precipitation = overallAverage;
       } else if (type == 'tas') {
       dataArrayTas[5].temperature = overallAverage;    
       }
       
        
        });
        
    getData20602079(type, country, function(data) {
        var responseCount = 0;
        var runnningTotal = 0;
        var overallAverage = 0;

        data.forEach(function(item) {
          runnningTotal  += Number(item.annualData);
           responseCount++; 
        });
        
       overallAverage = (runnningTotal / responseCount);
       if (type == 'pr') {
       dataArrayPr[6].precipitation = overallAverage;
       } else if (type == 'tas') {
       dataArrayTas[6].temperature = overallAverage;    
       }
       
        
        });
        
        
    getData20802099(type, country, function(data) {
         var responseCount = 0;
         var runnningTotal = 0;
         var overallAverage = 0;

        data.forEach(function(item) {
          runnningTotal  += Number(item.annualData);
           responseCount++; 
        });
        
       overallAverage = (runnningTotal / responseCount);
       if (type == 'pr') {
       dataArrayPr[7].precipitation = overallAverage;
       } else if (type == 'tas') {
       dataArrayTas[7].temperature = overallAverage;    
       }
       
        
        });
        
        if (type == 'pr') {
       console.log(dataArrayPr);  
    
    
    setTimeout(function() {
    var ndx = crossfilter(dataArrayPr); 
    
    var date_dim = ndx.dimension(dc.pluck('date'));
    var value_dim = date_dim.group().reduceSum(dc.pluck('precipitation'));
    
    var chart = dc.barChart("#chart-precipitation-here");
        chart
            .width(500)
            .height(300)
            .margins({top: 10, right: 50, bottom: 30, left: 50})
            .dimension(date_dim)
            .group(value_dim)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Date")
            .y(d3.scale.linear().domain(d3.extent(dataArrayPr, function(d) { return d.precipitation; })))
            .yAxisLabel("Precipitation (Millimetres)")
            .yAxis().ticks(4);
        
        dc.renderAll()
}, 1500);
    
    
    
    
       } 
       
       else if (type == 'tas') {
       console.log(dataArrayTas);  
     
    
    setTimeout(function() {
    var ndx = crossfilter(dataArrayTas); 
    
    var date_dim = ndx.dimension(dc.pluck('date'));
    var value_dim = date_dim.group().reduceSum(dc.pluck('temperature'));
    
    
    var chart = dc.barChart("#chart-temperature-here");
        chart
            .width(500)
            .height(300)
            .margins({top: 10, right: 50, bottom: 30, left: 50})
            .dimension(date_dim)
            .group(value_dim)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Date")
            .y(d3.scale.linear().domain(d3.extent(dataArrayTas, function(d) { return d.temperature; })))
            .yAxisLabel("Temperature (Degrees Celcius)")
            .yAxis().ticks(4);
        
        dc.renderAll()
}, 1500);
    
    
       }
      
      
      
}



