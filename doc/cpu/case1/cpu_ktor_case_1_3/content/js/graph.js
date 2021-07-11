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
        data: {"result": {"minY": 254.0, "minX": 0.0, "maxY": 1569.0, "series": [{"data": [[0.0, 254.0], [0.1, 255.0], [0.2, 256.0], [0.3, 256.0], [0.4, 256.0], [0.5, 257.0], [0.6, 257.0], [0.7, 257.0], [0.8, 257.0], [0.9, 257.0], [1.0, 258.0], [1.1, 258.0], [1.2, 258.0], [1.3, 258.0], [1.4, 258.0], [1.5, 258.0], [1.6, 258.0], [1.7, 258.0], [1.8, 258.0], [1.9, 258.0], [2.0, 258.0], [2.1, 259.0], [2.2, 259.0], [2.3, 259.0], [2.4, 259.0], [2.5, 259.0], [2.6, 259.0], [2.7, 259.0], [2.8, 259.0], [2.9, 259.0], [3.0, 259.0], [3.1, 259.0], [3.2, 259.0], [3.3, 259.0], [3.4, 259.0], [3.5, 260.0], [3.6, 260.0], [3.7, 260.0], [3.8, 260.0], [3.9, 260.0], [4.0, 260.0], [4.1, 260.0], [4.2, 260.0], [4.3, 260.0], [4.4, 260.0], [4.5, 260.0], [4.6, 260.0], [4.7, 260.0], [4.8, 260.0], [4.9, 260.0], [5.0, 261.0], [5.1, 261.0], [5.2, 261.0], [5.3, 261.0], [5.4, 261.0], [5.5, 261.0], [5.6, 261.0], [5.7, 261.0], [5.8, 261.0], [5.9, 261.0], [6.0, 261.0], [6.1, 261.0], [6.2, 261.0], [6.3, 261.0], [6.4, 261.0], [6.5, 261.0], [6.6, 261.0], [6.7, 262.0], [6.8, 262.0], [6.9, 262.0], [7.0, 262.0], [7.1, 262.0], [7.2, 262.0], [7.3, 262.0], [7.4, 262.0], [7.5, 262.0], [7.6, 262.0], [7.7, 262.0], [7.8, 262.0], [7.9, 262.0], [8.0, 262.0], [8.1, 262.0], [8.2, 262.0], [8.3, 263.0], [8.4, 263.0], [8.5, 263.0], [8.6, 263.0], [8.7, 263.0], [8.8, 263.0], [8.9, 263.0], [9.0, 263.0], [9.1, 263.0], [9.2, 263.0], [9.3, 263.0], [9.4, 263.0], [9.5, 263.0], [9.6, 264.0], [9.7, 264.0], [9.8, 264.0], [9.9, 264.0], [10.0, 264.0], [10.1, 264.0], [10.2, 264.0], [10.3, 264.0], [10.4, 264.0], [10.5, 264.0], [10.6, 265.0], [10.7, 265.0], [10.8, 265.0], [10.9, 265.0], [11.0, 265.0], [11.1, 265.0], [11.2, 265.0], [11.3, 266.0], [11.4, 266.0], [11.5, 266.0], [11.6, 266.0], [11.7, 266.0], [11.8, 266.0], [11.9, 267.0], [12.0, 267.0], [12.1, 267.0], [12.2, 267.0], [12.3, 268.0], [12.4, 268.0], [12.5, 269.0], [12.6, 269.0], [12.7, 269.0], [12.8, 270.0], [12.9, 270.0], [13.0, 271.0], [13.1, 271.0], [13.2, 271.0], [13.3, 271.0], [13.4, 272.0], [13.5, 272.0], [13.6, 272.0], [13.7, 272.0], [13.8, 273.0], [13.9, 273.0], [14.0, 273.0], [14.1, 274.0], [14.2, 274.0], [14.3, 274.0], [14.4, 274.0], [14.5, 275.0], [14.6, 275.0], [14.7, 276.0], [14.8, 276.0], [14.9, 276.0], [15.0, 276.0], [15.1, 277.0], [15.2, 277.0], [15.3, 277.0], [15.4, 278.0], [15.5, 278.0], [15.6, 279.0], [15.7, 279.0], [15.8, 279.0], [15.9, 280.0], [16.0, 280.0], [16.1, 280.0], [16.2, 281.0], [16.3, 281.0], [16.4, 281.0], [16.5, 281.0], [16.6, 282.0], [16.7, 282.0], [16.8, 282.0], [16.9, 282.0], [17.0, 283.0], [17.1, 283.0], [17.2, 283.0], [17.3, 283.0], [17.4, 284.0], [17.5, 284.0], [17.6, 285.0], [17.7, 285.0], [17.8, 285.0], [17.9, 286.0], [18.0, 286.0], [18.1, 286.0], [18.2, 286.0], [18.3, 286.0], [18.4, 286.0], [18.5, 287.0], [18.6, 287.0], [18.7, 287.0], [18.8, 288.0], [18.9, 288.0], [19.0, 288.0], [19.1, 288.0], [19.2, 289.0], [19.3, 289.0], [19.4, 289.0], [19.5, 289.0], [19.6, 289.0], [19.7, 290.0], [19.8, 290.0], [19.9, 290.0], [20.0, 291.0], [20.1, 291.0], [20.2, 291.0], [20.3, 291.0], [20.4, 292.0], [20.5, 292.0], [20.6, 292.0], [20.7, 292.0], [20.8, 293.0], [20.9, 293.0], [21.0, 293.0], [21.1, 293.0], [21.2, 294.0], [21.3, 294.0], [21.4, 294.0], [21.5, 294.0], [21.6, 295.0], [21.7, 295.0], [21.8, 295.0], [21.9, 296.0], [22.0, 296.0], [22.1, 296.0], [22.2, 296.0], [22.3, 297.0], [22.4, 297.0], [22.5, 297.0], [22.6, 297.0], [22.7, 298.0], [22.8, 298.0], [22.9, 298.0], [23.0, 298.0], [23.1, 298.0], [23.2, 299.0], [23.3, 299.0], [23.4, 299.0], [23.5, 299.0], [23.6, 300.0], [23.7, 300.0], [23.8, 300.0], [23.9, 300.0], [24.0, 300.0], [24.1, 301.0], [24.2, 301.0], [24.3, 301.0], [24.4, 301.0], [24.5, 301.0], [24.6, 302.0], [24.7, 302.0], [24.8, 302.0], [24.9, 302.0], [25.0, 303.0], [25.1, 303.0], [25.2, 303.0], [25.3, 303.0], [25.4, 303.0], [25.5, 303.0], [25.6, 304.0], [25.7, 304.0], [25.8, 304.0], [25.9, 304.0], [26.0, 305.0], [26.1, 305.0], [26.2, 305.0], [26.3, 305.0], [26.4, 305.0], [26.5, 305.0], [26.6, 306.0], [26.7, 306.0], [26.8, 306.0], [26.9, 306.0], [27.0, 307.0], [27.1, 307.0], [27.2, 307.0], [27.3, 307.0], [27.4, 307.0], [27.5, 307.0], [27.6, 308.0], [27.7, 308.0], [27.8, 308.0], [27.9, 308.0], [28.0, 309.0], [28.1, 309.0], [28.2, 309.0], [28.3, 310.0], [28.4, 310.0], [28.5, 310.0], [28.6, 310.0], [28.7, 310.0], [28.8, 310.0], [28.9, 311.0], [29.0, 311.0], [29.1, 311.0], [29.2, 311.0], [29.3, 311.0], [29.4, 312.0], [29.5, 312.0], [29.6, 312.0], [29.7, 312.0], [29.8, 313.0], [29.9, 313.0], [30.0, 313.0], [30.1, 313.0], [30.2, 314.0], [30.3, 314.0], [30.4, 314.0], [30.5, 314.0], [30.6, 315.0], [30.7, 315.0], [30.8, 315.0], [30.9, 315.0], [31.0, 316.0], [31.1, 316.0], [31.2, 316.0], [31.3, 316.0], [31.4, 316.0], [31.5, 317.0], [31.6, 317.0], [31.7, 317.0], [31.8, 317.0], [31.9, 317.0], [32.0, 318.0], [32.1, 318.0], [32.2, 318.0], [32.3, 318.0], [32.4, 318.0], [32.5, 318.0], [32.6, 319.0], [32.7, 319.0], [32.8, 319.0], [32.9, 319.0], [33.0, 319.0], [33.1, 320.0], [33.2, 320.0], [33.3, 320.0], [33.4, 320.0], [33.5, 321.0], [33.6, 321.0], [33.7, 321.0], [33.8, 321.0], [33.9, 321.0], [34.0, 322.0], [34.1, 322.0], [34.2, 322.0], [34.3, 322.0], [34.4, 322.0], [34.5, 322.0], [34.6, 323.0], [34.7, 323.0], [34.8, 323.0], [34.9, 323.0], [35.0, 324.0], [35.1, 324.0], [35.2, 324.0], [35.3, 324.0], [35.4, 324.0], [35.5, 325.0], [35.6, 325.0], [35.7, 325.0], [35.8, 325.0], [35.9, 325.0], [36.0, 325.0], [36.1, 326.0], [36.2, 326.0], [36.3, 326.0], [36.4, 327.0], [36.5, 327.0], [36.6, 327.0], [36.7, 327.0], [36.8, 327.0], [36.9, 327.0], [37.0, 328.0], [37.1, 328.0], [37.2, 328.0], [37.3, 328.0], [37.4, 329.0], [37.5, 329.0], [37.6, 329.0], [37.7, 329.0], [37.8, 330.0], [37.9, 330.0], [38.0, 330.0], [38.1, 330.0], [38.2, 330.0], [38.3, 330.0], [38.4, 330.0], [38.5, 331.0], [38.6, 331.0], [38.7, 331.0], [38.8, 331.0], [38.9, 332.0], [39.0, 332.0], [39.1, 332.0], [39.2, 332.0], [39.3, 332.0], [39.4, 333.0], [39.5, 333.0], [39.6, 333.0], [39.7, 333.0], [39.8, 334.0], [39.9, 334.0], [40.0, 334.0], [40.1, 334.0], [40.2, 335.0], [40.3, 335.0], [40.4, 335.0], [40.5, 335.0], [40.6, 335.0], [40.7, 336.0], [40.8, 336.0], [40.9, 336.0], [41.0, 336.0], [41.1, 336.0], [41.2, 337.0], [41.3, 337.0], [41.4, 337.0], [41.5, 337.0], [41.6, 337.0], [41.7, 338.0], [41.8, 338.0], [41.9, 338.0], [42.0, 339.0], [42.1, 339.0], [42.2, 339.0], [42.3, 339.0], [42.4, 339.0], [42.5, 340.0], [42.6, 340.0], [42.7, 340.0], [42.8, 340.0], [42.9, 340.0], [43.0, 341.0], [43.1, 341.0], [43.2, 341.0], [43.3, 341.0], [43.4, 342.0], [43.5, 342.0], [43.6, 342.0], [43.7, 342.0], [43.8, 343.0], [43.9, 343.0], [44.0, 343.0], [44.1, 343.0], [44.2, 343.0], [44.3, 343.0], [44.4, 344.0], [44.5, 344.0], [44.6, 344.0], [44.7, 344.0], [44.8, 345.0], [44.9, 345.0], [45.0, 345.0], [45.1, 345.0], [45.2, 345.0], [45.3, 346.0], [45.4, 346.0], [45.5, 346.0], [45.6, 346.0], [45.7, 346.0], [45.8, 347.0], [45.9, 347.0], [46.0, 347.0], [46.1, 347.0], [46.2, 347.0], [46.3, 348.0], [46.4, 348.0], [46.5, 348.0], [46.6, 348.0], [46.7, 348.0], [46.8, 348.0], [46.9, 349.0], [47.0, 349.0], [47.1, 349.0], [47.2, 349.0], [47.3, 349.0], [47.4, 350.0], [47.5, 350.0], [47.6, 350.0], [47.7, 350.0], [47.8, 350.0], [47.9, 351.0], [48.0, 351.0], [48.1, 351.0], [48.2, 351.0], [48.3, 351.0], [48.4, 351.0], [48.5, 352.0], [48.6, 352.0], [48.7, 352.0], [48.8, 353.0], [48.9, 353.0], [49.0, 353.0], [49.1, 353.0], [49.2, 354.0], [49.3, 354.0], [49.4, 354.0], [49.5, 354.0], [49.6, 355.0], [49.7, 355.0], [49.8, 355.0], [49.9, 355.0], [50.0, 356.0], [50.1, 356.0], [50.2, 356.0], [50.3, 356.0], [50.4, 356.0], [50.5, 357.0], [50.6, 357.0], [50.7, 357.0], [50.8, 357.0], [50.9, 357.0], [51.0, 358.0], [51.1, 358.0], [51.2, 358.0], [51.3, 358.0], [51.4, 358.0], [51.5, 358.0], [51.6, 359.0], [51.7, 359.0], [51.8, 359.0], [51.9, 359.0], [52.0, 359.0], [52.1, 359.0], [52.2, 360.0], [52.3, 360.0], [52.4, 360.0], [52.5, 360.0], [52.6, 360.0], [52.7, 361.0], [52.8, 361.0], [52.9, 361.0], [53.0, 362.0], [53.1, 362.0], [53.2, 362.0], [53.3, 362.0], [53.4, 362.0], [53.5, 362.0], [53.6, 363.0], [53.7, 363.0], [53.8, 363.0], [53.9, 363.0], [54.0, 364.0], [54.1, 364.0], [54.2, 364.0], [54.3, 364.0], [54.4, 365.0], [54.5, 365.0], [54.6, 365.0], [54.7, 365.0], [54.8, 366.0], [54.9, 366.0], [55.0, 366.0], [55.1, 366.0], [55.2, 367.0], [55.3, 367.0], [55.4, 367.0], [55.5, 367.0], [55.6, 368.0], [55.7, 368.0], [55.8, 368.0], [55.9, 368.0], [56.0, 368.0], [56.1, 369.0], [56.2, 369.0], [56.3, 369.0], [56.4, 369.0], [56.5, 370.0], [56.6, 370.0], [56.7, 370.0], [56.8, 370.0], [56.9, 371.0], [57.0, 371.0], [57.1, 371.0], [57.2, 371.0], [57.3, 371.0], [57.4, 371.0], [57.5, 372.0], [57.6, 372.0], [57.7, 373.0], [57.8, 373.0], [57.9, 373.0], [58.0, 373.0], [58.1, 374.0], [58.2, 374.0], [58.3, 374.0], [58.4, 374.0], [58.5, 374.0], [58.6, 375.0], [58.7, 375.0], [58.8, 375.0], [58.9, 375.0], [59.0, 376.0], [59.1, 376.0], [59.2, 376.0], [59.3, 376.0], [59.4, 376.0], [59.5, 377.0], [59.6, 377.0], [59.7, 377.0], [59.8, 378.0], [59.9, 378.0], [60.0, 378.0], [60.1, 378.0], [60.2, 379.0], [60.3, 379.0], [60.4, 379.0], [60.5, 379.0], [60.6, 379.0], [60.7, 380.0], [60.8, 380.0], [60.9, 380.0], [61.0, 380.0], [61.1, 381.0], [61.2, 381.0], [61.3, 381.0], [61.4, 382.0], [61.5, 382.0], [61.6, 382.0], [61.7, 382.0], [61.8, 383.0], [61.9, 383.0], [62.0, 383.0], [62.1, 384.0], [62.2, 384.0], [62.3, 384.0], [62.4, 385.0], [62.5, 385.0], [62.6, 386.0], [62.7, 386.0], [62.8, 386.0], [62.9, 386.0], [63.0, 387.0], [63.1, 387.0], [63.2, 387.0], [63.3, 387.0], [63.4, 388.0], [63.5, 388.0], [63.6, 388.0], [63.7, 389.0], [63.8, 389.0], [63.9, 389.0], [64.0, 389.0], [64.1, 390.0], [64.2, 390.0], [64.3, 390.0], [64.4, 390.0], [64.5, 390.0], [64.6, 390.0], [64.7, 391.0], [64.8, 391.0], [64.9, 391.0], [65.0, 391.0], [65.1, 392.0], [65.2, 392.0], [65.3, 392.0], [65.4, 392.0], [65.5, 393.0], [65.6, 393.0], [65.7, 393.0], [65.8, 393.0], [65.9, 394.0], [66.0, 394.0], [66.1, 394.0], [66.2, 394.0], [66.3, 394.0], [66.4, 394.0], [66.5, 395.0], [66.6, 395.0], [66.7, 395.0], [66.8, 396.0], [66.9, 396.0], [67.0, 396.0], [67.1, 396.0], [67.2, 396.0], [67.3, 397.0], [67.4, 397.0], [67.5, 397.0], [67.6, 397.0], [67.7, 397.0], [67.8, 398.0], [67.9, 398.0], [68.0, 398.0], [68.1, 399.0], [68.2, 399.0], [68.3, 399.0], [68.4, 399.0], [68.5, 399.0], [68.6, 400.0], [68.7, 400.0], [68.8, 400.0], [68.9, 400.0], [69.0, 401.0], [69.1, 401.0], [69.2, 401.0], [69.3, 402.0], [69.4, 402.0], [69.5, 402.0], [69.6, 402.0], [69.7, 403.0], [69.8, 403.0], [69.9, 403.0], [70.0, 403.0], [70.1, 403.0], [70.2, 404.0], [70.3, 404.0], [70.4, 404.0], [70.5, 404.0], [70.6, 404.0], [70.7, 405.0], [70.8, 405.0], [70.9, 405.0], [71.0, 405.0], [71.1, 405.0], [71.2, 406.0], [71.3, 406.0], [71.4, 406.0], [71.5, 406.0], [71.6, 406.0], [71.7, 407.0], [71.8, 407.0], [71.9, 407.0], [72.0, 407.0], [72.1, 408.0], [72.2, 408.0], [72.3, 408.0], [72.4, 409.0], [72.5, 409.0], [72.6, 409.0], [72.7, 409.0], [72.8, 410.0], [72.9, 410.0], [73.0, 410.0], [73.1, 410.0], [73.2, 411.0], [73.3, 411.0], [73.4, 411.0], [73.5, 411.0], [73.6, 412.0], [73.7, 412.0], [73.8, 412.0], [73.9, 412.0], [74.0, 412.0], [74.1, 413.0], [74.2, 413.0], [74.3, 413.0], [74.4, 413.0], [74.5, 414.0], [74.6, 414.0], [74.7, 414.0], [74.8, 414.0], [74.9, 415.0], [75.0, 415.0], [75.1, 416.0], [75.2, 416.0], [75.3, 416.0], [75.4, 416.0], [75.5, 417.0], [75.6, 417.0], [75.7, 417.0], [75.8, 417.0], [75.9, 417.0], [76.0, 418.0], [76.1, 418.0], [76.2, 418.0], [76.3, 419.0], [76.4, 419.0], [76.5, 420.0], [76.6, 420.0], [76.7, 420.0], [76.8, 421.0], [76.9, 421.0], [77.0, 421.0], [77.1, 422.0], [77.2, 422.0], [77.3, 422.0], [77.4, 422.0], [77.5, 422.0], [77.6, 423.0], [77.7, 423.0], [77.8, 423.0], [77.9, 424.0], [78.0, 424.0], [78.1, 424.0], [78.2, 424.0], [78.3, 425.0], [78.4, 425.0], [78.5, 425.0], [78.6, 426.0], [78.7, 426.0], [78.8, 426.0], [78.9, 427.0], [79.0, 427.0], [79.1, 427.0], [79.2, 427.0], [79.3, 428.0], [79.4, 428.0], [79.5, 428.0], [79.6, 428.0], [79.7, 429.0], [79.8, 429.0], [79.9, 429.0], [80.0, 430.0], [80.1, 430.0], [80.2, 430.0], [80.3, 431.0], [80.4, 431.0], [80.5, 431.0], [80.6, 431.0], [80.7, 432.0], [80.8, 432.0], [80.9, 432.0], [81.0, 433.0], [81.1, 433.0], [81.2, 433.0], [81.3, 433.0], [81.4, 434.0], [81.5, 434.0], [81.6, 434.0], [81.7, 435.0], [81.8, 435.0], [81.9, 435.0], [82.0, 435.0], [82.1, 436.0], [82.2, 436.0], [82.3, 437.0], [82.4, 437.0], [82.5, 437.0], [82.6, 438.0], [82.7, 438.0], [82.8, 439.0], [82.9, 439.0], [83.0, 439.0], [83.1, 439.0], [83.2, 440.0], [83.3, 440.0], [83.4, 440.0], [83.5, 441.0], [83.6, 441.0], [83.7, 441.0], [83.8, 442.0], [83.9, 442.0], [84.0, 442.0], [84.1, 443.0], [84.2, 443.0], [84.3, 443.0], [84.4, 444.0], [84.5, 444.0], [84.6, 444.0], [84.7, 445.0], [84.8, 445.0], [84.9, 446.0], [85.0, 446.0], [85.1, 446.0], [85.2, 447.0], [85.3, 447.0], [85.4, 447.0], [85.5, 448.0], [85.6, 448.0], [85.7, 449.0], [85.8, 450.0], [85.9, 450.0], [86.0, 451.0], [86.1, 451.0], [86.2, 451.0], [86.3, 452.0], [86.4, 452.0], [86.5, 453.0], [86.6, 453.0], [86.7, 453.0], [86.8, 454.0], [86.9, 454.0], [87.0, 455.0], [87.1, 455.0], [87.2, 455.0], [87.3, 456.0], [87.4, 456.0], [87.5, 456.0], [87.6, 457.0], [87.7, 457.0], [87.8, 458.0], [87.9, 458.0], [88.0, 459.0], [88.1, 459.0], [88.2, 459.0], [88.3, 460.0], [88.4, 461.0], [88.5, 461.0], [88.6, 462.0], [88.7, 462.0], [88.8, 462.0], [88.9, 463.0], [89.0, 463.0], [89.1, 464.0], [89.2, 464.0], [89.3, 465.0], [89.4, 465.0], [89.5, 465.0], [89.6, 466.0], [89.7, 466.0], [89.8, 467.0], [89.9, 467.0], [90.0, 468.0], [90.1, 469.0], [90.2, 469.0], [90.3, 470.0], [90.4, 470.0], [90.5, 471.0], [90.6, 472.0], [90.7, 472.0], [90.8, 472.0], [90.9, 473.0], [91.0, 473.0], [91.1, 474.0], [91.2, 475.0], [91.3, 475.0], [91.4, 476.0], [91.5, 477.0], [91.6, 478.0], [91.7, 478.0], [91.8, 480.0], [91.9, 481.0], [92.0, 482.0], [92.1, 482.0], [92.2, 483.0], [92.3, 484.0], [92.4, 484.0], [92.5, 485.0], [92.6, 486.0], [92.7, 486.0], [92.8, 488.0], [92.9, 489.0], [93.0, 490.0], [93.1, 490.0], [93.2, 491.0], [93.3, 491.0], [93.4, 493.0], [93.5, 494.0], [93.6, 494.0], [93.7, 496.0], [93.8, 497.0], [93.9, 498.0], [94.0, 498.0], [94.1, 499.0], [94.2, 500.0], [94.3, 501.0], [94.4, 503.0], [94.5, 505.0], [94.6, 506.0], [94.7, 507.0], [94.8, 507.0], [94.9, 508.0], [95.0, 508.0], [95.1, 510.0], [95.2, 511.0], [95.3, 513.0], [95.4, 515.0], [95.5, 517.0], [95.6, 519.0], [95.7, 520.0], [95.8, 523.0], [95.9, 524.0], [96.0, 525.0], [96.1, 526.0], [96.2, 528.0], [96.3, 530.0], [96.4, 531.0], [96.5, 533.0], [96.6, 536.0], [96.7, 539.0], [96.8, 540.0], [96.9, 543.0], [97.0, 544.0], [97.1, 547.0], [97.2, 551.0], [97.3, 556.0], [97.4, 558.0], [97.5, 560.0], [97.6, 564.0], [97.7, 568.0], [97.8, 569.0], [97.9, 574.0], [98.0, 579.0], [98.1, 581.0], [98.2, 587.0], [98.3, 596.0], [98.4, 610.0], [98.5, 620.0], [98.6, 628.0], [98.7, 640.0], [98.8, 649.0], [98.9, 673.0], [99.0, 693.0], [99.1, 727.0], [99.2, 758.0], [99.3, 794.0], [99.4, 824.0], [99.5, 878.0], [99.6, 925.0], [99.7, 960.0], [99.8, 1044.0], [99.9, 1090.0], [100.0, 1569.0]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 2703.0, "series": [{"data": [[1100.0, 4.0], [300.0, 2703.0], [600.0, 41.0], [1300.0, 1.0], [700.0, 19.0], [1500.0, 1.0], [200.0, 1416.0], [400.0, 1536.0], [800.0, 14.0], [900.0, 11.0], [500.0, 252.0], [1000.0, 10.0]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5661.0, "series": [{"data": [[0.0, 5661.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 346.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.697674418604654, "minX": 1.62599718E12, "maxY": 50.0, "series": [{"data": [[1.62599736E12, 50.0], [1.62599748E12, 48.69238683127572], [1.62599724E12, 45.48854337152218], [1.62599742E12, 50.0], [1.6259973E12, 50.0], [1.62599718E12, 11.697674418604654]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599748E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 274.53846153846155, "minX": 1.0, "maxY": 517.7647058823528, "series": [{"data": [[2.0, 303.0], [3.0, 290.42857142857144], [4.0, 287.5], [5.0, 281.74999999999994], [6.0, 274.53846153846155], [7.0, 292.54545454545456], [8.0, 297.50000000000006], [9.0, 290.00000000000006], [10.0, 313.07142857142856], [11.0, 295.76923076923083], [12.0, 319.9230769230769], [13.0, 363.1428571428572], [14.0, 424.9230769230769], [15.0, 391.58333333333337], [16.0, 392.92857142857144], [17.0, 390.6000000000001], [18.0, 442.6153846153846], [19.0, 336.5], [20.0, 404.6428571428571], [21.0, 390.25], [22.0, 345.37500000000006], [23.0, 391.8461538461538], [24.0, 317.4615384615385], [25.0, 386.86666666666673], [26.0, 341.0769230769231], [27.0, 389.0833333333333], [28.0, 382.37499999999994], [29.0, 383.77777777777777], [30.0, 473.0], [31.0, 411.78571428571433], [32.0, 486.33333333333326], [33.0, 421.7692307692307], [34.0, 388.0], [35.0, 451.75], [36.0, 415.9333333333333], [37.0, 419.22222222222223], [38.0, 475.05882352941177], [39.0, 468.7857142857143], [40.0, 392.3636363636363], [41.0, 517.7647058823528], [42.0, 462.09999999999997], [43.0, 447.66666666666663], [44.0, 491.4166666666667], [45.0, 438.4285714285715], [46.0, 490.12500000000006], [47.0, 379.72727272727275], [48.0, 442.46153846153845], [49.0, 474.50000000000006], [50.0, 365.4762702400884], [1.0, 305.0]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}, {"data": [[47.5001664447402, 368.50749001331445]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 634.25, "minX": 1.62599718E12, "maxY": 4439.933333333333, "series": [{"data": [[1.62599736E12, 4356.366666666667], [1.62599748E12, 3531.6], [1.62599724E12, 4439.933333333333], [1.62599742E12, 4363.633333333333], [1.6259973E12, 4356.366666666667], [1.62599718E12, 781.1666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62599736E12, 3537.05], [1.62599748E12, 2867.4], [1.62599724E12, 3604.9], [1.62599742E12, 3542.95], [1.6259973E12, 3537.05], [1.62599718E12, 634.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599748E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 335.8976744186049, "minX": 1.62599718E12, "maxY": 393.1315570358035, "series": [{"data": [[1.62599736E12, 360.8415346121761], [1.62599748E12, 353.3323045267492], [1.62599724E12, 380.9672667757775], [1.62599742E12, 393.1315570358035], [1.6259973E12, 356.9591326105085], [1.62599718E12, 335.8976744186049]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599748E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 335.54883720930235, "minX": 1.62599718E12, "maxY": 392.76935886760964, "series": [{"data": [[1.62599736E12, 360.47206005004193], [1.62599748E12, 352.96399176954776], [1.62599724E12, 380.5875613747953], [1.62599742E12, 392.76935886760964], [1.6259973E12, 356.5404503753127], [1.62599718E12, 335.54883720930235]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599748E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 37.88065843621394, "minX": 1.62599718E12, "maxY": 38.097674418604655, "series": [{"data": [[1.62599736E12, 38.060884070058385], [1.62599748E12, 37.88065843621394], [1.62599724E12, 37.90998363338788], [1.62599742E12, 37.96419650291423], [1.6259973E12, 37.89324437030865], [1.62599718E12, 38.097674418604655]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599748E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 254.0, "minX": 1.62599718E12, "maxY": 1569.0, "series": [{"data": [[1.62599736E12, 581.0], [1.62599748E12, 577.0], [1.62599724E12, 689.0], [1.62599742E12, 1569.0], [1.6259973E12, 660.0], [1.62599718E12, 599.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62599736E12, 258.0], [1.62599748E12, 257.0], [1.62599724E12, 258.0], [1.62599742E12, 258.0], [1.6259973E12, 257.0], [1.62599718E12, 256.9439999485016]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62599736E12, 258.0], [1.62599748E12, 257.0], [1.62599724E12, 258.0], [1.62599742E12, 258.0], [1.6259973E12, 257.0], [1.62599718E12, 257.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62599736E12, 258.0], [1.62599748E12, 257.0], [1.62599724E12, 258.0], [1.62599742E12, 258.0], [1.6259973E12, 257.0], [1.62599718E12, 257.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62599736E12, 254.0], [1.62599748E12, 254.0], [1.62599724E12, 255.0], [1.62599742E12, 255.0], [1.6259973E12, 254.0], [1.62599718E12, 256.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62599736E12, 358.0], [1.62599748E12, 347.0], [1.62599724E12, 368.0], [1.62599742E12, 363.0], [1.6259973E12, 349.0], [1.62599718E12, 305.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599748E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 261.5, "minX": 4.0, "maxY": 508.0, "series": [{"data": [[10.0, 263.5], [11.0, 478.0], [4.0, 261.5], [16.0, 263.0], [17.0, 319.0], [18.0, 318.5], [19.0, 347.0], [20.0, 343.0], [21.0, 367.0], [22.0, 388.0], [23.0, 404.0], [24.0, 458.0], [25.0, 508.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 260.5, "minX": 4.0, "maxY": 507.5, "series": [{"data": [[10.0, 263.0], [11.0, 478.0], [4.0, 260.5], [16.0, 262.0], [17.0, 318.0], [18.0, 317.5], [19.0, 346.0], [20.0, 343.0], [21.0, 367.0], [22.0, 388.0], [23.0, 403.0], [24.0, 457.5], [25.0, 507.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.7, "minX": 1.62599718E12, "maxY": 20.4, "series": [{"data": [[1.62599736E12, 20.0], [1.62599748E12, 16.033333333333335], [1.62599724E12, 20.4], [1.62599742E12, 20.0], [1.6259973E12, 20.0], [1.62599718E12, 3.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599748E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.5833333333333335, "minX": 1.62599718E12, "maxY": 20.366666666666667, "series": [{"data": [[1.62599736E12, 19.983333333333334], [1.62599748E12, 16.2], [1.62599724E12, 20.366666666666667], [1.62599742E12, 20.016666666666666], [1.6259973E12, 19.983333333333334], [1.62599718E12, 3.5833333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599748E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.5833333333333335, "minX": 1.62599718E12, "maxY": 20.366666666666667, "series": [{"data": [[1.62599736E12, 19.983333333333334], [1.62599748E12, 16.2], [1.62599724E12, 20.366666666666667], [1.62599742E12, 20.016666666666666], [1.6259973E12, 19.983333333333334], [1.62599718E12, 3.5833333333333335]], "isOverall": false, "label": "cpu\/1\/ktor\/ktor-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599748E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.5833333333333335, "minX": 1.62599718E12, "maxY": 20.366666666666667, "series": [{"data": [[1.62599736E12, 19.983333333333334], [1.62599748E12, 16.2], [1.62599724E12, 20.366666666666667], [1.62599742E12, 20.016666666666666], [1.6259973E12, 19.983333333333334], [1.62599718E12, 3.5833333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599748E12, "title": "Total Transactions Per Second"}},
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

