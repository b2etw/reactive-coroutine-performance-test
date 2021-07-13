/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 683.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 184.0], [0.3, 184.0], [0.4, 184.0], [0.5, 184.0], [0.6, 184.0], [0.7, 184.0], [0.8, 184.0], [0.9, 184.0], [1.0, 184.0], [1.1, 184.0], [1.2, 184.0], [1.3, 184.0], [1.4, 184.0], [1.5, 184.0], [1.6, 184.0], [1.7, 184.0], [1.8, 184.0], [1.9, 184.0], [2.0, 184.0], [2.1, 184.0], [2.2, 184.0], [2.3, 184.0], [2.4, 184.0], [2.5, 184.0], [2.6, 184.0], [2.7, 184.0], [2.8, 184.0], [2.9, 184.0], [3.0, 184.0], [3.1, 184.0], [3.2, 184.0], [3.3, 184.0], [3.4, 184.0], [3.5, 184.0], [3.6, 184.0], [3.7, 184.0], [3.8, 185.0], [3.9, 185.0], [4.0, 185.0], [4.1, 185.0], [4.2, 185.0], [4.3, 185.0], [4.4, 185.0], [4.5, 185.0], [4.6, 185.0], [4.7, 185.0], [4.8, 185.0], [4.9, 185.0], [5.0, 185.0], [5.1, 185.0], [5.2, 185.0], [5.3, 185.0], [5.4, 185.0], [5.5, 185.0], [5.6, 185.0], [5.7, 185.0], [5.8, 185.0], [5.9, 185.0], [6.0, 185.0], [6.1, 185.0], [6.2, 185.0], [6.3, 185.0], [6.4, 185.0], [6.5, 185.0], [6.6, 185.0], [6.7, 185.0], [6.8, 185.0], [6.9, 185.0], [7.0, 185.0], [7.1, 185.0], [7.2, 185.0], [7.3, 185.0], [7.4, 185.0], [7.5, 185.0], [7.6, 185.0], [7.7, 185.0], [7.8, 185.0], [7.9, 185.0], [8.0, 185.0], [8.1, 185.0], [8.2, 186.0], [8.3, 186.0], [8.4, 186.0], [8.5, 186.0], [8.6, 186.0], [8.7, 186.0], [8.8, 186.0], [8.9, 186.0], [9.0, 186.0], [9.1, 186.0], [9.2, 186.0], [9.3, 186.0], [9.4, 186.0], [9.5, 186.0], [9.6, 186.0], [9.7, 186.0], [9.8, 186.0], [9.9, 186.0], [10.0, 186.0], [10.1, 187.0], [10.2, 187.0], [10.3, 187.0], [10.4, 187.0], [10.5, 187.0], [10.6, 187.0], [10.7, 187.0], [10.8, 187.0], [10.9, 187.0], [11.0, 187.0], [11.1, 187.0], [11.2, 188.0], [11.3, 188.0], [11.4, 188.0], [11.5, 188.0], [11.6, 188.0], [11.7, 188.0], [11.8, 189.0], [11.9, 189.0], [12.0, 189.0], [12.1, 189.0], [12.2, 189.0], [12.3, 190.0], [12.4, 190.0], [12.5, 191.0], [12.6, 191.0], [12.7, 192.0], [12.8, 192.0], [12.9, 193.0], [13.0, 193.0], [13.1, 194.0], [13.2, 194.0], [13.3, 194.0], [13.4, 195.0], [13.5, 195.0], [13.6, 196.0], [13.7, 196.0], [13.8, 196.0], [13.9, 197.0], [14.0, 197.0], [14.1, 197.0], [14.2, 197.0], [14.3, 198.0], [14.4, 198.0], [14.5, 198.0], [14.6, 199.0], [14.7, 199.0], [14.8, 200.0], [14.9, 200.0], [15.0, 200.0], [15.1, 200.0], [15.2, 201.0], [15.3, 201.0], [15.4, 201.0], [15.5, 202.0], [15.6, 203.0], [15.7, 203.0], [15.8, 204.0], [15.9, 204.0], [16.0, 205.0], [16.1, 205.0], [16.2, 206.0], [16.3, 206.0], [16.4, 207.0], [16.5, 207.0], [16.6, 208.0], [16.7, 208.0], [16.8, 209.0], [16.9, 209.0], [17.0, 210.0], [17.1, 210.0], [17.2, 211.0], [17.3, 211.0], [17.4, 212.0], [17.5, 212.0], [17.6, 213.0], [17.7, 214.0], [17.8, 214.0], [17.9, 215.0], [18.0, 215.0], [18.1, 216.0], [18.2, 216.0], [18.3, 216.0], [18.4, 217.0], [18.5, 217.0], [18.6, 218.0], [18.7, 218.0], [18.8, 218.0], [18.9, 218.0], [19.0, 219.0], [19.1, 219.0], [19.2, 220.0], [19.3, 220.0], [19.4, 220.0], [19.5, 220.0], [19.6, 220.0], [19.7, 221.0], [19.8, 221.0], [19.9, 221.0], [20.0, 222.0], [20.1, 222.0], [20.2, 223.0], [20.3, 223.0], [20.4, 223.0], [20.5, 223.0], [20.6, 224.0], [20.7, 224.0], [20.8, 225.0], [20.9, 225.0], [21.0, 225.0], [21.1, 226.0], [21.2, 226.0], [21.3, 227.0], [21.4, 227.0], [21.5, 228.0], [21.6, 228.0], [21.7, 229.0], [21.8, 229.0], [21.9, 229.0], [22.0, 229.0], [22.1, 229.0], [22.2, 230.0], [22.3, 230.0], [22.4, 230.0], [22.5, 230.0], [22.6, 231.0], [22.7, 231.0], [22.8, 232.0], [22.9, 232.0], [23.0, 232.0], [23.1, 232.0], [23.2, 233.0], [23.3, 233.0], [23.4, 233.0], [23.5, 233.0], [23.6, 234.0], [23.7, 234.0], [23.8, 235.0], [23.9, 235.0], [24.0, 235.0], [24.1, 236.0], [24.2, 236.0], [24.3, 236.0], [24.4, 237.0], [24.5, 237.0], [24.6, 237.0], [24.7, 237.0], [24.8, 238.0], [24.9, 238.0], [25.0, 238.0], [25.1, 238.0], [25.2, 239.0], [25.3, 239.0], [25.4, 239.0], [25.5, 239.0], [25.6, 240.0], [25.7, 240.0], [25.8, 240.0], [25.9, 241.0], [26.0, 241.0], [26.1, 241.0], [26.2, 241.0], [26.3, 241.0], [26.4, 242.0], [26.5, 242.0], [26.6, 242.0], [26.7, 242.0], [26.8, 242.0], [26.9, 243.0], [27.0, 243.0], [27.1, 243.0], [27.2, 244.0], [27.3, 244.0], [27.4, 244.0], [27.5, 245.0], [27.6, 245.0], [27.7, 245.0], [27.8, 246.0], [27.9, 246.0], [28.0, 246.0], [28.1, 246.0], [28.2, 247.0], [28.3, 247.0], [28.4, 247.0], [28.5, 248.0], [28.6, 248.0], [28.7, 248.0], [28.8, 248.0], [28.9, 249.0], [29.0, 249.0], [29.1, 249.0], [29.2, 250.0], [29.3, 250.0], [29.4, 251.0], [29.5, 251.0], [29.6, 251.0], [29.7, 252.0], [29.8, 252.0], [29.9, 252.0], [30.0, 253.0], [30.1, 253.0], [30.2, 253.0], [30.3, 253.0], [30.4, 254.0], [30.5, 254.0], [30.6, 254.0], [30.7, 255.0], [30.8, 255.0], [30.9, 255.0], [31.0, 256.0], [31.1, 256.0], [31.2, 256.0], [31.3, 257.0], [31.4, 257.0], [31.5, 257.0], [31.6, 258.0], [31.7, 258.0], [31.8, 259.0], [31.9, 259.0], [32.0, 259.0], [32.1, 259.0], [32.2, 260.0], [32.3, 260.0], [32.4, 260.0], [32.5, 261.0], [32.6, 261.0], [32.7, 261.0], [32.8, 261.0], [32.9, 261.0], [33.0, 262.0], [33.1, 262.0], [33.2, 263.0], [33.3, 263.0], [33.4, 264.0], [33.5, 264.0], [33.6, 265.0], [33.7, 265.0], [33.8, 266.0], [33.9, 266.0], [34.0, 266.0], [34.1, 266.0], [34.2, 267.0], [34.3, 267.0], [34.4, 267.0], [34.5, 268.0], [34.6, 268.0], [34.7, 268.0], [34.8, 268.0], [34.9, 268.0], [35.0, 268.0], [35.1, 269.0], [35.2, 269.0], [35.3, 269.0], [35.4, 269.0], [35.5, 270.0], [35.6, 270.0], [35.7, 270.0], [35.8, 271.0], [35.9, 271.0], [36.0, 271.0], [36.1, 272.0], [36.2, 272.0], [36.3, 272.0], [36.4, 272.0], [36.5, 273.0], [36.6, 273.0], [36.7, 273.0], [36.8, 274.0], [36.9, 274.0], [37.0, 274.0], [37.1, 275.0], [37.2, 275.0], [37.3, 275.0], [37.4, 275.0], [37.5, 276.0], [37.6, 276.0], [37.7, 276.0], [37.8, 277.0], [37.9, 277.0], [38.0, 277.0], [38.1, 277.0], [38.2, 278.0], [38.3, 278.0], [38.4, 278.0], [38.5, 278.0], [38.6, 279.0], [38.7, 279.0], [38.8, 279.0], [38.9, 280.0], [39.0, 280.0], [39.1, 280.0], [39.2, 280.0], [39.3, 280.0], [39.4, 281.0], [39.5, 281.0], [39.6, 281.0], [39.7, 281.0], [39.8, 282.0], [39.9, 282.0], [40.0, 282.0], [40.1, 282.0], [40.2, 283.0], [40.3, 283.0], [40.4, 283.0], [40.5, 284.0], [40.6, 284.0], [40.7, 284.0], [40.8, 284.0], [40.9, 284.0], [41.0, 285.0], [41.1, 285.0], [41.2, 285.0], [41.3, 285.0], [41.4, 286.0], [41.5, 286.0], [41.6, 286.0], [41.7, 286.0], [41.8, 287.0], [41.9, 287.0], [42.0, 287.0], [42.1, 287.0], [42.2, 287.0], [42.3, 288.0], [42.4, 288.0], [42.5, 288.0], [42.6, 288.0], [42.7, 289.0], [42.8, 289.0], [42.9, 289.0], [43.0, 289.0], [43.1, 289.0], [43.2, 290.0], [43.3, 290.0], [43.4, 290.0], [43.5, 290.0], [43.6, 291.0], [43.7, 291.0], [43.8, 291.0], [43.9, 291.0], [44.0, 291.0], [44.1, 292.0], [44.2, 292.0], [44.3, 292.0], [44.4, 292.0], [44.5, 292.0], [44.6, 293.0], [44.7, 293.0], [44.8, 293.0], [44.9, 294.0], [45.0, 294.0], [45.1, 294.0], [45.2, 294.0], [45.3, 294.0], [45.4, 295.0], [45.5, 295.0], [45.6, 295.0], [45.7, 295.0], [45.8, 295.0], [45.9, 296.0], [46.0, 296.0], [46.1, 296.0], [46.2, 296.0], [46.3, 296.0], [46.4, 296.0], [46.5, 297.0], [46.6, 297.0], [46.7, 297.0], [46.8, 297.0], [46.9, 297.0], [47.0, 298.0], [47.1, 298.0], [47.2, 298.0], [47.3, 298.0], [47.4, 299.0], [47.5, 299.0], [47.6, 299.0], [47.7, 299.0], [47.8, 300.0], [47.9, 300.0], [48.0, 300.0], [48.1, 300.0], [48.2, 300.0], [48.3, 301.0], [48.4, 301.0], [48.5, 301.0], [48.6, 301.0], [48.7, 302.0], [48.8, 302.0], [48.9, 302.0], [49.0, 302.0], [49.1, 303.0], [49.2, 303.0], [49.3, 303.0], [49.4, 304.0], [49.5, 304.0], [49.6, 304.0], [49.7, 304.0], [49.8, 305.0], [49.9, 305.0], [50.0, 305.0], [50.1, 305.0], [50.2, 306.0], [50.3, 306.0], [50.4, 306.0], [50.5, 306.0], [50.6, 307.0], [50.7, 307.0], [50.8, 307.0], [50.9, 308.0], [51.0, 308.0], [51.1, 308.0], [51.2, 309.0], [51.3, 309.0], [51.4, 309.0], [51.5, 309.0], [51.6, 309.0], [51.7, 310.0], [51.8, 310.0], [51.9, 310.0], [52.0, 311.0], [52.1, 311.0], [52.2, 311.0], [52.3, 311.0], [52.4, 312.0], [52.5, 312.0], [52.6, 312.0], [52.7, 313.0], [52.8, 313.0], [52.9, 313.0], [53.0, 314.0], [53.1, 314.0], [53.2, 314.0], [53.3, 315.0], [53.4, 315.0], [53.5, 316.0], [53.6, 316.0], [53.7, 316.0], [53.8, 316.0], [53.9, 317.0], [54.0, 317.0], [54.1, 317.0], [54.2, 318.0], [54.3, 318.0], [54.4, 318.0], [54.5, 318.0], [54.6, 319.0], [54.7, 319.0], [54.8, 320.0], [54.9, 320.0], [55.0, 320.0], [55.1, 320.0], [55.2, 320.0], [55.3, 321.0], [55.4, 321.0], [55.5, 321.0], [55.6, 322.0], [55.7, 322.0], [55.8, 322.0], [55.9, 322.0], [56.0, 323.0], [56.1, 323.0], [56.2, 323.0], [56.3, 323.0], [56.4, 323.0], [56.5, 324.0], [56.6, 324.0], [56.7, 324.0], [56.8, 324.0], [56.9, 324.0], [57.0, 325.0], [57.1, 325.0], [57.2, 325.0], [57.3, 325.0], [57.4, 326.0], [57.5, 326.0], [57.6, 326.0], [57.7, 326.0], [57.8, 326.0], [57.9, 327.0], [58.0, 327.0], [58.1, 327.0], [58.2, 328.0], [58.3, 328.0], [58.4, 328.0], [58.5, 328.0], [58.6, 329.0], [58.7, 329.0], [58.8, 329.0], [58.9, 329.0], [59.0, 329.0], [59.1, 330.0], [59.2, 330.0], [59.3, 330.0], [59.4, 331.0], [59.5, 331.0], [59.6, 331.0], [59.7, 331.0], [59.8, 332.0], [59.9, 332.0], [60.0, 332.0], [60.1, 333.0], [60.2, 333.0], [60.3, 333.0], [60.4, 333.0], [60.5, 333.0], [60.6, 333.0], [60.7, 334.0], [60.8, 334.0], [60.9, 334.0], [61.0, 334.0], [61.1, 335.0], [61.2, 335.0], [61.3, 335.0], [61.4, 336.0], [61.5, 336.0], [61.6, 336.0], [61.7, 336.0], [61.8, 336.0], [61.9, 337.0], [62.0, 337.0], [62.1, 337.0], [62.2, 337.0], [62.3, 337.0], [62.4, 337.0], [62.5, 338.0], [62.6, 338.0], [62.7, 338.0], [62.8, 338.0], [62.9, 338.0], [63.0, 339.0], [63.1, 339.0], [63.2, 339.0], [63.3, 339.0], [63.4, 339.0], [63.5, 340.0], [63.6, 340.0], [63.7, 340.0], [63.8, 340.0], [63.9, 340.0], [64.0, 341.0], [64.1, 341.0], [64.2, 341.0], [64.3, 341.0], [64.4, 342.0], [64.5, 342.0], [64.6, 342.0], [64.7, 342.0], [64.8, 343.0], [64.9, 343.0], [65.0, 343.0], [65.1, 344.0], [65.2, 344.0], [65.3, 344.0], [65.4, 344.0], [65.5, 345.0], [65.6, 345.0], [65.7, 346.0], [65.8, 346.0], [65.9, 346.0], [66.0, 346.0], [66.1, 347.0], [66.2, 347.0], [66.3, 347.0], [66.4, 347.0], [66.5, 348.0], [66.6, 348.0], [66.7, 348.0], [66.8, 348.0], [66.9, 348.0], [67.0, 349.0], [67.1, 349.0], [67.2, 349.0], [67.3, 349.0], [67.4, 350.0], [67.5, 350.0], [67.6, 350.0], [67.7, 351.0], [67.8, 351.0], [67.9, 351.0], [68.0, 351.0], [68.1, 352.0], [68.2, 352.0], [68.3, 352.0], [68.4, 353.0], [68.5, 353.0], [68.6, 353.0], [68.7, 353.0], [68.8, 354.0], [68.9, 354.0], [69.0, 354.0], [69.1, 355.0], [69.2, 355.0], [69.3, 355.0], [69.4, 356.0], [69.5, 356.0], [69.6, 356.0], [69.7, 357.0], [69.8, 357.0], [69.9, 357.0], [70.0, 358.0], [70.1, 358.0], [70.2, 359.0], [70.3, 359.0], [70.4, 359.0], [70.5, 359.0], [70.6, 359.0], [70.7, 360.0], [70.8, 360.0], [70.9, 360.0], [71.0, 361.0], [71.1, 361.0], [71.2, 361.0], [71.3, 362.0], [71.4, 362.0], [71.5, 362.0], [71.6, 362.0], [71.7, 363.0], [71.8, 363.0], [71.9, 363.0], [72.0, 364.0], [72.1, 364.0], [72.2, 364.0], [72.3, 365.0], [72.4, 365.0], [72.5, 366.0], [72.6, 366.0], [72.7, 366.0], [72.8, 366.0], [72.9, 367.0], [73.0, 367.0], [73.1, 367.0], [73.2, 368.0], [73.3, 368.0], [73.4, 368.0], [73.5, 369.0], [73.6, 369.0], [73.7, 369.0], [73.8, 369.0], [73.9, 370.0], [74.0, 370.0], [74.1, 370.0], [74.2, 370.0], [74.3, 371.0], [74.4, 371.0], [74.5, 372.0], [74.6, 372.0], [74.7, 372.0], [74.8, 373.0], [74.9, 373.0], [75.0, 373.0], [75.1, 374.0], [75.2, 374.0], [75.3, 374.0], [75.4, 374.0], [75.5, 375.0], [75.6, 375.0], [75.7, 375.0], [75.8, 376.0], [75.9, 376.0], [76.0, 376.0], [76.1, 376.0], [76.2, 377.0], [76.3, 377.0], [76.4, 378.0], [76.5, 378.0], [76.6, 378.0], [76.7, 378.0], [76.8, 378.0], [76.9, 379.0], [77.0, 379.0], [77.1, 379.0], [77.2, 380.0], [77.3, 380.0], [77.4, 381.0], [77.5, 381.0], [77.6, 381.0], [77.7, 381.0], [77.8, 382.0], [77.9, 382.0], [78.0, 383.0], [78.1, 383.0], [78.2, 384.0], [78.3, 384.0], [78.4, 384.0], [78.5, 385.0], [78.6, 385.0], [78.7, 385.0], [78.8, 385.0], [78.9, 386.0], [79.0, 386.0], [79.1, 386.0], [79.2, 386.0], [79.3, 387.0], [79.4, 387.0], [79.5, 388.0], [79.6, 388.0], [79.7, 389.0], [79.8, 389.0], [79.9, 390.0], [80.0, 390.0], [80.1, 391.0], [80.2, 391.0], [80.3, 392.0], [80.4, 392.0], [80.5, 392.0], [80.6, 393.0], [80.7, 393.0], [80.8, 393.0], [80.9, 394.0], [81.0, 395.0], [81.1, 395.0], [81.2, 395.0], [81.3, 396.0], [81.4, 396.0], [81.5, 397.0], [81.6, 397.0], [81.7, 398.0], [81.8, 398.0], [81.9, 398.0], [82.0, 399.0], [82.1, 399.0], [82.2, 399.0], [82.3, 400.0], [82.4, 400.0], [82.5, 401.0], [82.6, 401.0], [82.7, 402.0], [82.8, 402.0], [82.9, 402.0], [83.0, 403.0], [83.1, 403.0], [83.2, 404.0], [83.3, 404.0], [83.4, 405.0], [83.5, 405.0], [83.6, 406.0], [83.7, 406.0], [83.8, 407.0], [83.9, 407.0], [84.0, 408.0], [84.1, 408.0], [84.2, 408.0], [84.3, 409.0], [84.4, 410.0], [84.5, 411.0], [84.6, 412.0], [84.7, 412.0], [84.8, 412.0], [84.9, 413.0], [85.0, 413.0], [85.1, 414.0], [85.2, 414.0], [85.3, 414.0], [85.4, 415.0], [85.5, 415.0], [85.6, 416.0], [85.7, 416.0], [85.8, 416.0], [85.9, 417.0], [86.0, 417.0], [86.1, 418.0], [86.2, 418.0], [86.3, 419.0], [86.4, 420.0], [86.5, 420.0], [86.6, 420.0], [86.7, 420.0], [86.8, 421.0], [86.9, 422.0], [87.0, 423.0], [87.1, 423.0], [87.2, 424.0], [87.3, 425.0], [87.4, 425.0], [87.5, 425.0], [87.6, 426.0], [87.7, 427.0], [87.8, 427.0], [87.9, 427.0], [88.0, 428.0], [88.1, 428.0], [88.2, 429.0], [88.3, 429.0], [88.4, 429.0], [88.5, 429.0], [88.6, 430.0], [88.7, 431.0], [88.8, 431.0], [88.9, 432.0], [89.0, 432.0], [89.1, 433.0], [89.2, 433.0], [89.3, 434.0], [89.4, 435.0], [89.5, 436.0], [89.6, 436.0], [89.7, 437.0], [89.8, 437.0], [89.9, 438.0], [90.0, 439.0], [90.1, 440.0], [90.2, 440.0], [90.3, 440.0], [90.4, 441.0], [90.5, 442.0], [90.6, 442.0], [90.7, 443.0], [90.8, 444.0], [90.9, 445.0], [91.0, 445.0], [91.1, 446.0], [91.2, 446.0], [91.3, 447.0], [91.4, 447.0], [91.5, 448.0], [91.6, 448.0], [91.7, 448.0], [91.8, 449.0], [91.9, 450.0], [92.0, 450.0], [92.1, 451.0], [92.2, 452.0], [92.3, 452.0], [92.4, 453.0], [92.5, 454.0], [92.6, 455.0], [92.7, 455.0], [92.8, 456.0], [92.9, 457.0], [93.0, 458.0], [93.1, 458.0], [93.2, 460.0], [93.3, 461.0], [93.4, 461.0], [93.5, 462.0], [93.6, 463.0], [93.7, 463.0], [93.8, 464.0], [93.9, 465.0], [94.0, 465.0], [94.1, 466.0], [94.2, 467.0], [94.3, 467.0], [94.4, 468.0], [94.5, 469.0], [94.6, 470.0], [94.7, 471.0], [94.8, 472.0], [94.9, 473.0], [95.0, 474.0], [95.1, 475.0], [95.2, 476.0], [95.3, 477.0], [95.4, 478.0], [95.5, 479.0], [95.6, 479.0], [95.7, 480.0], [95.8, 481.0], [95.9, 483.0], [96.0, 484.0], [96.1, 485.0], [96.2, 486.0], [96.3, 487.0], [96.4, 488.0], [96.5, 489.0], [96.6, 491.0], [96.7, 493.0], [96.8, 493.0], [96.9, 494.0], [97.0, 496.0], [97.1, 497.0], [97.2, 500.0], [97.3, 502.0], [97.4, 504.0], [97.5, 505.0], [97.6, 509.0], [97.7, 511.0], [97.8, 513.0], [97.9, 516.0], [98.0, 518.0], [98.1, 522.0], [98.2, 523.0], [98.3, 526.0], [98.4, 529.0], [98.5, 535.0], [98.6, 538.0], [98.7, 541.0], [98.8, 546.0], [98.9, 552.0], [99.0, 556.0], [99.1, 563.0], [99.2, 575.0], [99.3, 587.0], [99.4, 602.0], [99.5, 611.0], [99.6, 616.0], [99.7, 628.0], [99.8, 630.0], [99.9, 648.0]], "isOverall": false, "label": "cpu/1/vertx/vertx", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 39.0, "minX": 100.0, "maxY": 2077.0, "series": [{"data": [[300.0, 2077.0], [600.0, 39.0], [200.0, 1984.0], [100.0, 887.0], [400.0, 900.0], [500.0, 130.0]], "isOverall": false, "label": "cpu/1/vertx/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 166.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5851.0, "series": [{"data": [[0.0, 5851.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 166.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 11.08755760368664, "minX": 1.62617274E12, "maxY": 50.0, "series": [{"data": [[1.6261728E12, 45.32816326530608], [1.62617298E12, 50.0], [1.62617286E12, 50.0], [1.62617304E12, 48.72923076923075], [1.62617274E12, 11.08755760368664], [1.62617292E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617304E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 198.23076923076925, "minX": 1.0, "maxY": 512.4375, "series": [{"data": [[2.0, 209.14285714285714], [3.0, 201.70000000000005], [4.0, 198.23076923076925], [5.0, 208.33333333333334], [6.0, 217.61538461538458], [7.0, 225.93333333333334], [8.0, 246.5], [9.0, 266.26666666666665], [10.0, 255.28571428571428], [11.0, 292.75], [12.0, 329.53846153846155], [13.0, 388.14285714285705], [14.0, 428.5], [15.0, 396.3333333333333], [16.0, 421.92857142857144], [17.0, 403.5], [18.0, 441.0666666666666], [19.0, 254.25], [20.0, 387.8947368421053], [21.0, 387.75], [22.0, 386.55555555555554], [23.0, 405.6923076923077], [24.0, 299.64285714285717], [25.0, 433.4], [26.0, 299.0833333333333], [27.0, 397.16666666666663], [28.0, 381.0], [29.0, 315.2857142857143], [30.0, 512.4375], [31.0, 332.57142857142856], [32.0, 447.7333333333333], [33.0, 379.56249999999994], [34.0, 290.8888888888889], [35.0, 489.3125000000001], [36.0, 381.9285714285714], [37.0, 302.2727272727273], [38.0, 476.55555555555554], [39.0, 406.8571428571429], [40.0, 320.09999999999997], [41.0, 498.99999999999994], [42.0, 436.0], [43.0, 367.05555555555554], [44.0, 467.3333333333333], [45.0, 435.61538461538464], [46.0, 402.56250000000006], [47.0, 307.1], [48.0, 489.1538461538462], [49.0, 421.29411764705884], [50.0, 305.83082077051813], [1.0, 253.33333333333334]], "isOverall": false, "label": "cpu/1/vertx/vertx", "isController": false}, {"data": [[47.439587834468966, 312.48612265248494]], "isOverall": false, "label": "cpu/1/vertx/vertx-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 556.9666666666667, "minX": 1.62617274E12, "maxY": 3675.0, "series": [{"data": [[1.6261728E12, 3144.1666666666665], [1.62617298E12, 3080.0], [1.62617286E12, 3080.0], [1.62617304E12, 2502.5], [1.62617274E12, 556.9666666666667], [1.62617292E12, 3080.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6261728E12, 3675.0], [1.62617298E12, 3600.0], [1.62617286E12, 3600.0], [1.62617304E12, 2925.0], [1.62617274E12, 651.0], [1.62617292E12, 3600.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617304E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 305.40166666666704, "minX": 1.62617274E12, "maxY": 337.6693877551018, "series": [{"data": [[1.6261728E12, 337.6693877551018], [1.62617298E12, 305.77666666666636], [1.62617286E12, 305.40166666666704], [1.62617304E12, 305.8687179487178], [1.62617274E12, 312.8341013824886], [1.62617292E12, 305.8858333333334]], "isOverall": false, "label": "cpu/1/vertx/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617304E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 305.38416666666643, "minX": 1.62617274E12, "maxY": 337.6522448979591, "series": [{"data": [[1.6261728E12, 337.6522448979591], [1.62617298E12, 305.760833333334], [1.62617286E12, 305.38416666666643], [1.62617304E12, 305.8502564102569], [1.62617274E12, 312.783410138249], [1.62617292E12, 305.87249999999995]], "isOverall": false, "label": "cpu/1/vertx/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617304E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.48820512820512796, "minX": 1.62617274E12, "maxY": 0.9815668202764977, "series": [{"data": [[1.6261728E12, 0.6612244897959199], [1.62617298E12, 0.49166666666666703], [1.62617286E12, 0.5425000000000009], [1.62617304E12, 0.48820512820512796], [1.62617274E12, 0.9815668202764977], [1.62617292E12, 0.5349999999999999]], "isOverall": false, "label": "cpu/1/vertx/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617304E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 184.0, "minX": 1.62617274E12, "maxY": 683.0, "series": [{"data": [[1.6261728E12, 683.0], [1.62617298E12, 654.0], [1.62617286E12, 541.0], [1.62617304E12, 545.0], [1.62617274E12, 604.0], [1.62617292E12, 541.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6261728E12, 487.4000000000001], [1.62617298E12, 419.9000000000001], [1.62617286E12, 425.0], [1.62617304E12, 423.79999999999995], [1.62617274E12, 493.0], [1.62617292E12, 427.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6261728E12, 630.0], [1.62617298E12, 502.0], [1.62617286E12, 500.96000000000004], [1.62617304E12, 505.72], [1.62617274E12, 567.0999999999999], [1.62617292E12, 503.9200000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6261728E12, 550.4000000000001], [1.62617298E12, 452.0], [1.62617286E12, 451.95000000000005], [1.62617304E12, 452.19999999999993], [1.62617274E12, 533.1], [1.62617292E12, 454.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6261728E12, 184.0], [1.62617298E12, 184.0], [1.62617286E12, 184.0], [1.62617304E12, 184.0], [1.62617274E12, 185.0], [1.62617292E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6261728E12, 326.0], [1.62617298E12, 301.0], [1.62617286E12, 300.0], [1.62617304E12, 304.0], [1.62617274E12, 278.0], [1.62617292E12, 301.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617304E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 185.0, "minX": 2.0, "maxY": 374.0, "series": [{"data": [[2.0, 202.5], [12.0, 185.0], [14.0, 324.5], [15.0, 285.0], [16.0, 279.5], [17.0, 280.0], [18.0, 283.5], [19.0, 374.0], [20.0, 342.0], [21.0, 317.0], [22.0, 317.0], [23.0, 328.0], [24.0, 316.0], [25.0, 335.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 185.0, "minX": 2.0, "maxY": 374.0, "series": [{"data": [[2.0, 201.0], [12.0, 185.0], [14.0, 324.5], [15.0, 285.0], [16.0, 279.5], [17.0, 280.0], [18.0, 283.5], [19.0, 374.0], [20.0, 342.0], [21.0, 317.0], [22.0, 317.0], [23.0, 328.0], [24.0, 316.0], [25.0, 335.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.716666666666667, "minX": 1.62617274E12, "maxY": 20.4, "series": [{"data": [[1.6261728E12, 20.4], [1.62617298E12, 20.0], [1.62617286E12, 20.0], [1.62617304E12, 16.166666666666668], [1.62617274E12, 3.716666666666667], [1.62617292E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617304E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.6166666666666667, "minX": 1.62617274E12, "maxY": 20.416666666666668, "series": [{"data": [[1.6261728E12, 20.416666666666668], [1.62617298E12, 20.0], [1.62617286E12, 20.0], [1.62617304E12, 16.25], [1.62617274E12, 3.6166666666666667], [1.62617292E12, 20.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617304E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.6166666666666667, "minX": 1.62617274E12, "maxY": 20.416666666666668, "series": [{"data": [[1.6261728E12, 20.416666666666668], [1.62617298E12, 20.0], [1.62617286E12, 20.0], [1.62617304E12, 16.25], [1.62617274E12, 3.6166666666666667], [1.62617292E12, 20.0]], "isOverall": false, "label": "cpu/1/vertx/vertx-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617304E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.6166666666666667, "minX": 1.62617274E12, "maxY": 20.416666666666668, "series": [{"data": [[1.6261728E12, 20.416666666666668], [1.62617298E12, 20.0], [1.62617286E12, 20.0], [1.62617304E12, 16.25], [1.62617274E12, 3.6166666666666667], [1.62617292E12, 20.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617304E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

