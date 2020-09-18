var rData = JSON.parse(routeData);
var rNum = JSON.parse(routeNumbers);
function getRoute(routeId){
    for (routeTrace = 0; routeTrace < rData.routes.length; routeTrace++){
        if(routeId == rData.routes[routeTrace].RouteID){
        document.getElementById('short').innerHTML += getRouteNumber(rData.routes[routeTrace].RouteID)+"<BR>Source: "+rData.routes[routeTrace].stops[0]+"<BR>Destination: "+rData.routes[routeTrace].stops[rData.routes[routeTrace].stops.length -1]+"<BR>";
        for (stopTrace = 0; stopTrace < rData.routes[routeTrace].stops.length; stopTrace++){
            document.getElementById('short').innerHTML += (stopTrace + 1)+" "+rData.routes[routeTrace].stops[stopTrace] + "<BR>";
        }}
        else{
            continue;
        }
    }   
}
function getRouteList(routeNumber){
    for (r = 0;r < rNum.routeNumbers.length;r++){
        if (routeNumber == rNum.routeNumbers[r].RouteNumber){
            for (rn = 0; rn < rNum.routeNumbers[r].RouteList.length;rn++){
                for (routeTrace = 0; routeTrace < rData.routes.length; routeTrace++){
                    if(rNum.routeNumbers[r].RouteList[rn] == rData.routes[routeTrace].RouteID){
                        document.getElementById('short').innerHTML += rNum.routeNumbers[r].RouteNumber+"<BR>Source: "+rData.routes[routeTrace].stops[0]+"<BR>Destination: "+rData.routes[routeTrace].stops[rData.routes[routeTrace].stops.length -1]+"<BR>"+rData.routes[routeTrace].stops.length+" stops<br>";
                    }
                    else{
                        continue;
                    }
                }
            }
        }    
    }
}
function getRouteNumber(rId){
    for (r = 0;r < rNum.routeNumbers.length;r++){
        for (rn = 0; rn < rNum.routeNumbers[r].RouteList.length;rn++){
            if(rId == rNum.routeNumbers[r].RouteList[rn]){
                return rNum.routeNumbers[r].RouteNumber;
            }
            else{
                continue;
            }
        }
    }
}    
function getDistance(a, b){
    document.getElementById('short').innerHTML += "<br>Distance = "+Math.round(110*(Math.sqrt(Math.pow(a[0]-b[0], 2)+Math.pow(a[1]-b[1], 2)))*100)/100+"km"; 
}
function tripPlanner(source,destination){
    for (routeTrace = 0; routeTrace < rData.routes.length; routeTrace++){
        if(rData.routes[routeTrace].stops.includes(source) == true && rData.routes[routeTrace].stops.includes(destination) == true){
            document.getElementById('short').innerHTML += getRouteNumber(rData.routes[routeTrace].RouteID)+"<BR>Source: "+rData.routes[routeTrace].stops[0]+"<BR>Destination: "+rData.routes[routeTrace].stops[rData.routes[routeTrace].stops.length -1]+"<BR>";
        }
    }
}

//document.getElementById('short').innerHTML += getRouteNumber(rData.routes[routeTrace].RouteID)+"<BR>Source: "+rData.routes[routeTrace].stops[0]+"<BR>Destination: "+rData.routes[routeTrace].stops[rData.routes[routeTrace].stops.length -1]+"<BR>";