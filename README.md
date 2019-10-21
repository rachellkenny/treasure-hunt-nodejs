# treasure-hunt-nodejs
A NodeJS program simulating a 'treasure hunt' and displaying an output in the terminal.
An assignment from COMP-246 at Brookdale Community College.

You are in an uncharted territory deep in the Amazon jungle. There is a buried treasure in the vicinity. You know its location, but the terrain is dangerous. You see three terrain types: *FLAT(.)*, *WATER(~)*, and *HILL(^)*. You need to map out the region to find the safest route to the treasure. Your map is a two-dimensional grid, with columns(X) and rows(Y). The top-left corner of the map is X,Y `0,0`. Columns increase to the right; rows increase down. 

Your goal is to complete the real map, display it, and calculate the `risk factor` of the terrain between you and the treasure. Your terrain expertise reveals the following information:

* The **elevation** of the entire area is `240`.
* You are at coordinate `0,0`.
* The treasure is at coordinate `80,20`.
* Calculate the *topographic index* for each coordinate on the map. For any other coordinate on the map, the *topographic index* is calculated as follows. Start at your location and work left-to-right, then top-to-bottom. Here is the calculation (apply the _first applicable rule only_):

    1. The *topographic index* at your location is `0`.
    1. The *topographic index* at the treasure location is `0`.
    1. If the `Y` coordinate is `0`, the *topographic index* is its `X` coordinate times `16807`.
    1. If the `X` coordinate is `0`, the *topographic index* is its `Y` coordinate times `48271`.
    1. For all other coordinates, the *topographic index* is the result of multiplying the **erosion levels** of the regions at `X-1,Y` and `X,Y-1`.

* For any coordinate on the map, the *erosion level* is the result of adding its *topographic index* and the *elevation*, then performing *modulo* `20183`.
* The **terrain type** of a coordinate is calculated as follows:

    * If *erosion level* modulo `3` is `0`, the terrain type is **FLAT**.
    * If *erosion level* modulo `3` is `1`, the terrain type is **WATER**.
    * If *erosion level* modulo `3` is `2`, the terrain type is **HILL**.

* The overall **risk factor** between you and the treasure is calculated as follows:

    * *FLAT* regions have a *risk factor* of `0`. *WATER* regions have a *risk factor* of `1`. *HILL* regions have a *risk factor* of `2`.
    * The overall *risk factor* is the sum of the *risk factors* of the regions between you and the treasure. That is, it is the sum of the *risk factors* of the regions that have `X` coordinates in the range `0..80` and `Y` coordinates in the range `0..20`.
    * For example, the overall *risk factor* of the sample map above is `23`.

**Your task**:

* Save the program to a file named `5.js` .
* Output the map to the console, using the characters and colors in the sample above:

    * Display *FLAT(.)* regions with a `Bright Yellow` foreground color. 
    * Display *WATER(~)* regions with a `Bright Cyan` foreground color. 
    * Display *HILL(^)* regions with a `White` foreground color.
    * Display `you(@)` with a `black` foreground color and `white` background color.
    * Display the `treasure($)` with a `black` foreground color and `Bright Yellow` background color.

* Output the overall *risk factor* of the area to the console.
* Submit `5.js` to Canvas.
