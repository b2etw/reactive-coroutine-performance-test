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
        data: {"result": {"minY": 249.0, "minX": 0.0, "maxY": 826.0, "series": [{"data": [[0.0, 249.0], [0.1, 250.0], [0.2, 250.0], [0.3, 250.0], [0.4, 251.0], [0.5, 251.0], [0.6, 251.0], [0.7, 251.0], [0.8, 252.0], [0.9, 252.0], [1.0, 252.0], [1.1, 252.0], [1.2, 252.0], [1.3, 252.0], [1.4, 252.0], [1.5, 252.0], [1.6, 252.0], [1.7, 252.0], [1.8, 252.0], [1.9, 252.0], [2.0, 253.0], [2.1, 253.0], [2.2, 253.0], [2.3, 253.0], [2.4, 253.0], [2.5, 253.0], [2.6, 253.0], [2.7, 253.0], [2.8, 253.0], [2.9, 253.0], [3.0, 253.0], [3.1, 253.0], [3.2, 253.0], [3.3, 253.0], [3.4, 254.0], [3.5, 254.0], [3.6, 254.0], [3.7, 254.0], [3.8, 254.0], [3.9, 254.0], [4.0, 254.0], [4.1, 254.0], [4.2, 254.0], [4.3, 254.0], [4.4, 254.0], [4.5, 254.0], [4.6, 254.0], [4.7, 254.0], [4.8, 254.0], [4.9, 254.0], [5.0, 254.0], [5.1, 254.0], [5.2, 254.0], [5.3, 254.0], [5.4, 255.0], [5.5, 255.0], [5.6, 255.0], [5.7, 255.0], [5.8, 255.0], [5.9, 255.0], [6.0, 255.0], [6.1, 255.0], [6.2, 255.0], [6.3, 255.0], [6.4, 255.0], [6.5, 255.0], [6.6, 255.0], [6.7, 255.0], [6.8, 255.0], [6.9, 255.0], [7.0, 255.0], [7.1, 255.0], [7.2, 255.0], [7.3, 255.0], [7.4, 255.0], [7.5, 255.0], [7.6, 255.0], [7.7, 255.0], [7.8, 255.0], [7.9, 256.0], [8.0, 256.0], [8.1, 256.0], [8.2, 256.0], [8.3, 256.0], [8.4, 256.0], [8.5, 256.0], [8.6, 256.0], [8.7, 256.0], [8.8, 256.0], [8.9, 256.0], [9.0, 256.0], [9.1, 256.0], [9.2, 256.0], [9.3, 256.0], [9.4, 256.0], [9.5, 256.0], [9.6, 256.0], [9.7, 257.0], [9.8, 257.0], [9.9, 257.0], [10.0, 257.0], [10.1, 257.0], [10.2, 257.0], [10.3, 257.0], [10.4, 257.0], [10.5, 257.0], [10.6, 257.0], [10.7, 257.0], [10.8, 257.0], [10.9, 257.0], [11.0, 258.0], [11.1, 258.0], [11.2, 258.0], [11.3, 258.0], [11.4, 258.0], [11.5, 258.0], [11.6, 258.0], [11.7, 258.0], [11.8, 258.0], [11.9, 258.0], [12.0, 259.0], [12.1, 259.0], [12.2, 259.0], [12.3, 259.0], [12.4, 259.0], [12.5, 259.0], [12.6, 259.0], [12.7, 259.0], [12.8, 260.0], [12.9, 260.0], [13.0, 260.0], [13.1, 260.0], [13.2, 261.0], [13.3, 261.0], [13.4, 261.0], [13.5, 261.0], [13.6, 262.0], [13.7, 262.0], [13.8, 263.0], [13.9, 263.0], [14.0, 263.0], [14.1, 263.0], [14.2, 263.0], [14.3, 264.0], [14.4, 264.0], [14.5, 265.0], [14.6, 265.0], [14.7, 265.0], [14.8, 266.0], [14.9, 266.0], [15.0, 266.0], [15.1, 266.0], [15.2, 267.0], [15.3, 267.0], [15.4, 267.0], [15.5, 268.0], [15.6, 268.0], [15.7, 269.0], [15.8, 269.0], [15.9, 269.0], [16.0, 269.0], [16.1, 270.0], [16.2, 270.0], [16.3, 270.0], [16.4, 270.0], [16.5, 271.0], [16.6, 271.0], [16.7, 271.0], [16.8, 272.0], [16.9, 272.0], [17.0, 272.0], [17.1, 273.0], [17.2, 273.0], [17.3, 273.0], [17.4, 273.0], [17.5, 274.0], [17.6, 274.0], [17.7, 275.0], [17.8, 275.0], [17.9, 275.0], [18.0, 276.0], [18.1, 276.0], [18.2, 276.0], [18.3, 277.0], [18.4, 277.0], [18.5, 277.0], [18.6, 277.0], [18.7, 277.0], [18.8, 278.0], [18.9, 278.0], [19.0, 278.0], [19.1, 279.0], [19.2, 279.0], [19.3, 279.0], [19.4, 279.0], [19.5, 280.0], [19.6, 280.0], [19.7, 280.0], [19.8, 281.0], [19.9, 281.0], [20.0, 282.0], [20.1, 282.0], [20.2, 282.0], [20.3, 282.0], [20.4, 283.0], [20.5, 283.0], [20.6, 283.0], [20.7, 283.0], [20.8, 284.0], [20.9, 284.0], [21.0, 285.0], [21.1, 285.0], [21.2, 285.0], [21.3, 286.0], [21.4, 286.0], [21.5, 286.0], [21.6, 287.0], [21.7, 287.0], [21.8, 287.0], [21.9, 287.0], [22.0, 288.0], [22.1, 288.0], [22.2, 288.0], [22.3, 288.0], [22.4, 289.0], [22.5, 289.0], [22.6, 289.0], [22.7, 289.0], [22.8, 289.0], [22.9, 290.0], [23.0, 290.0], [23.1, 290.0], [23.2, 291.0], [23.3, 291.0], [23.4, 291.0], [23.5, 291.0], [23.6, 291.0], [23.7, 292.0], [23.8, 292.0], [23.9, 292.0], [24.0, 292.0], [24.1, 292.0], [24.2, 293.0], [24.3, 293.0], [24.4, 293.0], [24.5, 293.0], [24.6, 294.0], [24.7, 294.0], [24.8, 294.0], [24.9, 294.0], [25.0, 295.0], [25.1, 295.0], [25.2, 295.0], [25.3, 295.0], [25.4, 295.0], [25.5, 295.0], [25.6, 296.0], [25.7, 296.0], [25.8, 297.0], [25.9, 297.0], [26.0, 297.0], [26.1, 298.0], [26.2, 298.0], [26.3, 298.0], [26.4, 298.0], [26.5, 298.0], [26.6, 299.0], [26.7, 299.0], [26.8, 300.0], [26.9, 300.0], [27.0, 300.0], [27.1, 300.0], [27.2, 301.0], [27.3, 301.0], [27.4, 301.0], [27.5, 301.0], [27.6, 301.0], [27.7, 302.0], [27.8, 302.0], [27.9, 302.0], [28.0, 302.0], [28.1, 302.0], [28.2, 303.0], [28.3, 303.0], [28.4, 303.0], [28.5, 303.0], [28.6, 304.0], [28.7, 304.0], [28.8, 305.0], [28.9, 305.0], [29.0, 305.0], [29.1, 306.0], [29.2, 306.0], [29.3, 306.0], [29.4, 307.0], [29.5, 307.0], [29.6, 307.0], [29.7, 308.0], [29.8, 308.0], [29.9, 308.0], [30.0, 309.0], [30.1, 309.0], [30.2, 309.0], [30.3, 309.0], [30.4, 310.0], [30.5, 310.0], [30.6, 310.0], [30.7, 310.0], [30.8, 311.0], [30.9, 311.0], [31.0, 311.0], [31.1, 311.0], [31.2, 311.0], [31.3, 312.0], [31.4, 312.0], [31.5, 312.0], [31.6, 312.0], [31.7, 312.0], [31.8, 313.0], [31.9, 313.0], [32.0, 313.0], [32.1, 313.0], [32.2, 313.0], [32.3, 314.0], [32.4, 314.0], [32.5, 314.0], [32.6, 314.0], [32.7, 314.0], [32.8, 315.0], [32.9, 315.0], [33.0, 315.0], [33.1, 315.0], [33.2, 316.0], [33.3, 316.0], [33.4, 316.0], [33.5, 316.0], [33.6, 316.0], [33.7, 316.0], [33.8, 316.0], [33.9, 317.0], [34.0, 317.0], [34.1, 317.0], [34.2, 317.0], [34.3, 317.0], [34.4, 318.0], [34.5, 318.0], [34.6, 318.0], [34.7, 318.0], [34.8, 319.0], [34.9, 319.0], [35.0, 319.0], [35.1, 319.0], [35.2, 320.0], [35.3, 320.0], [35.4, 320.0], [35.5, 320.0], [35.6, 321.0], [35.7, 321.0], [35.8, 321.0], [35.9, 321.0], [36.0, 321.0], [36.1, 321.0], [36.2, 322.0], [36.3, 322.0], [36.4, 322.0], [36.5, 322.0], [36.6, 323.0], [36.7, 323.0], [36.8, 323.0], [36.9, 323.0], [37.0, 323.0], [37.1, 323.0], [37.2, 324.0], [37.3, 324.0], [37.4, 324.0], [37.5, 324.0], [37.6, 324.0], [37.7, 325.0], [37.8, 325.0], [37.9, 325.0], [38.0, 325.0], [38.1, 325.0], [38.2, 326.0], [38.3, 326.0], [38.4, 326.0], [38.5, 326.0], [38.6, 327.0], [38.7, 327.0], [38.8, 327.0], [38.9, 328.0], [39.0, 328.0], [39.1, 328.0], [39.2, 328.0], [39.3, 329.0], [39.4, 329.0], [39.5, 329.0], [39.6, 330.0], [39.7, 330.0], [39.8, 330.0], [39.9, 330.0], [40.0, 331.0], [40.1, 331.0], [40.2, 331.0], [40.3, 331.0], [40.4, 331.0], [40.5, 332.0], [40.6, 332.0], [40.7, 332.0], [40.8, 333.0], [40.9, 333.0], [41.0, 333.0], [41.1, 333.0], [41.2, 333.0], [41.3, 334.0], [41.4, 334.0], [41.5, 334.0], [41.6, 335.0], [41.7, 335.0], [41.8, 335.0], [41.9, 335.0], [42.0, 336.0], [42.1, 336.0], [42.2, 336.0], [42.3, 337.0], [42.4, 337.0], [42.5, 337.0], [42.6, 337.0], [42.7, 337.0], [42.8, 338.0], [42.9, 338.0], [43.0, 338.0], [43.1, 338.0], [43.2, 339.0], [43.3, 339.0], [43.4, 339.0], [43.5, 339.0], [43.6, 339.0], [43.7, 339.0], [43.8, 340.0], [43.9, 340.0], [44.0, 340.0], [44.1, 340.0], [44.2, 340.0], [44.3, 340.0], [44.4, 341.0], [44.5, 341.0], [44.6, 341.0], [44.7, 341.0], [44.8, 341.0], [44.9, 342.0], [45.0, 342.0], [45.1, 342.0], [45.2, 342.0], [45.3, 342.0], [45.4, 343.0], [45.5, 343.0], [45.6, 343.0], [45.7, 343.0], [45.8, 343.0], [45.9, 343.0], [46.0, 344.0], [46.1, 344.0], [46.2, 344.0], [46.3, 344.0], [46.4, 345.0], [46.5, 345.0], [46.6, 345.0], [46.7, 345.0], [46.8, 346.0], [46.9, 346.0], [47.0, 346.0], [47.1, 346.0], [47.2, 346.0], [47.3, 346.0], [47.4, 347.0], [47.5, 347.0], [47.6, 347.0], [47.7, 347.0], [47.8, 347.0], [47.9, 348.0], [48.0, 348.0], [48.1, 348.0], [48.2, 348.0], [48.3, 349.0], [48.4, 349.0], [48.5, 349.0], [48.6, 350.0], [48.7, 350.0], [48.8, 351.0], [48.9, 351.0], [49.0, 351.0], [49.1, 351.0], [49.2, 352.0], [49.3, 352.0], [49.4, 352.0], [49.5, 352.0], [49.6, 352.0], [49.7, 353.0], [49.8, 353.0], [49.9, 353.0], [50.0, 353.0], [50.1, 353.0], [50.2, 354.0], [50.3, 354.0], [50.4, 354.0], [50.5, 354.0], [50.6, 354.0], [50.7, 355.0], [50.8, 355.0], [50.9, 356.0], [51.0, 356.0], [51.1, 356.0], [51.2, 357.0], [51.3, 357.0], [51.4, 357.0], [51.5, 357.0], [51.6, 358.0], [51.7, 358.0], [51.8, 358.0], [51.9, 359.0], [52.0, 359.0], [52.1, 359.0], [52.2, 360.0], [52.3, 360.0], [52.4, 360.0], [52.5, 360.0], [52.6, 360.0], [52.7, 360.0], [52.8, 360.0], [52.9, 361.0], [53.0, 361.0], [53.1, 361.0], [53.2, 362.0], [53.3, 362.0], [53.4, 362.0], [53.5, 362.0], [53.6, 362.0], [53.7, 363.0], [53.8, 363.0], [53.9, 363.0], [54.0, 364.0], [54.1, 364.0], [54.2, 364.0], [54.3, 364.0], [54.4, 365.0], [54.5, 365.0], [54.6, 365.0], [54.7, 365.0], [54.8, 366.0], [54.9, 366.0], [55.0, 366.0], [55.1, 366.0], [55.2, 366.0], [55.3, 367.0], [55.4, 367.0], [55.5, 367.0], [55.6, 367.0], [55.7, 367.0], [55.8, 368.0], [55.9, 368.0], [56.0, 368.0], [56.1, 368.0], [56.2, 369.0], [56.3, 369.0], [56.4, 369.0], [56.5, 370.0], [56.6, 370.0], [56.7, 370.0], [56.8, 370.0], [56.9, 371.0], [57.0, 371.0], [57.1, 371.0], [57.2, 371.0], [57.3, 372.0], [57.4, 372.0], [57.5, 372.0], [57.6, 373.0], [57.7, 373.0], [57.8, 373.0], [57.9, 373.0], [58.0, 373.0], [58.1, 374.0], [58.2, 374.0], [58.3, 374.0], [58.4, 374.0], [58.5, 375.0], [58.6, 375.0], [58.7, 375.0], [58.8, 376.0], [58.9, 376.0], [59.0, 376.0], [59.1, 376.0], [59.2, 377.0], [59.3, 377.0], [59.4, 377.0], [59.5, 377.0], [59.6, 378.0], [59.7, 378.0], [59.8, 378.0], [59.9, 379.0], [60.0, 379.0], [60.1, 379.0], [60.2, 379.0], [60.3, 380.0], [60.4, 380.0], [60.5, 381.0], [60.6, 381.0], [60.7, 381.0], [60.8, 381.0], [60.9, 382.0], [61.0, 382.0], [61.1, 382.0], [61.2, 382.0], [61.3, 383.0], [61.4, 383.0], [61.5, 383.0], [61.6, 384.0], [61.7, 384.0], [61.8, 384.0], [61.9, 385.0], [62.0, 385.0], [62.1, 385.0], [62.2, 386.0], [62.3, 386.0], [62.4, 386.0], [62.5, 387.0], [62.6, 387.0], [62.7, 387.0], [62.8, 388.0], [62.9, 388.0], [63.0, 388.0], [63.1, 388.0], [63.2, 388.0], [63.3, 389.0], [63.4, 389.0], [63.5, 390.0], [63.6, 390.0], [63.7, 390.0], [63.8, 390.0], [63.9, 390.0], [64.0, 391.0], [64.1, 391.0], [64.2, 391.0], [64.3, 391.0], [64.4, 392.0], [64.5, 392.0], [64.6, 392.0], [64.7, 392.0], [64.8, 393.0], [64.9, 393.0], [65.0, 393.0], [65.1, 393.0], [65.2, 394.0], [65.3, 394.0], [65.4, 394.0], [65.5, 394.0], [65.6, 394.0], [65.7, 395.0], [65.8, 395.0], [65.9, 395.0], [66.0, 396.0], [66.1, 396.0], [66.2, 396.0], [66.3, 397.0], [66.4, 397.0], [66.5, 397.0], [66.6, 397.0], [66.7, 398.0], [66.8, 398.0], [66.9, 398.0], [67.0, 398.0], [67.1, 399.0], [67.2, 399.0], [67.3, 399.0], [67.4, 399.0], [67.5, 400.0], [67.6, 400.0], [67.7, 401.0], [67.8, 401.0], [67.9, 401.0], [68.0, 402.0], [68.1, 402.0], [68.2, 402.0], [68.3, 403.0], [68.4, 403.0], [68.5, 403.0], [68.6, 404.0], [68.7, 404.0], [68.8, 404.0], [68.9, 405.0], [69.0, 405.0], [69.1, 405.0], [69.2, 406.0], [69.3, 406.0], [69.4, 406.0], [69.5, 407.0], [69.6, 407.0], [69.7, 407.0], [69.8, 408.0], [69.9, 408.0], [70.0, 408.0], [70.1, 409.0], [70.2, 409.0], [70.3, 409.0], [70.4, 410.0], [70.5, 410.0], [70.6, 410.0], [70.7, 411.0], [70.8, 411.0], [70.9, 411.0], [71.0, 412.0], [71.1, 412.0], [71.2, 412.0], [71.3, 412.0], [71.4, 412.0], [71.5, 413.0], [71.6, 413.0], [71.7, 414.0], [71.8, 414.0], [71.9, 414.0], [72.0, 414.0], [72.1, 415.0], [72.2, 415.0], [72.3, 415.0], [72.4, 415.0], [72.5, 416.0], [72.6, 416.0], [72.7, 416.0], [72.8, 416.0], [72.9, 417.0], [73.0, 417.0], [73.1, 417.0], [73.2, 418.0], [73.3, 418.0], [73.4, 418.0], [73.5, 418.0], [73.6, 419.0], [73.7, 419.0], [73.8, 419.0], [73.9, 419.0], [74.0, 419.0], [74.1, 420.0], [74.2, 420.0], [74.3, 420.0], [74.4, 421.0], [74.5, 421.0], [74.6, 421.0], [74.7, 422.0], [74.8, 422.0], [74.9, 422.0], [75.0, 423.0], [75.1, 423.0], [75.2, 423.0], [75.3, 424.0], [75.4, 424.0], [75.5, 424.0], [75.6, 425.0], [75.7, 425.0], [75.8, 425.0], [75.9, 425.0], [76.0, 426.0], [76.1, 426.0], [76.2, 426.0], [76.3, 426.0], [76.4, 427.0], [76.5, 427.0], [76.6, 428.0], [76.7, 428.0], [76.8, 428.0], [76.9, 429.0], [77.0, 429.0], [77.1, 430.0], [77.2, 430.0], [77.3, 430.0], [77.4, 431.0], [77.5, 431.0], [77.6, 432.0], [77.7, 432.0], [77.8, 432.0], [77.9, 432.0], [78.0, 432.0], [78.1, 433.0], [78.2, 433.0], [78.3, 433.0], [78.4, 434.0], [78.5, 434.0], [78.6, 435.0], [78.7, 435.0], [78.8, 436.0], [78.9, 436.0], [79.0, 436.0], [79.1, 437.0], [79.2, 437.0], [79.3, 437.0], [79.4, 438.0], [79.5, 438.0], [79.6, 439.0], [79.7, 439.0], [79.8, 439.0], [79.9, 439.0], [80.0, 440.0], [80.1, 440.0], [80.2, 440.0], [80.3, 441.0], [80.4, 441.0], [80.5, 442.0], [80.6, 442.0], [80.7, 443.0], [80.8, 443.0], [80.9, 444.0], [81.0, 444.0], [81.1, 444.0], [81.2, 445.0], [81.3, 445.0], [81.4, 445.0], [81.5, 446.0], [81.6, 446.0], [81.7, 446.0], [81.8, 447.0], [81.9, 447.0], [82.0, 448.0], [82.1, 448.0], [82.2, 448.0], [82.3, 449.0], [82.4, 449.0], [82.5, 450.0], [82.6, 450.0], [82.7, 451.0], [82.8, 451.0], [82.9, 451.0], [83.0, 452.0], [83.1, 452.0], [83.2, 453.0], [83.3, 453.0], [83.4, 453.0], [83.5, 454.0], [83.6, 454.0], [83.7, 454.0], [83.8, 455.0], [83.9, 455.0], [84.0, 456.0], [84.1, 456.0], [84.2, 456.0], [84.3, 457.0], [84.4, 457.0], [84.5, 457.0], [84.6, 458.0], [84.7, 458.0], [84.8, 459.0], [84.9, 459.0], [85.0, 460.0], [85.1, 460.0], [85.2, 460.0], [85.3, 460.0], [85.4, 461.0], [85.5, 462.0], [85.6, 462.0], [85.7, 462.0], [85.8, 462.0], [85.9, 463.0], [86.0, 463.0], [86.1, 463.0], [86.2, 464.0], [86.3, 464.0], [86.4, 465.0], [86.5, 465.0], [86.6, 466.0], [86.7, 466.0], [86.8, 467.0], [86.9, 467.0], [87.0, 468.0], [87.1, 468.0], [87.2, 469.0], [87.3, 469.0], [87.4, 469.0], [87.5, 470.0], [87.6, 471.0], [87.7, 471.0], [87.8, 472.0], [87.9, 472.0], [88.0, 473.0], [88.1, 473.0], [88.2, 473.0], [88.3, 474.0], [88.4, 474.0], [88.5, 474.0], [88.6, 475.0], [88.7, 475.0], [88.8, 475.0], [88.9, 475.0], [89.0, 476.0], [89.1, 477.0], [89.2, 477.0], [89.3, 478.0], [89.4, 479.0], [89.5, 479.0], [89.6, 480.0], [89.7, 480.0], [89.8, 481.0], [89.9, 481.0], [90.0, 482.0], [90.1, 483.0], [90.2, 483.0], [90.3, 483.0], [90.4, 484.0], [90.5, 485.0], [90.6, 486.0], [90.7, 486.0], [90.8, 486.0], [90.9, 487.0], [91.0, 487.0], [91.1, 488.0], [91.2, 488.0], [91.3, 489.0], [91.4, 490.0], [91.5, 490.0], [91.6, 491.0], [91.7, 491.0], [91.8, 492.0], [91.9, 492.0], [92.0, 493.0], [92.1, 493.0], [92.2, 494.0], [92.3, 495.0], [92.4, 495.0], [92.5, 495.0], [92.6, 497.0], [92.7, 497.0], [92.8, 498.0], [92.9, 498.0], [93.0, 499.0], [93.1, 500.0], [93.2, 501.0], [93.3, 501.0], [93.4, 502.0], [93.5, 503.0], [93.6, 504.0], [93.7, 504.0], [93.8, 505.0], [93.9, 505.0], [94.0, 506.0], [94.1, 507.0], [94.2, 508.0], [94.3, 509.0], [94.4, 509.0], [94.5, 510.0], [94.6, 510.0], [94.7, 511.0], [94.8, 512.0], [94.9, 512.0], [95.0, 514.0], [95.1, 515.0], [95.2, 516.0], [95.3, 516.0], [95.4, 517.0], [95.5, 518.0], [95.6, 519.0], [95.7, 520.0], [95.8, 521.0], [95.9, 522.0], [96.0, 522.0], [96.1, 523.0], [96.2, 525.0], [96.3, 526.0], [96.4, 527.0], [96.5, 528.0], [96.6, 529.0], [96.7, 533.0], [96.8, 535.0], [96.9, 537.0], [97.0, 539.0], [97.1, 540.0], [97.2, 541.0], [97.3, 542.0], [97.4, 543.0], [97.5, 544.0], [97.6, 545.0], [97.7, 546.0], [97.8, 550.0], [97.9, 552.0], [98.0, 554.0], [98.1, 557.0], [98.2, 562.0], [98.3, 567.0], [98.4, 572.0], [98.5, 577.0], [98.6, 582.0], [98.7, 584.0], [98.8, 589.0], [98.9, 595.0], [99.0, 603.0], [99.1, 611.0], [99.2, 617.0], [99.3, 631.0], [99.4, 637.0], [99.5, 642.0], [99.6, 655.0], [99.7, 671.0], [99.8, 678.0], [99.9, 714.0], [100.0, 826.0]], "isOverall": false, "label": "cpu\/1\/spring\/flux", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 2443.0, "series": [{"data": [[300.0, 2443.0], [600.0, 53.0], [700.0, 8.0], [200.0, 1608.0], [400.0, 1544.0], [800.0, 1.0], [500.0, 353.0]], "isOverall": false, "label": "cpu\/1\/spring\/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 410.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5600.0, "series": [{"data": [[0.0, 5600.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 410.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 36.10674723061432, "minX": 1.62599388E12, "maxY": 50.0, "series": [{"data": [[1.62599418E12, 44.07834101382487], [1.625994E12, 50.0], [1.62599406E12, 50.0], [1.62599388E12, 36.10674723061432], [1.62599394E12, 50.0], [1.62599412E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599418E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 253.75, "minX": 1.0, "maxY": 545.6666666666666, "series": [{"data": [[2.0, 253.75], [3.0, 253.99999999999997], [4.0, 318.75], [5.0, 277.25], [6.0, 275.0], [7.0, 276.6666666666667], [8.0, 283.5714285714286], [9.0, 289.69230769230774], [10.0, 303.7692307692308], [11.0, 302.5714285714285], [12.0, 284.53846153846155], [13.0, 343.2857142857142], [14.0, 390.1666666666667], [15.0, 391.0], [16.0, 394.42857142857144], [17.0, 378.8666666666666], [18.0, 375.11764705882354], [19.0, 295.0], [20.0, 400.5], [21.0, 380.5], [22.0, 377.50000000000006], [23.0, 429.5833333333333], [24.0, 328.7142857142857], [25.0, 437.57142857142856], [26.0, 344.35714285714283], [27.0, 487.1538461538462], [28.0, 401.125], [29.0, 423.2727272727273], [30.0, 519.5], [31.0, 407.38461538461536], [32.0, 511.1333333333333], [33.0, 423.17647058823536], [34.0, 405.99999999999994], [35.0, 527.6470588235294], [36.0, 441.875], [37.0, 357.85714285714283], [38.0, 526.6999999999998], [39.0, 451.7333333333334], [40.0, 397.1428571428571], [41.0, 545.6666666666666], [42.0, 482.7692307692308], [43.0, 460.6111111111111], [44.0, 487.21428571428567], [45.0, 478.375], [46.0, 469.875], [47.0, 361.0], [48.0, 506.9999999999999], [49.0, 462.3157894736842], [50.0, 360.4594896628796], [1.0, 322.6666666666667]], "isOverall": false, "label": "cpu\/1\/spring\/flux", "isController": false}, {"data": [[47.49068219633952, 365.0559068219626]], "isOverall": false, "label": "cpu\/1\/spring\/flux-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 556.9666666666667, "minX": 1.62599388E12, "maxY": 3525.866666666667, "series": [{"data": [[1.62599418E12, 556.9666666666667], [1.625994E12, 3080.0], [1.62599406E12, 3074.866666666667], [1.62599388E12, 2548.7], [1.62599394E12, 3085.133333333333], [1.62599412E12, 3080.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62599418E12, 636.5333333333333], [1.625994E12, 3520.0], [1.62599406E12, 3514.133333333333], [1.62599388E12, 2912.8], [1.62599394E12, 3525.866666666667], [1.62599412E12, 3520.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599418E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 357.49168053244557, "minX": 1.62599388E12, "maxY": 388.2829808660626, "series": [{"data": [[1.62599418E12, 359.80184331797244], [1.625994E12, 362.4616666666663], [1.62599406E12, 361.95826377295424], [1.62599388E12, 388.2829808660626], [1.62599394E12, 357.49168053244557], [1.62599412E12, 360.04916666666657]], "isOverall": false, "label": "cpu\/1\/spring\/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599418E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 357.48502495840285, "minX": 1.62599388E12, "maxY": 388.2749244712994, "series": [{"data": [[1.62599418E12, 359.7926267281105], [1.625994E12, 362.45583333333343], [1.62599406E12, 361.9499165275458], [1.62599388E12, 388.2749244712994], [1.62599394E12, 357.48502495840285], [1.62599412E12, 360.0416666666666]], "isOverall": false, "label": "cpu\/1\/spring\/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599418E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 38.01999999999997, "minX": 1.62599388E12, "maxY": 38.141068447412245, "series": [{"data": [[1.62599418E12, 38.0599078341014], [1.625994E12, 38.12166666666662], [1.62599406E12, 38.141068447412245], [1.62599388E12, 38.070493454179335], [1.62599394E12, 38.08069883527457], [1.62599412E12, 38.01999999999997]], "isOverall": false, "label": "cpu\/1\/spring\/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599418E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 249.0, "minX": 1.62599388E12, "maxY": 826.0, "series": [{"data": [[1.62599418E12, 546.0], [1.625994E12, 826.0], [1.62599406E12, 780.0], [1.62599388E12, 798.0], [1.62599394E12, 649.0], [1.62599412E12, 731.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62599418E12, 252.0], [1.625994E12, 252.0], [1.62599406E12, 252.0], [1.62599388E12, 251.0], [1.62599394E12, 251.0], [1.62599412E12, 251.8089997136593]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62599418E12, 252.1582000207901], [1.625994E12, 252.0], [1.62599406E12, 252.0], [1.62599388E12, 251.0], [1.62599394E12, 251.0], [1.62599412E12, 252.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62599418E12, 252.07099997401238], [1.625994E12, 252.0], [1.62599406E12, 252.0], [1.62599388E12, 251.0], [1.62599394E12, 251.0], [1.62599412E12, 252.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62599418E12, 252.0], [1.625994E12, 249.0], [1.62599406E12, 250.0], [1.62599388E12, 249.0], [1.62599394E12, 250.0], [1.62599412E12, 249.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62599418E12, 357.0], [1.625994E12, 352.0], [1.62599406E12, 351.5], [1.62599388E12, 375.0], [1.62599394E12, 348.0], [1.62599412E12, 350.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599418E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 253.0, "minX": 2.0, "maxY": 559.0, "series": [{"data": [[2.0, 253.0], [10.0, 253.5], [15.0, 325.5], [16.0, 351.5], [17.0, 360.0], [18.0, 356.0], [19.0, 366.5], [20.0, 346.5], [21.0, 350.0], [22.0, 352.0], [23.0, 340.0], [24.0, 389.0], [25.0, 559.0], [26.0, 472.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 253.0, "minX": 2.0, "maxY": 559.0, "series": [{"data": [[2.0, 253.0], [10.0, 253.5], [15.0, 325.5], [16.0, 351.5], [17.0, 360.0], [18.0, 356.0], [19.0, 366.5], [20.0, 346.5], [21.0, 350.0], [22.0, 352.0], [23.0, 340.0], [24.0, 388.5], [25.0, 559.0], [26.0, 472.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.5166666666666666, "minX": 1.62599388E12, "maxY": 20.0, "series": [{"data": [[1.62599418E12, 3.5166666666666666], [1.625994E12, 20.0], [1.62599406E12, 20.0], [1.62599388E12, 16.65], [1.62599394E12, 20.0], [1.62599412E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599418E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.6166666666666667, "minX": 1.62599388E12, "maxY": 20.033333333333335, "series": [{"data": [[1.62599418E12, 3.6166666666666667], [1.625994E12, 20.0], [1.62599406E12, 19.966666666666665], [1.62599388E12, 16.55], [1.62599394E12, 20.033333333333335], [1.62599412E12, 20.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599418E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.6166666666666667, "minX": 1.62599388E12, "maxY": 20.033333333333335, "series": [{"data": [[1.62599418E12, 3.6166666666666667], [1.625994E12, 20.0], [1.62599406E12, 19.966666666666665], [1.62599388E12, 16.55], [1.62599394E12, 20.033333333333335], [1.62599412E12, 20.0]], "isOverall": false, "label": "cpu\/1\/spring\/flux-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599418E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.6166666666666667, "minX": 1.62599388E12, "maxY": 20.033333333333335, "series": [{"data": [[1.62599418E12, 3.6166666666666667], [1.625994E12, 20.0], [1.62599406E12, 19.966666666666665], [1.62599388E12, 16.55], [1.62599394E12, 20.033333333333335], [1.62599412E12, 20.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599418E12, "title": "Total Transactions Per Second"}},
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

