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
        data: {"result": {"minY": 248.0, "minX": 0.0, "maxY": 955.0, "series": [{"data": [[0.0, 248.0], [0.1, 249.0], [0.2, 249.0], [0.3, 249.0], [0.4, 250.0], [0.5, 250.0], [0.6, 250.0], [0.7, 250.0], [0.8, 251.0], [0.9, 251.0], [1.0, 251.0], [1.1, 251.0], [1.2, 251.0], [1.3, 251.0], [1.4, 251.0], [1.5, 251.0], [1.6, 251.0], [1.7, 251.0], [1.8, 251.0], [1.9, 252.0], [2.0, 252.0], [2.1, 252.0], [2.2, 252.0], [2.3, 252.0], [2.4, 252.0], [2.5, 252.0], [2.6, 252.0], [2.7, 252.0], [2.8, 252.0], [2.9, 252.0], [3.0, 252.0], [3.1, 252.0], [3.2, 252.0], [3.3, 253.0], [3.4, 253.0], [3.5, 253.0], [3.6, 253.0], [3.7, 253.0], [3.8, 253.0], [3.9, 253.0], [4.0, 253.0], [4.1, 253.0], [4.2, 253.0], [4.3, 253.0], [4.4, 253.0], [4.5, 253.0], [4.6, 253.0], [4.7, 253.0], [4.8, 253.0], [4.9, 253.0], [5.0, 253.0], [5.1, 253.0], [5.2, 254.0], [5.3, 254.0], [5.4, 254.0], [5.5, 254.0], [5.6, 254.0], [5.7, 254.0], [5.8, 254.0], [5.9, 254.0], [6.0, 254.0], [6.1, 254.0], [6.2, 254.0], [6.3, 254.0], [6.4, 254.0], [6.5, 254.0], [6.6, 254.0], [6.7, 254.0], [6.8, 254.0], [6.9, 254.0], [7.0, 254.0], [7.1, 254.0], [7.2, 254.0], [7.3, 255.0], [7.4, 255.0], [7.5, 255.0], [7.6, 255.0], [7.7, 255.0], [7.8, 255.0], [7.9, 255.0], [8.0, 255.0], [8.1, 255.0], [8.2, 255.0], [8.3, 255.0], [8.4, 255.0], [8.5, 255.0], [8.6, 255.0], [8.7, 255.0], [8.8, 255.0], [8.9, 255.0], [9.0, 255.0], [9.1, 255.0], [9.2, 255.0], [9.3, 255.0], [9.4, 256.0], [9.5, 256.0], [9.6, 256.0], [9.7, 256.0], [9.8, 256.0], [9.9, 256.0], [10.0, 256.0], [10.1, 256.0], [10.2, 256.0], [10.3, 256.0], [10.4, 256.0], [10.5, 256.0], [10.6, 256.0], [10.7, 256.0], [10.8, 256.0], [10.9, 256.0], [11.0, 256.0], [11.1, 256.0], [11.2, 257.0], [11.3, 257.0], [11.4, 257.0], [11.5, 257.0], [11.6, 257.0], [11.7, 257.0], [11.8, 257.0], [11.9, 257.0], [12.0, 257.0], [12.1, 257.0], [12.2, 257.0], [12.3, 257.0], [12.4, 258.0], [12.5, 258.0], [12.6, 258.0], [12.7, 258.0], [12.8, 258.0], [12.9, 258.0], [13.0, 258.0], [13.1, 258.0], [13.2, 258.0], [13.3, 258.0], [13.4, 259.0], [13.5, 259.0], [13.6, 259.0], [13.7, 259.0], [13.8, 260.0], [13.9, 260.0], [14.0, 260.0], [14.1, 261.0], [14.2, 261.0], [14.3, 261.0], [14.4, 262.0], [14.5, 262.0], [14.6, 262.0], [14.7, 262.0], [14.8, 263.0], [14.9, 263.0], [15.0, 263.0], [15.1, 264.0], [15.2, 264.0], [15.3, 264.0], [15.4, 264.0], [15.5, 264.0], [15.6, 265.0], [15.7, 265.0], [15.8, 265.0], [15.9, 265.0], [16.0, 265.0], [16.1, 266.0], [16.2, 266.0], [16.3, 266.0], [16.4, 266.0], [16.5, 267.0], [16.6, 267.0], [16.7, 267.0], [16.8, 267.0], [16.9, 268.0], [17.0, 268.0], [17.1, 268.0], [17.2, 268.0], [17.3, 268.0], [17.4, 269.0], [17.5, 269.0], [17.6, 269.0], [17.7, 269.0], [17.8, 270.0], [17.9, 270.0], [18.0, 270.0], [18.1, 270.0], [18.2, 271.0], [18.3, 271.0], [18.4, 271.0], [18.5, 272.0], [18.6, 272.0], [18.7, 272.0], [18.8, 273.0], [18.9, 273.0], [19.0, 273.0], [19.1, 274.0], [19.2, 274.0], [19.3, 275.0], [19.4, 275.0], [19.5, 275.0], [19.6, 275.0], [19.7, 276.0], [19.8, 276.0], [19.9, 276.0], [20.0, 276.0], [20.1, 276.0], [20.2, 277.0], [20.3, 277.0], [20.4, 277.0], [20.5, 277.0], [20.6, 278.0], [20.7, 278.0], [20.8, 278.0], [20.9, 278.0], [21.0, 279.0], [21.1, 279.0], [21.2, 280.0], [21.3, 280.0], [21.4, 280.0], [21.5, 280.0], [21.6, 281.0], [21.7, 281.0], [21.8, 281.0], [21.9, 281.0], [22.0, 282.0], [22.1, 282.0], [22.2, 282.0], [22.3, 283.0], [22.4, 283.0], [22.5, 283.0], [22.6, 283.0], [22.7, 284.0], [22.8, 284.0], [22.9, 284.0], [23.0, 284.0], [23.1, 284.0], [23.2, 285.0], [23.3, 285.0], [23.4, 286.0], [23.5, 286.0], [23.6, 286.0], [23.7, 287.0], [23.8, 287.0], [23.9, 287.0], [24.0, 287.0], [24.1, 288.0], [24.2, 288.0], [24.3, 288.0], [24.4, 288.0], [24.5, 289.0], [24.6, 289.0], [24.7, 289.0], [24.8, 289.0], [24.9, 289.0], [25.0, 289.0], [25.1, 290.0], [25.2, 290.0], [25.3, 290.0], [25.4, 290.0], [25.5, 290.0], [25.6, 290.0], [25.7, 291.0], [25.8, 291.0], [25.9, 291.0], [26.0, 291.0], [26.1, 291.0], [26.2, 292.0], [26.3, 292.0], [26.4, 292.0], [26.5, 292.0], [26.6, 293.0], [26.7, 293.0], [26.8, 293.0], [26.9, 293.0], [27.0, 294.0], [27.1, 294.0], [27.2, 294.0], [27.3, 294.0], [27.4, 295.0], [27.5, 295.0], [27.6, 295.0], [27.7, 295.0], [27.8, 295.0], [27.9, 295.0], [28.0, 296.0], [28.1, 296.0], [28.2, 296.0], [28.3, 296.0], [28.4, 296.0], [28.5, 297.0], [28.6, 297.0], [28.7, 298.0], [28.8, 298.0], [28.9, 298.0], [29.0, 298.0], [29.1, 298.0], [29.2, 298.0], [29.3, 299.0], [29.4, 299.0], [29.5, 299.0], [29.6, 299.0], [29.7, 299.0], [29.8, 299.0], [29.9, 300.0], [30.0, 300.0], [30.1, 300.0], [30.2, 300.0], [30.3, 300.0], [30.4, 301.0], [30.5, 301.0], [30.6, 301.0], [30.7, 301.0], [30.8, 302.0], [30.9, 302.0], [31.0, 302.0], [31.1, 302.0], [31.2, 302.0], [31.3, 302.0], [31.4, 303.0], [31.5, 303.0], [31.6, 303.0], [31.7, 303.0], [31.8, 304.0], [31.9, 304.0], [32.0, 304.0], [32.1, 304.0], [32.2, 304.0], [32.3, 304.0], [32.4, 305.0], [32.5, 305.0], [32.6, 305.0], [32.7, 306.0], [32.8, 306.0], [32.9, 306.0], [33.0, 306.0], [33.1, 307.0], [33.2, 307.0], [33.3, 307.0], [33.4, 308.0], [33.5, 308.0], [33.6, 308.0], [33.7, 309.0], [33.8, 309.0], [33.9, 309.0], [34.0, 309.0], [34.1, 309.0], [34.2, 310.0], [34.3, 310.0], [34.4, 310.0], [34.5, 310.0], [34.6, 310.0], [34.7, 310.0], [34.8, 311.0], [34.9, 311.0], [35.0, 311.0], [35.1, 311.0], [35.2, 311.0], [35.3, 312.0], [35.4, 312.0], [35.5, 312.0], [35.6, 312.0], [35.7, 312.0], [35.8, 312.0], [35.9, 313.0], [36.0, 313.0], [36.1, 313.0], [36.2, 313.0], [36.3, 313.0], [36.4, 313.0], [36.5, 314.0], [36.6, 314.0], [36.7, 314.0], [36.8, 314.0], [36.9, 314.0], [37.0, 314.0], [37.1, 315.0], [37.2, 315.0], [37.3, 315.0], [37.4, 315.0], [37.5, 315.0], [37.6, 316.0], [37.7, 316.0], [37.8, 316.0], [37.9, 316.0], [38.0, 316.0], [38.1, 317.0], [38.2, 317.0], [38.3, 317.0], [38.4, 317.0], [38.5, 317.0], [38.6, 317.0], [38.7, 318.0], [38.8, 318.0], [38.9, 318.0], [39.0, 319.0], [39.1, 319.0], [39.2, 319.0], [39.3, 319.0], [39.4, 319.0], [39.5, 320.0], [39.6, 320.0], [39.7, 320.0], [39.8, 320.0], [39.9, 321.0], [40.0, 321.0], [40.1, 321.0], [40.2, 322.0], [40.3, 322.0], [40.4, 322.0], [40.5, 322.0], [40.6, 322.0], [40.7, 323.0], [40.8, 323.0], [40.9, 323.0], [41.0, 323.0], [41.1, 323.0], [41.2, 323.0], [41.3, 323.0], [41.4, 324.0], [41.5, 324.0], [41.6, 324.0], [41.7, 324.0], [41.8, 324.0], [41.9, 325.0], [42.0, 325.0], [42.1, 325.0], [42.2, 325.0], [42.3, 325.0], [42.4, 326.0], [42.5, 326.0], [42.6, 326.0], [42.7, 326.0], [42.8, 327.0], [42.9, 327.0], [43.0, 327.0], [43.1, 327.0], [43.2, 328.0], [43.3, 328.0], [43.4, 328.0], [43.5, 328.0], [43.6, 329.0], [43.7, 329.0], [43.8, 330.0], [43.9, 330.0], [44.0, 330.0], [44.1, 331.0], [44.2, 331.0], [44.3, 331.0], [44.4, 331.0], [44.5, 332.0], [44.6, 332.0], [44.7, 332.0], [44.8, 333.0], [44.9, 333.0], [45.0, 333.0], [45.1, 333.0], [45.2, 334.0], [45.3, 334.0], [45.4, 334.0], [45.5, 334.0], [45.6, 334.0], [45.7, 335.0], [45.8, 335.0], [45.9, 335.0], [46.0, 336.0], [46.1, 336.0], [46.2, 336.0], [46.3, 336.0], [46.4, 337.0], [46.5, 337.0], [46.6, 337.0], [46.7, 337.0], [46.8, 338.0], [46.9, 338.0], [47.0, 338.0], [47.1, 338.0], [47.2, 339.0], [47.3, 339.0], [47.4, 339.0], [47.5, 339.0], [47.6, 340.0], [47.7, 340.0], [47.8, 340.0], [47.9, 341.0], [48.0, 341.0], [48.1, 341.0], [48.2, 341.0], [48.3, 341.0], [48.4, 342.0], [48.5, 342.0], [48.6, 342.0], [48.7, 342.0], [48.8, 343.0], [48.9, 343.0], [49.0, 344.0], [49.1, 344.0], [49.2, 344.0], [49.3, 345.0], [49.4, 345.0], [49.5, 345.0], [49.6, 345.0], [49.7, 346.0], [49.8, 346.0], [49.9, 346.0], [50.0, 346.0], [50.1, 346.0], [50.2, 346.0], [50.3, 347.0], [50.4, 347.0], [50.5, 347.0], [50.6, 347.0], [50.7, 348.0], [50.8, 348.0], [50.9, 349.0], [51.0, 349.0], [51.1, 349.0], [51.2, 350.0], [51.3, 350.0], [51.4, 350.0], [51.5, 350.0], [51.6, 351.0], [51.7, 351.0], [51.8, 351.0], [51.9, 351.0], [52.0, 352.0], [52.1, 352.0], [52.2, 352.0], [52.3, 353.0], [52.4, 353.0], [52.5, 353.0], [52.6, 354.0], [52.7, 354.0], [52.8, 354.0], [52.9, 355.0], [53.0, 355.0], [53.1, 355.0], [53.2, 355.0], [53.3, 356.0], [53.4, 356.0], [53.5, 356.0], [53.6, 357.0], [53.7, 357.0], [53.8, 357.0], [53.9, 358.0], [54.0, 358.0], [54.1, 358.0], [54.2, 358.0], [54.3, 358.0], [54.4, 359.0], [54.5, 359.0], [54.6, 360.0], [54.7, 360.0], [54.8, 360.0], [54.9, 360.0], [55.0, 361.0], [55.1, 361.0], [55.2, 361.0], [55.3, 362.0], [55.4, 362.0], [55.5, 362.0], [55.6, 363.0], [55.7, 363.0], [55.8, 363.0], [55.9, 364.0], [56.0, 364.0], [56.1, 364.0], [56.2, 365.0], [56.3, 365.0], [56.4, 365.0], [56.5, 366.0], [56.6, 366.0], [56.7, 366.0], [56.8, 367.0], [56.9, 367.0], [57.0, 367.0], [57.1, 367.0], [57.2, 367.0], [57.3, 368.0], [57.4, 368.0], [57.5, 368.0], [57.6, 368.0], [57.7, 369.0], [57.8, 369.0], [57.9, 369.0], [58.0, 369.0], [58.1, 370.0], [58.2, 370.0], [58.3, 370.0], [58.4, 371.0], [58.5, 371.0], [58.6, 371.0], [58.7, 372.0], [58.8, 372.0], [58.9, 373.0], [59.0, 373.0], [59.1, 374.0], [59.2, 374.0], [59.3, 374.0], [59.4, 374.0], [59.5, 375.0], [59.6, 375.0], [59.7, 375.0], [59.8, 375.0], [59.9, 376.0], [60.0, 376.0], [60.1, 377.0], [60.2, 377.0], [60.3, 377.0], [60.4, 377.0], [60.5, 378.0], [60.6, 378.0], [60.7, 378.0], [60.8, 379.0], [60.9, 379.0], [61.0, 379.0], [61.1, 379.0], [61.2, 380.0], [61.3, 380.0], [61.4, 380.0], [61.5, 381.0], [61.6, 381.0], [61.7, 381.0], [61.8, 381.0], [61.9, 382.0], [62.0, 382.0], [62.1, 382.0], [62.2, 383.0], [62.3, 383.0], [62.4, 383.0], [62.5, 384.0], [62.6, 384.0], [62.7, 385.0], [62.8, 385.0], [62.9, 385.0], [63.0, 385.0], [63.1, 386.0], [63.2, 386.0], [63.3, 386.0], [63.4, 387.0], [63.5, 387.0], [63.6, 387.0], [63.7, 388.0], [63.8, 388.0], [63.9, 388.0], [64.0, 389.0], [64.1, 389.0], [64.2, 389.0], [64.3, 390.0], [64.4, 390.0], [64.5, 390.0], [64.6, 391.0], [64.7, 391.0], [64.8, 391.0], [64.9, 392.0], [65.0, 392.0], [65.1, 392.0], [65.2, 393.0], [65.3, 393.0], [65.4, 393.0], [65.5, 394.0], [65.6, 394.0], [65.7, 394.0], [65.8, 395.0], [65.9, 395.0], [66.0, 395.0], [66.1, 396.0], [66.2, 396.0], [66.3, 396.0], [66.4, 397.0], [66.5, 397.0], [66.6, 397.0], [66.7, 398.0], [66.8, 398.0], [66.9, 398.0], [67.0, 399.0], [67.1, 399.0], [67.2, 399.0], [67.3, 400.0], [67.4, 400.0], [67.5, 401.0], [67.6, 401.0], [67.7, 402.0], [67.8, 402.0], [67.9, 402.0], [68.0, 403.0], [68.1, 403.0], [68.2, 404.0], [68.3, 404.0], [68.4, 404.0], [68.5, 405.0], [68.6, 405.0], [68.7, 405.0], [68.8, 406.0], [68.9, 406.0], [69.0, 406.0], [69.1, 406.0], [69.2, 407.0], [69.3, 407.0], [69.4, 407.0], [69.5, 408.0], [69.6, 408.0], [69.7, 409.0], [69.8, 409.0], [69.9, 409.0], [70.0, 409.0], [70.1, 410.0], [70.2, 410.0], [70.3, 411.0], [70.4, 411.0], [70.5, 411.0], [70.6, 412.0], [70.7, 412.0], [70.8, 413.0], [70.9, 413.0], [71.0, 414.0], [71.1, 414.0], [71.2, 414.0], [71.3, 415.0], [71.4, 415.0], [71.5, 415.0], [71.6, 416.0], [71.7, 416.0], [71.8, 417.0], [71.9, 417.0], [72.0, 418.0], [72.1, 418.0], [72.2, 418.0], [72.3, 419.0], [72.4, 419.0], [72.5, 420.0], [72.6, 420.0], [72.7, 420.0], [72.8, 421.0], [72.9, 421.0], [73.0, 422.0], [73.1, 422.0], [73.2, 422.0], [73.3, 423.0], [73.4, 423.0], [73.5, 424.0], [73.6, 424.0], [73.7, 424.0], [73.8, 425.0], [73.9, 425.0], [74.0, 426.0], [74.1, 426.0], [74.2, 427.0], [74.3, 427.0], [74.4, 427.0], [74.5, 428.0], [74.6, 428.0], [74.7, 429.0], [74.8, 429.0], [74.9, 430.0], [75.0, 430.0], [75.1, 430.0], [75.2, 430.0], [75.3, 431.0], [75.4, 432.0], [75.5, 432.0], [75.6, 432.0], [75.7, 432.0], [75.8, 433.0], [75.9, 434.0], [76.0, 434.0], [76.1, 435.0], [76.2, 435.0], [76.3, 436.0], [76.4, 436.0], [76.5, 437.0], [76.6, 437.0], [76.7, 437.0], [76.8, 438.0], [76.9, 438.0], [77.0, 438.0], [77.1, 439.0], [77.2, 439.0], [77.3, 440.0], [77.4, 440.0], [77.5, 440.0], [77.6, 441.0], [77.7, 442.0], [77.8, 442.0], [77.9, 443.0], [78.0, 443.0], [78.1, 444.0], [78.2, 444.0], [78.3, 444.0], [78.4, 445.0], [78.5, 445.0], [78.6, 445.0], [78.7, 446.0], [78.8, 447.0], [78.9, 447.0], [79.0, 447.0], [79.1, 448.0], [79.2, 448.0], [79.3, 449.0], [79.4, 449.0], [79.5, 449.0], [79.6, 450.0], [79.7, 450.0], [79.8, 451.0], [79.9, 451.0], [80.0, 452.0], [80.1, 452.0], [80.2, 453.0], [80.3, 453.0], [80.4, 453.0], [80.5, 454.0], [80.6, 454.0], [80.7, 455.0], [80.8, 456.0], [80.9, 456.0], [81.0, 457.0], [81.1, 457.0], [81.2, 457.0], [81.3, 458.0], [81.4, 458.0], [81.5, 459.0], [81.6, 459.0], [81.7, 459.0], [81.8, 460.0], [81.9, 460.0], [82.0, 461.0], [82.1, 461.0], [82.2, 462.0], [82.3, 462.0], [82.4, 463.0], [82.5, 463.0], [82.6, 464.0], [82.7, 464.0], [82.8, 465.0], [82.9, 465.0], [83.0, 466.0], [83.1, 467.0], [83.2, 467.0], [83.3, 468.0], [83.4, 468.0], [83.5, 469.0], [83.6, 469.0], [83.7, 470.0], [83.8, 470.0], [83.9, 470.0], [84.0, 471.0], [84.1, 471.0], [84.2, 472.0], [84.3, 473.0], [84.4, 473.0], [84.5, 474.0], [84.6, 475.0], [84.7, 476.0], [84.8, 476.0], [84.9, 477.0], [85.0, 478.0], [85.1, 478.0], [85.2, 479.0], [85.3, 479.0], [85.4, 480.0], [85.5, 481.0], [85.6, 481.0], [85.7, 482.0], [85.8, 483.0], [85.9, 483.0], [86.0, 484.0], [86.1, 484.0], [86.2, 484.0], [86.3, 486.0], [86.4, 487.0], [86.5, 487.0], [86.6, 488.0], [86.7, 489.0], [86.8, 490.0], [86.9, 490.0], [87.0, 492.0], [87.1, 492.0], [87.2, 492.0], [87.3, 493.0], [87.4, 494.0], [87.5, 494.0], [87.6, 495.0], [87.7, 495.0], [87.8, 496.0], [87.9, 497.0], [88.0, 498.0], [88.1, 499.0], [88.2, 499.0], [88.3, 500.0], [88.4, 501.0], [88.5, 501.0], [88.6, 503.0], [88.7, 503.0], [88.8, 504.0], [88.9, 505.0], [89.0, 506.0], [89.1, 507.0], [89.2, 507.0], [89.3, 508.0], [89.4, 508.0], [89.5, 509.0], [89.6, 509.0], [89.7, 510.0], [89.8, 511.0], [89.9, 512.0], [90.0, 512.0], [90.1, 513.0], [90.2, 513.0], [90.3, 513.0], [90.4, 514.0], [90.5, 515.0], [90.6, 516.0], [90.7, 516.0], [90.8, 517.0], [90.9, 518.0], [91.0, 519.0], [91.1, 519.0], [91.2, 521.0], [91.3, 521.0], [91.4, 522.0], [91.5, 524.0], [91.6, 525.0], [91.7, 525.0], [91.8, 526.0], [91.9, 526.0], [92.0, 527.0], [92.1, 528.0], [92.2, 529.0], [92.3, 530.0], [92.4, 531.0], [92.5, 532.0], [92.6, 533.0], [92.7, 534.0], [92.8, 535.0], [92.9, 535.0], [93.0, 536.0], [93.1, 538.0], [93.2, 539.0], [93.3, 540.0], [93.4, 541.0], [93.5, 542.0], [93.6, 543.0], [93.7, 544.0], [93.8, 545.0], [93.9, 546.0], [94.0, 547.0], [94.1, 548.0], [94.2, 549.0], [94.3, 551.0], [94.4, 552.0], [94.5, 553.0], [94.6, 555.0], [94.7, 556.0], [94.8, 557.0], [94.9, 558.0], [95.0, 558.0], [95.1, 559.0], [95.2, 560.0], [95.3, 561.0], [95.4, 562.0], [95.5, 563.0], [95.6, 564.0], [95.7, 566.0], [95.8, 567.0], [95.9, 568.0], [96.0, 569.0], [96.1, 571.0], [96.2, 571.0], [96.3, 572.0], [96.4, 573.0], [96.5, 574.0], [96.6, 576.0], [96.7, 577.0], [96.8, 578.0], [96.9, 579.0], [97.0, 582.0], [97.1, 583.0], [97.2, 584.0], [97.3, 584.0], [97.4, 586.0], [97.5, 588.0], [97.6, 590.0], [97.7, 593.0], [97.8, 594.0], [97.9, 596.0], [98.0, 597.0], [98.1, 599.0], [98.2, 599.0], [98.3, 602.0], [98.4, 607.0], [98.5, 609.0], [98.6, 611.0], [98.7, 613.0], [98.8, 616.0], [98.9, 621.0], [99.0, 623.0], [99.1, 626.0], [99.2, 632.0], [99.3, 636.0], [99.4, 639.0], [99.5, 646.0], [99.6, 664.0], [99.7, 681.0], [99.8, 716.0], [99.9, 824.0]], "isOverall": false, "label": "cpu\/1\/spring\/flux", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 200.0, "maxY": 2246.0, "series": [{"data": [[300.0, 2246.0], [600.0, 92.0], [700.0, 6.0], [200.0, 1793.0], [400.0, 1261.0], [800.0, 6.0], [900.0, 2.0], [500.0, 603.0]], "isOverall": false, "label": "cpu\/1\/spring\/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 699.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5310.0, "series": [{"data": [[0.0, 5310.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 699.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 36.31243781094526, "minX": 1.6259943E12, "maxY": 50.0, "series": [{"data": [[1.62599448E12, 50.0], [1.62599454E12, 50.0], [1.62599436E12, 50.0], [1.62599442E12, 50.0], [1.6259943E12, 36.31243781094526], [1.6259946E12, 43.69607843137255]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259946E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 273.9166666666667, "minX": 1.0, "maxY": 740.0, "series": [{"data": [[2.0, 292.2], [3.0, 281.875], [4.0, 278.8], [5.0, 273.9166666666667], [6.0, 281.0], [7.0, 294.16666666666663], [8.0, 290.49999999999994], [9.0, 300.8666666666667], [10.0, 280.93333333333334], [11.0, 306.3333333333333], [12.0, 356.15384615384613], [13.0, 396.0], [14.0, 436.58333333333337], [15.0, 418.90000000000003], [16.0, 440.43749999999994], [17.0, 423.14285714285717], [18.0, 402.2142857142857], [19.0, 339.45454545454544], [20.0, 461.75], [21.0, 349.1818181818182], [22.0, 406.66666666666663], [23.0, 432.0], [24.0, 337.21428571428567], [25.0, 473.53846153846155], [26.0, 353.6666666666667], [27.0, 477.8181818181818], [28.0, 436.58823529411757], [29.0, 339.6], [30.0, 740.0], [31.0, 565.611111111111], [32.0, 539.9285714285716], [33.0, 503.42857142857133], [34.0, 387.5], [35.0, 523.375], [36.0, 444.6666666666667], [37.0, 326.125], [38.0, 517.5294117647057], [39.0, 478.6470588235294], [40.0, 317.3333333333333], [41.0, 515.3125000000001], [42.0, 415.1666666666667], [43.0, 418.3333333333333], [44.0, 517.5833333333334], [45.0, 450.3125], [46.0, 455.2666666666667], [47.0, 306.6363636363636], [48.0, 475.1764705882353], [49.0, 387.15384615384625], [50.0, 362.3258238689247], [1.0, 328.6666666666667]], "isOverall": false, "label": "cpu\/1\/spring\/flux", "isController": false}, {"data": [[47.4967548676984, 368.01747378931725]], "isOverall": false, "label": "cpu\/1\/spring\/flux-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 523.6, "minX": 1.6259943E12, "maxY": 3520.0, "series": [{"data": [[1.62599448E12, 3080.0], [1.62599454E12, 3080.0], [1.62599436E12, 3080.0], [1.62599442E12, 3080.0], [1.6259943E12, 2579.5], [1.6259946E12, 523.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62599448E12, 3520.0], [1.62599454E12, 3520.0], [1.62599436E12, 3520.0], [1.62599442E12, 3520.0], [1.6259943E12, 2948.0], [1.6259946E12, 598.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259946E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 360.59083333333314, "minX": 1.6259943E12, "maxY": 396.0149253731339, "series": [{"data": [[1.62599448E12, 360.81666666666695], [1.62599454E12, 360.59083333333314], [1.62599436E12, 362.71416666666676], [1.62599442E12, 364.91916666666685], [1.6259943E12, 396.0149253731339], [1.6259946E12, 365.5539215686275]], "isOverall": false, "label": "cpu\/1\/spring\/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259946E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 360.5816666666665, "minX": 1.6259943E12, "maxY": 396.01393034825844, "series": [{"data": [[1.62599448E12, 360.81250000000045], [1.62599454E12, 360.5816666666665], [1.62599436E12, 362.7066666666664], [1.62599442E12, 364.9116666666664], [1.6259943E12, 396.01393034825844], [1.6259946E12, 365.54901960784315]], "isOverall": false, "label": "cpu\/1\/spring\/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259946E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 37.77412935323385, "minX": 1.6259943E12, "maxY": 37.853333333333325, "series": [{"data": [[1.62599448E12, 37.8308333333333], [1.62599454E12, 37.829166666666595], [1.62599436E12, 37.810833333333235], [1.62599442E12, 37.853333333333325], [1.6259943E12, 37.77412935323385], [1.6259946E12, 37.79901960784313]], "isOverall": false, "label": "cpu\/1\/spring\/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259946E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 248.0, "minX": 1.6259943E12, "maxY": 955.0, "series": [{"data": [[1.62599448E12, 635.0], [1.62599454E12, 628.0], [1.62599436E12, 699.0], [1.62599442E12, 664.0], [1.6259943E12, 955.0], [1.6259946E12, 635.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62599448E12, 251.0], [1.62599454E12, 251.0], [1.62599436E12, 251.0], [1.62599442E12, 250.0], [1.6259943E12, 250.0], [1.6259946E12, 249.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62599448E12, 251.0], [1.62599454E12, 251.0], [1.62599436E12, 251.0], [1.62599442E12, 250.8899001145363], [1.6259943E12, 250.0], [1.6259946E12, 249.0295000195503]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62599448E12, 251.0], [1.62599454E12, 251.0], [1.62599436E12, 251.0], [1.62599442E12, 250.40949985682965], [1.6259943E12, 250.0], [1.6259946E12, 249.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62599448E12, 249.0], [1.62599454E12, 249.0], [1.62599436E12, 248.0], [1.62599442E12, 248.0], [1.6259943E12, 249.0], [1.6259946E12, 249.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62599448E12, 341.0], [1.62599454E12, 341.0], [1.62599436E12, 340.5], [1.62599442E12, 344.0], [1.6259943E12, 370.0], [1.6259946E12, 348.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259946E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 260.0, "minX": 1.0, "maxY": 459.5, "series": [{"data": [[14.0, 291.0], [15.0, 304.0], [1.0, 260.0], [16.0, 311.5], [17.0, 325.0], [18.0, 417.5], [19.0, 347.0], [20.0, 353.0], [21.0, 425.5], [22.0, 351.0], [23.0, 346.0], [6.0, 328.5], [24.0, 360.0], [25.0, 360.0], [26.0, 459.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 260.0, "minX": 1.0, "maxY": 459.5, "series": [{"data": [[14.0, 291.0], [15.0, 304.0], [1.0, 260.0], [16.0, 311.5], [17.0, 325.0], [18.0, 417.5], [19.0, 347.0], [20.0, 353.0], [21.0, 425.5], [22.0, 351.0], [23.0, 346.0], [6.0, 328.5], [24.0, 360.0], [25.0, 360.0], [26.0, 459.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.283333333333333, "minX": 1.6259943E12, "maxY": 20.0, "series": [{"data": [[1.62599448E12, 20.0], [1.62599454E12, 20.0], [1.62599436E12, 20.0], [1.62599442E12, 20.0], [1.6259943E12, 16.866666666666667], [1.6259946E12, 3.283333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259946E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.4, "minX": 1.6259943E12, "maxY": 20.0, "series": [{"data": [[1.62599448E12, 20.0], [1.62599454E12, 20.0], [1.62599436E12, 20.0], [1.62599442E12, 20.0], [1.6259943E12, 16.75], [1.6259946E12, 3.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259946E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.4, "minX": 1.6259943E12, "maxY": 20.0, "series": [{"data": [[1.62599448E12, 20.0], [1.62599454E12, 20.0], [1.62599436E12, 20.0], [1.62599442E12, 20.0], [1.6259943E12, 16.75], [1.6259946E12, 3.4]], "isOverall": false, "label": "cpu\/1\/spring\/flux-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259946E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.4, "minX": 1.6259943E12, "maxY": 20.0, "series": [{"data": [[1.62599448E12, 20.0], [1.62599454E12, 20.0], [1.62599436E12, 20.0], [1.62599442E12, 20.0], [1.6259943E12, 16.75], [1.6259946E12, 3.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259946E12, "title": "Total Transactions Per Second"}},
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

