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
        data: {"result": {"minY": 254.0, "minX": 0.0, "maxY": 815.0, "series": [{"data": [[0.0, 254.0], [0.1, 256.0], [0.2, 256.0], [0.3, 256.0], [0.4, 256.0], [0.5, 257.0], [0.6, 257.0], [0.7, 257.0], [0.8, 257.0], [0.9, 257.0], [1.0, 258.0], [1.1, 258.0], [1.2, 258.0], [1.3, 258.0], [1.4, 258.0], [1.5, 258.0], [1.6, 258.0], [1.7, 259.0], [1.8, 259.0], [1.9, 259.0], [2.0, 259.0], [2.1, 259.0], [2.2, 259.0], [2.3, 259.0], [2.4, 259.0], [2.5, 259.0], [2.6, 259.0], [2.7, 259.0], [2.8, 259.0], [2.9, 260.0], [3.0, 260.0], [3.1, 260.0], [3.2, 260.0], [3.3, 260.0], [3.4, 260.0], [3.5, 260.0], [3.6, 260.0], [3.7, 260.0], [3.8, 260.0], [3.9, 260.0], [4.0, 260.0], [4.1, 260.0], [4.2, 260.0], [4.3, 261.0], [4.4, 261.0], [4.5, 261.0], [4.6, 261.0], [4.7, 261.0], [4.8, 261.0], [4.9, 261.0], [5.0, 261.0], [5.1, 261.0], [5.2, 261.0], [5.3, 261.0], [5.4, 261.0], [5.5, 261.0], [5.6, 261.0], [5.7, 261.0], [5.8, 261.0], [5.9, 262.0], [6.0, 262.0], [6.1, 262.0], [6.2, 262.0], [6.3, 262.0], [6.4, 262.0], [6.5, 262.0], [6.6, 262.0], [6.7, 262.0], [6.8, 262.0], [6.9, 262.0], [7.0, 262.0], [7.1, 262.0], [7.2, 262.0], [7.3, 263.0], [7.4, 263.0], [7.5, 263.0], [7.6, 263.0], [7.7, 263.0], [7.8, 263.0], [7.9, 263.0], [8.0, 263.0], [8.1, 263.0], [8.2, 263.0], [8.3, 263.0], [8.4, 263.0], [8.5, 263.0], [8.6, 263.0], [8.7, 264.0], [8.8, 264.0], [8.9, 264.0], [9.0, 264.0], [9.1, 264.0], [9.2, 264.0], [9.3, 264.0], [9.4, 264.0], [9.5, 264.0], [9.6, 264.0], [9.7, 265.0], [9.8, 265.0], [9.9, 265.0], [10.0, 265.0], [10.1, 265.0], [10.2, 265.0], [10.3, 266.0], [10.4, 266.0], [10.5, 266.0], [10.6, 266.0], [10.7, 266.0], [10.8, 267.0], [10.9, 267.0], [11.0, 267.0], [11.1, 267.0], [11.2, 268.0], [11.3, 268.0], [11.4, 268.0], [11.5, 268.0], [11.6, 268.0], [11.7, 268.0], [11.8, 269.0], [11.9, 269.0], [12.0, 269.0], [12.1, 269.0], [12.2, 269.0], [12.3, 269.0], [12.4, 269.0], [12.5, 270.0], [12.6, 270.0], [12.7, 270.0], [12.8, 270.0], [12.9, 270.0], [13.0, 270.0], [13.1, 270.0], [13.2, 271.0], [13.3, 271.0], [13.4, 271.0], [13.5, 271.0], [13.6, 271.0], [13.7, 271.0], [13.8, 271.0], [13.9, 272.0], [14.0, 272.0], [14.1, 272.0], [14.2, 272.0], [14.3, 272.0], [14.4, 272.0], [14.5, 272.0], [14.6, 272.0], [14.7, 272.0], [14.8, 273.0], [14.9, 273.0], [15.0, 273.0], [15.1, 273.0], [15.2, 273.0], [15.3, 273.0], [15.4, 273.0], [15.5, 273.0], [15.6, 274.0], [15.7, 274.0], [15.8, 274.0], [15.9, 274.0], [16.0, 274.0], [16.1, 274.0], [16.2, 275.0], [16.3, 275.0], [16.4, 275.0], [16.5, 275.0], [16.6, 275.0], [16.7, 275.0], [16.8, 275.0], [16.9, 276.0], [17.0, 276.0], [17.1, 276.0], [17.2, 276.0], [17.3, 276.0], [17.4, 276.0], [17.5, 276.0], [17.6, 276.0], [17.7, 277.0], [17.8, 277.0], [17.9, 277.0], [18.0, 277.0], [18.1, 277.0], [18.2, 277.0], [18.3, 277.0], [18.4, 277.0], [18.5, 278.0], [18.6, 278.0], [18.7, 278.0], [18.8, 278.0], [18.9, 278.0], [19.0, 279.0], [19.1, 279.0], [19.2, 279.0], [19.3, 279.0], [19.4, 279.0], [19.5, 279.0], [19.6, 279.0], [19.7, 279.0], [19.8, 280.0], [19.9, 280.0], [20.0, 280.0], [20.1, 280.0], [20.2, 280.0], [20.3, 280.0], [20.4, 280.0], [20.5, 281.0], [20.6, 281.0], [20.7, 281.0], [20.8, 281.0], [20.9, 281.0], [21.0, 281.0], [21.1, 281.0], [21.2, 281.0], [21.3, 282.0], [21.4, 282.0], [21.5, 282.0], [21.6, 282.0], [21.7, 282.0], [21.8, 283.0], [21.9, 283.0], [22.0, 283.0], [22.1, 283.0], [22.2, 283.0], [22.3, 283.0], [22.4, 283.0], [22.5, 284.0], [22.6, 284.0], [22.7, 284.0], [22.8, 284.0], [22.9, 284.0], [23.0, 284.0], [23.1, 284.0], [23.2, 285.0], [23.3, 285.0], [23.4, 285.0], [23.5, 285.0], [23.6, 285.0], [23.7, 285.0], [23.8, 286.0], [23.9, 286.0], [24.0, 286.0], [24.1, 286.0], [24.2, 286.0], [24.3, 286.0], [24.4, 287.0], [24.5, 287.0], [24.6, 287.0], [24.7, 287.0], [24.8, 287.0], [24.9, 288.0], [25.0, 288.0], [25.1, 288.0], [25.2, 288.0], [25.3, 288.0], [25.4, 289.0], [25.5, 289.0], [25.6, 289.0], [25.7, 289.0], [25.8, 289.0], [25.9, 290.0], [26.0, 290.0], [26.1, 290.0], [26.2, 290.0], [26.3, 290.0], [26.4, 290.0], [26.5, 291.0], [26.6, 291.0], [26.7, 291.0], [26.8, 291.0], [26.9, 291.0], [27.0, 291.0], [27.1, 292.0], [27.2, 292.0], [27.3, 292.0], [27.4, 292.0], [27.5, 292.0], [27.6, 292.0], [27.7, 293.0], [27.8, 293.0], [27.9, 293.0], [28.0, 293.0], [28.1, 293.0], [28.2, 293.0], [28.3, 294.0], [28.4, 294.0], [28.5, 294.0], [28.6, 294.0], [28.7, 294.0], [28.8, 294.0], [28.9, 295.0], [29.0, 295.0], [29.1, 295.0], [29.2, 295.0], [29.3, 295.0], [29.4, 295.0], [29.5, 296.0], [29.6, 296.0], [29.7, 296.0], [29.8, 296.0], [29.9, 296.0], [30.0, 297.0], [30.1, 297.0], [30.2, 297.0], [30.3, 297.0], [30.4, 297.0], [30.5, 297.0], [30.6, 298.0], [30.7, 298.0], [30.8, 298.0], [30.9, 298.0], [31.0, 298.0], [31.1, 299.0], [31.2, 299.0], [31.3, 299.0], [31.4, 299.0], [31.5, 299.0], [31.6, 300.0], [31.7, 300.0], [31.8, 300.0], [31.9, 300.0], [32.0, 300.0], [32.1, 300.0], [32.2, 300.0], [32.3, 301.0], [32.4, 301.0], [32.5, 302.0], [32.6, 302.0], [32.7, 302.0], [32.8, 302.0], [32.9, 302.0], [33.0, 302.0], [33.1, 303.0], [33.2, 303.0], [33.3, 303.0], [33.4, 303.0], [33.5, 303.0], [33.6, 304.0], [33.7, 304.0], [33.8, 304.0], [33.9, 304.0], [34.0, 304.0], [34.1, 304.0], [34.2, 304.0], [34.3, 305.0], [34.4, 305.0], [34.5, 305.0], [34.6, 305.0], [34.7, 306.0], [34.8, 306.0], [34.9, 306.0], [35.0, 306.0], [35.1, 306.0], [35.2, 307.0], [35.3, 307.0], [35.4, 307.0], [35.5, 307.0], [35.6, 307.0], [35.7, 308.0], [35.8, 308.0], [35.9, 308.0], [36.0, 308.0], [36.1, 308.0], [36.2, 308.0], [36.3, 308.0], [36.4, 309.0], [36.5, 309.0], [36.6, 309.0], [36.7, 309.0], [36.8, 309.0], [36.9, 309.0], [37.0, 310.0], [37.1, 310.0], [37.2, 310.0], [37.3, 310.0], [37.4, 310.0], [37.5, 311.0], [37.6, 311.0], [37.7, 311.0], [37.8, 311.0], [37.9, 312.0], [38.0, 312.0], [38.1, 312.0], [38.2, 312.0], [38.3, 312.0], [38.4, 313.0], [38.5, 313.0], [38.6, 313.0], [38.7, 313.0], [38.8, 313.0], [38.9, 313.0], [39.0, 314.0], [39.1, 314.0], [39.2, 314.0], [39.3, 314.0], [39.4, 314.0], [39.5, 315.0], [39.6, 315.0], [39.7, 315.0], [39.8, 315.0], [39.9, 315.0], [40.0, 316.0], [40.1, 316.0], [40.2, 316.0], [40.3, 316.0], [40.4, 317.0], [40.5, 317.0], [40.6, 317.0], [40.7, 317.0], [40.8, 317.0], [40.9, 318.0], [41.0, 318.0], [41.1, 318.0], [41.2, 319.0], [41.3, 319.0], [41.4, 319.0], [41.5, 320.0], [41.6, 320.0], [41.7, 320.0], [41.8, 321.0], [41.9, 321.0], [42.0, 321.0], [42.1, 321.0], [42.2, 322.0], [42.3, 322.0], [42.4, 322.0], [42.5, 322.0], [42.6, 323.0], [42.7, 323.0], [42.8, 323.0], [42.9, 324.0], [43.0, 324.0], [43.1, 324.0], [43.2, 324.0], [43.3, 325.0], [43.4, 325.0], [43.5, 325.0], [43.6, 325.0], [43.7, 326.0], [43.8, 326.0], [43.9, 326.0], [44.0, 327.0], [44.1, 327.0], [44.2, 328.0], [44.3, 328.0], [44.4, 328.0], [44.5, 329.0], [44.6, 329.0], [44.7, 329.0], [44.8, 329.0], [44.9, 330.0], [45.0, 330.0], [45.1, 330.0], [45.2, 331.0], [45.3, 331.0], [45.4, 331.0], [45.5, 331.0], [45.6, 332.0], [45.7, 332.0], [45.8, 332.0], [45.9, 333.0], [46.0, 333.0], [46.1, 334.0], [46.2, 334.0], [46.3, 334.0], [46.4, 334.0], [46.5, 335.0], [46.6, 335.0], [46.7, 336.0], [46.8, 336.0], [46.9, 336.0], [47.0, 337.0], [47.1, 337.0], [47.2, 337.0], [47.3, 338.0], [47.4, 338.0], [47.5, 338.0], [47.6, 338.0], [47.7, 339.0], [47.8, 339.0], [47.9, 340.0], [48.0, 340.0], [48.1, 340.0], [48.2, 341.0], [48.3, 341.0], [48.4, 341.0], [48.5, 341.0], [48.6, 342.0], [48.7, 342.0], [48.8, 342.0], [48.9, 343.0], [49.0, 343.0], [49.1, 343.0], [49.2, 344.0], [49.3, 344.0], [49.4, 345.0], [49.5, 345.0], [49.6, 346.0], [49.7, 346.0], [49.8, 347.0], [49.9, 347.0], [50.0, 347.0], [50.1, 348.0], [50.2, 348.0], [50.3, 348.0], [50.4, 349.0], [50.5, 349.0], [50.6, 349.0], [50.7, 350.0], [50.8, 350.0], [50.9, 350.0], [51.0, 351.0], [51.1, 351.0], [51.2, 352.0], [51.3, 352.0], [51.4, 352.0], [51.5, 353.0], [51.6, 353.0], [51.7, 353.0], [51.8, 353.0], [51.9, 354.0], [52.0, 354.0], [52.1, 355.0], [52.2, 355.0], [52.3, 355.0], [52.4, 356.0], [52.5, 356.0], [52.6, 357.0], [52.7, 357.0], [52.8, 357.0], [52.9, 358.0], [53.0, 358.0], [53.1, 359.0], [53.2, 359.0], [53.3, 359.0], [53.4, 359.0], [53.5, 360.0], [53.6, 360.0], [53.7, 361.0], [53.8, 361.0], [53.9, 362.0], [54.0, 362.0], [54.1, 362.0], [54.2, 363.0], [54.3, 363.0], [54.4, 363.0], [54.5, 364.0], [54.6, 364.0], [54.7, 365.0], [54.8, 365.0], [54.9, 366.0], [55.0, 366.0], [55.1, 366.0], [55.2, 367.0], [55.3, 367.0], [55.4, 367.0], [55.5, 368.0], [55.6, 369.0], [55.7, 369.0], [55.8, 369.0], [55.9, 370.0], [56.0, 370.0], [56.1, 371.0], [56.2, 371.0], [56.3, 372.0], [56.4, 372.0], [56.5, 372.0], [56.6, 373.0], [56.7, 373.0], [56.8, 374.0], [56.9, 374.0], [57.0, 375.0], [57.1, 375.0], [57.2, 375.0], [57.3, 376.0], [57.4, 377.0], [57.5, 377.0], [57.6, 378.0], [57.7, 378.0], [57.8, 379.0], [57.9, 379.0], [58.0, 380.0], [58.1, 380.0], [58.2, 381.0], [58.3, 381.0], [58.4, 382.0], [58.5, 382.0], [58.6, 383.0], [58.7, 383.0], [58.8, 384.0], [58.9, 384.0], [59.0, 384.0], [59.1, 385.0], [59.2, 385.0], [59.3, 385.0], [59.4, 386.0], [59.5, 386.0], [59.6, 387.0], [59.7, 387.0], [59.8, 388.0], [59.9, 389.0], [60.0, 389.0], [60.1, 389.0], [60.2, 390.0], [60.3, 390.0], [60.4, 390.0], [60.5, 391.0], [60.6, 391.0], [60.7, 391.0], [60.8, 392.0], [60.9, 392.0], [61.0, 393.0], [61.1, 393.0], [61.2, 393.0], [61.3, 393.0], [61.4, 394.0], [61.5, 395.0], [61.6, 395.0], [61.7, 395.0], [61.8, 396.0], [61.9, 396.0], [62.0, 397.0], [62.1, 397.0], [62.2, 398.0], [62.3, 398.0], [62.4, 398.0], [62.5, 398.0], [62.6, 399.0], [62.7, 399.0], [62.8, 400.0], [62.9, 400.0], [63.0, 401.0], [63.1, 401.0], [63.2, 401.0], [63.3, 402.0], [63.4, 402.0], [63.5, 403.0], [63.6, 404.0], [63.7, 404.0], [63.8, 405.0], [63.9, 405.0], [64.0, 405.0], [64.1, 406.0], [64.2, 406.0], [64.3, 407.0], [64.4, 407.0], [64.5, 408.0], [64.6, 408.0], [64.7, 408.0], [64.8, 409.0], [64.9, 409.0], [65.0, 409.0], [65.1, 410.0], [65.2, 410.0], [65.3, 410.0], [65.4, 411.0], [65.5, 412.0], [65.6, 412.0], [65.7, 412.0], [65.8, 413.0], [65.9, 413.0], [66.0, 413.0], [66.1, 414.0], [66.2, 414.0], [66.3, 415.0], [66.4, 415.0], [66.5, 416.0], [66.6, 416.0], [66.7, 416.0], [66.8, 416.0], [66.9, 417.0], [67.0, 417.0], [67.1, 418.0], [67.2, 418.0], [67.3, 418.0], [67.4, 419.0], [67.5, 419.0], [67.6, 419.0], [67.7, 420.0], [67.8, 420.0], [67.9, 421.0], [68.0, 421.0], [68.1, 422.0], [68.2, 422.0], [68.3, 422.0], [68.4, 423.0], [68.5, 423.0], [68.6, 424.0], [68.7, 424.0], [68.8, 424.0], [68.9, 425.0], [69.0, 425.0], [69.1, 425.0], [69.2, 425.0], [69.3, 426.0], [69.4, 426.0], [69.5, 426.0], [69.6, 427.0], [69.7, 427.0], [69.8, 428.0], [69.9, 428.0], [70.0, 428.0], [70.1, 429.0], [70.2, 429.0], [70.3, 429.0], [70.4, 430.0], [70.5, 430.0], [70.6, 431.0], [70.7, 431.0], [70.8, 432.0], [70.9, 433.0], [71.0, 433.0], [71.1, 434.0], [71.2, 434.0], [71.3, 434.0], [71.4, 435.0], [71.5, 435.0], [71.6, 436.0], [71.7, 436.0], [71.8, 436.0], [71.9, 437.0], [72.0, 437.0], [72.1, 437.0], [72.2, 438.0], [72.3, 438.0], [72.4, 439.0], [72.5, 439.0], [72.6, 439.0], [72.7, 440.0], [72.8, 441.0], [72.9, 441.0], [73.0, 441.0], [73.1, 442.0], [73.2, 442.0], [73.3, 443.0], [73.4, 443.0], [73.5, 444.0], [73.6, 444.0], [73.7, 444.0], [73.8, 445.0], [73.9, 446.0], [74.0, 446.0], [74.1, 446.0], [74.2, 447.0], [74.3, 447.0], [74.4, 447.0], [74.5, 448.0], [74.6, 448.0], [74.7, 448.0], [74.8, 449.0], [74.9, 449.0], [75.0, 450.0], [75.1, 450.0], [75.2, 451.0], [75.3, 451.0], [75.4, 452.0], [75.5, 452.0], [75.6, 452.0], [75.7, 453.0], [75.8, 453.0], [75.9, 454.0], [76.0, 454.0], [76.1, 455.0], [76.2, 455.0], [76.3, 455.0], [76.4, 455.0], [76.5, 456.0], [76.6, 457.0], [76.7, 457.0], [76.8, 457.0], [76.9, 458.0], [77.0, 458.0], [77.1, 458.0], [77.2, 458.0], [77.3, 459.0], [77.4, 459.0], [77.5, 460.0], [77.6, 460.0], [77.7, 460.0], [77.8, 461.0], [77.9, 461.0], [78.0, 461.0], [78.1, 462.0], [78.2, 462.0], [78.3, 463.0], [78.4, 463.0], [78.5, 463.0], [78.6, 464.0], [78.7, 464.0], [78.8, 464.0], [78.9, 465.0], [79.0, 465.0], [79.1, 466.0], [79.2, 466.0], [79.3, 466.0], [79.4, 466.0], [79.5, 467.0], [79.6, 467.0], [79.7, 467.0], [79.8, 468.0], [79.9, 468.0], [80.0, 469.0], [80.1, 469.0], [80.2, 469.0], [80.3, 470.0], [80.4, 470.0], [80.5, 471.0], [80.6, 471.0], [80.7, 472.0], [80.8, 472.0], [80.9, 472.0], [81.0, 473.0], [81.1, 473.0], [81.2, 474.0], [81.3, 474.0], [81.4, 475.0], [81.5, 475.0], [81.6, 475.0], [81.7, 476.0], [81.8, 476.0], [81.9, 477.0], [82.0, 478.0], [82.1, 478.0], [82.2, 478.0], [82.3, 479.0], [82.4, 480.0], [82.5, 480.0], [82.6, 481.0], [82.7, 481.0], [82.8, 482.0], [82.9, 482.0], [83.0, 483.0], [83.1, 483.0], [83.2, 483.0], [83.3, 484.0], [83.4, 484.0], [83.5, 484.0], [83.6, 485.0], [83.7, 485.0], [83.8, 485.0], [83.9, 486.0], [84.0, 486.0], [84.1, 487.0], [84.2, 487.0], [84.3, 487.0], [84.4, 488.0], [84.5, 489.0], [84.6, 489.0], [84.7, 489.0], [84.8, 490.0], [84.9, 491.0], [85.0, 492.0], [85.1, 492.0], [85.2, 493.0], [85.3, 493.0], [85.4, 494.0], [85.5, 494.0], [85.6, 494.0], [85.7, 494.0], [85.8, 495.0], [85.9, 495.0], [86.0, 496.0], [86.1, 496.0], [86.2, 497.0], [86.3, 497.0], [86.4, 497.0], [86.5, 498.0], [86.6, 498.0], [86.7, 498.0], [86.8, 499.0], [86.9, 499.0], [87.0, 500.0], [87.1, 500.0], [87.2, 501.0], [87.3, 502.0], [87.4, 503.0], [87.5, 503.0], [87.6, 503.0], [87.7, 504.0], [87.8, 504.0], [87.9, 505.0], [88.0, 505.0], [88.1, 506.0], [88.2, 506.0], [88.3, 506.0], [88.4, 507.0], [88.5, 507.0], [88.6, 508.0], [88.7, 508.0], [88.8, 508.0], [88.9, 509.0], [89.0, 509.0], [89.1, 509.0], [89.2, 510.0], [89.3, 510.0], [89.4, 511.0], [89.5, 511.0], [89.6, 512.0], [89.7, 512.0], [89.8, 513.0], [89.9, 514.0], [90.0, 514.0], [90.1, 515.0], [90.2, 515.0], [90.3, 516.0], [90.4, 516.0], [90.5, 517.0], [90.6, 517.0], [90.7, 518.0], [90.8, 518.0], [90.9, 519.0], [91.0, 519.0], [91.1, 519.0], [91.2, 520.0], [91.3, 521.0], [91.4, 521.0], [91.5, 522.0], [91.6, 523.0], [91.7, 523.0], [91.8, 524.0], [91.9, 524.0], [92.0, 525.0], [92.1, 525.0], [92.2, 526.0], [92.3, 526.0], [92.4, 527.0], [92.5, 528.0], [92.6, 528.0], [92.7, 529.0], [92.8, 529.0], [92.9, 530.0], [93.0, 531.0], [93.1, 532.0], [93.2, 533.0], [93.3, 534.0], [93.4, 534.0], [93.5, 535.0], [93.6, 535.0], [93.7, 536.0], [93.8, 537.0], [93.9, 538.0], [94.0, 539.0], [94.1, 540.0], [94.2, 542.0], [94.3, 542.0], [94.4, 543.0], [94.5, 544.0], [94.6, 544.0], [94.7, 545.0], [94.8, 546.0], [94.9, 547.0], [95.0, 548.0], [95.1, 549.0], [95.2, 551.0], [95.3, 552.0], [95.4, 553.0], [95.5, 555.0], [95.6, 556.0], [95.7, 557.0], [95.8, 559.0], [95.9, 560.0], [96.0, 560.0], [96.1, 561.0], [96.2, 563.0], [96.3, 565.0], [96.4, 568.0], [96.5, 568.0], [96.6, 570.0], [96.7, 570.0], [96.8, 572.0], [96.9, 573.0], [97.0, 576.0], [97.1, 577.0], [97.2, 579.0], [97.3, 581.0], [97.4, 584.0], [97.5, 587.0], [97.6, 588.0], [97.7, 590.0], [97.8, 592.0], [97.9, 593.0], [98.0, 595.0], [98.1, 596.0], [98.2, 599.0], [98.3, 601.0], [98.4, 604.0], [98.5, 607.0], [98.6, 610.0], [98.7, 613.0], [98.8, 616.0], [98.9, 618.0], [99.0, 621.0], [99.1, 626.0], [99.2, 637.0], [99.3, 642.0], [99.4, 653.0], [99.5, 663.0], [99.6, 676.0], [99.7, 684.0], [99.8, 693.0], [99.9, 749.0], [100.0, 815.0]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1897.0, "series": [{"data": [[300.0, 1871.0], [600.0, 97.0], [700.0, 10.0], [200.0, 1897.0], [400.0, 1456.0], [800.0, 1.0], [500.0, 674.0]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 771.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5235.0, "series": [{"data": [[0.0, 5235.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 771.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 36.030612244897966, "minX": 1.62599652E12, "maxY": 50.0, "series": [{"data": [[1.62599658E12, 50.0], [1.62599676E12, 50.0], [1.62599664E12, 50.0], [1.62599682E12, 44.491150442477874], [1.62599652E12, 36.030612244897966], [1.6259967E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599682E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 275.8, "minX": 1.0, "maxY": 589.0, "series": [{"data": [[2.0, 286.4], [3.0, 278.00000000000006], [4.0, 275.8], [5.0, 277.5], [6.0, 279.0769230769231], [7.0, 286.8333333333333], [8.0, 296.15384615384613], [9.0, 289.42857142857144], [10.0, 300.92857142857144], [11.0, 312.9230769230769], [12.0, 389.38461538461536], [13.0, 407.9230769230769], [14.0, 434.25], [15.0, 418.5], [16.0, 416.64285714285717], [17.0, 427.8666666666667], [18.0, 374.33333333333337], [19.0, 322.29999999999995], [20.0, 407.0625], [21.0, 370.7692307692308], [22.0, 352.3333333333333], [23.0, 438.4545454545455], [24.0, 371.00000000000006], [25.0, 449.6666666666667], [26.0, 380.68750000000006], [27.0, 476.6153846153846], [28.0, 402.90000000000003], [29.0, 437.5], [30.0, 584.8823529411764], [31.0, 480.6], [32.0, 548.5714285714286], [33.0, 497.46153846153845], [34.0, 461.40000000000003], [35.0, 550.9999999999999], [36.0, 484.375], [37.0, 407.87499999999994], [38.0, 546.1052631578947], [39.0, 515.8571428571429], [40.0, 385.8181818181818], [41.0, 589.0], [42.0, 517.6363636363636], [43.0, 477.9500000000001], [44.0, 520.0], [45.0, 505.88888888888886], [46.0, 493.07142857142856], [47.0, 398.9166666666667], [48.0, 537.4285714285716], [49.0, 484.5384615384615], [50.0, 367.4157052474873], [1.0, 291.6666666666667]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}, {"data": [[47.51332001332004, 373.77755577755596]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 666.7, "minX": 1.62599652E12, "maxY": 4360.0, "series": [{"data": [[1.62599658E12, 4360.0], [1.62599676E12, 4360.0], [1.62599664E12, 4360.0], [1.62599682E12, 821.1333333333333], [1.62599652E12, 3560.6666666666665], [1.6259967E12, 4360.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62599658E12, 3540.0], [1.62599676E12, 3540.0], [1.62599664E12, 3540.0], [1.62599682E12, 666.7], [1.62599652E12, 2891.0], [1.6259967E12, 3540.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599682E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 364.2075000000002, "minX": 1.62599652E12, "maxY": 411.0071428571425, "series": [{"data": [[1.62599658E12, 368.59916666666675], [1.62599676E12, 367.1616666666666], [1.62599664E12, 366.5399999999999], [1.62599682E12, 364.20796460176985], [1.62599652E12, 411.0071428571425], [1.6259967E12, 364.2075000000002]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599682E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 363.7964601769913, "minX": 1.62599652E12, "maxY": 410.6071428571432, "series": [{"data": [[1.62599658E12, 368.1850000000001], [1.62599676E12, 366.7433333333335], [1.62599664E12, 366.14583333333337], [1.62599682E12, 363.7964601769913], [1.62599652E12, 410.6071428571432], [1.6259967E12, 363.8349999999998]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599682E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 37.87416666666659, "minX": 1.62599652E12, "maxY": 37.943877551020435, "series": [{"data": [[1.62599658E12, 37.87416666666659], [1.62599676E12, 37.885833333333274], [1.62599664E12, 37.88083333333329], [1.62599682E12, 37.915929203539825], [1.62599652E12, 37.943877551020435], [1.6259967E12, 37.93583333333333]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599682E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 254.0, "minX": 1.62599652E12, "maxY": 815.0, "series": [{"data": [[1.62599658E12, 622.0], [1.62599676E12, 617.0], [1.62599664E12, 615.0], [1.62599682E12, 623.0], [1.62599652E12, 815.0], [1.6259967E12, 663.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62599658E12, 257.0], [1.62599676E12, 257.0], [1.62599664E12, 257.0], [1.62599682E12, 256.0], [1.62599652E12, 258.0], [1.6259967E12, 257.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62599658E12, 257.0], [1.62599676E12, 257.88990011453626], [1.62599664E12, 257.88990011453626], [1.62599682E12, 256.0], [1.62599652E12, 258.0], [1.6259967E12, 257.88990011453626]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62599658E12, 257.0], [1.62599676E12, 257.40949985682965], [1.62599664E12, 257.40949985682965], [1.62599682E12, 256.0], [1.62599652E12, 258.0], [1.6259967E12, 257.40949985682965]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62599658E12, 255.0], [1.62599676E12, 255.0], [1.62599664E12, 255.0], [1.62599682E12, 254.0], [1.62599652E12, 256.0], [1.6259967E12, 255.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62599658E12, 345.5], [1.62599676E12, 339.0], [1.62599664E12, 338.5], [1.62599682E12, 340.5], [1.62599652E12, 396.5], [1.6259967E12, 334.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599682E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 262.0, "minX": 5.0, "maxY": 398.0, "series": [{"data": [[11.0, 262.0], [15.0, 303.0], [16.0, 304.0], [17.0, 303.0], [18.0, 359.5], [19.0, 398.0], [5.0, 263.0], [20.0, 344.5], [21.0, 351.0], [22.0, 374.0], [23.0, 348.0], [24.0, 347.0], [7.0, 375.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 261.0, "minX": 5.0, "maxY": 398.0, "series": [{"data": [[11.0, 261.0], [15.0, 302.0], [16.0, 303.0], [17.0, 303.0], [18.0, 359.0], [19.0, 398.0], [5.0, 262.0], [20.0, 344.0], [21.0, 351.0], [22.0, 373.0], [23.0, 348.0], [24.0, 346.5], [7.0, 374.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.683333333333333, "minX": 1.62599652E12, "maxY": 20.0, "series": [{"data": [[1.62599658E12, 20.0], [1.62599676E12, 20.0], [1.62599664E12, 20.0], [1.62599682E12, 3.683333333333333], [1.62599652E12, 16.416666666666668], [1.6259967E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599682E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.7666666666666666, "minX": 1.62599652E12, "maxY": 20.0, "series": [{"data": [[1.62599658E12, 20.0], [1.62599676E12, 20.0], [1.62599664E12, 20.0], [1.62599682E12, 3.7666666666666666], [1.62599652E12, 16.333333333333332], [1.6259967E12, 20.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599682E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.7666666666666666, "minX": 1.62599652E12, "maxY": 20.0, "series": [{"data": [[1.62599658E12, 20.0], [1.62599676E12, 20.0], [1.62599664E12, 20.0], [1.62599682E12, 3.7666666666666666], [1.62599652E12, 16.333333333333332], [1.6259967E12, 20.0]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599682E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.7666666666666666, "minX": 1.62599652E12, "maxY": 20.0, "series": [{"data": [[1.62599658E12, 20.0], [1.62599676E12, 20.0], [1.62599664E12, 20.0], [1.62599682E12, 3.7666666666666666], [1.62599652E12, 16.333333333333332], [1.6259967E12, 20.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599682E12, "title": "Total Transactions Per Second"}},
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

