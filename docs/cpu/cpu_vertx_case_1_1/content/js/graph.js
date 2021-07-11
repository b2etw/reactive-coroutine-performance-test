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
        data: {"result": {"minY": 252.0, "minX": 0.0, "maxY": 711.0, "series": [{"data": [[0.0, 252.0], [0.1, 252.0], [0.2, 253.0], [0.3, 253.0], [0.4, 253.0], [0.5, 254.0], [0.6, 254.0], [0.7, 254.0], [0.8, 254.0], [0.9, 254.0], [1.0, 254.0], [1.1, 254.0], [1.2, 255.0], [1.3, 255.0], [1.4, 255.0], [1.5, 255.0], [1.6, 255.0], [1.7, 255.0], [1.8, 255.0], [1.9, 255.0], [2.0, 256.0], [2.1, 256.0], [2.2, 256.0], [2.3, 256.0], [2.4, 256.0], [2.5, 256.0], [2.6, 256.0], [2.7, 256.0], [2.8, 256.0], [2.9, 256.0], [3.0, 256.0], [3.1, 256.0], [3.2, 257.0], [3.3, 257.0], [3.4, 257.0], [3.5, 257.0], [3.6, 257.0], [3.7, 257.0], [3.8, 257.0], [3.9, 257.0], [4.0, 257.0], [4.1, 257.0], [4.2, 258.0], [4.3, 258.0], [4.4, 258.0], [4.5, 258.0], [4.6, 258.0], [4.7, 258.0], [4.8, 258.0], [4.9, 258.0], [5.0, 258.0], [5.1, 258.0], [5.2, 258.0], [5.3, 258.0], [5.4, 259.0], [5.5, 259.0], [5.6, 259.0], [5.7, 259.0], [5.8, 259.0], [5.9, 259.0], [6.0, 259.0], [6.1, 259.0], [6.2, 259.0], [6.3, 259.0], [6.4, 259.0], [6.5, 259.0], [6.6, 259.0], [6.7, 259.0], [6.8, 260.0], [6.9, 260.0], [7.0, 260.0], [7.1, 260.0], [7.2, 260.0], [7.3, 260.0], [7.4, 260.0], [7.5, 260.0], [7.6, 260.0], [7.7, 260.0], [7.8, 260.0], [7.9, 260.0], [8.0, 260.0], [8.1, 260.0], [8.2, 260.0], [8.3, 260.0], [8.4, 261.0], [8.5, 261.0], [8.6, 261.0], [8.7, 261.0], [8.8, 261.0], [8.9, 261.0], [9.0, 261.0], [9.1, 261.0], [9.2, 261.0], [9.3, 261.0], [9.4, 261.0], [9.5, 261.0], [9.6, 261.0], [9.7, 261.0], [9.8, 262.0], [9.9, 262.0], [10.0, 262.0], [10.1, 262.0], [10.2, 262.0], [10.3, 262.0], [10.4, 262.0], [10.5, 262.0], [10.6, 262.0], [10.7, 262.0], [10.8, 262.0], [10.9, 262.0], [11.0, 262.0], [11.1, 263.0], [11.2, 263.0], [11.3, 263.0], [11.4, 263.0], [11.5, 263.0], [11.6, 263.0], [11.7, 264.0], [11.8, 264.0], [11.9, 264.0], [12.0, 264.0], [12.1, 264.0], [12.2, 265.0], [12.3, 265.0], [12.4, 265.0], [12.5, 266.0], [12.6, 266.0], [12.7, 266.0], [12.8, 266.0], [12.9, 266.0], [13.0, 266.0], [13.1, 267.0], [13.2, 267.0], [13.3, 267.0], [13.4, 268.0], [13.5, 268.0], [13.6, 268.0], [13.7, 269.0], [13.8, 269.0], [13.9, 269.0], [14.0, 269.0], [14.1, 269.0], [14.2, 270.0], [14.3, 270.0], [14.4, 270.0], [14.5, 270.0], [14.6, 271.0], [14.7, 271.0], [14.8, 271.0], [14.9, 271.0], [15.0, 271.0], [15.1, 272.0], [15.2, 272.0], [15.3, 272.0], [15.4, 272.0], [15.5, 272.0], [15.6, 273.0], [15.7, 273.0], [15.8, 273.0], [15.9, 274.0], [16.0, 274.0], [16.1, 274.0], [16.2, 274.0], [16.3, 274.0], [16.4, 275.0], [16.5, 275.0], [16.6, 275.0], [16.7, 276.0], [16.8, 276.0], [16.9, 276.0], [17.0, 276.0], [17.1, 277.0], [17.2, 277.0], [17.3, 277.0], [17.4, 278.0], [17.5, 278.0], [17.6, 278.0], [17.7, 279.0], [17.8, 279.0], [17.9, 279.0], [18.0, 279.0], [18.1, 279.0], [18.2, 280.0], [18.3, 280.0], [18.4, 280.0], [18.5, 280.0], [18.6, 281.0], [18.7, 281.0], [18.8, 281.0], [18.9, 281.0], [19.0, 281.0], [19.1, 281.0], [19.2, 282.0], [19.3, 282.0], [19.4, 282.0], [19.5, 283.0], [19.6, 283.0], [19.7, 283.0], [19.8, 284.0], [19.9, 284.0], [20.0, 284.0], [20.1, 284.0], [20.2, 285.0], [20.3, 285.0], [20.4, 285.0], [20.5, 285.0], [20.6, 285.0], [20.7, 286.0], [20.8, 286.0], [20.9, 286.0], [21.0, 287.0], [21.1, 287.0], [21.2, 287.0], [21.3, 287.0], [21.4, 288.0], [21.5, 288.0], [21.6, 288.0], [21.7, 288.0], [21.8, 288.0], [21.9, 289.0], [22.0, 289.0], [22.1, 289.0], [22.2, 289.0], [22.3, 289.0], [22.4, 290.0], [22.5, 290.0], [22.6, 290.0], [22.7, 290.0], [22.8, 291.0], [22.9, 291.0], [23.0, 291.0], [23.1, 291.0], [23.2, 291.0], [23.3, 292.0], [23.4, 292.0], [23.5, 292.0], [23.6, 292.0], [23.7, 292.0], [23.8, 292.0], [23.9, 293.0], [24.0, 293.0], [24.1, 293.0], [24.2, 293.0], [24.3, 293.0], [24.4, 294.0], [24.5, 294.0], [24.6, 294.0], [24.7, 294.0], [24.8, 294.0], [24.9, 294.0], [25.0, 294.0], [25.1, 295.0], [25.2, 295.0], [25.3, 295.0], [25.4, 295.0], [25.5, 295.0], [25.6, 296.0], [25.7, 296.0], [25.8, 296.0], [25.9, 296.0], [26.0, 296.0], [26.1, 296.0], [26.2, 296.0], [26.3, 297.0], [26.4, 297.0], [26.5, 297.0], [26.6, 297.0], [26.7, 297.0], [26.8, 297.0], [26.9, 298.0], [27.0, 298.0], [27.1, 298.0], [27.2, 298.0], [27.3, 298.0], [27.4, 299.0], [27.5, 299.0], [27.6, 299.0], [27.7, 299.0], [27.8, 299.0], [27.9, 299.0], [28.0, 300.0], [28.1, 300.0], [28.2, 300.0], [28.3, 300.0], [28.4, 301.0], [28.5, 301.0], [28.6, 301.0], [28.7, 301.0], [28.8, 302.0], [28.9, 302.0], [29.0, 302.0], [29.1, 302.0], [29.2, 302.0], [29.3, 302.0], [29.4, 303.0], [29.5, 303.0], [29.6, 303.0], [29.7, 303.0], [29.8, 304.0], [29.9, 304.0], [30.0, 304.0], [30.1, 304.0], [30.2, 304.0], [30.3, 305.0], [30.4, 305.0], [30.5, 305.0], [30.6, 305.0], [30.7, 305.0], [30.8, 305.0], [30.9, 306.0], [31.0, 306.0], [31.1, 306.0], [31.2, 306.0], [31.3, 306.0], [31.4, 306.0], [31.5, 307.0], [31.6, 307.0], [31.7, 307.0], [31.8, 307.0], [31.9, 307.0], [32.0, 308.0], [32.1, 308.0], [32.2, 308.0], [32.3, 308.0], [32.4, 309.0], [32.5, 309.0], [32.6, 309.0], [32.7, 309.0], [32.8, 310.0], [32.9, 310.0], [33.0, 310.0], [33.1, 310.0], [33.2, 310.0], [33.3, 310.0], [33.4, 310.0], [33.5, 311.0], [33.6, 311.0], [33.7, 311.0], [33.8, 311.0], [33.9, 311.0], [34.0, 311.0], [34.1, 312.0], [34.2, 312.0], [34.3, 312.0], [34.4, 312.0], [34.5, 312.0], [34.6, 313.0], [34.7, 313.0], [34.8, 313.0], [34.9, 313.0], [35.0, 314.0], [35.1, 314.0], [35.2, 314.0], [35.3, 314.0], [35.4, 314.0], [35.5, 314.0], [35.6, 315.0], [35.7, 315.0], [35.8, 315.0], [35.9, 315.0], [36.0, 315.0], [36.1, 316.0], [36.2, 316.0], [36.3, 316.0], [36.4, 316.0], [36.5, 316.0], [36.6, 316.0], [36.7, 316.0], [36.8, 317.0], [36.9, 317.0], [37.0, 317.0], [37.1, 318.0], [37.2, 318.0], [37.3, 318.0], [37.4, 318.0], [37.5, 318.0], [37.6, 318.0], [37.7, 319.0], [37.8, 319.0], [37.9, 319.0], [38.0, 319.0], [38.1, 320.0], [38.2, 320.0], [38.3, 320.0], [38.4, 320.0], [38.5, 320.0], [38.6, 320.0], [38.7, 320.0], [38.8, 321.0], [38.9, 321.0], [39.0, 321.0], [39.1, 321.0], [39.2, 321.0], [39.3, 321.0], [39.4, 322.0], [39.5, 322.0], [39.6, 322.0], [39.7, 322.0], [39.8, 322.0], [39.9, 323.0], [40.0, 323.0], [40.1, 323.0], [40.2, 323.0], [40.3, 323.0], [40.4, 324.0], [40.5, 324.0], [40.6, 324.0], [40.7, 324.0], [40.8, 324.0], [40.9, 324.0], [41.0, 325.0], [41.1, 325.0], [41.2, 325.0], [41.3, 325.0], [41.4, 325.0], [41.5, 326.0], [41.6, 326.0], [41.7, 326.0], [41.8, 326.0], [41.9, 326.0], [42.0, 326.0], [42.1, 327.0], [42.2, 327.0], [42.3, 327.0], [42.4, 327.0], [42.5, 328.0], [42.6, 328.0], [42.7, 328.0], [42.8, 328.0], [42.9, 328.0], [43.0, 328.0], [43.1, 329.0], [43.2, 329.0], [43.3, 329.0], [43.4, 329.0], [43.5, 329.0], [43.6, 330.0], [43.7, 330.0], [43.8, 330.0], [43.9, 330.0], [44.0, 331.0], [44.1, 331.0], [44.2, 331.0], [44.3, 331.0], [44.4, 331.0], [44.5, 331.0], [44.6, 332.0], [44.7, 332.0], [44.8, 332.0], [44.9, 332.0], [45.0, 333.0], [45.1, 333.0], [45.2, 333.0], [45.3, 333.0], [45.4, 334.0], [45.5, 334.0], [45.6, 334.0], [45.7, 335.0], [45.8, 335.0], [45.9, 335.0], [46.0, 335.0], [46.1, 335.0], [46.2, 336.0], [46.3, 336.0], [46.4, 336.0], [46.5, 336.0], [46.6, 336.0], [46.7, 336.0], [46.8, 337.0], [46.9, 337.0], [47.0, 337.0], [47.1, 337.0], [47.2, 337.0], [47.3, 338.0], [47.4, 338.0], [47.5, 338.0], [47.6, 338.0], [47.7, 338.0], [47.8, 339.0], [47.9, 339.0], [48.0, 339.0], [48.1, 339.0], [48.2, 339.0], [48.3, 339.0], [48.4, 340.0], [48.5, 340.0], [48.6, 340.0], [48.7, 340.0], [48.8, 340.0], [48.9, 341.0], [49.0, 341.0], [49.1, 341.0], [49.2, 341.0], [49.3, 341.0], [49.4, 341.0], [49.5, 341.0], [49.6, 342.0], [49.7, 342.0], [49.8, 342.0], [49.9, 342.0], [50.0, 342.0], [50.1, 343.0], [50.2, 343.0], [50.3, 343.0], [50.4, 343.0], [50.5, 343.0], [50.6, 343.0], [50.7, 344.0], [50.8, 344.0], [50.9, 344.0], [51.0, 344.0], [51.1, 344.0], [51.2, 344.0], [51.3, 344.0], [51.4, 345.0], [51.5, 345.0], [51.6, 345.0], [51.7, 345.0], [51.8, 345.0], [51.9, 346.0], [52.0, 346.0], [52.1, 346.0], [52.2, 346.0], [52.3, 346.0], [52.4, 346.0], [52.5, 347.0], [52.6, 347.0], [52.7, 347.0], [52.8, 347.0], [52.9, 347.0], [53.0, 348.0], [53.1, 348.0], [53.2, 348.0], [53.3, 348.0], [53.4, 348.0], [53.5, 349.0], [53.6, 349.0], [53.7, 349.0], [53.8, 349.0], [53.9, 349.0], [54.0, 349.0], [54.1, 350.0], [54.2, 350.0], [54.3, 350.0], [54.4, 350.0], [54.5, 350.0], [54.6, 350.0], [54.7, 351.0], [54.8, 351.0], [54.9, 351.0], [55.0, 351.0], [55.1, 352.0], [55.2, 352.0], [55.3, 352.0], [55.4, 352.0], [55.5, 352.0], [55.6, 352.0], [55.7, 353.0], [55.8, 353.0], [55.9, 353.0], [56.0, 353.0], [56.1, 353.0], [56.2, 353.0], [56.3, 354.0], [56.4, 354.0], [56.5, 354.0], [56.6, 354.0], [56.7, 354.0], [56.8, 354.0], [56.9, 355.0], [57.0, 355.0], [57.1, 355.0], [57.2, 355.0], [57.3, 356.0], [57.4, 356.0], [57.5, 356.0], [57.6, 356.0], [57.7, 356.0], [57.8, 356.0], [57.9, 357.0], [58.0, 357.0], [58.1, 357.0], [58.2, 357.0], [58.3, 357.0], [58.4, 358.0], [58.5, 358.0], [58.6, 358.0], [58.7, 358.0], [58.8, 358.0], [58.9, 358.0], [59.0, 358.0], [59.1, 359.0], [59.2, 359.0], [59.3, 359.0], [59.4, 359.0], [59.5, 359.0], [59.6, 360.0], [59.7, 360.0], [59.8, 360.0], [59.9, 360.0], [60.0, 360.0], [60.1, 361.0], [60.2, 361.0], [60.3, 361.0], [60.4, 361.0], [60.5, 362.0], [60.6, 362.0], [60.7, 362.0], [60.8, 362.0], [60.9, 362.0], [61.0, 363.0], [61.1, 363.0], [61.2, 363.0], [61.3, 363.0], [61.4, 363.0], [61.5, 364.0], [61.6, 364.0], [61.7, 364.0], [61.8, 364.0], [61.9, 365.0], [62.0, 365.0], [62.1, 365.0], [62.2, 365.0], [62.3, 365.0], [62.4, 366.0], [62.5, 366.0], [62.6, 366.0], [62.7, 366.0], [62.8, 366.0], [62.9, 367.0], [63.0, 367.0], [63.1, 367.0], [63.2, 367.0], [63.3, 367.0], [63.4, 368.0], [63.5, 368.0], [63.6, 368.0], [63.7, 368.0], [63.8, 369.0], [63.9, 369.0], [64.0, 369.0], [64.1, 369.0], [64.2, 370.0], [64.3, 370.0], [64.4, 370.0], [64.5, 370.0], [64.6, 371.0], [64.7, 371.0], [64.8, 372.0], [64.9, 372.0], [65.0, 372.0], [65.1, 372.0], [65.2, 373.0], [65.3, 373.0], [65.4, 373.0], [65.5, 373.0], [65.6, 374.0], [65.7, 374.0], [65.8, 374.0], [65.9, 374.0], [66.0, 374.0], [66.1, 375.0], [66.2, 375.0], [66.3, 375.0], [66.4, 376.0], [66.5, 376.0], [66.6, 376.0], [66.7, 377.0], [66.8, 377.0], [66.9, 377.0], [67.0, 377.0], [67.1, 378.0], [67.2, 378.0], [67.3, 378.0], [67.4, 378.0], [67.5, 379.0], [67.6, 379.0], [67.7, 379.0], [67.8, 380.0], [67.9, 380.0], [68.0, 380.0], [68.1, 381.0], [68.2, 381.0], [68.3, 381.0], [68.4, 381.0], [68.5, 382.0], [68.6, 382.0], [68.7, 382.0], [68.8, 383.0], [68.9, 383.0], [69.0, 383.0], [69.1, 384.0], [69.2, 384.0], [69.3, 384.0], [69.4, 384.0], [69.5, 385.0], [69.6, 385.0], [69.7, 385.0], [69.8, 385.0], [69.9, 386.0], [70.0, 386.0], [70.1, 386.0], [70.2, 387.0], [70.3, 387.0], [70.4, 387.0], [70.5, 388.0], [70.6, 388.0], [70.7, 388.0], [70.8, 388.0], [70.9, 388.0], [71.0, 389.0], [71.1, 389.0], [71.2, 390.0], [71.3, 390.0], [71.4, 390.0], [71.5, 391.0], [71.6, 391.0], [71.7, 391.0], [71.8, 392.0], [71.9, 392.0], [72.0, 392.0], [72.1, 393.0], [72.2, 393.0], [72.3, 393.0], [72.4, 394.0], [72.5, 394.0], [72.6, 394.0], [72.7, 395.0], [72.8, 395.0], [72.9, 395.0], [73.0, 396.0], [73.1, 396.0], [73.2, 396.0], [73.3, 396.0], [73.4, 396.0], [73.5, 397.0], [73.6, 397.0], [73.7, 397.0], [73.8, 397.0], [73.9, 398.0], [74.0, 398.0], [74.1, 398.0], [74.2, 398.0], [74.3, 398.0], [74.4, 399.0], [74.5, 399.0], [74.6, 399.0], [74.7, 400.0], [74.8, 400.0], [74.9, 400.0], [75.0, 400.0], [75.1, 401.0], [75.2, 401.0], [75.3, 401.0], [75.4, 402.0], [75.5, 402.0], [75.6, 402.0], [75.7, 403.0], [75.8, 403.0], [75.9, 403.0], [76.0, 404.0], [76.1, 404.0], [76.2, 404.0], [76.3, 404.0], [76.4, 405.0], [76.5, 405.0], [76.6, 405.0], [76.7, 406.0], [76.8, 406.0], [76.9, 406.0], [77.0, 406.0], [77.1, 407.0], [77.2, 408.0], [77.3, 408.0], [77.4, 408.0], [77.5, 408.0], [77.6, 409.0], [77.7, 409.0], [77.8, 409.0], [77.9, 410.0], [78.0, 410.0], [78.1, 410.0], [78.2, 410.0], [78.3, 411.0], [78.4, 411.0], [78.5, 411.0], [78.6, 412.0], [78.7, 412.0], [78.8, 412.0], [78.9, 412.0], [79.0, 413.0], [79.1, 413.0], [79.2, 413.0], [79.3, 414.0], [79.4, 414.0], [79.5, 414.0], [79.6, 414.0], [79.7, 415.0], [79.8, 415.0], [79.9, 415.0], [80.0, 416.0], [80.1, 416.0], [80.2, 416.0], [80.3, 417.0], [80.4, 417.0], [80.5, 418.0], [80.6, 418.0], [80.7, 419.0], [80.8, 419.0], [80.9, 420.0], [81.0, 420.0], [81.1, 421.0], [81.2, 421.0], [81.3, 422.0], [81.4, 422.0], [81.5, 423.0], [81.6, 423.0], [81.7, 424.0], [81.8, 424.0], [81.9, 424.0], [82.0, 425.0], [82.1, 425.0], [82.2, 426.0], [82.3, 426.0], [82.4, 426.0], [82.5, 427.0], [82.6, 428.0], [82.7, 428.0], [82.8, 429.0], [82.9, 429.0], [83.0, 429.0], [83.1, 430.0], [83.2, 430.0], [83.3, 430.0], [83.4, 431.0], [83.5, 431.0], [83.6, 432.0], [83.7, 432.0], [83.8, 433.0], [83.9, 433.0], [84.0, 434.0], [84.1, 434.0], [84.2, 434.0], [84.3, 435.0], [84.4, 435.0], [84.5, 435.0], [84.6, 436.0], [84.7, 436.0], [84.8, 437.0], [84.9, 437.0], [85.0, 437.0], [85.1, 438.0], [85.2, 438.0], [85.3, 438.0], [85.4, 439.0], [85.5, 439.0], [85.6, 440.0], [85.7, 441.0], [85.8, 441.0], [85.9, 441.0], [86.0, 442.0], [86.1, 442.0], [86.2, 443.0], [86.3, 444.0], [86.4, 445.0], [86.5, 445.0], [86.6, 445.0], [86.7, 446.0], [86.8, 446.0], [86.9, 446.0], [87.0, 447.0], [87.1, 447.0], [87.2, 448.0], [87.3, 448.0], [87.4, 448.0], [87.5, 449.0], [87.6, 449.0], [87.7, 450.0], [87.8, 450.0], [87.9, 451.0], [88.0, 451.0], [88.1, 452.0], [88.2, 452.0], [88.3, 454.0], [88.4, 454.0], [88.5, 455.0], [88.6, 456.0], [88.7, 456.0], [88.8, 457.0], [88.9, 458.0], [89.0, 458.0], [89.1, 459.0], [89.2, 460.0], [89.3, 461.0], [89.4, 462.0], [89.5, 462.0], [89.6, 463.0], [89.7, 463.0], [89.8, 464.0], [89.9, 465.0], [90.0, 465.0], [90.1, 466.0], [90.2, 466.0], [90.3, 467.0], [90.4, 467.0], [90.5, 468.0], [90.6, 468.0], [90.7, 469.0], [90.8, 469.0], [90.9, 471.0], [91.0, 471.0], [91.1, 472.0], [91.2, 473.0], [91.3, 473.0], [91.4, 474.0], [91.5, 474.0], [91.6, 475.0], [91.7, 475.0], [91.8, 476.0], [91.9, 476.0], [92.0, 476.0], [92.1, 477.0], [92.2, 478.0], [92.3, 478.0], [92.4, 479.0], [92.5, 480.0], [92.6, 481.0], [92.7, 481.0], [92.8, 482.0], [92.9, 482.0], [93.0, 484.0], [93.1, 484.0], [93.2, 485.0], [93.3, 486.0], [93.4, 487.0], [93.5, 488.0], [93.6, 489.0], [93.7, 489.0], [93.8, 490.0], [93.9, 491.0], [94.0, 492.0], [94.1, 493.0], [94.2, 493.0], [94.3, 494.0], [94.4, 495.0], [94.5, 497.0], [94.6, 497.0], [94.7, 498.0], [94.8, 499.0], [94.9, 500.0], [95.0, 501.0], [95.1, 502.0], [95.2, 503.0], [95.3, 504.0], [95.4, 505.0], [95.5, 506.0], [95.6, 507.0], [95.7, 508.0], [95.8, 509.0], [95.9, 509.0], [96.0, 510.0], [96.1, 511.0], [96.2, 512.0], [96.3, 513.0], [96.4, 515.0], [96.5, 515.0], [96.6, 517.0], [96.7, 518.0], [96.8, 519.0], [96.9, 521.0], [97.0, 522.0], [97.1, 524.0], [97.2, 524.0], [97.3, 525.0], [97.4, 527.0], [97.5, 529.0], [97.6, 532.0], [97.7, 534.0], [97.8, 535.0], [97.9, 537.0], [98.0, 539.0], [98.1, 540.0], [98.2, 541.0], [98.3, 543.0], [98.4, 545.0], [98.5, 547.0], [98.6, 549.0], [98.7, 553.0], [98.8, 555.0], [98.9, 558.0], [99.0, 560.0], [99.1, 563.0], [99.2, 567.0], [99.3, 571.0], [99.4, 584.0], [99.5, 599.0], [99.6, 606.0], [99.7, 619.0], [99.8, 635.0], [99.9, 656.0], [100.0, 711.0]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 2807.0, "series": [{"data": [[300.0, 2807.0], [600.0, 29.0], [700.0, 1.0], [200.0, 1677.0], [400.0, 1213.0], [500.0, 281.0]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 302.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5706.0, "series": [{"data": [[0.0, 5706.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 302.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 16.270516717325226, "minX": 1.62599514E12, "maxY": 50.0, "series": [{"data": [[1.62599514E12, 16.270516717325226], [1.62599544E12, 48.54598370197906], [1.62599532E12, 50.0], [1.6259952E12, 47.81721311475413], [1.62599538E12, 50.0], [1.62599526E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599544E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 273.375, "minX": 1.0, "maxY": 541.8823529411765, "series": [{"data": [[2.0, 294.2], [3.0, 273.375], [4.0, 277.6666666666667], [5.0, 274.1666666666667], [6.0, 276.84615384615387], [7.0, 277.1538461538462], [8.0, 281.7692307692307], [9.0, 275.15384615384613], [10.0, 276.7142857142857], [11.0, 290.76923076923083], [12.0, 324.8461538461538], [13.0, 377.21428571428567], [14.0, 427.6666666666667], [15.0, 392.2727272727273], [16.0, 404.80000000000007], [17.0, 407.7857142857143], [18.0, 368.5333333333334], [19.0, 308.4545454545455], [20.0, 404.3333333333333], [21.0, 345.8333333333333], [22.0, 382.6875], [23.0, 446.45454545454544], [24.0, 359.93749999999994], [25.0, 462.69230769230774], [26.0, 370.2], [27.0, 466.66666666666674], [28.0, 405.5], [29.0, 394.875], [30.0, 500.4117647058824], [31.0, 415.14285714285717], [32.0, 491.4285714285714], [33.0, 411.93750000000006], [34.0, 348.1], [35.0, 458.83333333333326], [36.0, 419.53333333333336], [37.0, 288.4285714285714], [38.0, 541.8823529411765], [39.0, 513.8461538461538], [40.0, 427.30769230769226], [41.0, 524.6428571428571], [42.0, 444.5882352941176], [43.0, 414.87499999999994], [44.0, 456.41666666666663], [45.0, 448.0666666666666], [46.0, 465.875], [47.0, 335.4], [48.0, 449.9333333333333], [49.0, 388.6428571428571], [50.0, 349.6068503350706], [1.0, 308.0]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx", "isController": false}, {"data": [[47.50183089214376, 354.4017976031957]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 844.4333333333333, "minX": 1.62599514E12, "maxY": 3639.6666666666665, "series": [{"data": [[1.62599514E12, 844.4333333333333], [1.62599544E12, 2204.766666666667], [1.62599532E12, 3080.0], [1.6259952E12, 3131.3333333333335], [1.62599538E12, 3080.0], [1.62599526E12, 3080.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62599514E12, 981.5166666666667], [1.62599544E12, 2562.6833333333334], [1.62599532E12, 3580.0], [1.6259952E12, 3639.6666666666665], [1.62599538E12, 3580.0], [1.62599526E12, 3580.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599544E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 348.311666666666, "minX": 1.62599514E12, "maxY": 372.97459016393424, "series": [{"data": [[1.62599514E12, 356.8814589665651], [1.62599544E12, 348.94179278230524], [1.62599532E12, 348.311666666666], [1.6259952E12, 372.97459016393424], [1.62599538E12, 349.25833333333276], [1.62599526E12, 349.9816666666667]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599544E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 348.309166666666, "minX": 1.62599514E12, "maxY": 372.9721311475412, "series": [{"data": [[1.62599514E12, 356.8784194528875], [1.62599544E12, 348.9383003492437], [1.62599532E12, 348.309166666666], [1.6259952E12, 372.9721311475412], [1.62599538E12, 349.25249999999994], [1.62599526E12, 349.97499999999997]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599544E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 37.18666666666659, "minX": 1.62599514E12, "maxY": 37.27659574468084, "series": [{"data": [[1.62599514E12, 37.27659574468084], [1.62599544E12, 37.22700814901053], [1.62599532E12, 37.18666666666659], [1.6259952E12, 37.23524590163928], [1.62599538E12, 37.25083333333336], [1.62599526E12, 37.267500000000005]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599544E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 252.0, "minX": 1.62599514E12, "maxY": 711.0, "series": [{"data": [[1.62599514E12, 635.0], [1.62599544E12, 560.0], [1.62599532E12, 620.0], [1.6259952E12, 711.0], [1.62599538E12, 566.0], [1.62599526E12, 584.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62599514E12, 254.0], [1.62599544E12, 254.73999979496003], [1.62599532E12, 254.0], [1.6259952E12, 254.0], [1.62599538E12, 254.0], [1.62599526E12, 254.8089997136593]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62599514E12, 254.0], [1.62599544E12, 255.0], [1.62599532E12, 254.0], [1.6259952E12, 254.0], [1.62599538E12, 254.0], [1.62599526E12, 255.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62599514E12, 254.0], [1.62599544E12, 255.0], [1.62599532E12, 254.0], [1.6259952E12, 254.0], [1.62599538E12, 254.0], [1.62599526E12, 255.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62599514E12, 252.0], [1.62599544E12, 252.0], [1.62599532E12, 252.0], [1.6259952E12, 252.0], [1.62599538E12, 252.0], [1.62599526E12, 252.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62599514E12, 317.0], [1.62599544E12, 341.0], [1.62599532E12, 339.0], [1.6259952E12, 358.0], [1.62599538E12, 340.0], [1.62599526E12, 341.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599544E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 258.0, "minX": 1.0, "maxY": 513.0, "series": [{"data": [[1.0, 262.0], [8.0, 258.5], [17.0, 513.0], [18.0, 313.0], [19.0, 333.0], [20.0, 341.0], [21.0, 350.5], [22.0, 364.5], [23.0, 420.0], [24.0, 383.5], [25.0, 483.0], [13.0, 258.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 258.0, "minX": 1.0, "maxY": 513.0, "series": [{"data": [[1.0, 262.0], [8.0, 258.5], [17.0, 513.0], [18.0, 313.0], [19.0, 333.0], [20.0, 341.0], [21.0, 350.5], [22.0, 364.5], [23.0, 420.0], [24.0, 383.5], [25.0, 483.0], [13.0, 258.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.666666666666667, "minX": 1.62599514E12, "maxY": 20.25, "series": [{"data": [[1.62599514E12, 5.666666666666667], [1.62599544E12, 14.216666666666667], [1.62599532E12, 20.0], [1.6259952E12, 20.25], [1.62599538E12, 20.0], [1.62599526E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599544E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.483333333333333, "minX": 1.62599514E12, "maxY": 20.333333333333332, "series": [{"data": [[1.62599514E12, 5.483333333333333], [1.62599544E12, 14.316666666666666], [1.62599532E12, 20.0], [1.6259952E12, 20.333333333333332], [1.62599538E12, 20.0], [1.62599526E12, 20.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599544E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.483333333333333, "minX": 1.62599514E12, "maxY": 20.333333333333332, "series": [{"data": [[1.62599514E12, 5.483333333333333], [1.62599544E12, 14.316666666666666], [1.62599532E12, 20.0], [1.6259952E12, 20.333333333333332], [1.62599538E12, 20.0], [1.62599526E12, 20.0]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599544E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.483333333333333, "minX": 1.62599514E12, "maxY": 20.333333333333332, "series": [{"data": [[1.62599514E12, 5.483333333333333], [1.62599544E12, 14.316666666666666], [1.62599532E12, 20.0], [1.6259952E12, 20.333333333333332], [1.62599538E12, 20.0], [1.62599526E12, 20.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599544E12, "title": "Total Transactions Per Second"}},
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

