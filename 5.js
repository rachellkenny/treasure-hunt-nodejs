var flat = '\x1b[93m' + '.' + '\x1b[0m'; 
var water = '\x1b[36m' + '~' + '\x1b[0m'; 
var hill = '\x1b[37m' + '^' + '\x1b[0m'; 
var you = '\x1b[47m' + '\x1b[30m' + '@' + '\x1b[0m'; 
var treasure = '\x1b[103m' + '\x1b[30m' + '$' + '\x1b[0m'; 

var tgi, erosion, terrain; 
var mapWidth = 80; 
var mapHeight = 20;
var treasureX = 80; 
var treasureY = 20;
var elevation = 240; 
var riskFactor = 0; 

var eroArr = Array.from(Array(mapHeight + 1), () => new Array(mapWidth + 1));

//first row
for(var x=0; x <= mapWidth; x++) {
        tgi = (x*16807);
        erosion = (tgi+elevation)%20183;
        eroArr[0][x] = erosion;
    
        if(x == 0) {
            tgi=0
            erosion = (tgi+elevation)%20183;
            eroArr[0][0] = erosion;
            terrain = you;
        } 
}

//first column
for(var y=1; y <= mapHeight; y++) {
            tgi = (y*48271); 
            erosion = (tgi+elevation)%20183;
            eroArr[y][0] = erosion;
            
}

//middle spaces
for(var y=1; y <= mapHeight; y++) {
    for(var x=1; x <= mapWidth; x++) {
            tgi = (eroArr[y-1][x] * eroArr[y][x-1]);
            erosion = (tgi+elevation)%20183;
            eroArr[y][x] = erosion;
        
    }

}

//print whole map
var s = '';
for(var y=0; y <= mapHeight; y++) {
    for(var x=0; x <= mapWidth; x++) {

        if(y == 0 && x == 0) {
            terrain = you;
        } 
        else if(y == treasureY && x == treasureX) {
            terrain = treasure;
        }
        else {
            switch(eroArr[y][x] % 3){
                case 0:
                    terrain = flat; 
                    break; 
                case 1: 
                    terrain = water; 
                    riskFactor += 1; 
                    break; 
                case 2: 
                    terrain = hill; 
                    riskFactor += 2; 
                    break; 
                }
        }
        s = s + terrain;
        
    }
    s = s + '\n'; 
}

console.log(s); 
console.log("Risk factor: " + riskFactor); 