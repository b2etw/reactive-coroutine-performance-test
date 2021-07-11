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
        data: {"result": {"minY": 255.0, "minX": 0.0, "maxY": 752.0, "series": [{"data": [[0.0, 255.0], [0.1, 255.0], [0.2, 256.0], [0.3, 256.0], [0.4, 257.0], [0.5, 257.0], [0.6, 257.0], [0.7, 257.0], [0.8, 257.0], [0.9, 257.0], [1.0, 257.0], [1.1, 257.0], [1.2, 257.0], [1.3, 258.0], [1.4, 258.0], [1.5, 258.0], [1.6, 258.0], [1.7, 258.0], [1.8, 258.0], [1.9, 258.0], [2.0, 258.0], [2.1, 258.0], [2.2, 258.0], [2.3, 258.0], [2.4, 259.0], [2.5, 259.0], [2.6, 259.0], [2.7, 259.0], [2.8, 259.0], [2.9, 259.0], [3.0, 259.0], [3.1, 259.0], [3.2, 259.0], [3.3, 259.0], [3.4, 259.0], [3.5, 259.0], [3.6, 259.0], [3.7, 260.0], [3.8, 260.0], [3.9, 260.0], [4.0, 260.0], [4.1, 260.0], [4.2, 260.0], [4.3, 260.0], [4.4, 260.0], [4.5, 260.0], [4.6, 260.0], [4.7, 260.0], [4.8, 260.0], [4.9, 260.0], [5.0, 260.0], [5.1, 260.0], [5.2, 260.0], [5.3, 260.0], [5.4, 260.0], [5.5, 261.0], [5.6, 261.0], [5.7, 261.0], [5.8, 261.0], [5.9, 261.0], [6.0, 261.0], [6.1, 261.0], [6.2, 261.0], [6.3, 261.0], [6.4, 261.0], [6.5, 261.0], [6.6, 261.0], [6.7, 261.0], [6.8, 261.0], [6.9, 261.0], [7.0, 261.0], [7.1, 261.0], [7.2, 261.0], [7.3, 261.0], [7.4, 261.0], [7.5, 261.0], [7.6, 261.0], [7.7, 262.0], [7.8, 262.0], [7.9, 262.0], [8.0, 262.0], [8.1, 262.0], [8.2, 262.0], [8.3, 262.0], [8.4, 262.0], [8.5, 262.0], [8.6, 262.0], [8.7, 262.0], [8.8, 262.0], [8.9, 262.0], [9.0, 262.0], [9.1, 262.0], [9.2, 262.0], [9.3, 262.0], [9.4, 263.0], [9.5, 263.0], [9.6, 263.0], [9.7, 263.0], [9.8, 263.0], [9.9, 263.0], [10.0, 263.0], [10.1, 263.0], [10.2, 263.0], [10.3, 263.0], [10.4, 263.0], [10.5, 263.0], [10.6, 263.0], [10.7, 263.0], [10.8, 264.0], [10.9, 264.0], [11.0, 264.0], [11.1, 264.0], [11.2, 264.0], [11.3, 264.0], [11.4, 264.0], [11.5, 264.0], [11.6, 264.0], [11.7, 264.0], [11.8, 264.0], [11.9, 265.0], [12.0, 265.0], [12.1, 265.0], [12.2, 265.0], [12.3, 265.0], [12.4, 265.0], [12.5, 265.0], [12.6, 266.0], [12.7, 266.0], [12.8, 266.0], [12.9, 266.0], [13.0, 266.0], [13.1, 266.0], [13.2, 267.0], [13.3, 267.0], [13.4, 267.0], [13.5, 267.0], [13.6, 267.0], [13.7, 267.0], [13.8, 268.0], [13.9, 268.0], [14.0, 268.0], [14.1, 268.0], [14.2, 268.0], [14.3, 269.0], [14.4, 269.0], [14.5, 269.0], [14.6, 269.0], [14.7, 270.0], [14.8, 270.0], [14.9, 270.0], [15.0, 270.0], [15.1, 270.0], [15.2, 270.0], [15.3, 271.0], [15.4, 271.0], [15.5, 271.0], [15.6, 271.0], [15.7, 271.0], [15.8, 271.0], [15.9, 271.0], [16.0, 272.0], [16.1, 272.0], [16.2, 272.0], [16.3, 272.0], [16.4, 272.0], [16.5, 272.0], [16.6, 273.0], [16.7, 273.0], [16.8, 273.0], [16.9, 273.0], [17.0, 273.0], [17.1, 273.0], [17.2, 274.0], [17.3, 274.0], [17.4, 274.0], [17.5, 274.0], [17.6, 274.0], [17.7, 274.0], [17.8, 274.0], [17.9, 275.0], [18.0, 275.0], [18.1, 275.0], [18.2, 275.0], [18.3, 275.0], [18.4, 275.0], [18.5, 276.0], [18.6, 276.0], [18.7, 276.0], [18.8, 276.0], [18.9, 276.0], [19.0, 276.0], [19.1, 277.0], [19.2, 277.0], [19.3, 277.0], [19.4, 277.0], [19.5, 277.0], [19.6, 277.0], [19.7, 277.0], [19.8, 278.0], [19.9, 278.0], [20.0, 278.0], [20.1, 278.0], [20.2, 278.0], [20.3, 279.0], [20.4, 279.0], [20.5, 279.0], [20.6, 279.0], [20.7, 279.0], [20.8, 279.0], [20.9, 280.0], [21.0, 280.0], [21.1, 280.0], [21.2, 280.0], [21.3, 280.0], [21.4, 280.0], [21.5, 280.0], [21.6, 281.0], [21.7, 281.0], [21.8, 281.0], [21.9, 281.0], [22.0, 281.0], [22.1, 282.0], [22.2, 282.0], [22.3, 282.0], [22.4, 282.0], [22.5, 282.0], [22.6, 282.0], [22.7, 282.0], [22.8, 283.0], [22.9, 283.0], [23.0, 283.0], [23.1, 283.0], [23.2, 283.0], [23.3, 283.0], [23.4, 284.0], [23.5, 284.0], [23.6, 284.0], [23.7, 284.0], [23.8, 284.0], [23.9, 284.0], [24.0, 284.0], [24.1, 285.0], [24.2, 285.0], [24.3, 285.0], [24.4, 285.0], [24.5, 285.0], [24.6, 286.0], [24.7, 286.0], [24.8, 286.0], [24.9, 286.0], [25.0, 286.0], [25.1, 286.0], [25.2, 286.0], [25.3, 287.0], [25.4, 287.0], [25.5, 287.0], [25.6, 287.0], [25.7, 287.0], [25.8, 287.0], [25.9, 288.0], [26.0, 288.0], [26.1, 288.0], [26.2, 289.0], [26.3, 289.0], [26.4, 289.0], [26.5, 289.0], [26.6, 289.0], [26.7, 289.0], [26.8, 290.0], [26.9, 290.0], [27.0, 290.0], [27.1, 291.0], [27.2, 291.0], [27.3, 291.0], [27.4, 291.0], [27.5, 291.0], [27.6, 291.0], [27.7, 291.0], [27.8, 292.0], [27.9, 292.0], [28.0, 292.0], [28.1, 292.0], [28.2, 293.0], [28.3, 293.0], [28.4, 293.0], [28.5, 293.0], [28.6, 294.0], [28.7, 294.0], [28.8, 294.0], [28.9, 294.0], [29.0, 294.0], [29.1, 294.0], [29.2, 294.0], [29.3, 295.0], [29.4, 295.0], [29.5, 295.0], [29.6, 295.0], [29.7, 295.0], [29.8, 296.0], [29.9, 296.0], [30.0, 296.0], [30.1, 296.0], [30.2, 296.0], [30.3, 297.0], [30.4, 297.0], [30.5, 297.0], [30.6, 297.0], [30.7, 297.0], [30.8, 298.0], [30.9, 298.0], [31.0, 298.0], [31.1, 298.0], [31.2, 298.0], [31.3, 299.0], [31.4, 299.0], [31.5, 299.0], [31.6, 299.0], [31.7, 300.0], [31.8, 300.0], [31.9, 300.0], [32.0, 300.0], [32.1, 300.0], [32.2, 301.0], [32.3, 301.0], [32.4, 301.0], [32.5, 301.0], [32.6, 301.0], [32.7, 302.0], [32.8, 302.0], [32.9, 302.0], [33.0, 303.0], [33.1, 303.0], [33.2, 303.0], [33.3, 303.0], [33.4, 303.0], [33.5, 303.0], [33.6, 304.0], [33.7, 304.0], [33.8, 304.0], [33.9, 304.0], [34.0, 305.0], [34.1, 305.0], [34.2, 305.0], [34.3, 305.0], [34.4, 305.0], [34.5, 306.0], [34.6, 306.0], [34.7, 306.0], [34.8, 306.0], [34.9, 307.0], [35.0, 307.0], [35.1, 307.0], [35.2, 307.0], [35.3, 308.0], [35.4, 308.0], [35.5, 308.0], [35.6, 308.0], [35.7, 308.0], [35.8, 309.0], [35.9, 309.0], [36.0, 309.0], [36.1, 309.0], [36.2, 310.0], [36.3, 310.0], [36.4, 310.0], [36.5, 310.0], [36.6, 311.0], [36.7, 311.0], [36.8, 311.0], [36.9, 312.0], [37.0, 312.0], [37.1, 312.0], [37.2, 312.0], [37.3, 313.0], [37.4, 313.0], [37.5, 313.0], [37.6, 313.0], [37.7, 313.0], [37.8, 314.0], [37.9, 314.0], [38.0, 314.0], [38.1, 315.0], [38.2, 315.0], [38.3, 315.0], [38.4, 316.0], [38.5, 316.0], [38.6, 316.0], [38.7, 316.0], [38.8, 316.0], [38.9, 317.0], [39.0, 317.0], [39.1, 318.0], [39.2, 318.0], [39.3, 318.0], [39.4, 319.0], [39.5, 319.0], [39.6, 319.0], [39.7, 320.0], [39.8, 320.0], [39.9, 321.0], [40.0, 321.0], [40.1, 321.0], [40.2, 322.0], [40.3, 322.0], [40.4, 323.0], [40.5, 323.0], [40.6, 324.0], [40.7, 324.0], [40.8, 324.0], [40.9, 325.0], [41.0, 325.0], [41.1, 325.0], [41.2, 325.0], [41.3, 326.0], [41.4, 326.0], [41.5, 326.0], [41.6, 326.0], [41.7, 327.0], [41.8, 327.0], [41.9, 328.0], [42.0, 328.0], [42.1, 328.0], [42.2, 329.0], [42.3, 329.0], [42.4, 329.0], [42.5, 330.0], [42.6, 330.0], [42.7, 330.0], [42.8, 331.0], [42.9, 331.0], [43.0, 332.0], [43.1, 332.0], [43.2, 332.0], [43.3, 333.0], [43.4, 333.0], [43.5, 333.0], [43.6, 333.0], [43.7, 334.0], [43.8, 334.0], [43.9, 334.0], [44.0, 334.0], [44.1, 335.0], [44.2, 335.0], [44.3, 335.0], [44.4, 335.0], [44.5, 336.0], [44.6, 336.0], [44.7, 336.0], [44.8, 336.0], [44.9, 336.0], [45.0, 337.0], [45.1, 337.0], [45.2, 337.0], [45.3, 338.0], [45.4, 338.0], [45.5, 338.0], [45.6, 339.0], [45.7, 339.0], [45.8, 339.0], [45.9, 340.0], [46.0, 340.0], [46.1, 340.0], [46.2, 341.0], [46.3, 341.0], [46.4, 341.0], [46.5, 341.0], [46.6, 342.0], [46.7, 342.0], [46.8, 342.0], [46.9, 342.0], [47.0, 343.0], [47.1, 343.0], [47.2, 343.0], [47.3, 343.0], [47.4, 343.0], [47.5, 344.0], [47.6, 344.0], [47.7, 344.0], [47.8, 345.0], [47.9, 345.0], [48.0, 345.0], [48.1, 346.0], [48.2, 346.0], [48.3, 346.0], [48.4, 347.0], [48.5, 347.0], [48.6, 347.0], [48.7, 347.0], [48.8, 348.0], [48.9, 348.0], [49.0, 348.0], [49.1, 349.0], [49.2, 349.0], [49.3, 349.0], [49.4, 349.0], [49.5, 350.0], [49.6, 350.0], [49.7, 350.0], [49.8, 351.0], [49.9, 351.0], [50.0, 351.0], [50.1, 352.0], [50.2, 352.0], [50.3, 352.0], [50.4, 353.0], [50.5, 353.0], [50.6, 353.0], [50.7, 353.0], [50.8, 354.0], [50.9, 354.0], [51.0, 354.0], [51.1, 355.0], [51.2, 355.0], [51.3, 355.0], [51.4, 355.0], [51.5, 356.0], [51.6, 356.0], [51.7, 357.0], [51.8, 357.0], [51.9, 357.0], [52.0, 357.0], [52.1, 358.0], [52.2, 358.0], [52.3, 358.0], [52.4, 359.0], [52.5, 359.0], [52.6, 359.0], [52.7, 360.0], [52.8, 360.0], [52.9, 360.0], [53.0, 361.0], [53.1, 361.0], [53.2, 361.0], [53.3, 361.0], [53.4, 362.0], [53.5, 362.0], [53.6, 362.0], [53.7, 362.0], [53.8, 362.0], [53.9, 363.0], [54.0, 363.0], [54.1, 363.0], [54.2, 363.0], [54.3, 364.0], [54.4, 364.0], [54.5, 364.0], [54.6, 364.0], [54.7, 365.0], [54.8, 365.0], [54.9, 366.0], [55.0, 366.0], [55.1, 367.0], [55.2, 367.0], [55.3, 367.0], [55.4, 367.0], [55.5, 368.0], [55.6, 368.0], [55.7, 368.0], [55.8, 368.0], [55.9, 369.0], [56.0, 369.0], [56.1, 369.0], [56.2, 369.0], [56.3, 370.0], [56.4, 370.0], [56.5, 370.0], [56.6, 371.0], [56.7, 371.0], [56.8, 371.0], [56.9, 372.0], [57.0, 372.0], [57.1, 372.0], [57.2, 372.0], [57.3, 373.0], [57.4, 373.0], [57.5, 373.0], [57.6, 373.0], [57.7, 374.0], [57.8, 374.0], [57.9, 374.0], [58.0, 375.0], [58.1, 375.0], [58.2, 375.0], [58.3, 376.0], [58.4, 376.0], [58.5, 376.0], [58.6, 376.0], [58.7, 377.0], [58.8, 377.0], [58.9, 378.0], [59.0, 378.0], [59.1, 378.0], [59.2, 379.0], [59.3, 379.0], [59.4, 380.0], [59.5, 380.0], [59.6, 380.0], [59.7, 381.0], [59.8, 381.0], [59.9, 381.0], [60.0, 382.0], [60.1, 382.0], [60.2, 383.0], [60.3, 383.0], [60.4, 383.0], [60.5, 384.0], [60.6, 384.0], [60.7, 385.0], [60.8, 385.0], [60.9, 386.0], [61.0, 386.0], [61.1, 387.0], [61.2, 387.0], [61.3, 387.0], [61.4, 387.0], [61.5, 388.0], [61.6, 388.0], [61.7, 388.0], [61.8, 389.0], [61.9, 389.0], [62.0, 389.0], [62.1, 390.0], [62.2, 390.0], [62.3, 390.0], [62.4, 391.0], [62.5, 391.0], [62.6, 391.0], [62.7, 392.0], [62.8, 392.0], [62.9, 393.0], [63.0, 393.0], [63.1, 393.0], [63.2, 394.0], [63.3, 394.0], [63.4, 395.0], [63.5, 395.0], [63.6, 396.0], [63.7, 396.0], [63.8, 397.0], [63.9, 397.0], [64.0, 397.0], [64.1, 398.0], [64.2, 398.0], [64.3, 399.0], [64.4, 399.0], [64.5, 399.0], [64.6, 399.0], [64.7, 400.0], [64.8, 400.0], [64.9, 400.0], [65.0, 401.0], [65.1, 401.0], [65.2, 401.0], [65.3, 401.0], [65.4, 402.0], [65.5, 403.0], [65.6, 403.0], [65.7, 403.0], [65.8, 404.0], [65.9, 404.0], [66.0, 404.0], [66.1, 405.0], [66.2, 405.0], [66.3, 405.0], [66.4, 406.0], [66.5, 406.0], [66.6, 406.0], [66.7, 406.0], [66.8, 407.0], [66.9, 407.0], [67.0, 408.0], [67.1, 408.0], [67.2, 408.0], [67.3, 409.0], [67.4, 409.0], [67.5, 410.0], [67.6, 410.0], [67.7, 410.0], [67.8, 411.0], [67.9, 411.0], [68.0, 412.0], [68.1, 412.0], [68.2, 412.0], [68.3, 413.0], [68.4, 413.0], [68.5, 414.0], [68.6, 414.0], [68.7, 414.0], [68.8, 414.0], [68.9, 415.0], [69.0, 415.0], [69.1, 415.0], [69.2, 416.0], [69.3, 416.0], [69.4, 416.0], [69.5, 417.0], [69.6, 417.0], [69.7, 418.0], [69.8, 418.0], [69.9, 418.0], [70.0, 418.0], [70.1, 419.0], [70.2, 419.0], [70.3, 420.0], [70.4, 420.0], [70.5, 420.0], [70.6, 421.0], [70.7, 421.0], [70.8, 421.0], [70.9, 422.0], [71.0, 422.0], [71.1, 422.0], [71.2, 423.0], [71.3, 423.0], [71.4, 424.0], [71.5, 424.0], [71.6, 424.0], [71.7, 424.0], [71.8, 424.0], [71.9, 425.0], [72.0, 425.0], [72.1, 426.0], [72.2, 426.0], [72.3, 426.0], [72.4, 427.0], [72.5, 427.0], [72.6, 428.0], [72.7, 428.0], [72.8, 428.0], [72.9, 429.0], [73.0, 429.0], [73.1, 430.0], [73.2, 430.0], [73.3, 430.0], [73.4, 430.0], [73.5, 431.0], [73.6, 431.0], [73.7, 432.0], [73.8, 432.0], [73.9, 432.0], [74.0, 433.0], [74.1, 433.0], [74.2, 433.0], [74.3, 434.0], [74.4, 434.0], [74.5, 435.0], [74.6, 435.0], [74.7, 435.0], [74.8, 436.0], [74.9, 436.0], [75.0, 436.0], [75.1, 437.0], [75.2, 437.0], [75.3, 437.0], [75.4, 437.0], [75.5, 438.0], [75.6, 438.0], [75.7, 438.0], [75.8, 439.0], [75.9, 439.0], [76.0, 439.0], [76.1, 440.0], [76.2, 440.0], [76.3, 440.0], [76.4, 440.0], [76.5, 441.0], [76.6, 441.0], [76.7, 442.0], [76.8, 442.0], [76.9, 442.0], [77.0, 443.0], [77.1, 443.0], [77.2, 443.0], [77.3, 443.0], [77.4, 444.0], [77.5, 444.0], [77.6, 445.0], [77.7, 445.0], [77.8, 446.0], [77.9, 446.0], [78.0, 447.0], [78.1, 447.0], [78.2, 447.0], [78.3, 448.0], [78.4, 448.0], [78.5, 449.0], [78.6, 449.0], [78.7, 450.0], [78.8, 450.0], [78.9, 450.0], [79.0, 451.0], [79.1, 451.0], [79.2, 452.0], [79.3, 452.0], [79.4, 453.0], [79.5, 453.0], [79.6, 454.0], [79.7, 454.0], [79.8, 455.0], [79.9, 455.0], [80.0, 455.0], [80.1, 456.0], [80.2, 456.0], [80.3, 456.0], [80.4, 457.0], [80.5, 457.0], [80.6, 457.0], [80.7, 458.0], [80.8, 458.0], [80.9, 458.0], [81.0, 459.0], [81.1, 459.0], [81.2, 460.0], [81.3, 460.0], [81.4, 461.0], [81.5, 461.0], [81.6, 462.0], [81.7, 462.0], [81.8, 463.0], [81.9, 463.0], [82.0, 463.0], [82.1, 464.0], [82.2, 464.0], [82.3, 464.0], [82.4, 465.0], [82.5, 465.0], [82.6, 466.0], [82.7, 466.0], [82.8, 467.0], [82.9, 467.0], [83.0, 468.0], [83.1, 468.0], [83.2, 468.0], [83.3, 468.0], [83.4, 469.0], [83.5, 470.0], [83.6, 470.0], [83.7, 470.0], [83.8, 471.0], [83.9, 471.0], [84.0, 472.0], [84.1, 472.0], [84.2, 473.0], [84.3, 473.0], [84.4, 474.0], [84.5, 474.0], [84.6, 474.0], [84.7, 475.0], [84.8, 475.0], [84.9, 476.0], [85.0, 476.0], [85.1, 477.0], [85.2, 477.0], [85.3, 478.0], [85.4, 478.0], [85.5, 478.0], [85.6, 479.0], [85.7, 480.0], [85.8, 480.0], [85.9, 481.0], [86.0, 481.0], [86.1, 482.0], [86.2, 482.0], [86.3, 482.0], [86.4, 483.0], [86.5, 483.0], [86.6, 484.0], [86.7, 484.0], [86.8, 484.0], [86.9, 485.0], [87.0, 486.0], [87.1, 486.0], [87.2, 487.0], [87.3, 487.0], [87.4, 487.0], [87.5, 488.0], [87.6, 489.0], [87.7, 489.0], [87.8, 489.0], [87.9, 490.0], [88.0, 490.0], [88.1, 491.0], [88.2, 491.0], [88.3, 492.0], [88.4, 492.0], [88.5, 493.0], [88.6, 493.0], [88.7, 494.0], [88.8, 495.0], [88.9, 495.0], [89.0, 495.0], [89.1, 496.0], [89.2, 497.0], [89.3, 497.0], [89.4, 497.0], [89.5, 498.0], [89.6, 498.0], [89.7, 499.0], [89.8, 499.0], [89.9, 500.0], [90.0, 501.0], [90.1, 501.0], [90.2, 502.0], [90.3, 502.0], [90.4, 503.0], [90.5, 503.0], [90.6, 504.0], [90.7, 505.0], [90.8, 505.0], [90.9, 506.0], [91.0, 507.0], [91.1, 508.0], [91.2, 508.0], [91.3, 509.0], [91.4, 509.0], [91.5, 510.0], [91.6, 511.0], [91.7, 512.0], [91.8, 512.0], [91.9, 513.0], [92.0, 513.0], [92.1, 513.0], [92.2, 514.0], [92.3, 514.0], [92.4, 515.0], [92.5, 515.0], [92.6, 516.0], [92.7, 516.0], [92.8, 517.0], [92.9, 518.0], [93.0, 520.0], [93.1, 520.0], [93.2, 520.0], [93.3, 521.0], [93.4, 522.0], [93.5, 522.0], [93.6, 523.0], [93.7, 523.0], [93.8, 525.0], [93.9, 525.0], [94.0, 526.0], [94.1, 527.0], [94.2, 528.0], [94.3, 528.0], [94.4, 528.0], [94.5, 530.0], [94.6, 531.0], [94.7, 531.0], [94.8, 532.0], [94.9, 533.0], [95.0, 534.0], [95.1, 535.0], [95.2, 536.0], [95.3, 538.0], [95.4, 539.0], [95.5, 540.0], [95.6, 542.0], [95.7, 544.0], [95.8, 544.0], [95.9, 545.0], [96.0, 547.0], [96.1, 550.0], [96.2, 551.0], [96.3, 552.0], [96.4, 553.0], [96.5, 554.0], [96.6, 555.0], [96.7, 557.0], [96.8, 558.0], [96.9, 559.0], [97.0, 561.0], [97.1, 562.0], [97.2, 564.0], [97.3, 565.0], [97.4, 567.0], [97.5, 569.0], [97.6, 570.0], [97.7, 572.0], [97.8, 573.0], [97.9, 576.0], [98.0, 577.0], [98.1, 579.0], [98.2, 581.0], [98.3, 585.0], [98.4, 588.0], [98.5, 590.0], [98.6, 594.0], [98.7, 597.0], [98.8, 602.0], [98.9, 608.0], [99.0, 612.0], [99.1, 617.0], [99.2, 621.0], [99.3, 626.0], [99.4, 631.0], [99.5, 645.0], [99.6, 652.0], [99.7, 657.0], [99.8, 667.0], [99.9, 678.0], [100.0, 752.0]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 200.0, "maxY": 1985.0, "series": [{"data": [[300.0, 1985.0], [600.0, 72.0], [700.0, 3.0], [200.0, 1900.0], [400.0, 1514.0], [500.0, 534.0]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 601.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5407.0, "series": [{"data": [[0.0, 5407.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 601.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.71204188481676, "minX": 1.62599682E12, "maxY": 50.0, "series": [{"data": [[1.62599688E12, 44.92810457516335], [1.62599706E12, 50.0], [1.62599694E12, 50.0], [1.62599712E12, 48.675403225806456], [1.62599682E12, 10.71204188481676], [1.625997E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599712E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 280.8, "minX": 1.0, "maxY": 553.8333333333334, "series": [{"data": [[2.0, 295.0], [3.0, 284.7142857142857], [4.0, 280.8], [5.0, 281.3333333333333], [6.0, 285.7692307692308], [7.0, 296.9230769230769], [8.0, 310.5], [9.0, 311.1538461538462], [10.0, 309.2307692307692], [11.0, 297.06666666666666], [12.0, 338.0], [13.0, 361.8571428571429], [14.0, 421.6363636363636], [15.0, 384.27272727272725], [16.0, 425.2], [17.0, 424.2], [18.0, 414.91666666666663], [19.0, 392.2307692307692], [20.0, 423.37499999999994], [21.0, 389.9285714285714], [22.0, 365.8461538461538], [23.0, 403.53846153846155], [24.0, 357.0714285714285], [25.0, 480.0833333333333], [26.0, 401.4], [27.0, 449.0], [28.0, 451.2], [29.0, 425.27272727272725], [30.0, 508.5000000000001], [31.0, 415.00000000000006], [32.0, 507.35714285714283], [33.0, 464.57142857142856], [34.0, 375.3636363636363], [35.0, 494.33333333333337], [36.0, 461.29411764705884], [37.0, 378.2], [38.0, 453.8666666666667], [39.0, 460.52941176470586], [40.0, 351.8], [41.0, 553.8333333333334], [42.0, 492.8181818181818], [43.0, 465.16666666666674], [44.0, 536.9166666666666], [45.0, 496.50000000000006], [46.0, 549.25], [47.0, 384.4166666666667], [48.0, 508.80000000000007], [49.0, 419.0], [50.0, 363.425432880284], [1.0, 329.0]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}, {"data": [[47.49900133155791, 368.8535286284952]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 563.45, "minX": 1.62599682E12, "maxY": 4447.2, "series": [{"data": [[1.62599688E12, 4447.2], [1.62599706E12, 4356.366666666667], [1.62599694E12, 4363.633333333333], [1.62599712E12, 3604.266666666667], [1.62599682E12, 693.9666666666667], [1.625997E12, 4363.633333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62599688E12, 3610.8], [1.62599706E12, 3537.05], [1.62599694E12, 3542.95], [1.62599712E12, 2926.4], [1.62599682E12, 563.45], [1.625997E12, 3542.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599712E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 334.90052356020954, "minX": 1.62599682E12, "maxY": 395.4648692810462, "series": [{"data": [[1.62599688E12, 395.4648692810462], [1.62599706E12, 361.5829858215187], [1.62599694E12, 364.87260616153173], [1.62599712E12, 363.8064516129032], [1.62599682E12, 334.90052356020954], [1.625997E12, 362.54038301415414]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599712E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 334.5183246073299, "minX": 1.62599682E12, "maxY": 395.0612745098038, "series": [{"data": [[1.62599688E12, 395.0612745098038], [1.62599706E12, 361.2026688907428], [1.62599694E12, 364.52872606161543], [1.62599712E12, 363.4929435483873], [1.62599682E12, 334.5183246073299], [1.625997E12, 362.1606994171527]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599712E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 37.832460732984295, "minX": 1.62599682E12, "maxY": 37.999167360532795, "series": [{"data": [[1.62599688E12, 37.95669934640522], [1.62599706E12, 37.90158465387823], [1.62599694E12, 37.870940882597836], [1.62599712E12, 37.84576612903221], [1.62599682E12, 37.832460732984295], [1.625997E12, 37.999167360532795]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599712E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 255.0, "minX": 1.62599682E12, "maxY": 752.0, "series": [{"data": [[1.62599688E12, 752.0], [1.62599706E12, 662.0], [1.62599694E12, 676.0], [1.62599712E12, 631.0], [1.62599682E12, 656.0], [1.625997E12, 625.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62599688E12, 257.0], [1.62599706E12, 257.0], [1.62599694E12, 257.0], [1.62599712E12, 257.0], [1.62599682E12, 255.72799995422363], [1.625997E12, 257.8179997134209]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62599688E12, 257.0], [1.62599706E12, 257.0], [1.62599694E12, 257.0], [1.62599712E12, 257.0], [1.62599682E12, 255.90080001831055], [1.625997E12, 258.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62599688E12, 257.0], [1.62599706E12, 257.0], [1.62599694E12, 257.0], [1.62599712E12, 257.0], [1.62599682E12, 255.8239999771118], [1.625997E12, 258.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62599688E12, 255.0], [1.62599706E12, 255.0], [1.62599694E12, 256.0], [1.62599712E12, 255.0], [1.62599682E12, 255.0], [1.625997E12, 255.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62599688E12, 381.0], [1.62599706E12, 343.0], [1.62599694E12, 349.0], [1.62599712E12, 349.0], [1.62599682E12, 298.0], [1.625997E12, 345.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599712E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 260.0, "minX": 4.0, "maxY": 500.0, "series": [{"data": [[9.0, 260.0], [12.0, 429.5], [15.0, 280.0], [4.0, 264.0], [16.0, 307.0], [17.0, 297.0], [18.0, 307.0], [19.0, 329.0], [20.0, 357.0], [21.0, 377.5], [22.0, 374.5], [23.0, 398.0], [25.0, 484.5], [26.0, 500.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 260.0, "minX": 4.0, "maxY": 499.5, "series": [{"data": [[9.0, 260.0], [12.0, 429.5], [15.0, 279.0], [4.0, 264.0], [16.0, 307.0], [17.0, 297.0], [18.0, 306.0], [19.0, 328.0], [20.0, 357.0], [21.0, 377.0], [22.0, 374.5], [23.0, 398.0], [25.0, 484.0], [26.0, 499.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.316666666666667, "minX": 1.62599682E12, "maxY": 20.383333333333333, "series": [{"data": [[1.62599688E12, 20.383333333333333], [1.62599706E12, 20.0], [1.62599694E12, 20.0], [1.62599712E12, 16.433333333333334], [1.62599682E12, 3.316666666666667], [1.625997E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599712E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.183333333333333, "minX": 1.62599682E12, "maxY": 20.4, "series": [{"data": [[1.62599688E12, 20.4], [1.62599706E12, 19.983333333333334], [1.62599694E12, 20.016666666666666], [1.62599712E12, 16.533333333333335], [1.62599682E12, 3.183333333333333], [1.625997E12, 20.016666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599712E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.183333333333333, "minX": 1.62599682E12, "maxY": 20.4, "series": [{"data": [[1.62599688E12, 20.4], [1.62599706E12, 19.983333333333334], [1.62599694E12, 20.016666666666666], [1.62599712E12, 16.533333333333335], [1.62599682E12, 3.183333333333333], [1.625997E12, 20.016666666666666]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599712E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.183333333333333, "minX": 1.62599682E12, "maxY": 20.4, "series": [{"data": [[1.62599688E12, 20.4], [1.62599706E12, 19.983333333333334], [1.62599694E12, 20.016666666666666], [1.62599712E12, 16.533333333333335], [1.62599682E12, 3.183333333333333], [1.625997E12, 20.016666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599712E12, "title": "Total Transactions Per Second"}},
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

