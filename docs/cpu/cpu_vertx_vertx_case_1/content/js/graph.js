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
        data: {"result": {"minY": 251.0, "minX": 0.0, "maxY": 708.0, "series": [{"data": [[0.0, 251.0], [0.1, 252.0], [0.2, 253.0], [0.3, 253.0], [0.4, 253.0], [0.5, 253.0], [0.6, 254.0], [0.7, 254.0], [0.8, 254.0], [0.9, 254.0], [1.0, 254.0], [1.1, 254.0], [1.2, 255.0], [1.3, 255.0], [1.4, 255.0], [1.5, 255.0], [1.6, 255.0], [1.7, 255.0], [1.8, 255.0], [1.9, 255.0], [2.0, 255.0], [2.1, 255.0], [2.2, 255.0], [2.3, 256.0], [2.4, 256.0], [2.5, 256.0], [2.6, 256.0], [2.7, 256.0], [2.8, 256.0], [2.9, 256.0], [3.0, 256.0], [3.1, 257.0], [3.2, 257.0], [3.3, 257.0], [3.4, 257.0], [3.5, 257.0], [3.6, 257.0], [3.7, 257.0], [3.8, 257.0], [3.9, 257.0], [4.0, 257.0], [4.1, 257.0], [4.2, 257.0], [4.3, 257.0], [4.4, 257.0], [4.5, 257.0], [4.6, 258.0], [4.7, 258.0], [4.8, 258.0], [4.9, 258.0], [5.0, 258.0], [5.1, 258.0], [5.2, 258.0], [5.3, 258.0], [5.4, 258.0], [5.5, 258.0], [5.6, 258.0], [5.7, 259.0], [5.8, 259.0], [5.9, 259.0], [6.0, 259.0], [6.1, 259.0], [6.2, 259.0], [6.3, 259.0], [6.4, 259.0], [6.5, 259.0], [6.6, 259.0], [6.7, 259.0], [6.8, 259.0], [6.9, 259.0], [7.0, 259.0], [7.1, 259.0], [7.2, 259.0], [7.3, 259.0], [7.4, 259.0], [7.5, 259.0], [7.6, 259.0], [7.7, 259.0], [7.8, 260.0], [7.9, 260.0], [8.0, 260.0], [8.1, 260.0], [8.2, 260.0], [8.3, 260.0], [8.4, 260.0], [8.5, 260.0], [8.6, 260.0], [8.7, 260.0], [8.8, 260.0], [8.9, 260.0], [9.0, 260.0], [9.1, 260.0], [9.2, 260.0], [9.3, 260.0], [9.4, 260.0], [9.5, 260.0], [9.6, 260.0], [9.7, 260.0], [9.8, 260.0], [9.9, 260.0], [10.0, 261.0], [10.1, 261.0], [10.2, 261.0], [10.3, 261.0], [10.4, 261.0], [10.5, 261.0], [10.6, 261.0], [10.7, 261.0], [10.8, 261.0], [10.9, 261.0], [11.0, 261.0], [11.1, 261.0], [11.2, 261.0], [11.3, 261.0], [11.4, 261.0], [11.5, 261.0], [11.6, 261.0], [11.7, 261.0], [11.8, 261.0], [11.9, 262.0], [12.0, 262.0], [12.1, 262.0], [12.2, 262.0], [12.3, 262.0], [12.4, 262.0], [12.5, 262.0], [12.6, 262.0], [12.7, 262.0], [12.8, 262.0], [12.9, 262.0], [13.0, 262.0], [13.1, 262.0], [13.2, 262.0], [13.3, 262.0], [13.4, 263.0], [13.5, 263.0], [13.6, 263.0], [13.7, 263.0], [13.8, 263.0], [13.9, 263.0], [14.0, 263.0], [14.1, 263.0], [14.2, 264.0], [14.3, 264.0], [14.4, 264.0], [14.5, 264.0], [14.6, 264.0], [14.7, 264.0], [14.8, 264.0], [14.9, 264.0], [15.0, 265.0], [15.1, 265.0], [15.2, 265.0], [15.3, 265.0], [15.4, 265.0], [15.5, 265.0], [15.6, 266.0], [15.7, 266.0], [15.8, 266.0], [15.9, 266.0], [16.0, 266.0], [16.1, 266.0], [16.2, 266.0], [16.3, 266.0], [16.4, 267.0], [16.5, 267.0], [16.6, 267.0], [16.7, 267.0], [16.8, 267.0], [16.9, 267.0], [17.0, 268.0], [17.1, 268.0], [17.2, 268.0], [17.3, 268.0], [17.4, 268.0], [17.5, 269.0], [17.6, 269.0], [17.7, 269.0], [17.8, 269.0], [17.9, 269.0], [18.0, 269.0], [18.1, 269.0], [18.2, 269.0], [18.3, 270.0], [18.4, 270.0], [18.5, 270.0], [18.6, 270.0], [18.7, 270.0], [18.8, 270.0], [18.9, 271.0], [19.0, 271.0], [19.1, 271.0], [19.2, 271.0], [19.3, 271.0], [19.4, 271.0], [19.5, 271.0], [19.6, 272.0], [19.7, 272.0], [19.8, 272.0], [19.9, 272.0], [20.0, 272.0], [20.1, 272.0], [20.2, 273.0], [20.3, 273.0], [20.4, 273.0], [20.5, 273.0], [20.6, 273.0], [20.7, 273.0], [20.8, 274.0], [20.9, 274.0], [21.0, 274.0], [21.1, 274.0], [21.2, 274.0], [21.3, 274.0], [21.4, 275.0], [21.5, 275.0], [21.6, 275.0], [21.7, 275.0], [21.8, 275.0], [21.9, 276.0], [22.0, 276.0], [22.1, 276.0], [22.2, 276.0], [22.3, 277.0], [22.4, 277.0], [22.5, 277.0], [22.6, 277.0], [22.7, 277.0], [22.8, 278.0], [22.9, 278.0], [23.0, 278.0], [23.1, 278.0], [23.2, 278.0], [23.3, 278.0], [23.4, 278.0], [23.5, 279.0], [23.6, 279.0], [23.7, 279.0], [23.8, 279.0], [23.9, 279.0], [24.0, 280.0], [24.1, 280.0], [24.2, 280.0], [24.3, 280.0], [24.4, 280.0], [24.5, 280.0], [24.6, 280.0], [24.7, 280.0], [24.8, 281.0], [24.9, 281.0], [25.0, 281.0], [25.1, 281.0], [25.2, 282.0], [25.3, 282.0], [25.4, 282.0], [25.5, 282.0], [25.6, 282.0], [25.7, 282.0], [25.8, 282.0], [25.9, 282.0], [26.0, 282.0], [26.1, 283.0], [26.2, 283.0], [26.3, 283.0], [26.4, 283.0], [26.5, 283.0], [26.6, 283.0], [26.7, 284.0], [26.8, 284.0], [26.9, 284.0], [27.0, 284.0], [27.1, 284.0], [27.2, 284.0], [27.3, 285.0], [27.4, 285.0], [27.5, 285.0], [27.6, 285.0], [27.7, 285.0], [27.8, 286.0], [27.9, 286.0], [28.0, 286.0], [28.1, 286.0], [28.2, 286.0], [28.3, 286.0], [28.4, 287.0], [28.5, 287.0], [28.6, 287.0], [28.7, 287.0], [28.8, 287.0], [28.9, 287.0], [29.0, 288.0], [29.1, 288.0], [29.2, 288.0], [29.3, 288.0], [29.4, 288.0], [29.5, 289.0], [29.6, 289.0], [29.7, 289.0], [29.8, 289.0], [29.9, 289.0], [30.0, 289.0], [30.1, 290.0], [30.2, 290.0], [30.3, 290.0], [30.4, 290.0], [30.5, 291.0], [30.6, 291.0], [30.7, 291.0], [30.8, 291.0], [30.9, 291.0], [31.0, 292.0], [31.1, 292.0], [31.2, 292.0], [31.3, 292.0], [31.4, 292.0], [31.5, 292.0], [31.6, 293.0], [31.7, 293.0], [31.8, 293.0], [31.9, 293.0], [32.0, 293.0], [32.1, 293.0], [32.2, 294.0], [32.3, 294.0], [32.4, 294.0], [32.5, 294.0], [32.6, 295.0], [32.7, 295.0], [32.8, 295.0], [32.9, 295.0], [33.0, 295.0], [33.1, 295.0], [33.2, 295.0], [33.3, 296.0], [33.4, 296.0], [33.5, 296.0], [33.6, 296.0], [33.7, 297.0], [33.8, 297.0], [33.9, 297.0], [34.0, 297.0], [34.1, 297.0], [34.2, 297.0], [34.3, 297.0], [34.4, 297.0], [34.5, 298.0], [34.6, 298.0], [34.7, 298.0], [34.8, 298.0], [34.9, 299.0], [35.0, 299.0], [35.1, 299.0], [35.2, 299.0], [35.3, 299.0], [35.4, 299.0], [35.5, 300.0], [35.6, 300.0], [35.7, 300.0], [35.8, 300.0], [35.9, 300.0], [36.0, 300.0], [36.1, 301.0], [36.2, 301.0], [36.3, 301.0], [36.4, 301.0], [36.5, 301.0], [36.6, 302.0], [36.7, 302.0], [36.8, 302.0], [36.9, 302.0], [37.0, 302.0], [37.1, 303.0], [37.2, 303.0], [37.3, 303.0], [37.4, 303.0], [37.5, 303.0], [37.6, 303.0], [37.7, 304.0], [37.8, 304.0], [37.9, 304.0], [38.0, 304.0], [38.1, 304.0], [38.2, 304.0], [38.3, 304.0], [38.4, 305.0], [38.5, 305.0], [38.6, 305.0], [38.7, 305.0], [38.8, 305.0], [38.9, 305.0], [39.0, 305.0], [39.1, 306.0], [39.2, 306.0], [39.3, 306.0], [39.4, 306.0], [39.5, 307.0], [39.6, 307.0], [39.7, 307.0], [39.8, 307.0], [39.9, 307.0], [40.0, 307.0], [40.1, 308.0], [40.2, 308.0], [40.3, 308.0], [40.4, 308.0], [40.5, 308.0], [40.6, 309.0], [40.7, 309.0], [40.8, 309.0], [40.9, 309.0], [41.0, 309.0], [41.1, 309.0], [41.2, 310.0], [41.3, 310.0], [41.4, 310.0], [41.5, 310.0], [41.6, 310.0], [41.7, 311.0], [41.8, 311.0], [41.9, 311.0], [42.0, 311.0], [42.1, 311.0], [42.2, 312.0], [42.3, 312.0], [42.4, 312.0], [42.5, 313.0], [42.6, 313.0], [42.7, 313.0], [42.8, 313.0], [42.9, 313.0], [43.0, 314.0], [43.1, 314.0], [43.2, 314.0], [43.3, 314.0], [43.4, 315.0], [43.5, 315.0], [43.6, 315.0], [43.7, 315.0], [43.8, 315.0], [43.9, 316.0], [44.0, 316.0], [44.1, 316.0], [44.2, 316.0], [44.3, 316.0], [44.4, 316.0], [44.5, 317.0], [44.6, 317.0], [44.7, 317.0], [44.8, 317.0], [44.9, 317.0], [45.0, 318.0], [45.1, 318.0], [45.2, 318.0], [45.3, 319.0], [45.4, 319.0], [45.5, 319.0], [45.6, 319.0], [45.7, 320.0], [45.8, 320.0], [45.9, 320.0], [46.0, 320.0], [46.1, 320.0], [46.2, 320.0], [46.3, 321.0], [46.4, 321.0], [46.5, 321.0], [46.6, 321.0], [46.7, 321.0], [46.8, 322.0], [46.9, 322.0], [47.0, 322.0], [47.1, 322.0], [47.2, 323.0], [47.3, 323.0], [47.4, 323.0], [47.5, 323.0], [47.6, 323.0], [47.7, 324.0], [47.8, 324.0], [47.9, 324.0], [48.0, 324.0], [48.1, 325.0], [48.2, 325.0], [48.3, 325.0], [48.4, 325.0], [48.5, 325.0], [48.6, 326.0], [48.7, 326.0], [48.8, 326.0], [48.9, 326.0], [49.0, 327.0], [49.1, 327.0], [49.2, 327.0], [49.3, 327.0], [49.4, 328.0], [49.5, 328.0], [49.6, 328.0], [49.7, 328.0], [49.8, 328.0], [49.9, 329.0], [50.0, 329.0], [50.1, 329.0], [50.2, 330.0], [50.3, 330.0], [50.4, 330.0], [50.5, 331.0], [50.6, 331.0], [50.7, 331.0], [50.8, 332.0], [50.9, 332.0], [51.0, 332.0], [51.1, 333.0], [51.2, 333.0], [51.3, 333.0], [51.4, 334.0], [51.5, 334.0], [51.6, 334.0], [51.7, 334.0], [51.8, 334.0], [51.9, 335.0], [52.0, 335.0], [52.1, 335.0], [52.2, 335.0], [52.3, 336.0], [52.4, 336.0], [52.5, 336.0], [52.6, 336.0], [52.7, 337.0], [52.8, 337.0], [52.9, 337.0], [53.0, 337.0], [53.1, 337.0], [53.2, 338.0], [53.3, 338.0], [53.4, 338.0], [53.5, 339.0], [53.6, 339.0], [53.7, 339.0], [53.8, 339.0], [53.9, 340.0], [54.0, 340.0], [54.1, 340.0], [54.2, 340.0], [54.3, 341.0], [54.4, 341.0], [54.5, 341.0], [54.6, 341.0], [54.7, 341.0], [54.8, 341.0], [54.9, 342.0], [55.0, 342.0], [55.1, 342.0], [55.2, 342.0], [55.3, 342.0], [55.4, 343.0], [55.5, 343.0], [55.6, 343.0], [55.7, 343.0], [55.8, 344.0], [55.9, 344.0], [56.0, 344.0], [56.1, 344.0], [56.2, 344.0], [56.3, 344.0], [56.4, 345.0], [56.5, 345.0], [56.6, 345.0], [56.7, 345.0], [56.8, 345.0], [56.9, 345.0], [57.0, 345.0], [57.1, 346.0], [57.2, 346.0], [57.3, 346.0], [57.4, 346.0], [57.5, 346.0], [57.6, 347.0], [57.7, 347.0], [57.8, 347.0], [57.9, 348.0], [58.0, 348.0], [58.1, 348.0], [58.2, 348.0], [58.3, 349.0], [58.4, 349.0], [58.5, 349.0], [58.6, 349.0], [58.7, 350.0], [58.8, 350.0], [58.9, 350.0], [59.0, 350.0], [59.1, 350.0], [59.2, 350.0], [59.3, 351.0], [59.4, 351.0], [59.5, 351.0], [59.6, 351.0], [59.7, 352.0], [59.8, 352.0], [59.9, 352.0], [60.0, 352.0], [60.1, 352.0], [60.2, 353.0], [60.3, 353.0], [60.4, 353.0], [60.5, 353.0], [60.6, 353.0], [60.7, 354.0], [60.8, 354.0], [60.9, 354.0], [61.0, 354.0], [61.1, 355.0], [61.2, 355.0], [61.3, 355.0], [61.4, 355.0], [61.5, 355.0], [61.6, 356.0], [61.7, 356.0], [61.8, 356.0], [61.9, 356.0], [62.0, 356.0], [62.1, 357.0], [62.2, 357.0], [62.3, 357.0], [62.4, 357.0], [62.5, 358.0], [62.6, 358.0], [62.7, 358.0], [62.8, 358.0], [62.9, 358.0], [63.0, 359.0], [63.1, 359.0], [63.2, 359.0], [63.3, 359.0], [63.4, 360.0], [63.5, 360.0], [63.6, 360.0], [63.7, 360.0], [63.8, 360.0], [63.9, 361.0], [64.0, 361.0], [64.1, 361.0], [64.2, 361.0], [64.3, 361.0], [64.4, 362.0], [64.5, 362.0], [64.6, 362.0], [64.7, 363.0], [64.8, 363.0], [64.9, 363.0], [65.0, 363.0], [65.1, 364.0], [65.2, 364.0], [65.3, 364.0], [65.4, 364.0], [65.5, 365.0], [65.6, 365.0], [65.7, 365.0], [65.8, 366.0], [65.9, 366.0], [66.0, 366.0], [66.1, 366.0], [66.2, 366.0], [66.3, 367.0], [66.4, 367.0], [66.5, 367.0], [66.6, 367.0], [66.7, 367.0], [66.8, 368.0], [66.9, 368.0], [67.0, 368.0], [67.1, 368.0], [67.2, 369.0], [67.3, 369.0], [67.4, 369.0], [67.5, 369.0], [67.6, 369.0], [67.7, 370.0], [67.8, 370.0], [67.9, 370.0], [68.0, 370.0], [68.1, 371.0], [68.2, 371.0], [68.3, 371.0], [68.4, 372.0], [68.5, 372.0], [68.6, 372.0], [68.7, 372.0], [68.8, 373.0], [68.9, 373.0], [69.0, 373.0], [69.1, 373.0], [69.2, 374.0], [69.3, 374.0], [69.4, 374.0], [69.5, 374.0], [69.6, 375.0], [69.7, 375.0], [69.8, 375.0], [69.9, 376.0], [70.0, 376.0], [70.1, 376.0], [70.2, 377.0], [70.3, 377.0], [70.4, 377.0], [70.5, 378.0], [70.6, 378.0], [70.7, 378.0], [70.8, 378.0], [70.9, 378.0], [71.0, 379.0], [71.1, 379.0], [71.2, 379.0], [71.3, 380.0], [71.4, 380.0], [71.5, 380.0], [71.6, 381.0], [71.7, 381.0], [71.8, 381.0], [71.9, 381.0], [72.0, 382.0], [72.1, 382.0], [72.2, 382.0], [72.3, 383.0], [72.4, 383.0], [72.5, 383.0], [72.6, 383.0], [72.7, 384.0], [72.8, 384.0], [72.9, 384.0], [73.0, 385.0], [73.1, 385.0], [73.2, 385.0], [73.3, 386.0], [73.4, 386.0], [73.5, 386.0], [73.6, 386.0], [73.7, 387.0], [73.8, 387.0], [73.9, 387.0], [74.0, 387.0], [74.1, 388.0], [74.2, 388.0], [74.3, 388.0], [74.4, 389.0], [74.5, 389.0], [74.6, 389.0], [74.7, 389.0], [74.8, 390.0], [74.9, 390.0], [75.0, 390.0], [75.1, 391.0], [75.2, 391.0], [75.3, 391.0], [75.4, 391.0], [75.5, 392.0], [75.6, 392.0], [75.7, 392.0], [75.8, 392.0], [75.9, 392.0], [76.0, 393.0], [76.1, 393.0], [76.2, 393.0], [76.3, 393.0], [76.4, 394.0], [76.5, 394.0], [76.6, 394.0], [76.7, 395.0], [76.8, 395.0], [76.9, 395.0], [77.0, 396.0], [77.1, 396.0], [77.2, 396.0], [77.3, 397.0], [77.4, 397.0], [77.5, 397.0], [77.6, 397.0], [77.7, 397.0], [77.8, 398.0], [77.9, 398.0], [78.0, 398.0], [78.1, 399.0], [78.2, 399.0], [78.3, 399.0], [78.4, 399.0], [78.5, 400.0], [78.6, 400.0], [78.7, 400.0], [78.8, 400.0], [78.9, 401.0], [79.0, 401.0], [79.1, 402.0], [79.2, 402.0], [79.3, 402.0], [79.4, 402.0], [79.5, 403.0], [79.6, 403.0], [79.7, 403.0], [79.8, 404.0], [79.9, 404.0], [80.0, 405.0], [80.1, 405.0], [80.2, 405.0], [80.3, 406.0], [80.4, 406.0], [80.5, 406.0], [80.6, 407.0], [80.7, 408.0], [80.8, 408.0], [80.9, 408.0], [81.0, 409.0], [81.1, 409.0], [81.2, 409.0], [81.3, 410.0], [81.4, 410.0], [81.5, 410.0], [81.6, 411.0], [81.7, 411.0], [81.8, 411.0], [81.9, 412.0], [82.0, 412.0], [82.1, 412.0], [82.2, 413.0], [82.3, 414.0], [82.4, 414.0], [82.5, 414.0], [82.6, 414.0], [82.7, 415.0], [82.8, 416.0], [82.9, 416.0], [83.0, 417.0], [83.1, 417.0], [83.2, 418.0], [83.3, 418.0], [83.4, 418.0], [83.5, 419.0], [83.6, 419.0], [83.7, 420.0], [83.8, 420.0], [83.9, 420.0], [84.0, 421.0], [84.1, 422.0], [84.2, 422.0], [84.3, 422.0], [84.4, 423.0], [84.5, 423.0], [84.6, 424.0], [84.7, 424.0], [84.8, 425.0], [84.9, 425.0], [85.0, 426.0], [85.1, 427.0], [85.2, 427.0], [85.3, 428.0], [85.4, 429.0], [85.5, 429.0], [85.6, 430.0], [85.7, 430.0], [85.8, 431.0], [85.9, 432.0], [86.0, 433.0], [86.1, 434.0], [86.2, 436.0], [86.3, 436.0], [86.4, 437.0], [86.5, 438.0], [86.6, 438.0], [86.7, 439.0], [86.8, 439.0], [86.9, 440.0], [87.0, 441.0], [87.1, 441.0], [87.2, 442.0], [87.3, 442.0], [87.4, 443.0], [87.5, 443.0], [87.6, 444.0], [87.7, 445.0], [87.8, 445.0], [87.9, 446.0], [88.0, 446.0], [88.1, 447.0], [88.2, 448.0], [88.3, 448.0], [88.4, 449.0], [88.5, 450.0], [88.6, 450.0], [88.7, 451.0], [88.8, 452.0], [88.9, 452.0], [89.0, 453.0], [89.1, 453.0], [89.2, 454.0], [89.3, 455.0], [89.4, 456.0], [89.5, 457.0], [89.6, 457.0], [89.7, 458.0], [89.8, 459.0], [89.9, 460.0], [90.0, 461.0], [90.1, 461.0], [90.2, 462.0], [90.3, 463.0], [90.4, 465.0], [90.5, 466.0], [90.6, 467.0], [90.7, 467.0], [90.8, 468.0], [90.9, 469.0], [91.0, 469.0], [91.1, 470.0], [91.2, 471.0], [91.3, 472.0], [91.4, 472.0], [91.5, 472.0], [91.6, 473.0], [91.7, 475.0], [91.8, 475.0], [91.9, 477.0], [92.0, 478.0], [92.1, 479.0], [92.2, 479.0], [92.3, 480.0], [92.4, 480.0], [92.5, 481.0], [92.6, 483.0], [92.7, 484.0], [92.8, 485.0], [92.9, 486.0], [93.0, 487.0], [93.1, 488.0], [93.2, 488.0], [93.3, 489.0], [93.4, 490.0], [93.5, 491.0], [93.6, 492.0], [93.7, 493.0], [93.8, 494.0], [93.9, 495.0], [94.0, 495.0], [94.1, 496.0], [94.2, 497.0], [94.3, 498.0], [94.4, 499.0], [94.5, 499.0], [94.6, 500.0], [94.7, 501.0], [94.8, 502.0], [94.9, 503.0], [95.0, 504.0], [95.1, 505.0], [95.2, 506.0], [95.3, 506.0], [95.4, 507.0], [95.5, 508.0], [95.6, 509.0], [95.7, 509.0], [95.8, 510.0], [95.9, 510.0], [96.0, 511.0], [96.1, 513.0], [96.2, 515.0], [96.3, 515.0], [96.4, 517.0], [96.5, 518.0], [96.6, 519.0], [96.7, 520.0], [96.8, 521.0], [96.9, 522.0], [97.0, 524.0], [97.1, 525.0], [97.2, 526.0], [97.3, 528.0], [97.4, 529.0], [97.5, 532.0], [97.6, 533.0], [97.7, 534.0], [97.8, 535.0], [97.9, 536.0], [98.0, 538.0], [98.1, 539.0], [98.2, 541.0], [98.3, 542.0], [98.4, 544.0], [98.5, 546.0], [98.6, 547.0], [98.7, 553.0], [98.8, 556.0], [98.9, 559.0], [99.0, 562.0], [99.1, 565.0], [99.2, 567.0], [99.3, 571.0], [99.4, 577.0], [99.5, 582.0], [99.6, 590.0], [99.7, 603.0], [99.8, 617.0], [99.9, 638.0]], "isOverall": false, "label": "cpu/1/vertx/vertx", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 2583.0, "series": [{"data": [[300.0, 2583.0], [600.0, 20.0], [700.0, 1.0], [200.0, 2133.0], [400.0, 963.0], [500.0, 309.0]], "isOverall": false, "label": "cpu/1/vertx/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 324.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5685.0, "series": [{"data": [[0.0, 5685.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 324.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.62599592E12, "maxY": 50.0, "series": [{"data": [[1.62599592E12, 1.0], [1.6259961E12, 50.0], [1.62599628E12, 1.5], [1.62599598E12, 38.626036484245404], [1.62599616E12, 50.0], [1.62599604E12, 50.0], [1.62599622E12, 49.04583333333337]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599628E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 273.25, "minX": 1.0, "maxY": 532.2857142857142, "series": [{"data": [[2.0, 301.4], [3.0, 289.14285714285717], [4.0, 277.7], [5.0, 273.25], [6.0, 278.46153846153845], [7.0, 293.07692307692304], [8.0, 303.1666666666667], [9.0, 307.0714285714286], [10.0, 298.28571428571433], [11.0, 305.2307692307693], [12.0, 353.6923076923077], [13.0, 388.2857142857142], [14.0, 458.1818181818182], [15.0, 413.91666666666663], [16.0, 419.0666666666667], [17.0, 402.0], [18.0, 394.4], [19.0, 313.90000000000003], [20.0, 417.25], [21.0, 372.8461538461538], [22.0, 367.92857142857144], [23.0, 434.3846153846154], [24.0, 329.53333333333336], [25.0, 446.2307692307692], [26.0, 325.1333333333333], [27.0, 451.33333333333337], [28.0, 364.19999999999993], [29.0, 385.8], [30.0, 441.94117647058823], [31.0, 353.0909090909091], [32.0, 440.93333333333334], [33.0, 369.12499999999994], [34.0, 333.8888888888889], [35.0, 469.43750000000006], [36.0, 428.1875], [37.0, 370.6666666666667], [38.0, 501.37500000000006], [39.0, 439.06666666666666], [40.0, 393.0833333333333], [41.0, 532.2857142857142], [42.0, 490.46666666666675], [43.0, 420.00000000000006], [44.0, 477.9285714285714], [45.0, 423.0769230769231], [46.0, 442.7647058823529], [47.0, 353.3], [48.0, 495.0], [49.0, 407.42857142857144], [50.0, 339.97562337179], [1.0, 322.3333333333333]], "isOverall": false, "label": "cpu/1/vertx/vertx", "isController": false}, {"data": [[47.50241304709591, 345.51788983191983]], "isOverall": false, "label": "cpu/1/vertx/vertx-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2.566666666666667, "minX": 1.62599592E12, "maxY": 3597.9, "series": [{"data": [[1.62599592E12, 2.566666666666667], [1.6259961E12, 3080.0], [1.62599628E12, 5.133333333333334], [1.62599598E12, 3095.4], [1.62599616E12, 3080.0], [1.62599604E12, 3080.0], [1.62599622E12, 3080.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62599592E12, 2.9833333333333334], [1.6259961E12, 3580.0], [1.62599628E12, 5.966666666666667], [1.62599598E12, 3597.9], [1.62599616E12, 3580.0], [1.62599604E12, 3580.0], [1.62599622E12, 3580.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599628E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 263.0, "minX": 1.62599592E12, "maxY": 464.0, "series": [{"data": [[1.62599592E12, 263.0], [1.6259961E12, 341.21166666666676], [1.62599628E12, 464.0], [1.62599598E12, 368.11608623548955], [1.62599616E12, 340.0924999999998], [1.62599604E12, 338.86583333333306], [1.62599622E12, 339.06166666666724]], "isOverall": false, "label": "cpu/1/vertx/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599628E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 263.0, "minX": 1.62599592E12, "maxY": 464.0, "series": [{"data": [[1.62599592E12, 263.0], [1.6259961E12, 341.2025], [1.62599628E12, 464.0], [1.62599598E12, 368.10945273631813], [1.62599616E12, 340.0874999999996], [1.62599604E12, 338.8541666666664], [1.62599622E12, 339.05416666666684]], "isOverall": false, "label": "cpu/1/vertx/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599628E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 37.18249999999998, "minX": 1.62599592E12, "maxY": 39.0, "series": [{"data": [[1.62599592E12, 39.0], [1.6259961E12, 37.26583333333327], [1.62599628E12, 38.0], [1.62599598E12, 37.18490878938642], [1.62599616E12, 37.209999999999994], [1.62599604E12, 37.23166666666668], [1.62599622E12, 37.18249999999998]], "isOverall": false, "label": "cpu/1/vertx/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599628E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 251.0, "minX": 1.62599592E12, "maxY": 708.0, "series": [{"data": [[1.62599592E12, 263.0], [1.6259961E12, 596.0], [1.62599628E12, 479.0], [1.62599598E12, 708.0], [1.62599616E12, 577.0], [1.62599604E12, 568.0], [1.62599622E12, 569.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62599592E12, 263.0], [1.6259961E12, 443.9000000000001], [1.62599628E12, 479.0], [1.62599598E12, 514.3], [1.62599616E12, 442.0], [1.62599604E12, 443.0], [1.62599622E12, 448.9000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62599592E12, 263.0], [1.6259961E12, 534.99], [1.62599628E12, 479.0], [1.62599598E12, 617.0], [1.62599616E12, 532.99], [1.62599604E12, 536.99], [1.62599622E12, 541.95]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62599592E12, 263.0], [1.6259961E12, 484.0], [1.62599628E12, 479.0], [1.62599598E12, 553.9499999999996], [1.62599616E12, 486.95000000000005], [1.62599604E12, 479.95000000000005], [1.62599622E12, 488.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62599592E12, 263.0], [1.6259961E12, 251.0], [1.62599628E12, 449.0], [1.62599598E12, 252.0], [1.62599616E12, 253.0], [1.62599604E12, 253.0], [1.62599622E12, 252.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62599592E12, 263.0], [1.6259961E12, 327.0], [1.62599628E12, 464.0], [1.62599598E12, 346.0], [1.62599616E12, 327.0], [1.62599604E12, 324.0], [1.62599622E12, 324.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599628E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 259.0, "minX": 1.0, "maxY": 481.0, "series": [{"data": [[2.0, 464.0], [13.0, 259.0], [1.0, 263.0], [17.0, 365.0], [18.0, 366.0], [19.0, 349.0], [20.0, 310.0], [21.0, 328.0], [22.0, 321.5], [23.0, 436.0], [24.0, 481.0], [25.0, 414.0], [7.0, 259.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 259.0, "minX": 1.0, "maxY": 481.0, "series": [{"data": [[2.0, 464.0], [13.0, 259.0], [1.0, 263.0], [17.0, 365.0], [18.0, 366.0], [19.0, 349.0], [20.0, 310.0], [21.0, 328.0], [22.0, 321.5], [23.0, 436.0], [24.0, 481.0], [25.0, 414.0], [7.0, 259.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.62599592E12, "maxY": 20.216666666666665, "series": [{"data": [[1.62599592E12, 0.03333333333333333], [1.6259961E12, 20.0], [1.62599598E12, 20.216666666666665], [1.62599616E12, 20.0], [1.62599604E12, 20.0], [1.62599622E12, 19.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599622E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62599592E12, "maxY": 20.1, "series": [{"data": [[1.62599592E12, 0.016666666666666666], [1.6259961E12, 20.0], [1.62599628E12, 0.03333333333333333], [1.62599598E12, 20.1], [1.62599616E12, 20.0], [1.62599604E12, 20.0], [1.62599622E12, 20.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599628E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62599592E12, "maxY": 20.1, "series": [{"data": [[1.62599592E12, 0.016666666666666666], [1.6259961E12, 20.0], [1.62599628E12, 0.03333333333333333], [1.62599598E12, 20.1], [1.62599616E12, 20.0], [1.62599604E12, 20.0], [1.62599622E12, 20.0]], "isOverall": false, "label": "cpu/1/vertx/vertx-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599628E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62599592E12, "maxY": 20.1, "series": [{"data": [[1.62599592E12, 0.016666666666666666], [1.6259961E12, 20.0], [1.62599628E12, 0.03333333333333333], [1.62599598E12, 20.1], [1.62599616E12, 20.0], [1.62599604E12, 20.0], [1.62599622E12, 20.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599628E12, "title": "Total Transactions Per Second"}},
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

