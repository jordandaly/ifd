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

function writeToDocument(type,country) {
    var el = document.getElementById("data");
    el.innerHTML = "";
    var runnningTotal = 0;
    var overallAverage = 0;
    var responseCount = 0;
    var dataArrayPr = [
        {"date": "1920-1939", "precipitation": ""},
        {"date": "1920-1939", "precipitation": ""},
        {"date": "1920-1939", "precipitation": ""},
        {"date": "1920-1939", "precipitation": ""},
        {"date": "1920-1939", "precipitation": ""},
        {"date": "1920-1939", "precipitation": ""},
        {"date": "1920-1939", "precipitation": ""},
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

        data.forEach(function(item) {
          runnningTotal  += Number(item.annualData);
           responseCount++; 
        });
        
       overallAverage = (runnningTotal / responseCount);
       console.log(type);
       if (type == 'pr') {
       dataArrayPr[0].precipitation = overallAverage;
       } else if (type == 'tas') {
       dataArrayTas[0].temperature = overallAverage;    
       }
        
        });
        
    getData19401959(type, country, function(data) {

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

        data.forEach(function(item) {
          runnningTotal  += Number(item.annualData);
           responseCount++; 
        });
        
       overallAverage = (runnningTotal / responseCount);
       if (type == 'pr') {
       dataArrayPr[4].precipitation = overallAverage;
       } else if (type == 'tas') {
       dataArrayTas[4].temperature = overallAverage;    
       }
        
        });
        
    getData20402059(type, country, function(data) {

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
    el.innerHTML = "<p>" + dataArrayPr + "</p>"; 
    document.getElementById("data").innerHTML = dataArrayPr;
       } else if (type == 'tas') {
       console.log(dataArrayTas);  
    el.innerHTML = "<p>" + dataArrayTas + "</p>"; 
    document.getElementById("data").innerHTML = dataArrayTas;    
       }
        
      
    
    
}

