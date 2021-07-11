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
        data: {"result": {"minY": 252.0, "minX": 0.0, "maxY": 634.0, "series": [{"data": [[0.0, 252.0], [0.1, 253.0], [0.2, 253.0], [0.3, 253.0], [0.4, 254.0], [0.5, 254.0], [0.6, 254.0], [0.7, 254.0], [0.8, 254.0], [0.9, 255.0], [1.0, 255.0], [1.1, 255.0], [1.2, 255.0], [1.3, 255.0], [1.4, 255.0], [1.5, 255.0], [1.6, 255.0], [1.7, 255.0], [1.8, 255.0], [1.9, 255.0], [2.0, 255.0], [2.1, 255.0], [2.2, 255.0], [2.3, 256.0], [2.4, 256.0], [2.5, 256.0], [2.6, 256.0], [2.7, 256.0], [2.8, 256.0], [2.9, 256.0], [3.0, 256.0], [3.1, 256.0], [3.2, 256.0], [3.3, 256.0], [3.4, 256.0], [3.5, 256.0], [3.6, 256.0], [3.7, 256.0], [3.8, 256.0], [3.9, 256.0], [4.0, 256.0], [4.1, 257.0], [4.2, 257.0], [4.3, 257.0], [4.4, 257.0], [4.5, 257.0], [4.6, 257.0], [4.7, 257.0], [4.8, 257.0], [4.9, 257.0], [5.0, 257.0], [5.1, 257.0], [5.2, 257.0], [5.3, 257.0], [5.4, 257.0], [5.5, 257.0], [5.6, 257.0], [5.7, 257.0], [5.8, 257.0], [5.9, 258.0], [6.0, 258.0], [6.1, 258.0], [6.2, 258.0], [6.3, 258.0], [6.4, 258.0], [6.5, 258.0], [6.6, 258.0], [6.7, 258.0], [6.8, 258.0], [6.9, 258.0], [7.0, 258.0], [7.1, 258.0], [7.2, 258.0], [7.3, 258.0], [7.4, 258.0], [7.5, 258.0], [7.6, 258.0], [7.7, 258.0], [7.8, 258.0], [7.9, 258.0], [8.0, 258.0], [8.1, 259.0], [8.2, 259.0], [8.3, 259.0], [8.4, 259.0], [8.5, 259.0], [8.6, 259.0], [8.7, 259.0], [8.8, 259.0], [8.9, 259.0], [9.0, 259.0], [9.1, 259.0], [9.2, 259.0], [9.3, 259.0], [9.4, 259.0], [9.5, 259.0], [9.6, 259.0], [9.7, 259.0], [9.8, 259.0], [9.9, 260.0], [10.0, 260.0], [10.1, 260.0], [10.2, 260.0], [10.3, 260.0], [10.4, 260.0], [10.5, 260.0], [10.6, 260.0], [10.7, 260.0], [10.8, 260.0], [10.9, 260.0], [11.0, 260.0], [11.1, 260.0], [11.2, 260.0], [11.3, 260.0], [11.4, 260.0], [11.5, 260.0], [11.6, 261.0], [11.7, 261.0], [11.8, 261.0], [11.9, 261.0], [12.0, 261.0], [12.1, 261.0], [12.2, 261.0], [12.3, 261.0], [12.4, 261.0], [12.5, 261.0], [12.6, 261.0], [12.7, 261.0], [12.8, 261.0], [12.9, 261.0], [13.0, 262.0], [13.1, 262.0], [13.2, 262.0], [13.3, 262.0], [13.4, 262.0], [13.5, 262.0], [13.6, 262.0], [13.7, 262.0], [13.8, 262.0], [13.9, 262.0], [14.0, 263.0], [14.1, 263.0], [14.2, 263.0], [14.3, 263.0], [14.4, 263.0], [14.5, 263.0], [14.6, 264.0], [14.7, 264.0], [14.8, 264.0], [14.9, 264.0], [15.0, 264.0], [15.1, 265.0], [15.2, 265.0], [15.3, 265.0], [15.4, 265.0], [15.5, 265.0], [15.6, 265.0], [15.7, 266.0], [15.8, 266.0], [15.9, 266.0], [16.0, 266.0], [16.1, 267.0], [16.2, 267.0], [16.3, 267.0], [16.4, 267.0], [16.5, 267.0], [16.6, 267.0], [16.7, 268.0], [16.8, 268.0], [16.9, 268.0], [17.0, 268.0], [17.1, 268.0], [17.2, 268.0], [17.3, 268.0], [17.4, 269.0], [17.5, 269.0], [17.6, 269.0], [17.7, 269.0], [17.8, 269.0], [17.9, 269.0], [18.0, 270.0], [18.1, 270.0], [18.2, 270.0], [18.3, 270.0], [18.4, 270.0], [18.5, 270.0], [18.6, 270.0], [18.7, 270.0], [18.8, 270.0], [18.9, 271.0], [19.0, 271.0], [19.1, 271.0], [19.2, 271.0], [19.3, 271.0], [19.4, 271.0], [19.5, 271.0], [19.6, 272.0], [19.7, 272.0], [19.8, 272.0], [19.9, 272.0], [20.0, 272.0], [20.1, 272.0], [20.2, 273.0], [20.3, 273.0], [20.4, 273.0], [20.5, 273.0], [20.6, 273.0], [20.7, 273.0], [20.8, 274.0], [20.9, 274.0], [21.0, 274.0], [21.1, 274.0], [21.2, 274.0], [21.3, 274.0], [21.4, 274.0], [21.5, 275.0], [21.6, 275.0], [21.7, 275.0], [21.8, 275.0], [21.9, 275.0], [22.0, 275.0], [22.1, 276.0], [22.2, 276.0], [22.3, 276.0], [22.4, 276.0], [22.5, 276.0], [22.6, 276.0], [22.7, 277.0], [22.8, 277.0], [22.9, 277.0], [23.0, 277.0], [23.1, 277.0], [23.2, 277.0], [23.3, 278.0], [23.4, 278.0], [23.5, 278.0], [23.6, 278.0], [23.7, 278.0], [23.8, 278.0], [23.9, 278.0], [24.0, 279.0], [24.1, 279.0], [24.2, 279.0], [24.3, 279.0], [24.4, 279.0], [24.5, 279.0], [24.6, 280.0], [24.7, 280.0], [24.8, 280.0], [24.9, 280.0], [25.0, 280.0], [25.1, 281.0], [25.2, 281.0], [25.3, 281.0], [25.4, 281.0], [25.5, 281.0], [25.6, 281.0], [25.7, 282.0], [25.8, 282.0], [25.9, 282.0], [26.0, 282.0], [26.1, 282.0], [26.2, 283.0], [26.3, 283.0], [26.4, 283.0], [26.5, 283.0], [26.6, 283.0], [26.7, 284.0], [26.8, 284.0], [26.9, 284.0], [27.0, 284.0], [27.1, 284.0], [27.2, 284.0], [27.3, 285.0], [27.4, 285.0], [27.5, 285.0], [27.6, 285.0], [27.7, 286.0], [27.8, 286.0], [27.9, 286.0], [28.0, 287.0], [28.1, 287.0], [28.2, 287.0], [28.3, 287.0], [28.4, 287.0], [28.5, 288.0], [28.6, 288.0], [28.7, 288.0], [28.8, 289.0], [28.9, 289.0], [29.0, 289.0], [29.1, 289.0], [29.2, 290.0], [29.3, 290.0], [29.4, 290.0], [29.5, 290.0], [29.6, 290.0], [29.7, 291.0], [29.8, 291.0], [29.9, 291.0], [30.0, 291.0], [30.1, 291.0], [30.2, 292.0], [30.3, 292.0], [30.4, 292.0], [30.5, 292.0], [30.6, 292.0], [30.7, 292.0], [30.8, 293.0], [30.9, 293.0], [31.0, 293.0], [31.1, 293.0], [31.2, 293.0], [31.3, 293.0], [31.4, 293.0], [31.5, 294.0], [31.6, 294.0], [31.7, 294.0], [31.8, 294.0], [31.9, 294.0], [32.0, 294.0], [32.1, 295.0], [32.2, 295.0], [32.3, 295.0], [32.4, 295.0], [32.5, 295.0], [32.6, 296.0], [32.7, 296.0], [32.8, 296.0], [32.9, 296.0], [33.0, 296.0], [33.1, 297.0], [33.2, 297.0], [33.3, 297.0], [33.4, 297.0], [33.5, 297.0], [33.6, 298.0], [33.7, 298.0], [33.8, 298.0], [33.9, 298.0], [34.0, 298.0], [34.1, 299.0], [34.2, 299.0], [34.3, 299.0], [34.4, 299.0], [34.5, 299.0], [34.6, 300.0], [34.7, 300.0], [34.8, 300.0], [34.9, 300.0], [35.0, 300.0], [35.1, 300.0], [35.2, 300.0], [35.3, 301.0], [35.4, 301.0], [35.5, 301.0], [35.6, 301.0], [35.7, 302.0], [35.8, 302.0], [35.9, 302.0], [36.0, 302.0], [36.1, 302.0], [36.2, 303.0], [36.3, 303.0], [36.4, 303.0], [36.5, 303.0], [36.6, 303.0], [36.7, 304.0], [36.8, 304.0], [36.9, 304.0], [37.0, 304.0], [37.1, 305.0], [37.2, 305.0], [37.3, 305.0], [37.4, 305.0], [37.5, 306.0], [37.6, 306.0], [37.7, 306.0], [37.8, 306.0], [37.9, 307.0], [38.0, 307.0], [38.1, 307.0], [38.2, 307.0], [38.3, 307.0], [38.4, 308.0], [38.5, 308.0], [38.6, 308.0], [38.7, 308.0], [38.8, 308.0], [38.9, 309.0], [39.0, 309.0], [39.1, 309.0], [39.2, 309.0], [39.3, 309.0], [39.4, 309.0], [39.5, 310.0], [39.6, 310.0], [39.7, 311.0], [39.8, 311.0], [39.9, 311.0], [40.0, 311.0], [40.1, 312.0], [40.2, 312.0], [40.3, 312.0], [40.4, 313.0], [40.5, 313.0], [40.6, 313.0], [40.7, 313.0], [40.8, 313.0], [40.9, 314.0], [41.0, 314.0], [41.1, 314.0], [41.2, 315.0], [41.3, 315.0], [41.4, 315.0], [41.5, 315.0], [41.6, 315.0], [41.7, 316.0], [41.8, 316.0], [41.9, 316.0], [42.0, 316.0], [42.1, 317.0], [42.2, 317.0], [42.3, 317.0], [42.4, 318.0], [42.5, 318.0], [42.6, 318.0], [42.7, 318.0], [42.8, 318.0], [42.9, 319.0], [43.0, 319.0], [43.1, 319.0], [43.2, 319.0], [43.3, 320.0], [43.4, 320.0], [43.5, 320.0], [43.6, 320.0], [43.7, 321.0], [43.8, 321.0], [43.9, 321.0], [44.0, 321.0], [44.1, 322.0], [44.2, 322.0], [44.3, 322.0], [44.4, 323.0], [44.5, 323.0], [44.6, 323.0], [44.7, 323.0], [44.8, 324.0], [44.9, 324.0], [45.0, 324.0], [45.1, 324.0], [45.2, 324.0], [45.3, 325.0], [45.4, 325.0], [45.5, 325.0], [45.6, 325.0], [45.7, 326.0], [45.8, 326.0], [45.9, 326.0], [46.0, 326.0], [46.1, 327.0], [46.2, 327.0], [46.3, 327.0], [46.4, 327.0], [46.5, 328.0], [46.6, 328.0], [46.7, 328.0], [46.8, 328.0], [46.9, 328.0], [47.0, 329.0], [47.1, 329.0], [47.2, 329.0], [47.3, 329.0], [47.4, 330.0], [47.5, 330.0], [47.6, 330.0], [47.7, 330.0], [47.8, 330.0], [47.9, 331.0], [48.0, 331.0], [48.1, 331.0], [48.2, 331.0], [48.3, 332.0], [48.4, 332.0], [48.5, 332.0], [48.6, 332.0], [48.7, 333.0], [48.8, 333.0], [48.9, 333.0], [49.0, 333.0], [49.1, 333.0], [49.2, 334.0], [49.3, 334.0], [49.4, 334.0], [49.5, 334.0], [49.6, 335.0], [49.7, 335.0], [49.8, 335.0], [49.9, 335.0], [50.0, 335.0], [50.1, 336.0], [50.2, 336.0], [50.3, 336.0], [50.4, 336.0], [50.5, 337.0], [50.6, 337.0], [50.7, 337.0], [50.8, 337.0], [50.9, 337.0], [51.0, 337.0], [51.1, 338.0], [51.2, 338.0], [51.3, 338.0], [51.4, 338.0], [51.5, 338.0], [51.6, 339.0], [51.7, 339.0], [51.8, 339.0], [51.9, 339.0], [52.0, 339.0], [52.1, 340.0], [52.2, 340.0], [52.3, 340.0], [52.4, 340.0], [52.5, 340.0], [52.6, 341.0], [52.7, 341.0], [52.8, 341.0], [52.9, 341.0], [53.0, 342.0], [53.1, 342.0], [53.2, 342.0], [53.3, 342.0], [53.4, 342.0], [53.5, 343.0], [53.6, 343.0], [53.7, 343.0], [53.8, 343.0], [53.9, 343.0], [54.0, 344.0], [54.1, 344.0], [54.2, 344.0], [54.3, 344.0], [54.4, 344.0], [54.5, 345.0], [54.6, 345.0], [54.7, 345.0], [54.8, 345.0], [54.9, 346.0], [55.0, 346.0], [55.1, 346.0], [55.2, 347.0], [55.3, 347.0], [55.4, 347.0], [55.5, 347.0], [55.6, 347.0], [55.7, 348.0], [55.8, 348.0], [55.9, 348.0], [56.0, 348.0], [56.1, 348.0], [56.2, 349.0], [56.3, 349.0], [56.4, 349.0], [56.5, 350.0], [56.6, 350.0], [56.7, 350.0], [56.8, 350.0], [56.9, 351.0], [57.0, 351.0], [57.1, 351.0], [57.2, 351.0], [57.3, 352.0], [57.4, 352.0], [57.5, 352.0], [57.6, 352.0], [57.7, 353.0], [57.8, 353.0], [57.9, 353.0], [58.0, 353.0], [58.1, 353.0], [58.2, 354.0], [58.3, 354.0], [58.4, 354.0], [58.5, 354.0], [58.6, 355.0], [58.7, 355.0], [58.8, 355.0], [58.9, 355.0], [59.0, 356.0], [59.1, 356.0], [59.2, 356.0], [59.3, 356.0], [59.4, 357.0], [59.5, 357.0], [59.6, 357.0], [59.7, 357.0], [59.8, 357.0], [59.9, 357.0], [60.0, 358.0], [60.1, 358.0], [60.2, 358.0], [60.3, 359.0], [60.4, 359.0], [60.5, 359.0], [60.6, 360.0], [60.7, 360.0], [60.8, 360.0], [60.9, 361.0], [61.0, 361.0], [61.1, 361.0], [61.2, 361.0], [61.3, 361.0], [61.4, 362.0], [61.5, 362.0], [61.6, 362.0], [61.7, 362.0], [61.8, 362.0], [61.9, 363.0], [62.0, 363.0], [62.1, 363.0], [62.2, 363.0], [62.3, 364.0], [62.4, 364.0], [62.5, 364.0], [62.6, 364.0], [62.7, 365.0], [62.8, 365.0], [62.9, 365.0], [63.0, 366.0], [63.1, 366.0], [63.2, 366.0], [63.3, 366.0], [63.4, 366.0], [63.5, 367.0], [63.6, 367.0], [63.7, 367.0], [63.8, 367.0], [63.9, 368.0], [64.0, 368.0], [64.1, 368.0], [64.2, 369.0], [64.3, 369.0], [64.4, 369.0], [64.5, 369.0], [64.6, 369.0], [64.7, 370.0], [64.8, 370.0], [64.9, 370.0], [65.0, 371.0], [65.1, 371.0], [65.2, 371.0], [65.3, 372.0], [65.4, 372.0], [65.5, 372.0], [65.6, 373.0], [65.7, 373.0], [65.8, 373.0], [65.9, 373.0], [66.0, 373.0], [66.1, 374.0], [66.2, 374.0], [66.3, 374.0], [66.4, 375.0], [66.5, 375.0], [66.6, 375.0], [66.7, 376.0], [66.8, 376.0], [66.9, 376.0], [67.0, 376.0], [67.1, 377.0], [67.2, 377.0], [67.3, 377.0], [67.4, 378.0], [67.5, 378.0], [67.6, 378.0], [67.7, 378.0], [67.8, 379.0], [67.9, 379.0], [68.0, 379.0], [68.1, 379.0], [68.2, 379.0], [68.3, 380.0], [68.4, 380.0], [68.5, 380.0], [68.6, 381.0], [68.7, 381.0], [68.8, 381.0], [68.9, 382.0], [69.0, 382.0], [69.1, 383.0], [69.2, 383.0], [69.3, 383.0], [69.4, 384.0], [69.5, 384.0], [69.6, 384.0], [69.7, 385.0], [69.8, 385.0], [69.9, 385.0], [70.0, 386.0], [70.1, 386.0], [70.2, 386.0], [70.3, 386.0], [70.4, 387.0], [70.5, 387.0], [70.6, 387.0], [70.7, 387.0], [70.8, 388.0], [70.9, 388.0], [71.0, 388.0], [71.1, 389.0], [71.2, 389.0], [71.3, 389.0], [71.4, 389.0], [71.5, 390.0], [71.6, 390.0], [71.7, 391.0], [71.8, 391.0], [71.9, 391.0], [72.0, 391.0], [72.1, 391.0], [72.2, 391.0], [72.3, 392.0], [72.4, 392.0], [72.5, 392.0], [72.6, 392.0], [72.7, 393.0], [72.8, 393.0], [72.9, 394.0], [73.0, 394.0], [73.1, 394.0], [73.2, 395.0], [73.3, 395.0], [73.4, 395.0], [73.5, 396.0], [73.6, 396.0], [73.7, 396.0], [73.8, 397.0], [73.9, 397.0], [74.0, 397.0], [74.1, 397.0], [74.2, 397.0], [74.3, 398.0], [74.4, 398.0], [74.5, 399.0], [74.6, 399.0], [74.7, 399.0], [74.8, 399.0], [74.9, 400.0], [75.0, 400.0], [75.1, 401.0], [75.2, 401.0], [75.3, 401.0], [75.4, 402.0], [75.5, 402.0], [75.6, 402.0], [75.7, 402.0], [75.8, 403.0], [75.9, 403.0], [76.0, 403.0], [76.1, 404.0], [76.2, 404.0], [76.3, 404.0], [76.4, 405.0], [76.5, 405.0], [76.6, 405.0], [76.7, 405.0], [76.8, 406.0], [76.9, 406.0], [77.0, 406.0], [77.1, 407.0], [77.2, 407.0], [77.3, 407.0], [77.4, 408.0], [77.5, 408.0], [77.6, 408.0], [77.7, 408.0], [77.8, 409.0], [77.9, 409.0], [78.0, 409.0], [78.1, 409.0], [78.2, 410.0], [78.3, 410.0], [78.4, 410.0], [78.5, 410.0], [78.6, 410.0], [78.7, 411.0], [78.8, 411.0], [78.9, 411.0], [79.0, 412.0], [79.1, 412.0], [79.2, 412.0], [79.3, 412.0], [79.4, 413.0], [79.5, 413.0], [79.6, 413.0], [79.7, 414.0], [79.8, 414.0], [79.9, 414.0], [80.0, 415.0], [80.1, 415.0], [80.2, 415.0], [80.3, 415.0], [80.4, 416.0], [80.5, 416.0], [80.6, 416.0], [80.7, 417.0], [80.8, 417.0], [80.9, 417.0], [81.0, 417.0], [81.1, 418.0], [81.2, 418.0], [81.3, 418.0], [81.4, 419.0], [81.5, 419.0], [81.6, 419.0], [81.7, 420.0], [81.8, 420.0], [81.9, 421.0], [82.0, 421.0], [82.1, 421.0], [82.2, 422.0], [82.3, 422.0], [82.4, 422.0], [82.5, 423.0], [82.6, 423.0], [82.7, 423.0], [82.8, 423.0], [82.9, 424.0], [83.0, 424.0], [83.1, 425.0], [83.2, 425.0], [83.3, 425.0], [83.4, 426.0], [83.5, 426.0], [83.6, 426.0], [83.7, 426.0], [83.8, 427.0], [83.9, 427.0], [84.0, 427.0], [84.1, 428.0], [84.2, 428.0], [84.3, 428.0], [84.4, 428.0], [84.5, 429.0], [84.6, 429.0], [84.7, 429.0], [84.8, 430.0], [84.9, 430.0], [85.0, 430.0], [85.1, 431.0], [85.2, 431.0], [85.3, 432.0], [85.4, 432.0], [85.5, 432.0], [85.6, 433.0], [85.7, 433.0], [85.8, 434.0], [85.9, 434.0], [86.0, 435.0], [86.1, 435.0], [86.2, 435.0], [86.3, 436.0], [86.4, 436.0], [86.5, 437.0], [86.6, 437.0], [86.7, 437.0], [86.8, 438.0], [86.9, 439.0], [87.0, 439.0], [87.1, 439.0], [87.2, 439.0], [87.3, 440.0], [87.4, 440.0], [87.5, 441.0], [87.6, 441.0], [87.7, 441.0], [87.8, 442.0], [87.9, 442.0], [88.0, 442.0], [88.1, 443.0], [88.2, 443.0], [88.3, 444.0], [88.4, 444.0], [88.5, 445.0], [88.6, 445.0], [88.7, 446.0], [88.8, 446.0], [88.9, 447.0], [89.0, 447.0], [89.1, 447.0], [89.2, 448.0], [89.3, 448.0], [89.4, 449.0], [89.5, 449.0], [89.6, 450.0], [89.7, 450.0], [89.8, 451.0], [89.9, 452.0], [90.0, 452.0], [90.1, 453.0], [90.2, 454.0], [90.3, 455.0], [90.4, 455.0], [90.5, 456.0], [90.6, 457.0], [90.7, 457.0], [90.8, 458.0], [90.9, 459.0], [91.0, 459.0], [91.1, 460.0], [91.2, 461.0], [91.3, 461.0], [91.4, 462.0], [91.5, 463.0], [91.6, 463.0], [91.7, 464.0], [91.8, 464.0], [91.9, 465.0], [92.0, 465.0], [92.1, 466.0], [92.2, 466.0], [92.3, 467.0], [92.4, 468.0], [92.5, 469.0], [92.6, 470.0], [92.7, 471.0], [92.8, 471.0], [92.9, 472.0], [93.0, 472.0], [93.1, 473.0], [93.2, 473.0], [93.3, 474.0], [93.4, 474.0], [93.5, 475.0], [93.6, 475.0], [93.7, 475.0], [93.8, 477.0], [93.9, 477.0], [94.0, 478.0], [94.1, 478.0], [94.2, 479.0], [94.3, 480.0], [94.4, 481.0], [94.5, 482.0], [94.6, 482.0], [94.7, 483.0], [94.8, 484.0], [94.9, 485.0], [95.0, 486.0], [95.1, 487.0], [95.2, 488.0], [95.3, 489.0], [95.4, 490.0], [95.5, 491.0], [95.6, 492.0], [95.7, 493.0], [95.8, 494.0], [95.9, 495.0], [96.0, 497.0], [96.1, 497.0], [96.2, 499.0], [96.3, 500.0], [96.4, 501.0], [96.5, 502.0], [96.6, 504.0], [96.7, 504.0], [96.8, 505.0], [96.9, 507.0], [97.0, 508.0], [97.1, 509.0], [97.2, 511.0], [97.3, 511.0], [97.4, 513.0], [97.5, 514.0], [97.6, 516.0], [97.7, 517.0], [97.8, 518.0], [97.9, 519.0], [98.0, 520.0], [98.1, 520.0], [98.2, 523.0], [98.3, 524.0], [98.4, 525.0], [98.5, 527.0], [98.6, 528.0], [98.7, 530.0], [98.8, 534.0], [98.9, 536.0], [99.0, 540.0], [99.1, 545.0], [99.2, 551.0], [99.3, 554.0], [99.4, 566.0], [99.5, 575.0], [99.6, 582.0], [99.7, 592.0], [99.8, 600.0], [99.9, 612.0], [100.0, 634.0]], "isOverall": false, "label": "cpu\/1\/spring\/mvc", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 13.0, "minX": 200.0, "maxY": 2416.0, "series": [{"data": [[300.0, 2416.0], [600.0, 13.0], [200.0, 2078.0], [400.0, 1289.0], [500.0, 212.0]], "isOverall": false, "label": "cpu\/1\/spring\/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 218.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5790.0, "series": [{"data": [[0.0, 5790.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 218.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.400000000000004, "minX": 1.62599286E12, "maxY": 50.0, "series": [{"data": [[1.62599292E12, 44.049795918367394], [1.6259931E12, 50.0], [1.62599304E12, 50.0], [1.62599316E12, 48.790811339198434], [1.62599286E12, 9.400000000000004], [1.62599298E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599316E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 270.9166666666667, "minX": 1.0, "maxY": 522.1176470588235, "series": [{"data": [[2.0, 290.0], [3.0, 274.7142857142857], [4.0, 273.49999999999994], [5.0, 270.9166666666667], [6.0, 274.9230769230769], [7.0, 284.84615384615387], [8.0, 289.50000000000006], [9.0, 284.73333333333335], [10.0, 282.3846153846154], [11.0, 298.53846153846155], [12.0, 342.8461538461538], [13.0, 397.35714285714283], [14.0, 442.6666666666667], [15.0, 389.44444444444446], [16.0, 431.76470588235287], [17.0, 402.57142857142856], [18.0, 397.0], [19.0, 308.09999999999997], [20.0, 403.25], [21.0, 354.0833333333333], [22.0, 352.24999999999994], [23.0, 410.7857142857142], [24.0, 290.23076923076917], [25.0, 439.6428571428571], [26.0, 297.7142857142857], [27.0, 470.6363636363637], [28.0, 369.1176470588235], [29.0, 405.22222222222223], [30.0, 463.0], [31.0, 333.46153846153845], [32.0, 495.33333333333337], [33.0, 343.125], [34.0, 320.375], [35.0, 479.0], [36.0, 363.5333333333333], [37.0, 401.7777777777777], [38.0, 487.11764705882354], [39.0, 393.93333333333334], [40.0, 403.22222222222223], [41.0, 522.1176470588235], [42.0, 431.7692307692308], [43.0, 407.46153846153845], [44.0, 451.75], [45.0, 412.5], [46.0, 423.4666666666667], [47.0, 379.54545454545456], [48.0, 488.19999999999993], [49.0, 386.31249999999994], [50.0, 342.81195308136256], [1.0, 297.6666666666667]], "isOverall": false, "label": "cpu\/1\/spring\/mvc", "isController": false}, {"data": [[47.49966711051927, 347.1632822902797]], "isOverall": false, "label": "cpu\/1\/spring\/mvc-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 464.0, "minX": 1.62599286E12, "maxY": 5226.666666666667, "series": [{"data": [[1.62599292E12, 5226.666666666667], [1.6259931E12, 5120.0], [1.62599304E12, 5120.0], [1.62599316E12, 4364.8], [1.62599286E12, 682.6666666666666], [1.62599298E12, 5120.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62599292E12, 3552.5], [1.6259931E12, 3480.0], [1.62599304E12, 3480.0], [1.62599316E12, 2966.7], [1.62599286E12, 464.0], [1.62599298E12, 3480.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599316E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 324.40000000000003, "minX": 1.62599286E12, "maxY": 366.8163265306125, "series": [{"data": [[1.62599292E12, 366.8163265306125], [1.6259931E12, 343.0266666666668], [1.62599304E12, 341.9708333333338], [1.62599316E12, 343.60801564027315], [1.62599286E12, 324.40000000000003], [1.62599298E12, 342.4958333333336]], "isOverall": false, "label": "cpu\/1\/spring\/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599316E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 323.2812499999999, "minX": 1.62599286E12, "maxY": 365.3771428571429, "series": [{"data": [[1.62599292E12, 365.3771428571429], [1.6259931E12, 341.8466666666664], [1.62599304E12, 340.7366666666674], [1.62599316E12, 342.39198435972605], [1.62599286E12, 323.2812499999999], [1.62599298E12, 341.33666666666676]], "isOverall": false, "label": "cpu\/1\/spring\/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599316E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 39.26249999999999, "minX": 1.62599286E12, "maxY": 39.458333333333336, "series": [{"data": [[1.62599292E12, 39.421224489795954], [1.6259931E12, 39.458333333333336], [1.62599304E12, 39.428333333333306], [1.62599316E12, 39.43695014662759], [1.62599286E12, 39.26249999999999], [1.62599298E12, 39.457499999999996]], "isOverall": false, "label": "cpu\/1\/spring\/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599316E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 252.0, "minX": 1.62599286E12, "maxY": 634.0, "series": [{"data": [[1.62599292E12, 634.0], [1.6259931E12, 554.0], [1.62599304E12, 535.0], [1.62599316E12, 575.0], [1.62599286E12, 607.0], [1.62599298E12, 540.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62599292E12, 255.0], [1.6259931E12, 255.0], [1.62599304E12, 254.0], [1.62599316E12, 254.0], [1.62599286E12, 254.0], [1.62599298E12, 255.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62599292E12, 255.0], [1.6259931E12, 255.0], [1.62599304E12, 254.0], [1.62599316E12, 254.0], [1.62599286E12, 254.0], [1.62599298E12, 255.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62599292E12, 255.0], [1.6259931E12, 255.0], [1.62599304E12, 254.0], [1.62599316E12, 254.0], [1.62599286E12, 254.0], [1.62599298E12, 255.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62599292E12, 252.0], [1.6259931E12, 252.0], [1.62599304E12, 252.0], [1.62599316E12, 253.0], [1.62599286E12, 254.0], [1.62599298E12, 252.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62599292E12, 353.0], [1.6259931E12, 332.0], [1.62599304E12, 333.0], [1.62599316E12, 333.0], [1.62599286E12, 283.5], [1.62599298E12, 334.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599316E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 258.5, "minX": 1.0, "maxY": 442.0, "series": [{"data": [[12.0, 259.5], [13.0, 366.0], [14.0, 345.0], [15.0, 345.0], [1.0, 261.0], [16.0, 349.0], [17.0, 337.0], [18.0, 337.0], [19.0, 333.0], [20.0, 299.0], [5.0, 372.0], [21.0, 302.0], [22.0, 331.0], [23.0, 343.0], [6.0, 258.5], [24.0, 363.0], [25.0, 383.0], [26.0, 379.5], [27.0, 442.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 257.5, "minX": 1.0, "maxY": 441.0, "series": [{"data": [[12.0, 258.5], [13.0, 366.0], [14.0, 342.5], [15.0, 344.0], [1.0, 260.0], [16.0, 348.0], [17.0, 335.0], [18.0, 335.0], [19.0, 332.0], [20.0, 298.5], [5.0, 371.0], [21.0, 301.0], [22.0, 330.5], [23.0, 342.0], [6.0, 257.5], [24.0, 361.5], [25.0, 382.0], [26.0, 378.5], [27.0, 441.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.7666666666666666, "minX": 1.62599286E12, "maxY": 20.433333333333334, "series": [{"data": [[1.62599292E12, 20.433333333333334], [1.6259931E12, 20.0], [1.62599304E12, 20.0], [1.62599316E12, 16.933333333333334], [1.62599286E12, 2.7666666666666666], [1.62599298E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599316E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.62599286E12, "maxY": 20.416666666666668, "series": [{"data": [[1.62599292E12, 20.416666666666668], [1.6259931E12, 20.0], [1.62599304E12, 20.0], [1.62599316E12, 17.05], [1.62599286E12, 2.6666666666666665], [1.62599298E12, 20.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599316E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.62599286E12, "maxY": 20.416666666666668, "series": [{"data": [[1.62599292E12, 20.416666666666668], [1.6259931E12, 20.0], [1.62599304E12, 20.0], [1.62599316E12, 17.05], [1.62599286E12, 2.6666666666666665], [1.62599298E12, 20.0]], "isOverall": false, "label": "cpu\/1\/spring\/mvc-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599316E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.62599286E12, "maxY": 20.416666666666668, "series": [{"data": [[1.62599292E12, 20.416666666666668], [1.6259931E12, 20.0], [1.62599304E12, 20.0], [1.62599316E12, 17.05], [1.62599286E12, 2.6666666666666665], [1.62599298E12, 20.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599316E12, "title": "Total Transactions Per Second"}},
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

