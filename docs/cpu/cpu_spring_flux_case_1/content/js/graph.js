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
        data: {"result": {"minY": 249.0, "minX": 0.0, "maxY": 736.0, "series": [{"data": [[0.0, 249.0], [0.1, 249.0], [0.2, 249.0], [0.3, 250.0], [0.4, 250.0], [0.5, 251.0], [0.6, 251.0], [0.7, 251.0], [0.8, 251.0], [0.9, 251.0], [1.0, 251.0], [1.1, 251.0], [1.2, 252.0], [1.3, 252.0], [1.4, 252.0], [1.5, 252.0], [1.6, 252.0], [1.7, 252.0], [1.8, 252.0], [1.9, 252.0], [2.0, 253.0], [2.1, 253.0], [2.2, 253.0], [2.3, 253.0], [2.4, 253.0], [2.5, 253.0], [2.6, 253.0], [2.7, 253.0], [2.8, 253.0], [2.9, 253.0], [3.0, 253.0], [3.1, 253.0], [3.2, 253.0], [3.3, 253.0], [3.4, 254.0], [3.5, 254.0], [3.6, 254.0], [3.7, 254.0], [3.8, 254.0], [3.9, 254.0], [4.0, 254.0], [4.1, 254.0], [4.2, 254.0], [4.3, 254.0], [4.4, 254.0], [4.5, 254.0], [4.6, 254.0], [4.7, 254.0], [4.8, 254.0], [4.9, 254.0], [5.0, 254.0], [5.1, 254.0], [5.2, 255.0], [5.3, 255.0], [5.4, 255.0], [5.5, 255.0], [5.6, 255.0], [5.7, 255.0], [5.8, 255.0], [5.9, 255.0], [6.0, 255.0], [6.1, 255.0], [6.2, 255.0], [6.3, 255.0], [6.4, 255.0], [6.5, 255.0], [6.6, 255.0], [6.7, 255.0], [6.8, 256.0], [6.9, 256.0], [7.0, 256.0], [7.1, 256.0], [7.2, 256.0], [7.3, 256.0], [7.4, 256.0], [7.5, 256.0], [7.6, 256.0], [7.7, 256.0], [7.8, 256.0], [7.9, 256.0], [8.0, 256.0], [8.1, 256.0], [8.2, 257.0], [8.3, 257.0], [8.4, 257.0], [8.5, 257.0], [8.6, 257.0], [8.7, 257.0], [8.8, 257.0], [8.9, 257.0], [9.0, 257.0], [9.1, 257.0], [9.2, 257.0], [9.3, 257.0], [9.4, 257.0], [9.5, 257.0], [9.6, 258.0], [9.7, 258.0], [9.8, 258.0], [9.9, 258.0], [10.0, 258.0], [10.1, 258.0], [10.2, 258.0], [10.3, 258.0], [10.4, 259.0], [10.5, 259.0], [10.6, 259.0], [10.7, 259.0], [10.8, 259.0], [10.9, 260.0], [11.0, 260.0], [11.1, 260.0], [11.2, 260.0], [11.3, 260.0], [11.4, 261.0], [11.5, 261.0], [11.6, 261.0], [11.7, 262.0], [11.8, 262.0], [11.9, 262.0], [12.0, 263.0], [12.1, 263.0], [12.2, 263.0], [12.3, 263.0], [12.4, 263.0], [12.5, 264.0], [12.6, 264.0], [12.7, 264.0], [12.8, 264.0], [12.9, 264.0], [13.0, 264.0], [13.1, 265.0], [13.2, 265.0], [13.3, 265.0], [13.4, 265.0], [13.5, 265.0], [13.6, 265.0], [13.7, 265.0], [13.8, 266.0], [13.9, 266.0], [14.0, 266.0], [14.1, 266.0], [14.2, 266.0], [14.3, 266.0], [14.4, 267.0], [14.5, 267.0], [14.6, 267.0], [14.7, 267.0], [14.8, 267.0], [14.9, 268.0], [15.0, 268.0], [15.1, 268.0], [15.2, 268.0], [15.3, 268.0], [15.4, 269.0], [15.5, 269.0], [15.6, 269.0], [15.7, 269.0], [15.8, 269.0], [15.9, 270.0], [16.0, 270.0], [16.1, 270.0], [16.2, 270.0], [16.3, 271.0], [16.4, 271.0], [16.5, 271.0], [16.6, 271.0], [16.7, 272.0], [16.8, 272.0], [16.9, 272.0], [17.0, 272.0], [17.1, 272.0], [17.2, 273.0], [17.3, 273.0], [17.4, 273.0], [17.5, 273.0], [17.6, 274.0], [17.7, 274.0], [17.8, 274.0], [17.9, 274.0], [18.0, 274.0], [18.1, 275.0], [18.2, 275.0], [18.3, 275.0], [18.4, 275.0], [18.5, 275.0], [18.6, 276.0], [18.7, 276.0], [18.8, 276.0], [18.9, 276.0], [19.0, 276.0], [19.1, 277.0], [19.2, 277.0], [19.3, 277.0], [19.4, 277.0], [19.5, 278.0], [19.6, 278.0], [19.7, 278.0], [19.8, 279.0], [19.9, 279.0], [20.0, 279.0], [20.1, 279.0], [20.2, 279.0], [20.3, 279.0], [20.4, 280.0], [20.5, 280.0], [20.6, 280.0], [20.7, 280.0], [20.8, 280.0], [20.9, 281.0], [21.0, 281.0], [21.1, 281.0], [21.2, 281.0], [21.3, 282.0], [21.4, 282.0], [21.5, 282.0], [21.6, 283.0], [21.7, 283.0], [21.8, 283.0], [21.9, 283.0], [22.0, 283.0], [22.1, 283.0], [22.2, 283.0], [22.3, 284.0], [22.4, 284.0], [22.5, 284.0], [22.6, 284.0], [22.7, 285.0], [22.8, 285.0], [22.9, 285.0], [23.0, 285.0], [23.1, 285.0], [23.2, 286.0], [23.3, 286.0], [23.4, 286.0], [23.5, 286.0], [23.6, 286.0], [23.7, 286.0], [23.8, 286.0], [23.9, 286.0], [24.0, 287.0], [24.1, 287.0], [24.2, 287.0], [24.3, 287.0], [24.4, 287.0], [24.5, 288.0], [24.6, 288.0], [24.7, 288.0], [24.8, 288.0], [24.9, 288.0], [25.0, 288.0], [25.1, 288.0], [25.2, 289.0], [25.3, 289.0], [25.4, 289.0], [25.5, 289.0], [25.6, 289.0], [25.7, 289.0], [25.8, 289.0], [25.9, 290.0], [26.0, 290.0], [26.1, 290.0], [26.2, 290.0], [26.3, 290.0], [26.4, 290.0], [26.5, 290.0], [26.6, 290.0], [26.7, 291.0], [26.8, 291.0], [26.9, 291.0], [27.0, 291.0], [27.1, 291.0], [27.2, 291.0], [27.3, 291.0], [27.4, 292.0], [27.5, 292.0], [27.6, 292.0], [27.7, 292.0], [27.8, 292.0], [27.9, 292.0], [28.0, 292.0], [28.1, 292.0], [28.2, 293.0], [28.3, 293.0], [28.4, 293.0], [28.5, 293.0], [28.6, 293.0], [28.7, 293.0], [28.8, 294.0], [28.9, 294.0], [29.0, 294.0], [29.1, 294.0], [29.2, 294.0], [29.3, 294.0], [29.4, 295.0], [29.5, 295.0], [29.6, 295.0], [29.7, 295.0], [29.8, 295.0], [29.9, 295.0], [30.0, 295.0], [30.1, 296.0], [30.2, 296.0], [30.3, 296.0], [30.4, 296.0], [30.5, 296.0], [30.6, 296.0], [30.7, 296.0], [30.8, 297.0], [30.9, 297.0], [31.0, 297.0], [31.1, 297.0], [31.2, 297.0], [31.3, 297.0], [31.4, 298.0], [31.5, 298.0], [31.6, 298.0], [31.7, 298.0], [31.8, 298.0], [31.9, 298.0], [32.0, 299.0], [32.1, 299.0], [32.2, 299.0], [32.3, 299.0], [32.4, 299.0], [32.5, 299.0], [32.6, 299.0], [32.7, 300.0], [32.8, 300.0], [32.9, 300.0], [33.0, 300.0], [33.1, 300.0], [33.2, 301.0], [33.3, 301.0], [33.4, 301.0], [33.5, 301.0], [33.6, 301.0], [33.7, 301.0], [33.8, 301.0], [33.9, 302.0], [34.0, 302.0], [34.1, 302.0], [34.2, 302.0], [34.3, 302.0], [34.4, 302.0], [34.5, 302.0], [34.6, 303.0], [34.7, 303.0], [34.8, 303.0], [34.9, 303.0], [35.0, 303.0], [35.1, 303.0], [35.2, 303.0], [35.3, 304.0], [35.4, 304.0], [35.5, 304.0], [35.6, 304.0], [35.7, 304.0], [35.8, 305.0], [35.9, 305.0], [36.0, 305.0], [36.1, 305.0], [36.2, 305.0], [36.3, 305.0], [36.4, 306.0], [36.5, 306.0], [36.6, 306.0], [36.7, 306.0], [36.8, 306.0], [36.9, 306.0], [37.0, 307.0], [37.1, 307.0], [37.2, 307.0], [37.3, 307.0], [37.4, 307.0], [37.5, 307.0], [37.6, 307.0], [37.7, 308.0], [37.8, 308.0], [37.9, 308.0], [38.0, 308.0], [38.1, 309.0], [38.2, 309.0], [38.3, 309.0], [38.4, 309.0], [38.5, 309.0], [38.6, 309.0], [38.7, 310.0], [38.8, 310.0], [38.9, 310.0], [39.0, 310.0], [39.1, 310.0], [39.2, 311.0], [39.3, 311.0], [39.4, 311.0], [39.5, 311.0], [39.6, 312.0], [39.7, 312.0], [39.8, 312.0], [39.9, 312.0], [40.0, 313.0], [40.1, 313.0], [40.2, 313.0], [40.3, 313.0], [40.4, 313.0], [40.5, 313.0], [40.6, 313.0], [40.7, 314.0], [40.8, 314.0], [40.9, 314.0], [41.0, 314.0], [41.1, 314.0], [41.2, 315.0], [41.3, 315.0], [41.4, 315.0], [41.5, 315.0], [41.6, 315.0], [41.7, 315.0], [41.8, 316.0], [41.9, 316.0], [42.0, 316.0], [42.1, 317.0], [42.2, 317.0], [42.3, 317.0], [42.4, 317.0], [42.5, 317.0], [42.6, 318.0], [42.7, 318.0], [42.8, 318.0], [42.9, 318.0], [43.0, 319.0], [43.1, 319.0], [43.2, 319.0], [43.3, 319.0], [43.4, 319.0], [43.5, 320.0], [43.6, 320.0], [43.7, 320.0], [43.8, 320.0], [43.9, 320.0], [44.0, 321.0], [44.1, 321.0], [44.2, 321.0], [44.3, 321.0], [44.4, 322.0], [44.5, 322.0], [44.6, 322.0], [44.7, 322.0], [44.8, 323.0], [44.9, 323.0], [45.0, 323.0], [45.1, 323.0], [45.2, 323.0], [45.3, 324.0], [45.4, 324.0], [45.5, 324.0], [45.6, 324.0], [45.7, 324.0], [45.8, 325.0], [45.9, 325.0], [46.0, 325.0], [46.1, 325.0], [46.2, 325.0], [46.3, 325.0], [46.4, 326.0], [46.5, 326.0], [46.6, 326.0], [46.7, 326.0], [46.8, 327.0], [46.9, 327.0], [47.0, 327.0], [47.1, 327.0], [47.2, 328.0], [47.3, 328.0], [47.4, 328.0], [47.5, 328.0], [47.6, 328.0], [47.7, 329.0], [47.8, 329.0], [47.9, 329.0], [48.0, 329.0], [48.1, 329.0], [48.2, 330.0], [48.3, 330.0], [48.4, 330.0], [48.5, 331.0], [48.6, 331.0], [48.7, 331.0], [48.8, 331.0], [48.9, 331.0], [49.0, 331.0], [49.1, 332.0], [49.2, 332.0], [49.3, 332.0], [49.4, 332.0], [49.5, 332.0], [49.6, 333.0], [49.7, 333.0], [49.8, 333.0], [49.9, 333.0], [50.0, 333.0], [50.1, 334.0], [50.2, 334.0], [50.3, 334.0], [50.4, 334.0], [50.5, 334.0], [50.6, 335.0], [50.7, 335.0], [50.8, 335.0], [50.9, 335.0], [51.0, 335.0], [51.1, 336.0], [51.2, 336.0], [51.3, 336.0], [51.4, 336.0], [51.5, 336.0], [51.6, 337.0], [51.7, 337.0], [51.8, 337.0], [51.9, 337.0], [52.0, 337.0], [52.1, 337.0], [52.2, 338.0], [52.3, 338.0], [52.4, 338.0], [52.5, 338.0], [52.6, 338.0], [52.7, 338.0], [52.8, 339.0], [52.9, 339.0], [53.0, 339.0], [53.1, 339.0], [53.2, 339.0], [53.3, 340.0], [53.4, 340.0], [53.5, 340.0], [53.6, 340.0], [53.7, 340.0], [53.8, 340.0], [53.9, 341.0], [54.0, 341.0], [54.1, 341.0], [54.2, 341.0], [54.3, 342.0], [54.4, 342.0], [54.5, 342.0], [54.6, 342.0], [54.7, 342.0], [54.8, 342.0], [54.9, 343.0], [55.0, 343.0], [55.1, 343.0], [55.2, 343.0], [55.3, 343.0], [55.4, 343.0], [55.5, 344.0], [55.6, 344.0], [55.7, 344.0], [55.8, 344.0], [55.9, 344.0], [56.0, 345.0], [56.1, 345.0], [56.2, 345.0], [56.3, 345.0], [56.4, 345.0], [56.5, 346.0], [56.6, 346.0], [56.7, 346.0], [56.8, 346.0], [56.9, 347.0], [57.0, 347.0], [57.1, 347.0], [57.2, 348.0], [57.3, 348.0], [57.4, 348.0], [57.5, 348.0], [57.6, 348.0], [57.7, 348.0], [57.8, 349.0], [57.9, 349.0], [58.0, 349.0], [58.1, 350.0], [58.2, 350.0], [58.3, 350.0], [58.4, 351.0], [58.5, 351.0], [58.6, 351.0], [58.7, 351.0], [58.8, 351.0], [58.9, 352.0], [59.0, 352.0], [59.1, 352.0], [59.2, 352.0], [59.3, 352.0], [59.4, 353.0], [59.5, 353.0], [59.6, 353.0], [59.7, 353.0], [59.8, 354.0], [59.9, 354.0], [60.0, 354.0], [60.1, 354.0], [60.2, 354.0], [60.3, 355.0], [60.4, 355.0], [60.5, 355.0], [60.6, 355.0], [60.7, 356.0], [60.8, 356.0], [60.9, 356.0], [61.0, 356.0], [61.1, 357.0], [61.2, 357.0], [61.3, 357.0], [61.4, 357.0], [61.5, 358.0], [61.6, 358.0], [61.7, 358.0], [61.8, 358.0], [61.9, 359.0], [62.0, 359.0], [62.1, 359.0], [62.2, 359.0], [62.3, 359.0], [62.4, 360.0], [62.5, 360.0], [62.6, 360.0], [62.7, 360.0], [62.8, 361.0], [62.9, 361.0], [63.0, 361.0], [63.1, 361.0], [63.2, 361.0], [63.3, 362.0], [63.4, 362.0], [63.5, 362.0], [63.6, 362.0], [63.7, 362.0], [63.8, 363.0], [63.9, 363.0], [64.0, 363.0], [64.1, 363.0], [64.2, 364.0], [64.3, 364.0], [64.4, 364.0], [64.5, 365.0], [64.6, 365.0], [64.7, 365.0], [64.8, 365.0], [64.9, 366.0], [65.0, 366.0], [65.1, 366.0], [65.2, 366.0], [65.3, 366.0], [65.4, 366.0], [65.5, 367.0], [65.6, 367.0], [65.7, 367.0], [65.8, 367.0], [65.9, 368.0], [66.0, 368.0], [66.1, 368.0], [66.2, 369.0], [66.3, 369.0], [66.4, 369.0], [66.5, 369.0], [66.6, 369.0], [66.7, 370.0], [66.8, 370.0], [66.9, 370.0], [67.0, 370.0], [67.1, 370.0], [67.2, 370.0], [67.3, 371.0], [67.4, 371.0], [67.5, 371.0], [67.6, 371.0], [67.7, 372.0], [67.8, 372.0], [67.9, 372.0], [68.0, 372.0], [68.1, 372.0], [68.2, 373.0], [68.3, 373.0], [68.4, 373.0], [68.5, 373.0], [68.6, 374.0], [68.7, 374.0], [68.8, 374.0], [68.9, 374.0], [69.0, 374.0], [69.1, 374.0], [69.2, 375.0], [69.3, 375.0], [69.4, 375.0], [69.5, 376.0], [69.6, 376.0], [69.7, 377.0], [69.8, 377.0], [69.9, 377.0], [70.0, 377.0], [70.1, 378.0], [70.2, 378.0], [70.3, 378.0], [70.4, 378.0], [70.5, 379.0], [70.6, 379.0], [70.7, 380.0], [70.8, 380.0], [70.9, 381.0], [71.0, 381.0], [71.1, 381.0], [71.2, 382.0], [71.3, 382.0], [71.4, 382.0], [71.5, 382.0], [71.6, 383.0], [71.7, 383.0], [71.8, 383.0], [71.9, 383.0], [72.0, 383.0], [72.1, 384.0], [72.2, 385.0], [72.3, 385.0], [72.4, 385.0], [72.5, 386.0], [72.6, 386.0], [72.7, 386.0], [72.8, 387.0], [72.9, 387.0], [73.0, 387.0], [73.1, 387.0], [73.2, 388.0], [73.3, 388.0], [73.4, 388.0], [73.5, 388.0], [73.6, 389.0], [73.7, 389.0], [73.8, 389.0], [73.9, 389.0], [74.0, 389.0], [74.1, 390.0], [74.2, 390.0], [74.3, 390.0], [74.4, 391.0], [74.5, 391.0], [74.6, 391.0], [74.7, 391.0], [74.8, 392.0], [74.9, 392.0], [75.0, 392.0], [75.1, 392.0], [75.2, 392.0], [75.3, 393.0], [75.4, 393.0], [75.5, 393.0], [75.6, 393.0], [75.7, 393.0], [75.8, 394.0], [75.9, 394.0], [76.0, 394.0], [76.1, 394.0], [76.2, 394.0], [76.3, 395.0], [76.4, 395.0], [76.5, 395.0], [76.6, 396.0], [76.7, 396.0], [76.8, 396.0], [76.9, 396.0], [77.0, 397.0], [77.1, 397.0], [77.2, 397.0], [77.3, 398.0], [77.4, 398.0], [77.5, 399.0], [77.6, 399.0], [77.7, 399.0], [77.8, 399.0], [77.9, 400.0], [78.0, 400.0], [78.1, 400.0], [78.2, 400.0], [78.3, 401.0], [78.4, 401.0], [78.5, 401.0], [78.6, 402.0], [78.7, 402.0], [78.8, 403.0], [78.9, 403.0], [79.0, 403.0], [79.1, 403.0], [79.2, 403.0], [79.3, 404.0], [79.4, 404.0], [79.5, 405.0], [79.6, 405.0], [79.7, 405.0], [79.8, 406.0], [79.9, 406.0], [80.0, 407.0], [80.1, 407.0], [80.2, 407.0], [80.3, 408.0], [80.4, 408.0], [80.5, 408.0], [80.6, 409.0], [80.7, 409.0], [80.8, 410.0], [80.9, 410.0], [81.0, 410.0], [81.1, 410.0], [81.2, 411.0], [81.3, 411.0], [81.4, 411.0], [81.5, 412.0], [81.6, 412.0], [81.7, 412.0], [81.8, 413.0], [81.9, 413.0], [82.0, 413.0], [82.1, 413.0], [82.2, 413.0], [82.3, 414.0], [82.4, 414.0], [82.5, 414.0], [82.6, 415.0], [82.7, 415.0], [82.8, 415.0], [82.9, 416.0], [83.0, 416.0], [83.1, 416.0], [83.2, 417.0], [83.3, 417.0], [83.4, 417.0], [83.5, 417.0], [83.6, 418.0], [83.7, 418.0], [83.8, 418.0], [83.9, 418.0], [84.0, 419.0], [84.1, 419.0], [84.2, 419.0], [84.3, 420.0], [84.4, 420.0], [84.5, 420.0], [84.6, 421.0], [84.7, 421.0], [84.8, 421.0], [84.9, 421.0], [85.0, 422.0], [85.1, 423.0], [85.2, 423.0], [85.3, 423.0], [85.4, 424.0], [85.5, 424.0], [85.6, 425.0], [85.7, 425.0], [85.8, 426.0], [85.9, 427.0], [86.0, 427.0], [86.1, 427.0], [86.2, 428.0], [86.3, 428.0], [86.4, 429.0], [86.5, 429.0], [86.6, 430.0], [86.7, 430.0], [86.8, 431.0], [86.9, 431.0], [87.0, 431.0], [87.1, 432.0], [87.2, 432.0], [87.3, 433.0], [87.4, 433.0], [87.5, 433.0], [87.6, 434.0], [87.7, 434.0], [87.8, 435.0], [87.9, 435.0], [88.0, 436.0], [88.1, 437.0], [88.2, 437.0], [88.3, 438.0], [88.4, 438.0], [88.5, 438.0], [88.6, 439.0], [88.7, 439.0], [88.8, 440.0], [88.9, 440.0], [89.0, 441.0], [89.1, 441.0], [89.2, 442.0], [89.3, 442.0], [89.4, 443.0], [89.5, 443.0], [89.6, 444.0], [89.7, 444.0], [89.8, 445.0], [89.9, 445.0], [90.0, 445.0], [90.1, 446.0], [90.2, 446.0], [90.3, 447.0], [90.4, 447.0], [90.5, 448.0], [90.6, 448.0], [90.7, 449.0], [90.8, 449.0], [90.9, 449.0], [91.0, 450.0], [91.1, 451.0], [91.2, 452.0], [91.3, 452.0], [91.4, 452.0], [91.5, 453.0], [91.6, 453.0], [91.7, 454.0], [91.8, 455.0], [91.9, 455.0], [92.0, 456.0], [92.1, 456.0], [92.2, 456.0], [92.3, 457.0], [92.4, 457.0], [92.5, 459.0], [92.6, 459.0], [92.7, 459.0], [92.8, 460.0], [92.9, 460.0], [93.0, 461.0], [93.1, 461.0], [93.2, 462.0], [93.3, 463.0], [93.4, 463.0], [93.5, 464.0], [93.6, 465.0], [93.7, 465.0], [93.8, 466.0], [93.9, 467.0], [94.0, 468.0], [94.1, 468.0], [94.2, 469.0], [94.3, 470.0], [94.4, 471.0], [94.5, 471.0], [94.6, 472.0], [94.7, 472.0], [94.8, 473.0], [94.9, 474.0], [95.0, 475.0], [95.1, 475.0], [95.2, 476.0], [95.3, 477.0], [95.4, 477.0], [95.5, 478.0], [95.6, 480.0], [95.7, 481.0], [95.8, 482.0], [95.9, 483.0], [96.0, 484.0], [96.1, 485.0], [96.2, 486.0], [96.3, 488.0], [96.4, 489.0], [96.5, 490.0], [96.6, 492.0], [96.7, 493.0], [96.8, 494.0], [96.9, 495.0], [97.0, 496.0], [97.1, 497.0], [97.2, 498.0], [97.3, 499.0], [97.4, 501.0], [97.5, 501.0], [97.6, 505.0], [97.7, 506.0], [97.8, 508.0], [97.9, 509.0], [98.0, 510.0], [98.1, 512.0], [98.2, 515.0], [98.3, 517.0], [98.4, 519.0], [98.5, 522.0], [98.6, 526.0], [98.7, 528.0], [98.8, 531.0], [98.9, 535.0], [99.0, 539.0], [99.1, 544.0], [99.2, 549.0], [99.3, 557.0], [99.4, 562.0], [99.5, 565.0], [99.6, 581.0], [99.7, 593.0], [99.8, 619.0], [99.9, 633.0]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 200.0, "maxY": 2718.0, "series": [{"data": [[300.0, 2718.0], [600.0, 14.0], [700.0, 2.0], [200.0, 1959.0], [400.0, 1171.0], [500.0, 145.0]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 158.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5851.0, "series": [{"data": [[0.0, 5851.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 158.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.270440251572326, "minX": 1.6259946E12, "maxY": 50.0, "series": [{"data": [[1.62599466E12, 43.99672667757773], [1.62599484E12, 50.0], [1.6259949E12, 48.76241480038947], [1.62599472E12, 50.0], [1.62599478E12, 50.0], [1.6259946E12, 9.270440251572326]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259949E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 269.8, "minX": 1.0, "maxY": 515.6, "series": [{"data": [[2.0, 281.0], [3.0, 274.75], [4.0, 269.8], [5.0, 276.3333333333333], [6.0, 278.0769230769231], [7.0, 280.66666666666663], [8.0, 284.35714285714283], [9.0, 293.69230769230774], [10.0, 293.46153846153845], [11.0, 281.4285714285714], [12.0, 315.42857142857144], [13.0, 372.0], [14.0, 414.00000000000006], [15.0, 363.2], [16.0, 412.35714285714283], [17.0, 421.0], [18.0, 371.06666666666666], [19.0, 303.50000000000006], [20.0, 400.0625], [21.0, 355.08333333333337], [22.0, 360.375], [23.0, 425.0], [24.0, 318.92857142857144], [25.0, 414.57142857142856], [26.0, 323.3571428571429], [27.0, 434.3333333333333], [28.0, 370.73333333333335], [29.0, 403.9], [30.0, 487.2666666666667], [31.0, 364.7857142857143], [32.0, 453.0], [33.0, 353.125], [34.0, 340.79999999999995], [35.0, 460.82352941176464], [36.0, 379.35714285714283], [37.0, 391.125], [38.0, 462.6315789473684], [39.0, 391.8666666666667], [40.0, 356.625], [41.0, 515.6], [42.0, 451.66666666666663], [43.0, 396.9333333333333], [44.0, 452.71428571428567], [45.0, 419.5384615384616], [46.0, 438.1875], [47.0, 328.2307692307692], [48.0, 428.6923076923076], [49.0, 367.4375], [50.0, 341.04058834481384], [1.0, 297.6666666666667]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}, {"data": [[47.48993176901329, 344.8640372774179]], "isOverall": false, "label": "cpu/1/spring/flux-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 408.1, "minX": 1.6259946E12, "maxY": 3584.5333333333333, "series": [{"data": [[1.62599466E12, 3136.4666666666667], [1.62599484E12, 3080.0], [1.6259949E12, 2635.9666666666667], [1.62599472E12, 3080.0], [1.62599478E12, 3082.5666666666666], [1.6259946E12, 408.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62599466E12, 3584.5333333333333], [1.62599484E12, 3520.0], [1.6259949E12, 3012.5333333333333], [1.62599472E12, 3520.0], [1.62599478E12, 3522.9333333333334], [1.6259946E12, 466.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259949E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 308.31446540880506, "minX": 1.6259946E12, "maxY": 365.79459901800277, "series": [{"data": [[1.62599466E12, 365.79459901800277], [1.62599484E12, 340.3158333333331], [1.6259949E12, 341.4294060370012], [1.62599472E12, 340.10833333333295], [1.62599478E12, 340.63946711074135], [1.6259946E12, 308.31446540880506]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259949E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 308.29559748427647, "minX": 1.6259946E12, "maxY": 365.78641571194737, "series": [{"data": [[1.62599466E12, 365.78641571194737], [1.62599484E12, 340.31249999999983], [1.6259949E12, 341.4225900681599], [1.62599472E12, 340.10166666666686], [1.62599478E12, 340.6344712739382], [1.6259946E12, 308.29559748427647]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259949E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 37.76923076923073, "minX": 1.6259946E12, "maxY": 37.899371069182365, "series": [{"data": [[1.62599466E12, 37.76923076923073], [1.62599484E12, 37.885833333333366], [1.6259949E12, 37.81207400194749], [1.62599472E12, 37.86750000000004], [1.62599478E12, 37.81681931723567], [1.6259946E12, 37.899371069182365]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259949E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 249.0, "minX": 1.6259946E12, "maxY": 736.0, "series": [{"data": [[1.62599466E12, 733.0], [1.62599484E12, 542.0], [1.6259949E12, 565.0], [1.62599472E12, 736.0], [1.62599478E12, 565.0], [1.6259946E12, 584.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62599466E12, 489.70000000000005], [1.62599484E12, 435.0], [1.6259949E12, 432.0], [1.62599472E12, 440.9000000000001], [1.62599478E12, 435.79999999999995], [1.6259946E12, 421.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62599466E12, 601.54], [1.62599484E12, 503.0], [1.6259949E12, 512.8800000000001], [1.62599472E12, 495.99], [1.62599478E12, 495.98], [1.6259946E12, 582.2]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62599466E12, 527.0], [1.62599484E12, 465.0], [1.6259949E12, 458.5999999999999], [1.62599472E12, 460.95000000000005], [1.62599478E12, 456.0], [1.6259946E12, 505.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62599466E12, 249.0], [1.62599484E12, 249.0], [1.6259949E12, 249.0], [1.62599472E12, 249.0], [1.62599478E12, 249.0], [1.6259946E12, 249.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62599466E12, 350.5], [1.62599484E12, 330.0], [1.6259949E12, 333.0], [1.62599472E12, 330.5], [1.62599478E12, 334.0], [1.6259946E12, 276.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259949E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 253.0, "minX": 6.0, "maxY": 404.0, "series": [{"data": [[9.0, 404.0], [11.0, 253.0], [16.0, 304.0], [17.0, 305.0], [18.0, 319.0], [19.0, 332.0], [20.0, 333.0], [21.0, 329.0], [22.0, 345.5], [23.0, 347.0], [6.0, 256.0], [24.0, 354.0], [25.0, 388.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 253.0, "minX": 6.0, "maxY": 404.0, "series": [{"data": [[9.0, 404.0], [11.0, 253.0], [16.0, 304.0], [17.0, 305.0], [18.0, 319.0], [19.0, 332.0], [20.0, 333.0], [21.0, 329.0], [22.0, 345.5], [23.0, 347.0], [6.0, 256.0], [24.0, 354.0], [25.0, 388.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.7, "minX": 1.6259946E12, "maxY": 20.45, "series": [{"data": [[1.62599466E12, 20.45], [1.62599484E12, 20.0], [1.6259949E12, 17.0], [1.62599472E12, 19.983333333333334], [1.62599478E12, 20.016666666666666], [1.6259946E12, 2.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259949E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.65, "minX": 1.6259946E12, "maxY": 20.366666666666667, "series": [{"data": [[1.62599466E12, 20.366666666666667], [1.62599484E12, 20.0], [1.6259949E12, 17.116666666666667], [1.62599472E12, 20.0], [1.62599478E12, 20.016666666666666], [1.6259946E12, 2.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259949E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.65, "minX": 1.6259946E12, "maxY": 20.366666666666667, "series": [{"data": [[1.62599466E12, 20.366666666666667], [1.62599484E12, 20.0], [1.6259949E12, 17.116666666666667], [1.62599472E12, 20.0], [1.62599478E12, 20.016666666666666], [1.6259946E12, 2.65]], "isOverall": false, "label": "cpu/1/spring/flux-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259949E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.65, "minX": 1.6259946E12, "maxY": 20.366666666666667, "series": [{"data": [[1.62599466E12, 20.366666666666667], [1.62599484E12, 20.0], [1.6259949E12, 17.116666666666667], [1.62599472E12, 20.0], [1.62599478E12, 20.016666666666666], [1.6259946E12, 2.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259949E12, "title": "Total Transactions Per Second"}},
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

