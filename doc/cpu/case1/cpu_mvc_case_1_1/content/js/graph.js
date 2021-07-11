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
        data: {"result": {"minY": 246.0, "minX": 0.0, "maxY": 641.0, "series": [{"data": [[0.0, 246.0], [0.1, 247.0], [0.2, 247.0], [0.3, 248.0], [0.4, 248.0], [0.5, 248.0], [0.6, 248.0], [0.7, 249.0], [0.8, 249.0], [0.9, 249.0], [1.0, 249.0], [1.1, 249.0], [1.2, 249.0], [1.3, 249.0], [1.4, 250.0], [1.5, 250.0], [1.6, 250.0], [1.7, 250.0], [1.8, 250.0], [1.9, 250.0], [2.0, 250.0], [2.1, 250.0], [2.2, 250.0], [2.3, 251.0], [2.4, 251.0], [2.5, 251.0], [2.6, 251.0], [2.7, 251.0], [2.8, 251.0], [2.9, 251.0], [3.0, 251.0], [3.1, 251.0], [3.2, 251.0], [3.3, 251.0], [3.4, 251.0], [3.5, 252.0], [3.6, 252.0], [3.7, 252.0], [3.8, 252.0], [3.9, 252.0], [4.0, 252.0], [4.1, 252.0], [4.2, 252.0], [4.3, 252.0], [4.4, 252.0], [4.5, 252.0], [4.6, 252.0], [4.7, 252.0], [4.8, 252.0], [4.9, 252.0], [5.0, 252.0], [5.1, 252.0], [5.2, 253.0], [5.3, 253.0], [5.4, 253.0], [5.5, 253.0], [5.6, 253.0], [5.7, 253.0], [5.8, 253.0], [5.9, 253.0], [6.0, 253.0], [6.1, 253.0], [6.2, 253.0], [6.3, 253.0], [6.4, 253.0], [6.5, 253.0], [6.6, 253.0], [6.7, 253.0], [6.8, 253.0], [6.9, 253.0], [7.0, 253.0], [7.1, 254.0], [7.2, 254.0], [7.3, 254.0], [7.4, 254.0], [7.5, 254.0], [7.6, 254.0], [7.7, 254.0], [7.8, 254.0], [7.9, 254.0], [8.0, 254.0], [8.1, 254.0], [8.2, 254.0], [8.3, 254.0], [8.4, 254.0], [8.5, 254.0], [8.6, 254.0], [8.7, 254.0], [8.8, 254.0], [8.9, 254.0], [9.0, 254.0], [9.1, 254.0], [9.2, 254.0], [9.3, 255.0], [9.4, 255.0], [9.5, 255.0], [9.6, 255.0], [9.7, 255.0], [9.8, 255.0], [9.9, 255.0], [10.0, 255.0], [10.1, 255.0], [10.2, 255.0], [10.3, 255.0], [10.4, 255.0], [10.5, 255.0], [10.6, 255.0], [10.7, 255.0], [10.8, 255.0], [10.9, 255.0], [11.0, 255.0], [11.1, 255.0], [11.2, 255.0], [11.3, 255.0], [11.4, 255.0], [11.5, 256.0], [11.6, 256.0], [11.7, 256.0], [11.8, 256.0], [11.9, 256.0], [12.0, 256.0], [12.1, 256.0], [12.2, 256.0], [12.3, 256.0], [12.4, 256.0], [12.5, 256.0], [12.6, 256.0], [12.7, 256.0], [12.8, 256.0], [12.9, 256.0], [13.0, 256.0], [13.1, 256.0], [13.2, 256.0], [13.3, 256.0], [13.4, 256.0], [13.5, 256.0], [13.6, 257.0], [13.7, 257.0], [13.8, 257.0], [13.9, 257.0], [14.0, 257.0], [14.1, 257.0], [14.2, 257.0], [14.3, 257.0], [14.4, 257.0], [14.5, 257.0], [14.6, 257.0], [14.7, 257.0], [14.8, 257.0], [14.9, 257.0], [15.0, 257.0], [15.1, 258.0], [15.2, 258.0], [15.3, 258.0], [15.4, 258.0], [15.5, 258.0], [15.6, 258.0], [15.7, 258.0], [15.8, 258.0], [15.9, 258.0], [16.0, 258.0], [16.1, 259.0], [16.2, 259.0], [16.3, 259.0], [16.4, 259.0], [16.5, 259.0], [16.6, 259.0], [16.7, 259.0], [16.8, 260.0], [16.9, 260.0], [17.0, 260.0], [17.1, 260.0], [17.2, 260.0], [17.3, 261.0], [17.4, 261.0], [17.5, 261.0], [17.6, 261.0], [17.7, 261.0], [17.8, 262.0], [17.9, 262.0], [18.0, 262.0], [18.1, 262.0], [18.2, 262.0], [18.3, 262.0], [18.4, 262.0], [18.5, 262.0], [18.6, 262.0], [18.7, 262.0], [18.8, 263.0], [18.9, 263.0], [19.0, 263.0], [19.1, 263.0], [19.2, 263.0], [19.3, 263.0], [19.4, 264.0], [19.5, 264.0], [19.6, 264.0], [19.7, 264.0], [19.8, 264.0], [19.9, 264.0], [20.0, 264.0], [20.1, 265.0], [20.2, 265.0], [20.3, 265.0], [20.4, 265.0], [20.5, 265.0], [20.6, 265.0], [20.7, 265.0], [20.8, 265.0], [20.9, 266.0], [21.0, 266.0], [21.1, 266.0], [21.2, 266.0], [21.3, 266.0], [21.4, 266.0], [21.5, 266.0], [21.6, 266.0], [21.7, 267.0], [21.8, 267.0], [21.9, 267.0], [22.0, 267.0], [22.1, 267.0], [22.2, 267.0], [22.3, 267.0], [22.4, 268.0], [22.5, 268.0], [22.6, 268.0], [22.7, 268.0], [22.8, 268.0], [22.9, 268.0], [23.0, 268.0], [23.1, 269.0], [23.2, 269.0], [23.3, 269.0], [23.4, 269.0], [23.5, 269.0], [23.6, 269.0], [23.7, 270.0], [23.8, 270.0], [23.9, 270.0], [24.0, 270.0], [24.1, 270.0], [24.2, 270.0], [24.3, 271.0], [24.4, 271.0], [24.5, 271.0], [24.6, 271.0], [24.7, 271.0], [24.8, 271.0], [24.9, 272.0], [25.0, 272.0], [25.1, 272.0], [25.2, 273.0], [25.3, 273.0], [25.4, 273.0], [25.5, 273.0], [25.6, 273.0], [25.7, 274.0], [25.8, 274.0], [25.9, 274.0], [26.0, 274.0], [26.1, 275.0], [26.2, 275.0], [26.3, 275.0], [26.4, 275.0], [26.5, 275.0], [26.6, 275.0], [26.7, 276.0], [26.8, 276.0], [26.9, 276.0], [27.0, 276.0], [27.1, 276.0], [27.2, 276.0], [27.3, 277.0], [27.4, 277.0], [27.5, 277.0], [27.6, 277.0], [27.7, 277.0], [27.8, 277.0], [27.9, 278.0], [28.0, 278.0], [28.1, 278.0], [28.2, 278.0], [28.3, 278.0], [28.4, 278.0], [28.5, 279.0], [28.6, 279.0], [28.7, 279.0], [28.8, 279.0], [28.9, 279.0], [29.0, 279.0], [29.1, 279.0], [29.2, 280.0], [29.3, 280.0], [29.4, 280.0], [29.5, 280.0], [29.6, 280.0], [29.7, 280.0], [29.8, 281.0], [29.9, 281.0], [30.0, 281.0], [30.1, 281.0], [30.2, 281.0], [30.3, 282.0], [30.4, 282.0], [30.5, 282.0], [30.6, 282.0], [30.7, 282.0], [30.8, 283.0], [30.9, 283.0], [31.0, 283.0], [31.1, 283.0], [31.2, 283.0], [31.3, 284.0], [31.4, 284.0], [31.5, 284.0], [31.6, 284.0], [31.7, 284.0], [31.8, 284.0], [31.9, 285.0], [32.0, 285.0], [32.1, 285.0], [32.2, 285.0], [32.3, 286.0], [32.4, 286.0], [32.5, 286.0], [32.6, 286.0], [32.7, 286.0], [32.8, 287.0], [32.9, 287.0], [33.0, 287.0], [33.1, 287.0], [33.2, 288.0], [33.3, 288.0], [33.4, 288.0], [33.5, 288.0], [33.6, 288.0], [33.7, 289.0], [33.8, 289.0], [33.9, 289.0], [34.0, 289.0], [34.1, 289.0], [34.2, 289.0], [34.3, 289.0], [34.4, 290.0], [34.5, 290.0], [34.6, 290.0], [34.7, 290.0], [34.8, 290.0], [34.9, 291.0], [35.0, 291.0], [35.1, 291.0], [35.2, 291.0], [35.3, 291.0], [35.4, 291.0], [35.5, 292.0], [35.6, 292.0], [35.7, 292.0], [35.8, 292.0], [35.9, 292.0], [36.0, 292.0], [36.1, 293.0], [36.2, 293.0], [36.3, 293.0], [36.4, 293.0], [36.5, 293.0], [36.6, 294.0], [36.7, 294.0], [36.8, 294.0], [36.9, 294.0], [37.0, 294.0], [37.1, 294.0], [37.2, 295.0], [37.3, 295.0], [37.4, 295.0], [37.5, 295.0], [37.6, 295.0], [37.7, 296.0], [37.8, 296.0], [37.9, 296.0], [38.0, 296.0], [38.1, 296.0], [38.2, 296.0], [38.3, 297.0], [38.4, 297.0], [38.5, 297.0], [38.6, 297.0], [38.7, 297.0], [38.8, 298.0], [38.9, 298.0], [39.0, 298.0], [39.1, 298.0], [39.2, 299.0], [39.3, 299.0], [39.4, 299.0], [39.5, 299.0], [39.6, 299.0], [39.7, 300.0], [39.8, 300.0], [39.9, 300.0], [40.0, 301.0], [40.1, 301.0], [40.2, 301.0], [40.3, 301.0], [40.4, 302.0], [40.5, 302.0], [40.6, 302.0], [40.7, 302.0], [40.8, 303.0], [40.9, 303.0], [41.0, 303.0], [41.1, 303.0], [41.2, 303.0], [41.3, 303.0], [41.4, 304.0], [41.5, 304.0], [41.6, 304.0], [41.7, 304.0], [41.8, 305.0], [41.9, 305.0], [42.0, 305.0], [42.1, 305.0], [42.2, 305.0], [42.3, 306.0], [42.4, 306.0], [42.5, 306.0], [42.6, 306.0], [42.7, 307.0], [42.8, 307.0], [42.9, 307.0], [43.0, 307.0], [43.1, 307.0], [43.2, 308.0], [43.3, 308.0], [43.4, 308.0], [43.5, 308.0], [43.6, 308.0], [43.7, 309.0], [43.8, 309.0], [43.9, 309.0], [44.0, 309.0], [44.1, 310.0], [44.2, 310.0], [44.3, 310.0], [44.4, 310.0], [44.5, 310.0], [44.6, 310.0], [44.7, 311.0], [44.8, 311.0], [44.9, 311.0], [45.0, 311.0], [45.1, 312.0], [45.2, 312.0], [45.3, 313.0], [45.4, 313.0], [45.5, 313.0], [45.6, 314.0], [45.7, 314.0], [45.8, 314.0], [45.9, 314.0], [46.0, 314.0], [46.1, 315.0], [46.2, 315.0], [46.3, 315.0], [46.4, 316.0], [46.5, 316.0], [46.6, 316.0], [46.7, 316.0], [46.8, 316.0], [46.9, 316.0], [47.0, 317.0], [47.1, 317.0], [47.2, 317.0], [47.3, 317.0], [47.4, 317.0], [47.5, 318.0], [47.6, 318.0], [47.7, 318.0], [47.8, 318.0], [47.9, 318.0], [48.0, 318.0], [48.1, 319.0], [48.2, 319.0], [48.3, 319.0], [48.4, 319.0], [48.5, 320.0], [48.6, 320.0], [48.7, 320.0], [48.8, 320.0], [48.9, 320.0], [49.0, 321.0], [49.1, 321.0], [49.2, 321.0], [49.3, 322.0], [49.4, 322.0], [49.5, 322.0], [49.6, 323.0], [49.7, 323.0], [49.8, 323.0], [49.9, 323.0], [50.0, 324.0], [50.1, 324.0], [50.2, 324.0], [50.3, 324.0], [50.4, 324.0], [50.5, 325.0], [50.6, 325.0], [50.7, 325.0], [50.8, 326.0], [50.9, 326.0], [51.0, 326.0], [51.1, 327.0], [51.2, 327.0], [51.3, 327.0], [51.4, 327.0], [51.5, 327.0], [51.6, 328.0], [51.7, 328.0], [51.8, 328.0], [51.9, 329.0], [52.0, 329.0], [52.1, 329.0], [52.2, 329.0], [52.3, 330.0], [52.4, 330.0], [52.5, 330.0], [52.6, 330.0], [52.7, 331.0], [52.8, 331.0], [52.9, 331.0], [53.0, 331.0], [53.1, 332.0], [53.2, 332.0], [53.3, 332.0], [53.4, 333.0], [53.5, 333.0], [53.6, 333.0], [53.7, 333.0], [53.8, 334.0], [53.9, 334.0], [54.0, 334.0], [54.1, 335.0], [54.2, 335.0], [54.3, 335.0], [54.4, 336.0], [54.5, 336.0], [54.6, 336.0], [54.7, 336.0], [54.8, 336.0], [54.9, 337.0], [55.0, 337.0], [55.1, 337.0], [55.2, 337.0], [55.3, 338.0], [55.4, 338.0], [55.5, 338.0], [55.6, 338.0], [55.7, 338.0], [55.8, 339.0], [55.9, 339.0], [56.0, 339.0], [56.1, 339.0], [56.2, 340.0], [56.3, 340.0], [56.4, 340.0], [56.5, 341.0], [56.6, 341.0], [56.7, 341.0], [56.8, 342.0], [56.9, 342.0], [57.0, 342.0], [57.1, 342.0], [57.2, 342.0], [57.3, 343.0], [57.4, 343.0], [57.5, 343.0], [57.6, 344.0], [57.7, 344.0], [57.8, 345.0], [57.9, 345.0], [58.0, 345.0], [58.1, 345.0], [58.2, 346.0], [58.3, 346.0], [58.4, 346.0], [58.5, 346.0], [58.6, 347.0], [58.7, 347.0], [58.8, 347.0], [58.9, 348.0], [59.0, 348.0], [59.1, 348.0], [59.2, 348.0], [59.3, 348.0], [59.4, 349.0], [59.5, 349.0], [59.6, 349.0], [59.7, 349.0], [59.8, 350.0], [59.9, 350.0], [60.0, 350.0], [60.1, 350.0], [60.2, 351.0], [60.3, 351.0], [60.4, 351.0], [60.5, 351.0], [60.6, 352.0], [60.7, 352.0], [60.8, 352.0], [60.9, 352.0], [61.0, 352.0], [61.1, 353.0], [61.2, 353.0], [61.3, 353.0], [61.4, 353.0], [61.5, 354.0], [61.6, 354.0], [61.7, 354.0], [61.8, 354.0], [61.9, 354.0], [62.0, 355.0], [62.1, 355.0], [62.2, 355.0], [62.3, 355.0], [62.4, 356.0], [62.5, 356.0], [62.6, 356.0], [62.7, 356.0], [62.8, 357.0], [62.9, 357.0], [63.0, 357.0], [63.1, 357.0], [63.2, 357.0], [63.3, 358.0], [63.4, 358.0], [63.5, 358.0], [63.6, 359.0], [63.7, 359.0], [63.8, 359.0], [63.9, 359.0], [64.0, 360.0], [64.1, 360.0], [64.2, 360.0], [64.3, 360.0], [64.4, 361.0], [64.5, 361.0], [64.6, 361.0], [64.7, 362.0], [64.8, 362.0], [64.9, 362.0], [65.0, 362.0], [65.1, 363.0], [65.2, 363.0], [65.3, 363.0], [65.4, 364.0], [65.5, 364.0], [65.6, 364.0], [65.7, 364.0], [65.8, 364.0], [65.9, 365.0], [66.0, 365.0], [66.1, 365.0], [66.2, 366.0], [66.3, 366.0], [66.4, 366.0], [66.5, 366.0], [66.6, 367.0], [66.7, 367.0], [66.8, 367.0], [66.9, 368.0], [67.0, 368.0], [67.1, 368.0], [67.2, 368.0], [67.3, 369.0], [67.4, 369.0], [67.5, 369.0], [67.6, 369.0], [67.7, 369.0], [67.8, 370.0], [67.9, 370.0], [68.0, 370.0], [68.1, 371.0], [68.2, 371.0], [68.3, 371.0], [68.4, 371.0], [68.5, 372.0], [68.6, 372.0], [68.7, 372.0], [68.8, 373.0], [68.9, 373.0], [69.0, 373.0], [69.1, 373.0], [69.2, 373.0], [69.3, 374.0], [69.4, 374.0], [69.5, 374.0], [69.6, 374.0], [69.7, 375.0], [69.8, 375.0], [69.9, 375.0], [70.0, 376.0], [70.1, 376.0], [70.2, 376.0], [70.3, 377.0], [70.4, 377.0], [70.5, 378.0], [70.6, 378.0], [70.7, 378.0], [70.8, 378.0], [70.9, 379.0], [71.0, 379.0], [71.1, 379.0], [71.2, 379.0], [71.3, 380.0], [71.4, 380.0], [71.5, 380.0], [71.6, 380.0], [71.7, 381.0], [71.8, 381.0], [71.9, 381.0], [72.0, 382.0], [72.1, 382.0], [72.2, 382.0], [72.3, 382.0], [72.4, 382.0], [72.5, 383.0], [72.6, 383.0], [72.7, 383.0], [72.8, 384.0], [72.9, 384.0], [73.0, 384.0], [73.1, 384.0], [73.2, 384.0], [73.3, 385.0], [73.4, 385.0], [73.5, 385.0], [73.6, 386.0], [73.7, 386.0], [73.8, 387.0], [73.9, 387.0], [74.0, 387.0], [74.1, 387.0], [74.2, 388.0], [74.3, 388.0], [74.4, 389.0], [74.5, 389.0], [74.6, 389.0], [74.7, 389.0], [74.8, 389.0], [74.9, 390.0], [75.0, 390.0], [75.1, 390.0], [75.2, 391.0], [75.3, 391.0], [75.4, 391.0], [75.5, 391.0], [75.6, 391.0], [75.7, 392.0], [75.8, 392.0], [75.9, 392.0], [76.0, 393.0], [76.1, 393.0], [76.2, 393.0], [76.3, 393.0], [76.4, 394.0], [76.5, 394.0], [76.6, 395.0], [76.7, 395.0], [76.8, 395.0], [76.9, 395.0], [77.0, 396.0], [77.1, 396.0], [77.2, 396.0], [77.3, 396.0], [77.4, 397.0], [77.5, 397.0], [77.6, 397.0], [77.7, 398.0], [77.8, 398.0], [77.9, 398.0], [78.0, 399.0], [78.1, 399.0], [78.2, 399.0], [78.3, 400.0], [78.4, 400.0], [78.5, 400.0], [78.6, 401.0], [78.7, 401.0], [78.8, 401.0], [78.9, 402.0], [79.0, 402.0], [79.1, 402.0], [79.2, 403.0], [79.3, 403.0], [79.4, 403.0], [79.5, 404.0], [79.6, 404.0], [79.7, 405.0], [79.8, 405.0], [79.9, 405.0], [80.0, 405.0], [80.1, 406.0], [80.2, 406.0], [80.3, 407.0], [80.4, 407.0], [80.5, 407.0], [80.6, 407.0], [80.7, 408.0], [80.8, 408.0], [80.9, 408.0], [81.0, 409.0], [81.1, 409.0], [81.2, 409.0], [81.3, 409.0], [81.4, 410.0], [81.5, 410.0], [81.6, 410.0], [81.7, 411.0], [81.8, 411.0], [81.9, 411.0], [82.0, 412.0], [82.1, 412.0], [82.2, 412.0], [82.3, 413.0], [82.4, 413.0], [82.5, 413.0], [82.6, 414.0], [82.7, 414.0], [82.8, 414.0], [82.9, 415.0], [83.0, 415.0], [83.1, 415.0], [83.2, 416.0], [83.3, 416.0], [83.4, 417.0], [83.5, 417.0], [83.6, 417.0], [83.7, 417.0], [83.8, 418.0], [83.9, 418.0], [84.0, 418.0], [84.1, 418.0], [84.2, 419.0], [84.3, 419.0], [84.4, 419.0], [84.5, 419.0], [84.6, 420.0], [84.7, 420.0], [84.8, 420.0], [84.9, 421.0], [85.0, 421.0], [85.1, 422.0], [85.2, 422.0], [85.3, 422.0], [85.4, 423.0], [85.5, 423.0], [85.6, 423.0], [85.7, 424.0], [85.8, 425.0], [85.9, 425.0], [86.0, 426.0], [86.1, 426.0], [86.2, 426.0], [86.3, 426.0], [86.4, 427.0], [86.5, 427.0], [86.6, 427.0], [86.7, 428.0], [86.8, 428.0], [86.9, 428.0], [87.0, 428.0], [87.1, 429.0], [87.2, 429.0], [87.3, 429.0], [87.4, 430.0], [87.5, 430.0], [87.6, 431.0], [87.7, 431.0], [87.8, 431.0], [87.9, 432.0], [88.0, 432.0], [88.1, 432.0], [88.2, 432.0], [88.3, 433.0], [88.4, 433.0], [88.5, 434.0], [88.6, 434.0], [88.7, 435.0], [88.8, 435.0], [88.9, 435.0], [89.0, 436.0], [89.1, 436.0], [89.2, 437.0], [89.3, 437.0], [89.4, 437.0], [89.5, 438.0], [89.6, 438.0], [89.7, 438.0], [89.8, 438.0], [89.9, 439.0], [90.0, 439.0], [90.1, 441.0], [90.2, 441.0], [90.3, 441.0], [90.4, 441.0], [90.5, 442.0], [90.6, 443.0], [90.7, 443.0], [90.8, 443.0], [90.9, 444.0], [91.0, 444.0], [91.1, 445.0], [91.2, 446.0], [91.3, 446.0], [91.4, 447.0], [91.5, 447.0], [91.6, 447.0], [91.7, 448.0], [91.8, 449.0], [91.9, 449.0], [92.0, 449.0], [92.1, 450.0], [92.2, 450.0], [92.3, 450.0], [92.4, 451.0], [92.5, 451.0], [92.6, 452.0], [92.7, 453.0], [92.8, 453.0], [92.9, 453.0], [93.0, 454.0], [93.1, 455.0], [93.2, 455.0], [93.3, 456.0], [93.4, 456.0], [93.5, 456.0], [93.6, 457.0], [93.7, 457.0], [93.8, 458.0], [93.9, 459.0], [94.0, 459.0], [94.1, 460.0], [94.2, 460.0], [94.3, 461.0], [94.4, 462.0], [94.5, 463.0], [94.6, 464.0], [94.7, 465.0], [94.8, 465.0], [94.9, 466.0], [95.0, 467.0], [95.1, 468.0], [95.2, 468.0], [95.3, 470.0], [95.4, 471.0], [95.5, 472.0], [95.6, 473.0], [95.7, 474.0], [95.8, 474.0], [95.9, 476.0], [96.0, 476.0], [96.1, 477.0], [96.2, 478.0], [96.3, 479.0], [96.4, 480.0], [96.5, 482.0], [96.6, 483.0], [96.7, 484.0], [96.8, 486.0], [96.9, 488.0], [97.0, 489.0], [97.1, 490.0], [97.2, 492.0], [97.3, 493.0], [97.4, 494.0], [97.5, 495.0], [97.6, 495.0], [97.7, 498.0], [97.8, 499.0], [97.9, 503.0], [98.0, 505.0], [98.1, 506.0], [98.2, 508.0], [98.3, 510.0], [98.4, 511.0], [98.5, 512.0], [98.6, 517.0], [98.7, 519.0], [98.8, 521.0], [98.9, 527.0], [99.0, 532.0], [99.1, 536.0], [99.2, 540.0], [99.3, 549.0], [99.4, 554.0], [99.5, 560.0], [99.6, 571.0], [99.7, 576.0], [99.8, 591.0], [99.9, 611.0]], "isOverall": false, "label": "cpu\/1\/spring\/mvc", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 11.0, "minX": 200.0, "maxY": 2383.0, "series": [{"data": [[300.0, 2321.0], [600.0, 11.0], [200.0, 2383.0], [400.0, 1175.0], [500.0, 121.0]], "isOverall": false, "label": "cpu\/1\/spring\/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 130.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5881.0, "series": [{"data": [[0.0, 5881.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 130.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 30.537271448663862, "minX": 1.6259925E12, "maxY": 50.0, "series": [{"data": [[1.62599262E12, 50.0], [1.62599256E12, 50.0], [1.62599274E12, 50.0], [1.62599268E12, 50.0], [1.6259928E12, 47.43313373253492], [1.6259925E12, 30.537271448663862]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259928E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 270.8181818181818, "minX": 1.0, "maxY": 501.84999999999997, "series": [{"data": [[2.0, 304.6], [3.0, 275.25], [4.0, 279.4], [5.0, 270.8181818181818], [6.0, 275.76923076923083], [7.0, 274.46153846153845], [8.0, 288.53846153846155], [9.0, 282.85714285714283], [10.0, 276.76923076923083], [11.0, 297.6923076923077], [12.0, 303.6428571428571], [13.0, 343.1428571428571], [14.0, 411.46153846153845], [15.0, 372.70000000000005], [16.0, 385.25000000000006], [17.0, 373.85714285714295], [18.0, 366.66666666666663], [19.0, 290.1818181818182], [20.0, 386.07142857142856], [21.0, 370.5333333333333], [22.0, 300.50000000000006], [23.0, 406.07142857142856], [24.0, 284.7692307692308], [25.0, 427.5], [26.0, 306.6428571428571], [27.0, 451.92857142857144], [28.0, 322.2142857142857], [29.0, 427.55555555555554], [30.0, 416.11764705882354], [31.0, 329.27272727272725], [32.0, 433.70588235294116], [33.0, 323.93333333333334], [34.0, 384.0], [35.0, 464.52941176470586], [36.0, 363.93749999999994], [37.0, 435.8888888888889], [38.0, 447.29411764705884], [39.0, 415.1333333333333], [40.0, 386.00000000000006], [41.0, 501.84999999999997], [42.0, 367.0], [43.0, 405.4375], [44.0, 483.0], [45.0, 426.66666666666663], [46.0, 401.8125], [47.0, 367.1538461538462], [48.0, 453.0769230769231], [49.0, 349.5625], [50.0, 333.7520014894809], [1.0, 340.3333333333333]], "isOverall": false, "label": "cpu\/1\/spring\/mvc", "isController": false}, {"data": [[47.48394609881893, 337.5835967393119]], "isOverall": false, "label": "cpu\/1\/spring\/mvc-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1452.9, "minX": 1.6259925E12, "maxY": 5124.266666666666, "series": [{"data": [[1.62599262E12, 5120.0], [1.62599256E12, 5120.0], [1.62599274E12, 5124.266666666666], [1.62599268E12, 5111.466666666666], [1.6259928E12, 2137.6], [1.6259925E12, 3033.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62599262E12, 3480.0], [1.62599256E12, 3480.0], [1.62599274E12, 3482.9], [1.62599268E12, 3474.2], [1.6259928E12, 1452.9], [1.6259925E12, 2061.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259928E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 332.6883333333331, "minX": 1.6259925E12, "maxY": 365.74824191279856, "series": [{"data": [[1.62599262E12, 332.6883333333331], [1.62599256E12, 332.9616666666668], [1.62599274E12, 333.75104079933413], [1.62599268E12, 335.30801335559283], [1.6259928E12, 335.03792415169653], [1.6259925E12, 365.74824191279856]], "isOverall": false, "label": "cpu\/1\/spring\/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259928E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 331.46916666666664, "minX": 1.6259925E12, "maxY": 364.0182841068917, "series": [{"data": [[1.62599262E12, 331.46916666666664], [1.62599256E12, 331.68333333333305], [1.62599274E12, 332.47543713572026], [1.62599268E12, 334.08347245408953], [1.6259928E12, 333.73852295409193], [1.6259925E12, 364.0182841068917]], "isOverall": false, "label": "cpu\/1\/spring\/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259928E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 37.115736885928285, "minX": 1.6259925E12, "maxY": 37.213783403656876, "series": [{"data": [[1.62599262E12, 37.18833333333338], [1.62599256E12, 37.13916666666669], [1.62599274E12, 37.115736885928285], [1.62599268E12, 37.178631051752944], [1.6259928E12, 37.14770459081834], [1.6259925E12, 37.213783403656876]], "isOverall": false, "label": "cpu\/1\/spring\/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259928E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 246.0, "minX": 1.6259925E12, "maxY": 641.0, "series": [{"data": [[1.62599262E12, 591.0], [1.62599256E12, 534.0], [1.62599274E12, 550.0], [1.62599268E12, 560.0], [1.6259928E12, 550.0], [1.6259925E12, 641.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62599262E12, 249.0], [1.62599256E12, 249.0], [1.62599274E12, 248.81799971342087], [1.62599268E12, 249.0], [1.6259928E12, 248.51799988031388], [1.6259925E12, 249.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62599262E12, 249.0], [1.62599256E12, 249.0], [1.62599274E12, 249.0], [1.62599268E12, 249.0], [1.6259928E12, 248.96980004787446], [1.6259925E12, 249.04880006790162]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62599262E12, 249.0], [1.62599256E12, 249.0], [1.62599274E12, 249.0], [1.62599268E12, 249.0], [1.6259928E12, 248.76899994015693], [1.6259925E12, 249.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62599262E12, 247.0], [1.62599256E12, 247.0], [1.62599274E12, 246.0], [1.62599268E12, 247.0], [1.6259928E12, 247.0], [1.6259925E12, 247.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62599262E12, 319.0], [1.62599256E12, 320.0], [1.62599274E12, 321.0], [1.62599268E12, 323.0], [1.6259928E12, 324.0], [1.6259925E12, 342.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259928E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 253.5, "minX": 2.0, "maxY": 417.0, "series": [{"data": [[2.0, 255.5], [14.0, 253.5], [17.0, 281.0], [18.0, 273.5], [19.0, 287.0], [20.0, 326.0], [21.0, 352.5], [22.0, 359.0], [23.0, 407.0], [24.0, 394.0], [25.0, 369.0], [27.0, 417.0], [7.0, 254.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 253.0, "minX": 2.0, "maxY": 416.0, "series": [{"data": [[2.0, 254.5], [14.0, 253.0], [17.0, 281.0], [18.0, 273.0], [19.0, 286.0], [20.0, 325.0], [21.0, 351.0], [22.0, 357.0], [23.0, 406.0], [24.0, 393.5], [25.0, 369.0], [27.0, 416.0], [7.0, 253.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.216666666666667, "minX": 1.6259925E12, "maxY": 20.0, "series": [{"data": [[1.62599262E12, 20.0], [1.62599256E12, 20.0], [1.62599274E12, 20.0], [1.62599268E12, 20.0], [1.6259928E12, 8.216666666666667], [1.6259925E12, 11.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259928E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.35, "minX": 1.6259925E12, "maxY": 20.016666666666666, "series": [{"data": [[1.62599262E12, 20.0], [1.62599256E12, 20.0], [1.62599274E12, 20.016666666666666], [1.62599268E12, 19.966666666666665], [1.6259928E12, 8.35], [1.6259925E12, 11.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259928E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.35, "minX": 1.6259925E12, "maxY": 20.016666666666666, "series": [{"data": [[1.62599262E12, 20.0], [1.62599256E12, 20.0], [1.62599274E12, 20.016666666666666], [1.62599268E12, 19.966666666666665], [1.6259928E12, 8.35], [1.6259925E12, 11.85]], "isOverall": false, "label": "cpu\/1\/spring\/mvc-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259928E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.35, "minX": 1.6259925E12, "maxY": 20.016666666666666, "series": [{"data": [[1.62599262E12, 20.0], [1.62599256E12, 20.0], [1.62599274E12, 20.016666666666666], [1.62599268E12, 19.966666666666665], [1.6259928E12, 8.35], [1.6259925E12, 11.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259928E12, "title": "Total Transactions Per Second"}},
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

