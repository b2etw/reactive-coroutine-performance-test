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
        data: {"result": {"minY": 247.0, "minX": 0.0, "maxY": 620.0, "series": [{"data": [[0.0, 247.0], [0.1, 247.0], [0.2, 247.0], [0.3, 248.0], [0.4, 248.0], [0.5, 248.0], [0.6, 249.0], [0.7, 249.0], [0.8, 249.0], [0.9, 249.0], [1.0, 249.0], [1.1, 250.0], [1.2, 250.0], [1.3, 250.0], [1.4, 250.0], [1.5, 250.0], [1.6, 250.0], [1.7, 250.0], [1.8, 250.0], [1.9, 250.0], [2.0, 251.0], [2.1, 251.0], [2.2, 251.0], [2.3, 251.0], [2.4, 251.0], [2.5, 251.0], [2.6, 251.0], [2.7, 251.0], [2.8, 251.0], [2.9, 252.0], [3.0, 252.0], [3.1, 252.0], [3.2, 252.0], [3.3, 252.0], [3.4, 252.0], [3.5, 252.0], [3.6, 252.0], [3.7, 252.0], [3.8, 252.0], [3.9, 252.0], [4.0, 252.0], [4.1, 252.0], [4.2, 252.0], [4.3, 253.0], [4.4, 253.0], [4.5, 253.0], [4.6, 253.0], [4.7, 253.0], [4.8, 253.0], [4.9, 253.0], [5.0, 253.0], [5.1, 253.0], [5.2, 253.0], [5.3, 253.0], [5.4, 253.0], [5.5, 253.0], [5.6, 253.0], [5.7, 253.0], [5.8, 253.0], [5.9, 253.0], [6.0, 254.0], [6.1, 254.0], [6.2, 254.0], [6.3, 254.0], [6.4, 254.0], [6.5, 254.0], [6.6, 254.0], [6.7, 254.0], [6.8, 254.0], [6.9, 254.0], [7.0, 254.0], [7.1, 254.0], [7.2, 254.0], [7.3, 254.0], [7.4, 254.0], [7.5, 255.0], [7.6, 255.0], [7.7, 255.0], [7.8, 255.0], [7.9, 255.0], [8.0, 255.0], [8.1, 255.0], [8.2, 255.0], [8.3, 255.0], [8.4, 255.0], [8.5, 255.0], [8.6, 255.0], [8.7, 255.0], [8.8, 255.0], [8.9, 255.0], [9.0, 255.0], [9.1, 255.0], [9.2, 256.0], [9.3, 256.0], [9.4, 256.0], [9.5, 256.0], [9.6, 256.0], [9.7, 256.0], [9.8, 256.0], [9.9, 256.0], [10.0, 256.0], [10.1, 256.0], [10.2, 256.0], [10.3, 256.0], [10.4, 256.0], [10.5, 256.0], [10.6, 256.0], [10.7, 256.0], [10.8, 257.0], [10.9, 257.0], [11.0, 257.0], [11.1, 257.0], [11.2, 257.0], [11.3, 257.0], [11.4, 257.0], [11.5, 257.0], [11.6, 257.0], [11.7, 257.0], [11.8, 258.0], [11.9, 258.0], [12.0, 258.0], [12.1, 258.0], [12.2, 258.0], [12.3, 258.0], [12.4, 259.0], [12.5, 259.0], [12.6, 259.0], [12.7, 259.0], [12.8, 260.0], [12.9, 260.0], [13.0, 260.0], [13.1, 260.0], [13.2, 260.0], [13.3, 261.0], [13.4, 261.0], [13.5, 261.0], [13.6, 261.0], [13.7, 261.0], [13.8, 262.0], [13.9, 262.0], [14.0, 262.0], [14.1, 262.0], [14.2, 262.0], [14.3, 263.0], [14.4, 263.0], [14.5, 263.0], [14.6, 263.0], [14.7, 264.0], [14.8, 264.0], [14.9, 264.0], [15.0, 264.0], [15.1, 264.0], [15.2, 264.0], [15.3, 265.0], [15.4, 265.0], [15.5, 265.0], [15.6, 265.0], [15.7, 265.0], [15.8, 266.0], [15.9, 266.0], [16.0, 266.0], [16.1, 266.0], [16.2, 266.0], [16.3, 266.0], [16.4, 267.0], [16.5, 267.0], [16.6, 267.0], [16.7, 267.0], [16.8, 267.0], [16.9, 268.0], [17.0, 268.0], [17.1, 268.0], [17.2, 268.0], [17.3, 269.0], [17.4, 269.0], [17.5, 269.0], [17.6, 269.0], [17.7, 270.0], [17.8, 270.0], [17.9, 270.0], [18.0, 270.0], [18.1, 270.0], [18.2, 271.0], [18.3, 271.0], [18.4, 271.0], [18.5, 272.0], [18.6, 272.0], [18.7, 273.0], [18.8, 273.0], [18.9, 273.0], [19.0, 273.0], [19.1, 274.0], [19.2, 274.0], [19.3, 274.0], [19.4, 274.0], [19.5, 275.0], [19.6, 275.0], [19.7, 275.0], [19.8, 276.0], [19.9, 276.0], [20.0, 276.0], [20.1, 276.0], [20.2, 277.0], [20.3, 277.0], [20.4, 278.0], [20.5, 278.0], [20.6, 278.0], [20.7, 278.0], [20.8, 279.0], [20.9, 279.0], [21.0, 279.0], [21.1, 280.0], [21.2, 280.0], [21.3, 280.0], [21.4, 280.0], [21.5, 280.0], [21.6, 281.0], [21.7, 281.0], [21.8, 282.0], [21.9, 282.0], [22.0, 282.0], [22.1, 283.0], [22.2, 283.0], [22.3, 283.0], [22.4, 283.0], [22.5, 283.0], [22.6, 284.0], [22.7, 284.0], [22.8, 284.0], [22.9, 284.0], [23.0, 284.0], [23.1, 285.0], [23.2, 285.0], [23.3, 285.0], [23.4, 285.0], [23.5, 286.0], [23.6, 286.0], [23.7, 286.0], [23.8, 287.0], [23.9, 287.0], [24.0, 287.0], [24.1, 287.0], [24.2, 288.0], [24.3, 288.0], [24.4, 288.0], [24.5, 288.0], [24.6, 288.0], [24.7, 289.0], [24.8, 289.0], [24.9, 289.0], [25.0, 289.0], [25.1, 290.0], [25.2, 290.0], [25.3, 290.0], [25.4, 290.0], [25.5, 291.0], [25.6, 291.0], [25.7, 291.0], [25.8, 291.0], [25.9, 291.0], [26.0, 292.0], [26.1, 292.0], [26.2, 292.0], [26.3, 293.0], [26.4, 293.0], [26.5, 293.0], [26.6, 293.0], [26.7, 294.0], [26.8, 294.0], [26.9, 294.0], [27.0, 294.0], [27.1, 295.0], [27.2, 295.0], [27.3, 295.0], [27.4, 296.0], [27.5, 296.0], [27.6, 296.0], [27.7, 296.0], [27.8, 297.0], [27.9, 297.0], [28.0, 297.0], [28.1, 298.0], [28.2, 298.0], [28.3, 298.0], [28.4, 298.0], [28.5, 299.0], [28.6, 299.0], [28.7, 299.0], [28.8, 299.0], [28.9, 300.0], [29.0, 300.0], [29.1, 300.0], [29.2, 300.0], [29.3, 301.0], [29.4, 301.0], [29.5, 301.0], [29.6, 301.0], [29.7, 302.0], [29.8, 302.0], [29.9, 302.0], [30.0, 302.0], [30.1, 303.0], [30.2, 303.0], [30.3, 303.0], [30.4, 304.0], [30.5, 304.0], [30.6, 304.0], [30.7, 305.0], [30.8, 305.0], [30.9, 305.0], [31.0, 305.0], [31.1, 306.0], [31.2, 306.0], [31.3, 306.0], [31.4, 307.0], [31.5, 307.0], [31.6, 307.0], [31.7, 307.0], [31.8, 308.0], [31.9, 308.0], [32.0, 308.0], [32.1, 308.0], [32.2, 309.0], [32.3, 309.0], [32.4, 309.0], [32.5, 309.0], [32.6, 310.0], [32.7, 310.0], [32.8, 310.0], [32.9, 311.0], [33.0, 311.0], [33.1, 311.0], [33.2, 312.0], [33.3, 312.0], [33.4, 312.0], [33.5, 312.0], [33.6, 312.0], [33.7, 313.0], [33.8, 313.0], [33.9, 313.0], [34.0, 313.0], [34.1, 314.0], [34.2, 314.0], [34.3, 314.0], [34.4, 314.0], [34.5, 315.0], [34.6, 315.0], [34.7, 315.0], [34.8, 316.0], [34.9, 316.0], [35.0, 316.0], [35.1, 317.0], [35.2, 317.0], [35.3, 317.0], [35.4, 318.0], [35.5, 318.0], [35.6, 318.0], [35.7, 319.0], [35.8, 319.0], [35.9, 319.0], [36.0, 319.0], [36.1, 320.0], [36.2, 320.0], [36.3, 320.0], [36.4, 320.0], [36.5, 321.0], [36.6, 321.0], [36.7, 321.0], [36.8, 321.0], [36.9, 321.0], [37.0, 322.0], [37.1, 322.0], [37.2, 322.0], [37.3, 323.0], [37.4, 323.0], [37.5, 323.0], [37.6, 324.0], [37.7, 324.0], [37.8, 324.0], [37.9, 324.0], [38.0, 325.0], [38.1, 325.0], [38.2, 325.0], [38.3, 326.0], [38.4, 326.0], [38.5, 326.0], [38.6, 326.0], [38.7, 327.0], [38.8, 327.0], [38.9, 327.0], [39.0, 327.0], [39.1, 327.0], [39.2, 327.0], [39.3, 328.0], [39.4, 328.0], [39.5, 328.0], [39.6, 328.0], [39.7, 329.0], [39.8, 329.0], [39.9, 329.0], [40.0, 329.0], [40.1, 329.0], [40.2, 330.0], [40.3, 330.0], [40.4, 330.0], [40.5, 330.0], [40.6, 330.0], [40.7, 331.0], [40.8, 331.0], [40.9, 331.0], [41.0, 331.0], [41.1, 331.0], [41.2, 331.0], [41.3, 332.0], [41.4, 332.0], [41.5, 332.0], [41.6, 333.0], [41.7, 333.0], [41.8, 333.0], [41.9, 333.0], [42.0, 333.0], [42.1, 334.0], [42.2, 334.0], [42.3, 334.0], [42.4, 334.0], [42.5, 334.0], [42.6, 335.0], [42.7, 335.0], [42.8, 335.0], [42.9, 335.0], [43.0, 335.0], [43.1, 335.0], [43.2, 335.0], [43.3, 336.0], [43.4, 336.0], [43.5, 336.0], [43.6, 336.0], [43.7, 337.0], [43.8, 337.0], [43.9, 338.0], [44.0, 338.0], [44.1, 338.0], [44.2, 338.0], [44.3, 339.0], [44.4, 339.0], [44.5, 339.0], [44.6, 339.0], [44.7, 339.0], [44.8, 340.0], [44.9, 340.0], [45.0, 340.0], [45.1, 340.0], [45.2, 340.0], [45.3, 341.0], [45.4, 341.0], [45.5, 341.0], [45.6, 341.0], [45.7, 341.0], [45.8, 342.0], [45.9, 342.0], [46.0, 342.0], [46.1, 342.0], [46.2, 342.0], [46.3, 342.0], [46.4, 342.0], [46.5, 343.0], [46.6, 343.0], [46.7, 343.0], [46.8, 343.0], [46.9, 344.0], [47.0, 344.0], [47.1, 344.0], [47.2, 344.0], [47.3, 344.0], [47.4, 344.0], [47.5, 345.0], [47.6, 345.0], [47.7, 345.0], [47.8, 345.0], [47.9, 345.0], [48.0, 346.0], [48.1, 346.0], [48.2, 346.0], [48.3, 346.0], [48.4, 347.0], [48.5, 347.0], [48.6, 347.0], [48.7, 347.0], [48.8, 347.0], [48.9, 348.0], [49.0, 348.0], [49.1, 348.0], [49.2, 348.0], [49.3, 348.0], [49.4, 349.0], [49.5, 349.0], [49.6, 349.0], [49.7, 350.0], [49.8, 350.0], [49.9, 350.0], [50.0, 351.0], [50.1, 351.0], [50.2, 351.0], [50.3, 352.0], [50.4, 352.0], [50.5, 352.0], [50.6, 352.0], [50.7, 353.0], [50.8, 353.0], [50.9, 353.0], [51.0, 353.0], [51.1, 354.0], [51.2, 354.0], [51.3, 354.0], [51.4, 354.0], [51.5, 354.0], [51.6, 355.0], [51.7, 355.0], [51.8, 355.0], [51.9, 355.0], [52.0, 355.0], [52.1, 356.0], [52.2, 356.0], [52.3, 356.0], [52.4, 356.0], [52.5, 357.0], [52.6, 357.0], [52.7, 357.0], [52.8, 357.0], [52.9, 357.0], [53.0, 358.0], [53.1, 358.0], [53.2, 358.0], [53.3, 358.0], [53.4, 359.0], [53.5, 359.0], [53.6, 359.0], [53.7, 359.0], [53.8, 360.0], [53.9, 360.0], [54.0, 360.0], [54.1, 360.0], [54.2, 361.0], [54.3, 361.0], [54.4, 361.0], [54.5, 362.0], [54.6, 362.0], [54.7, 362.0], [54.8, 362.0], [54.9, 363.0], [55.0, 363.0], [55.1, 363.0], [55.2, 363.0], [55.3, 364.0], [55.4, 364.0], [55.5, 364.0], [55.6, 364.0], [55.7, 365.0], [55.8, 365.0], [55.9, 365.0], [56.0, 366.0], [56.1, 366.0], [56.2, 366.0], [56.3, 366.0], [56.4, 367.0], [56.5, 367.0], [56.6, 367.0], [56.7, 367.0], [56.8, 367.0], [56.9, 368.0], [57.0, 368.0], [57.1, 368.0], [57.2, 368.0], [57.3, 369.0], [57.4, 369.0], [57.5, 369.0], [57.6, 370.0], [57.7, 370.0], [57.8, 370.0], [57.9, 371.0], [58.0, 371.0], [58.1, 371.0], [58.2, 371.0], [58.3, 372.0], [58.4, 372.0], [58.5, 372.0], [58.6, 373.0], [58.7, 373.0], [58.8, 373.0], [58.9, 374.0], [59.0, 374.0], [59.1, 374.0], [59.2, 374.0], [59.3, 375.0], [59.4, 375.0], [59.5, 375.0], [59.6, 375.0], [59.7, 376.0], [59.8, 376.0], [59.9, 376.0], [60.0, 376.0], [60.1, 377.0], [60.2, 377.0], [60.3, 377.0], [60.4, 378.0], [60.5, 378.0], [60.6, 378.0], [60.7, 378.0], [60.8, 379.0], [60.9, 379.0], [61.0, 379.0], [61.1, 379.0], [61.2, 380.0], [61.3, 380.0], [61.4, 380.0], [61.5, 380.0], [61.6, 381.0], [61.7, 381.0], [61.8, 381.0], [61.9, 381.0], [62.0, 382.0], [62.1, 382.0], [62.2, 382.0], [62.3, 383.0], [62.4, 383.0], [62.5, 383.0], [62.6, 384.0], [62.7, 384.0], [62.8, 384.0], [62.9, 384.0], [63.0, 384.0], [63.1, 385.0], [63.2, 385.0], [63.3, 385.0], [63.4, 385.0], [63.5, 385.0], [63.6, 386.0], [63.7, 386.0], [63.8, 386.0], [63.9, 387.0], [64.0, 387.0], [64.1, 387.0], [64.2, 387.0], [64.3, 388.0], [64.4, 388.0], [64.5, 389.0], [64.6, 389.0], [64.7, 390.0], [64.8, 390.0], [64.9, 390.0], [65.0, 390.0], [65.1, 391.0], [65.2, 391.0], [65.3, 391.0], [65.4, 392.0], [65.5, 392.0], [65.6, 392.0], [65.7, 392.0], [65.8, 393.0], [65.9, 393.0], [66.0, 393.0], [66.1, 393.0], [66.2, 394.0], [66.3, 394.0], [66.4, 395.0], [66.5, 395.0], [66.6, 395.0], [66.7, 395.0], [66.8, 395.0], [66.9, 396.0], [67.0, 396.0], [67.1, 396.0], [67.2, 396.0], [67.3, 396.0], [67.4, 396.0], [67.5, 397.0], [67.6, 397.0], [67.7, 397.0], [67.8, 398.0], [67.9, 398.0], [68.0, 398.0], [68.1, 399.0], [68.2, 399.0], [68.3, 399.0], [68.4, 399.0], [68.5, 399.0], [68.6, 400.0], [68.7, 400.0], [68.8, 400.0], [68.9, 401.0], [69.0, 401.0], [69.1, 401.0], [69.2, 402.0], [69.3, 402.0], [69.4, 402.0], [69.5, 403.0], [69.6, 403.0], [69.7, 403.0], [69.8, 404.0], [69.9, 404.0], [70.0, 404.0], [70.1, 405.0], [70.2, 405.0], [70.3, 405.0], [70.4, 405.0], [70.5, 405.0], [70.6, 406.0], [70.7, 406.0], [70.8, 407.0], [70.9, 407.0], [71.0, 407.0], [71.1, 407.0], [71.2, 407.0], [71.3, 407.0], [71.4, 408.0], [71.5, 408.0], [71.6, 408.0], [71.7, 409.0], [71.8, 409.0], [71.9, 409.0], [72.0, 410.0], [72.1, 410.0], [72.2, 410.0], [72.3, 411.0], [72.4, 411.0], [72.5, 411.0], [72.6, 411.0], [72.7, 412.0], [72.8, 412.0], [72.9, 412.0], [73.0, 412.0], [73.1, 413.0], [73.2, 413.0], [73.3, 414.0], [73.4, 414.0], [73.5, 414.0], [73.6, 414.0], [73.7, 415.0], [73.8, 415.0], [73.9, 415.0], [74.0, 416.0], [74.1, 416.0], [74.2, 417.0], [74.3, 417.0], [74.4, 417.0], [74.5, 417.0], [74.6, 418.0], [74.7, 418.0], [74.8, 418.0], [74.9, 418.0], [75.0, 419.0], [75.1, 419.0], [75.2, 419.0], [75.3, 419.0], [75.4, 420.0], [75.5, 420.0], [75.6, 420.0], [75.7, 421.0], [75.8, 421.0], [75.9, 421.0], [76.0, 421.0], [76.1, 422.0], [76.2, 422.0], [76.3, 422.0], [76.4, 423.0], [76.5, 423.0], [76.6, 423.0], [76.7, 424.0], [76.8, 424.0], [76.9, 424.0], [77.0, 424.0], [77.1, 424.0], [77.2, 425.0], [77.3, 425.0], [77.4, 426.0], [77.5, 426.0], [77.6, 426.0], [77.7, 426.0], [77.8, 426.0], [77.9, 427.0], [78.0, 427.0], [78.1, 427.0], [78.2, 428.0], [78.3, 428.0], [78.4, 428.0], [78.5, 428.0], [78.6, 429.0], [78.7, 429.0], [78.8, 429.0], [78.9, 430.0], [79.0, 430.0], [79.1, 430.0], [79.2, 431.0], [79.3, 431.0], [79.4, 432.0], [79.5, 432.0], [79.6, 433.0], [79.7, 433.0], [79.8, 434.0], [79.9, 434.0], [80.0, 434.0], [80.1, 435.0], [80.2, 435.0], [80.3, 435.0], [80.4, 435.0], [80.5, 436.0], [80.6, 436.0], [80.7, 436.0], [80.8, 437.0], [80.9, 437.0], [81.0, 438.0], [81.1, 438.0], [81.2, 438.0], [81.3, 438.0], [81.4, 439.0], [81.5, 439.0], [81.6, 439.0], [81.7, 440.0], [81.8, 440.0], [81.9, 440.0], [82.0, 441.0], [82.1, 441.0], [82.2, 441.0], [82.3, 441.0], [82.4, 442.0], [82.5, 442.0], [82.6, 442.0], [82.7, 443.0], [82.8, 443.0], [82.9, 443.0], [83.0, 444.0], [83.1, 444.0], [83.2, 445.0], [83.3, 445.0], [83.4, 446.0], [83.5, 446.0], [83.6, 446.0], [83.7, 447.0], [83.8, 447.0], [83.9, 447.0], [84.0, 448.0], [84.1, 448.0], [84.2, 449.0], [84.3, 449.0], [84.4, 449.0], [84.5, 450.0], [84.6, 450.0], [84.7, 450.0], [84.8, 451.0], [84.9, 451.0], [85.0, 452.0], [85.1, 452.0], [85.2, 452.0], [85.3, 453.0], [85.4, 453.0], [85.5, 453.0], [85.6, 454.0], [85.7, 454.0], [85.8, 454.0], [85.9, 454.0], [86.0, 455.0], [86.1, 455.0], [86.2, 456.0], [86.3, 456.0], [86.4, 456.0], [86.5, 457.0], [86.6, 457.0], [86.7, 458.0], [86.8, 458.0], [86.9, 458.0], [87.0, 459.0], [87.1, 459.0], [87.2, 459.0], [87.3, 460.0], [87.4, 460.0], [87.5, 461.0], [87.6, 461.0], [87.7, 461.0], [87.8, 462.0], [87.9, 462.0], [88.0, 462.0], [88.1, 463.0], [88.2, 463.0], [88.3, 463.0], [88.4, 464.0], [88.5, 465.0], [88.6, 465.0], [88.7, 465.0], [88.8, 466.0], [88.9, 466.0], [89.0, 466.0], [89.1, 467.0], [89.2, 468.0], [89.3, 468.0], [89.4, 468.0], [89.5, 469.0], [89.6, 469.0], [89.7, 470.0], [89.8, 470.0], [89.9, 471.0], [90.0, 472.0], [90.1, 472.0], [90.2, 472.0], [90.3, 472.0], [90.4, 473.0], [90.5, 473.0], [90.6, 474.0], [90.7, 474.0], [90.8, 475.0], [90.9, 475.0], [91.0, 476.0], [91.1, 476.0], [91.2, 477.0], [91.3, 477.0], [91.4, 477.0], [91.5, 478.0], [91.6, 478.0], [91.7, 479.0], [91.8, 479.0], [91.9, 479.0], [92.0, 480.0], [92.1, 480.0], [92.2, 480.0], [92.3, 481.0], [92.4, 482.0], [92.5, 482.0], [92.6, 483.0], [92.7, 483.0], [92.8, 484.0], [92.9, 484.0], [93.0, 485.0], [93.1, 485.0], [93.2, 486.0], [93.3, 487.0], [93.4, 487.0], [93.5, 487.0], [93.6, 488.0], [93.7, 489.0], [93.8, 489.0], [93.9, 490.0], [94.0, 491.0], [94.1, 491.0], [94.2, 492.0], [94.3, 493.0], [94.4, 494.0], [94.5, 495.0], [94.6, 495.0], [94.7, 496.0], [94.8, 497.0], [94.9, 497.0], [95.0, 498.0], [95.1, 498.0], [95.2, 499.0], [95.3, 500.0], [95.4, 500.0], [95.5, 501.0], [95.6, 502.0], [95.7, 503.0], [95.8, 503.0], [95.9, 504.0], [96.0, 504.0], [96.1, 505.0], [96.2, 506.0], [96.3, 507.0], [96.4, 508.0], [96.5, 509.0], [96.6, 510.0], [96.7, 511.0], [96.8, 512.0], [96.9, 513.0], [97.0, 514.0], [97.1, 515.0], [97.2, 516.0], [97.3, 517.0], [97.4, 518.0], [97.5, 519.0], [97.6, 522.0], [97.7, 523.0], [97.8, 524.0], [97.9, 525.0], [98.0, 526.0], [98.1, 528.0], [98.2, 528.0], [98.3, 530.0], [98.4, 531.0], [98.5, 532.0], [98.6, 535.0], [98.7, 537.0], [98.8, 539.0], [98.9, 542.0], [99.0, 544.0], [99.1, 548.0], [99.2, 549.0], [99.3, 553.0], [99.4, 555.0], [99.5, 557.0], [99.6, 561.0], [99.7, 565.0], [99.8, 577.0], [99.9, 594.0], [100.0, 620.0]], "isOverall": false, "label": "cpu/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 200.0, "maxY": 2383.0, "series": [{"data": [[300.0, 2383.0], [600.0, 3.0], [200.0, 1736.0], [400.0, 1605.0], [500.0, 283.0]], "isOverall": false, "label": "cpu/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 275.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5735.0, "series": [{"data": [[0.0, 5735.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 275.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 21.27571115973742, "minX": 1.62599328E12, "maxY": 50.0, "series": [{"data": [[1.62599352E12, 50.0], [1.62599358E12, 48.325737265415576], [1.6259934E12, 50.0], [1.62599346E12, 50.0], [1.62599328E12, 21.27571115973742], [1.62599334E12, 49.40464344941961]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599358E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 266.0769230769231, "minX": 1.0, "maxY": 470.0555555555556, "series": [{"data": [[2.0, 288.8], [3.0, 273.75], [4.0, 269.4], [5.0, 269.0], [6.0, 266.0769230769231], [7.0, 266.66666666666663], [8.0, 285.2857142857143], [9.0, 281.6923076923077], [10.0, 281.92857142857144], [11.0, 274.2307692307692], [12.0, 298.15384615384613], [13.0, 334.64285714285717], [14.0, 382.0714285714286], [15.0, 401.50000000000006], [16.0, 396.3529411764706], [17.0, 393.3846153846154], [18.0, 388.93749999999994], [19.0, 317.8888888888889], [20.0, 403.4], [21.0, 342.99999999999994], [22.0, 377.8125], [23.0, 398.1428571428571], [24.0, 289.30769230769226], [25.0, 421.2857142857142], [26.0, 299.6428571428571], [27.0, 468.7272727272727], [28.0, 376.3888888888889], [29.0, 360.4285714285714], [30.0, 429.6666666666667], [31.0, 331.5833333333333], [32.0, 438.93333333333334], [33.0, 338.4375], [34.0, 303.8888888888889], [35.0, 431.11764705882354], [36.0, 343.6666666666667], [37.0, 318.375], [38.0, 450.8421052631579], [39.0, 378.47058823529414], [40.0, 367.3333333333333], [41.0, 470.0555555555556], [42.0, 402.0], [43.0, 392.22222222222223], [44.0, 456.5], [45.0, 423.17647058823536], [46.0, 424.14285714285717], [47.0, 336.0909090909091], [48.0, 441.2857142857143], [49.0, 358.44444444444446], [50.0, 358.2858472998137], [1.0, 315.0]], "isOverall": false, "label": "cpu/1/spring/mvc", "isController": false}, {"data": [[47.48851913477551, 359.0291181364401]], "isOverall": false, "label": "cpu/1/spring/mvc-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1325.3, "minX": 1.62599328E12, "maxY": 5145.6, "series": [{"data": [[1.62599352E12, 5124.266666666666], [1.62599358E12, 3182.9333333333334], [1.6259934E12, 5120.0], [1.62599346E12, 5120.0], [1.62599328E12, 1949.8666666666666], [1.62599334E12, 5145.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62599352E12, 3482.9], [1.62599358E12, 2163.4], [1.6259934E12, 3480.0], [1.62599346E12, 3480.0], [1.62599328E12, 1325.3], [1.62599334E12, 3497.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599358E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 352.8205689277899, "minX": 1.62599328E12, "maxY": 364.2247097844109, "series": [{"data": [[1.62599352E12, 358.75020815986653], [1.62599358E12, 358.47721179624665], [1.6259934E12, 358.5741666666665], [1.62599346E12, 357.249166666667], [1.62599328E12, 352.8205689277899], [1.62599334E12, 364.2247097844109]], "isOverall": false, "label": "cpu/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599358E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 351.6126914660832, "minX": 1.62599328E12, "maxY": 362.7794361525705, "series": [{"data": [[1.62599352E12, 357.30974188176566], [1.62599358E12, 357.12466487935643], [1.6259934E12, 357.2191666666666], [1.62599346E12, 355.9475000000003], [1.62599328E12, 351.6126914660832], [1.62599334E12, 362.7794361525705]], "isOverall": false, "label": "cpu/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599358E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 37.133333333333276, "minX": 1.62599328E12, "maxY": 37.29102844638954, "series": [{"data": [[1.62599352E12, 37.15653621981685], [1.62599358E12, 37.193029490616595], [1.6259934E12, 37.25916666666672], [1.62599346E12, 37.133333333333276], [1.62599328E12, 37.29102844638954], [1.62599334E12, 37.144278606965166]], "isOverall": false, "label": "cpu/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599358E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 247.0, "minX": 1.62599328E12, "maxY": 620.0, "series": [{"data": [[1.62599352E12, 595.0], [1.62599358E12, 593.0], [1.6259934E12, 590.0], [1.62599346E12, 598.0], [1.62599328E12, 620.0], [1.62599334E12, 618.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62599352E12, 469.0], [1.62599358E12, 470.30000000000007], [1.6259934E12, 468.0], [1.62599346E12, 465.0], [1.62599328E12, 502.2], [1.62599334E12, 476.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62599352E12, 539.0], [1.62599358E12, 539.3599999999997], [1.6259934E12, 539.97], [1.62599346E12, 528.0], [1.62599328E12, 578.4200000000001], [1.62599334E12, 551.7900000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62599352E12, 491.89999999999986], [1.62599358E12, 493.65], [1.6259934E12, 495.95000000000005], [1.62599346E12, 492.95000000000005], [1.62599328E12, 532.1999999999999], [1.62599334E12, 503.64999999999986]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62599352E12, 247.0], [1.62599358E12, 247.0], [1.6259934E12, 247.0], [1.62599346E12, 247.0], [1.62599328E12, 247.0], [1.62599334E12, 248.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62599352E12, 352.0], [1.62599358E12, 350.0], [1.6259934E12, 350.5], [1.62599346E12, 352.5], [1.62599328E12, 324.0], [1.62599334E12, 358.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599358E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 255.0, "minX": 1.0, "maxY": 422.5, "series": [{"data": [[8.0, 422.5], [13.0, 309.0], [14.0, 333.0], [15.0, 343.5], [1.0, 258.0], [16.0, 344.0], [17.0, 344.0], [18.0, 334.0], [19.0, 342.5], [5.0, 255.0], [20.0, 325.0], [21.0, 340.0], [22.0, 374.5], [23.0, 372.0], [24.0, 371.0], [25.0, 352.0], [26.0, 355.0], [27.0, 351.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 254.0, "minX": 1.0, "maxY": 421.5, "series": [{"data": [[8.0, 421.5], [13.0, 308.0], [14.0, 331.0], [15.0, 341.0], [1.0, 258.0], [16.0, 341.0], [17.0, 343.0], [18.0, 333.5], [19.0, 341.5], [5.0, 254.0], [20.0, 324.5], [21.0, 339.0], [22.0, 373.0], [23.0, 371.0], [24.0, 369.0], [25.0, 352.0], [26.0, 354.0], [27.0, 350.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.683333333333334, "minX": 1.62599328E12, "maxY": 20.2, "series": [{"data": [[1.62599352E12, 20.0], [1.62599358E12, 12.283333333333333], [1.6259934E12, 20.0], [1.62599346E12, 20.0], [1.62599328E12, 7.683333333333334], [1.62599334E12, 20.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599358E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.616666666666666, "minX": 1.62599328E12, "maxY": 20.1, "series": [{"data": [[1.62599352E12, 20.016666666666666], [1.62599358E12, 12.433333333333334], [1.6259934E12, 20.0], [1.62599346E12, 20.0], [1.62599328E12, 7.616666666666666], [1.62599334E12, 20.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62599358E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.616666666666666, "minX": 1.62599328E12, "maxY": 20.1, "series": [{"data": [[1.62599352E12, 20.016666666666666], [1.62599358E12, 12.433333333333334], [1.6259934E12, 20.0], [1.62599346E12, 20.0], [1.62599328E12, 7.616666666666666], [1.62599334E12, 20.1]], "isOverall": false, "label": "cpu/1/spring/mvc-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599358E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.616666666666666, "minX": 1.62599328E12, "maxY": 20.1, "series": [{"data": [[1.62599352E12, 20.016666666666666], [1.62599358E12, 12.433333333333334], [1.6259934E12, 20.0], [1.62599346E12, 20.0], [1.62599328E12, 7.616666666666666], [1.62599334E12, 20.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62599358E12, "title": "Total Transactions Per Second"}},
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

