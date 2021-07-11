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
        data: {"result": {"minY": 252.0, "minX": 0.0, "maxY": 693.0, "series": [{"data": [[0.0, 252.0], [0.1, 252.0], [0.2, 253.0], [0.3, 253.0], [0.4, 253.0], [0.5, 254.0], [0.6, 254.0], [0.7, 254.0], [0.8, 254.0], [0.9, 254.0], [1.0, 255.0], [1.1, 255.0], [1.2, 255.0], [1.3, 255.0], [1.4, 255.0], [1.5, 255.0], [1.6, 255.0], [1.7, 255.0], [1.8, 255.0], [1.9, 256.0], [2.0, 256.0], [2.1, 256.0], [2.2, 256.0], [2.3, 256.0], [2.4, 256.0], [2.5, 256.0], [2.6, 256.0], [2.7, 256.0], [2.8, 256.0], [2.9, 257.0], [3.0, 257.0], [3.1, 257.0], [3.2, 257.0], [3.3, 257.0], [3.4, 257.0], [3.5, 257.0], [3.6, 257.0], [3.7, 257.0], [3.8, 257.0], [3.9, 257.0], [4.0, 257.0], [4.1, 257.0], [4.2, 257.0], [4.3, 257.0], [4.4, 257.0], [4.5, 257.0], [4.6, 258.0], [4.7, 258.0], [4.8, 258.0], [4.9, 258.0], [5.0, 258.0], [5.1, 258.0], [5.2, 258.0], [5.3, 258.0], [5.4, 258.0], [5.5, 258.0], [5.6, 258.0], [5.7, 258.0], [5.8, 258.0], [5.9, 258.0], [6.0, 258.0], [6.1, 258.0], [6.2, 259.0], [6.3, 259.0], [6.4, 259.0], [6.5, 259.0], [6.6, 259.0], [6.7, 259.0], [6.8, 259.0], [6.9, 259.0], [7.0, 259.0], [7.1, 259.0], [7.2, 259.0], [7.3, 259.0], [7.4, 259.0], [7.5, 259.0], [7.6, 259.0], [7.7, 259.0], [7.8, 259.0], [7.9, 259.0], [8.0, 259.0], [8.1, 259.0], [8.2, 260.0], [8.3, 260.0], [8.4, 260.0], [8.5, 260.0], [8.6, 260.0], [8.7, 260.0], [8.8, 260.0], [8.9, 260.0], [9.0, 260.0], [9.1, 260.0], [9.2, 260.0], [9.3, 260.0], [9.4, 260.0], [9.5, 260.0], [9.6, 260.0], [9.7, 260.0], [9.8, 260.0], [9.9, 260.0], [10.0, 260.0], [10.1, 260.0], [10.2, 261.0], [10.3, 261.0], [10.4, 261.0], [10.5, 261.0], [10.6, 261.0], [10.7, 261.0], [10.8, 261.0], [10.9, 261.0], [11.0, 261.0], [11.1, 261.0], [11.2, 261.0], [11.3, 261.0], [11.4, 261.0], [11.5, 261.0], [11.6, 261.0], [11.7, 261.0], [11.8, 261.0], [11.9, 261.0], [12.0, 261.0], [12.1, 261.0], [12.2, 262.0], [12.3, 262.0], [12.4, 262.0], [12.5, 262.0], [12.6, 262.0], [12.7, 262.0], [12.8, 262.0], [12.9, 262.0], [13.0, 262.0], [13.1, 262.0], [13.2, 262.0], [13.3, 262.0], [13.4, 262.0], [13.5, 262.0], [13.6, 262.0], [13.7, 262.0], [13.8, 263.0], [13.9, 263.0], [14.0, 263.0], [14.1, 263.0], [14.2, 263.0], [14.3, 263.0], [14.4, 263.0], [14.5, 263.0], [14.6, 263.0], [14.7, 264.0], [14.8, 264.0], [14.9, 264.0], [15.0, 264.0], [15.1, 264.0], [15.2, 264.0], [15.3, 264.0], [15.4, 264.0], [15.5, 264.0], [15.6, 265.0], [15.7, 265.0], [15.8, 265.0], [15.9, 265.0], [16.0, 265.0], [16.1, 265.0], [16.2, 265.0], [16.3, 266.0], [16.4, 266.0], [16.5, 266.0], [16.6, 266.0], [16.7, 266.0], [16.8, 266.0], [16.9, 267.0], [17.0, 267.0], [17.1, 267.0], [17.2, 267.0], [17.3, 267.0], [17.4, 267.0], [17.5, 267.0], [17.6, 268.0], [17.7, 268.0], [17.8, 268.0], [17.9, 268.0], [18.0, 268.0], [18.1, 269.0], [18.2, 269.0], [18.3, 269.0], [18.4, 269.0], [18.5, 269.0], [18.6, 269.0], [18.7, 269.0], [18.8, 269.0], [18.9, 270.0], [19.0, 270.0], [19.1, 270.0], [19.2, 270.0], [19.3, 270.0], [19.4, 270.0], [19.5, 270.0], [19.6, 270.0], [19.7, 271.0], [19.8, 271.0], [19.9, 271.0], [20.0, 271.0], [20.1, 271.0], [20.2, 271.0], [20.3, 271.0], [20.4, 271.0], [20.5, 271.0], [20.6, 272.0], [20.7, 272.0], [20.8, 272.0], [20.9, 272.0], [21.0, 272.0], [21.1, 272.0], [21.2, 272.0], [21.3, 272.0], [21.4, 273.0], [21.5, 273.0], [21.6, 273.0], [21.7, 273.0], [21.8, 273.0], [21.9, 273.0], [22.0, 273.0], [22.1, 273.0], [22.2, 273.0], [22.3, 274.0], [22.4, 274.0], [22.5, 274.0], [22.6, 274.0], [22.7, 274.0], [22.8, 274.0], [22.9, 275.0], [23.0, 275.0], [23.1, 275.0], [23.2, 275.0], [23.3, 275.0], [23.4, 275.0], [23.5, 275.0], [23.6, 275.0], [23.7, 276.0], [23.8, 276.0], [23.9, 276.0], [24.0, 276.0], [24.1, 276.0], [24.2, 276.0], [24.3, 276.0], [24.4, 277.0], [24.5, 277.0], [24.6, 277.0], [24.7, 277.0], [24.8, 277.0], [24.9, 278.0], [25.0, 278.0], [25.1, 278.0], [25.2, 278.0], [25.3, 278.0], [25.4, 278.0], [25.5, 279.0], [25.6, 279.0], [25.7, 279.0], [25.8, 279.0], [25.9, 279.0], [26.0, 279.0], [26.1, 280.0], [26.2, 280.0], [26.3, 280.0], [26.4, 280.0], [26.5, 280.0], [26.6, 280.0], [26.7, 280.0], [26.8, 280.0], [26.9, 280.0], [27.0, 281.0], [27.1, 281.0], [27.2, 281.0], [27.3, 281.0], [27.4, 282.0], [27.5, 282.0], [27.6, 282.0], [27.7, 282.0], [27.8, 282.0], [27.9, 282.0], [28.0, 282.0], [28.1, 282.0], [28.2, 282.0], [28.3, 283.0], [28.4, 283.0], [28.5, 283.0], [28.6, 283.0], [28.7, 283.0], [28.8, 283.0], [28.9, 283.0], [29.0, 284.0], [29.1, 284.0], [29.2, 284.0], [29.3, 284.0], [29.4, 284.0], [29.5, 284.0], [29.6, 284.0], [29.7, 284.0], [29.8, 285.0], [29.9, 285.0], [30.0, 285.0], [30.1, 285.0], [30.2, 285.0], [30.3, 285.0], [30.4, 285.0], [30.5, 286.0], [30.6, 286.0], [30.7, 286.0], [30.8, 286.0], [30.9, 286.0], [31.0, 286.0], [31.1, 287.0], [31.2, 287.0], [31.3, 287.0], [31.4, 287.0], [31.5, 287.0], [31.6, 287.0], [31.7, 288.0], [31.8, 288.0], [31.9, 288.0], [32.0, 288.0], [32.1, 288.0], [32.2, 288.0], [32.3, 289.0], [32.4, 289.0], [32.5, 289.0], [32.6, 289.0], [32.7, 289.0], [32.8, 289.0], [32.9, 289.0], [33.0, 289.0], [33.1, 290.0], [33.2, 290.0], [33.3, 290.0], [33.4, 290.0], [33.5, 290.0], [33.6, 290.0], [33.7, 290.0], [33.8, 290.0], [33.9, 290.0], [34.0, 290.0], [34.1, 291.0], [34.2, 291.0], [34.3, 291.0], [34.4, 291.0], [34.5, 291.0], [34.6, 291.0], [34.7, 291.0], [34.8, 291.0], [34.9, 291.0], [35.0, 291.0], [35.1, 292.0], [35.2, 292.0], [35.3, 292.0], [35.4, 292.0], [35.5, 292.0], [35.6, 292.0], [35.7, 292.0], [35.8, 292.0], [35.9, 292.0], [36.0, 293.0], [36.1, 293.0], [36.2, 293.0], [36.3, 293.0], [36.4, 293.0], [36.5, 293.0], [36.6, 293.0], [36.7, 293.0], [36.8, 294.0], [36.9, 294.0], [37.0, 294.0], [37.1, 294.0], [37.2, 294.0], [37.3, 294.0], [37.4, 294.0], [37.5, 294.0], [37.6, 295.0], [37.7, 295.0], [37.8, 295.0], [37.9, 295.0], [38.0, 295.0], [38.1, 295.0], [38.2, 295.0], [38.3, 295.0], [38.4, 296.0], [38.5, 296.0], [38.6, 296.0], [38.7, 296.0], [38.8, 296.0], [38.9, 296.0], [39.0, 296.0], [39.1, 297.0], [39.2, 297.0], [39.3, 297.0], [39.4, 297.0], [39.5, 297.0], [39.6, 297.0], [39.7, 297.0], [39.8, 297.0], [39.9, 297.0], [40.0, 297.0], [40.1, 298.0], [40.2, 298.0], [40.3, 298.0], [40.4, 298.0], [40.5, 298.0], [40.6, 298.0], [40.7, 298.0], [40.8, 298.0], [40.9, 299.0], [41.0, 299.0], [41.1, 299.0], [41.2, 299.0], [41.3, 299.0], [41.4, 299.0], [41.5, 299.0], [41.6, 299.0], [41.7, 300.0], [41.8, 300.0], [41.9, 300.0], [42.0, 300.0], [42.1, 300.0], [42.2, 300.0], [42.3, 300.0], [42.4, 301.0], [42.5, 301.0], [42.6, 301.0], [42.7, 301.0], [42.8, 301.0], [42.9, 301.0], [43.0, 301.0], [43.1, 302.0], [43.2, 302.0], [43.3, 302.0], [43.4, 302.0], [43.5, 302.0], [43.6, 302.0], [43.7, 302.0], [43.8, 302.0], [43.9, 303.0], [44.0, 303.0], [44.1, 303.0], [44.2, 303.0], [44.3, 303.0], [44.4, 303.0], [44.5, 303.0], [44.6, 304.0], [44.7, 304.0], [44.8, 304.0], [44.9, 304.0], [45.0, 304.0], [45.1, 304.0], [45.2, 304.0], [45.3, 304.0], [45.4, 304.0], [45.5, 305.0], [45.6, 305.0], [45.7, 305.0], [45.8, 305.0], [45.9, 305.0], [46.0, 305.0], [46.1, 305.0], [46.2, 306.0], [46.3, 306.0], [46.4, 306.0], [46.5, 306.0], [46.6, 306.0], [46.7, 306.0], [46.8, 306.0], [46.9, 306.0], [47.0, 306.0], [47.1, 307.0], [47.2, 307.0], [47.3, 307.0], [47.4, 307.0], [47.5, 307.0], [47.6, 307.0], [47.7, 307.0], [47.8, 307.0], [47.9, 307.0], [48.0, 308.0], [48.1, 308.0], [48.2, 308.0], [48.3, 308.0], [48.4, 308.0], [48.5, 308.0], [48.6, 309.0], [48.7, 309.0], [48.8, 309.0], [48.9, 309.0], [49.0, 309.0], [49.1, 309.0], [49.2, 309.0], [49.3, 309.0], [49.4, 310.0], [49.5, 310.0], [49.6, 310.0], [49.7, 310.0], [49.8, 310.0], [49.9, 310.0], [50.0, 310.0], [50.1, 310.0], [50.2, 311.0], [50.3, 311.0], [50.4, 311.0], [50.5, 311.0], [50.6, 311.0], [50.7, 311.0], [50.8, 311.0], [50.9, 311.0], [51.0, 311.0], [51.1, 312.0], [51.2, 312.0], [51.3, 312.0], [51.4, 312.0], [51.5, 312.0], [51.6, 312.0], [51.7, 312.0], [51.8, 312.0], [51.9, 313.0], [52.0, 313.0], [52.1, 313.0], [52.2, 313.0], [52.3, 313.0], [52.4, 313.0], [52.5, 313.0], [52.6, 314.0], [52.7, 314.0], [52.8, 314.0], [52.9, 314.0], [53.0, 314.0], [53.1, 314.0], [53.2, 314.0], [53.3, 314.0], [53.4, 315.0], [53.5, 315.0], [53.6, 315.0], [53.7, 315.0], [53.8, 315.0], [53.9, 315.0], [54.0, 315.0], [54.1, 315.0], [54.2, 316.0], [54.3, 316.0], [54.4, 316.0], [54.5, 316.0], [54.6, 316.0], [54.7, 317.0], [54.8, 317.0], [54.9, 317.0], [55.0, 317.0], [55.1, 317.0], [55.2, 317.0], [55.3, 318.0], [55.4, 318.0], [55.5, 318.0], [55.6, 318.0], [55.7, 318.0], [55.8, 318.0], [55.9, 318.0], [56.0, 319.0], [56.1, 319.0], [56.2, 319.0], [56.3, 319.0], [56.4, 319.0], [56.5, 319.0], [56.6, 319.0], [56.7, 319.0], [56.8, 320.0], [56.9, 320.0], [57.0, 320.0], [57.1, 320.0], [57.2, 320.0], [57.3, 320.0], [57.4, 320.0], [57.5, 321.0], [57.6, 321.0], [57.7, 321.0], [57.8, 321.0], [57.9, 321.0], [58.0, 321.0], [58.1, 322.0], [58.2, 322.0], [58.3, 322.0], [58.4, 322.0], [58.5, 322.0], [58.6, 322.0], [58.7, 323.0], [58.8, 323.0], [58.9, 323.0], [59.0, 323.0], [59.1, 323.0], [59.2, 323.0], [59.3, 323.0], [59.4, 324.0], [59.5, 324.0], [59.6, 324.0], [59.7, 324.0], [59.8, 324.0], [59.9, 324.0], [60.0, 325.0], [60.1, 325.0], [60.2, 325.0], [60.3, 325.0], [60.4, 325.0], [60.5, 326.0], [60.6, 326.0], [60.7, 326.0], [60.8, 326.0], [60.9, 326.0], [61.0, 326.0], [61.1, 326.0], [61.2, 327.0], [61.3, 327.0], [61.4, 327.0], [61.5, 327.0], [61.6, 327.0], [61.7, 327.0], [61.8, 328.0], [61.9, 328.0], [62.0, 328.0], [62.1, 328.0], [62.2, 328.0], [62.3, 328.0], [62.4, 328.0], [62.5, 329.0], [62.6, 329.0], [62.7, 329.0], [62.8, 329.0], [62.9, 330.0], [63.0, 330.0], [63.1, 330.0], [63.2, 330.0], [63.3, 330.0], [63.4, 331.0], [63.5, 331.0], [63.6, 331.0], [63.7, 331.0], [63.8, 331.0], [63.9, 331.0], [64.0, 332.0], [64.1, 332.0], [64.2, 332.0], [64.3, 332.0], [64.4, 332.0], [64.5, 332.0], [64.6, 333.0], [64.7, 333.0], [64.8, 333.0], [64.9, 333.0], [65.0, 334.0], [65.1, 334.0], [65.2, 334.0], [65.3, 334.0], [65.4, 334.0], [65.5, 334.0], [65.6, 334.0], [65.7, 335.0], [65.8, 335.0], [65.9, 335.0], [66.0, 335.0], [66.1, 335.0], [66.2, 336.0], [66.3, 336.0], [66.4, 336.0], [66.5, 336.0], [66.6, 336.0], [66.7, 336.0], [66.8, 336.0], [66.9, 337.0], [67.0, 337.0], [67.1, 337.0], [67.2, 337.0], [67.3, 337.0], [67.4, 337.0], [67.5, 338.0], [67.6, 338.0], [67.7, 338.0], [67.8, 338.0], [67.9, 338.0], [68.0, 338.0], [68.1, 339.0], [68.2, 339.0], [68.3, 339.0], [68.4, 339.0], [68.5, 339.0], [68.6, 339.0], [68.7, 339.0], [68.8, 340.0], [68.9, 340.0], [69.0, 340.0], [69.1, 340.0], [69.2, 340.0], [69.3, 340.0], [69.4, 341.0], [69.5, 341.0], [69.6, 341.0], [69.7, 341.0], [69.8, 342.0], [69.9, 342.0], [70.0, 342.0], [70.1, 342.0], [70.2, 343.0], [70.3, 343.0], [70.4, 343.0], [70.5, 343.0], [70.6, 343.0], [70.7, 343.0], [70.8, 344.0], [70.9, 344.0], [71.0, 344.0], [71.1, 344.0], [71.2, 344.0], [71.3, 345.0], [71.4, 345.0], [71.5, 345.0], [71.6, 345.0], [71.7, 346.0], [71.8, 346.0], [71.9, 346.0], [72.0, 346.0], [72.1, 347.0], [72.2, 347.0], [72.3, 347.0], [72.4, 347.0], [72.5, 347.0], [72.6, 348.0], [72.7, 348.0], [72.8, 348.0], [72.9, 348.0], [73.0, 348.0], [73.1, 349.0], [73.2, 349.0], [73.3, 349.0], [73.4, 349.0], [73.5, 350.0], [73.6, 350.0], [73.7, 350.0], [73.8, 350.0], [73.9, 351.0], [74.0, 351.0], [74.1, 351.0], [74.2, 351.0], [74.3, 351.0], [74.4, 351.0], [74.5, 352.0], [74.6, 352.0], [74.7, 352.0], [74.8, 352.0], [74.9, 353.0], [75.0, 353.0], [75.1, 353.0], [75.2, 354.0], [75.3, 354.0], [75.4, 354.0], [75.5, 354.0], [75.6, 355.0], [75.7, 355.0], [75.8, 355.0], [75.9, 355.0], [76.0, 355.0], [76.1, 356.0], [76.2, 356.0], [76.3, 356.0], [76.4, 356.0], [76.5, 356.0], [76.6, 356.0], [76.7, 357.0], [76.8, 357.0], [76.9, 357.0], [77.0, 357.0], [77.1, 357.0], [77.2, 358.0], [77.3, 358.0], [77.4, 358.0], [77.5, 358.0], [77.6, 358.0], [77.7, 358.0], [77.8, 359.0], [77.9, 359.0], [78.0, 359.0], [78.1, 360.0], [78.2, 360.0], [78.3, 360.0], [78.4, 361.0], [78.5, 361.0], [78.6, 361.0], [78.7, 362.0], [78.8, 362.0], [78.9, 362.0], [79.0, 363.0], [79.1, 363.0], [79.2, 363.0], [79.3, 363.0], [79.4, 364.0], [79.5, 364.0], [79.6, 364.0], [79.7, 365.0], [79.8, 365.0], [79.9, 365.0], [80.0, 365.0], [80.1, 365.0], [80.2, 366.0], [80.3, 366.0], [80.4, 366.0], [80.5, 366.0], [80.6, 367.0], [80.7, 367.0], [80.8, 367.0], [80.9, 368.0], [81.0, 368.0], [81.1, 369.0], [81.2, 369.0], [81.3, 369.0], [81.4, 370.0], [81.5, 370.0], [81.6, 371.0], [81.7, 371.0], [81.8, 371.0], [81.9, 372.0], [82.0, 372.0], [82.1, 372.0], [82.2, 372.0], [82.3, 373.0], [82.4, 373.0], [82.5, 374.0], [82.6, 374.0], [82.7, 374.0], [82.8, 375.0], [82.9, 375.0], [83.0, 375.0], [83.1, 375.0], [83.2, 376.0], [83.3, 376.0], [83.4, 377.0], [83.5, 377.0], [83.6, 378.0], [83.7, 378.0], [83.8, 378.0], [83.9, 379.0], [84.0, 379.0], [84.1, 379.0], [84.2, 380.0], [84.3, 380.0], [84.4, 381.0], [84.5, 381.0], [84.6, 382.0], [84.7, 382.0], [84.8, 382.0], [84.9, 382.0], [85.0, 383.0], [85.1, 383.0], [85.2, 384.0], [85.3, 384.0], [85.4, 385.0], [85.5, 385.0], [85.6, 385.0], [85.7, 386.0], [85.8, 387.0], [85.9, 387.0], [86.0, 388.0], [86.1, 388.0], [86.2, 389.0], [86.3, 389.0], [86.4, 390.0], [86.5, 390.0], [86.6, 390.0], [86.7, 391.0], [86.8, 391.0], [86.9, 392.0], [87.0, 392.0], [87.1, 392.0], [87.2, 393.0], [87.3, 393.0], [87.4, 394.0], [87.5, 394.0], [87.6, 394.0], [87.7, 395.0], [87.8, 395.0], [87.9, 395.0], [88.0, 396.0], [88.1, 396.0], [88.2, 397.0], [88.3, 397.0], [88.4, 397.0], [88.5, 398.0], [88.6, 398.0], [88.7, 399.0], [88.8, 400.0], [88.9, 400.0], [89.0, 401.0], [89.1, 401.0], [89.2, 402.0], [89.3, 403.0], [89.4, 403.0], [89.5, 404.0], [89.6, 404.0], [89.7, 405.0], [89.8, 405.0], [89.9, 405.0], [90.0, 406.0], [90.1, 406.0], [90.2, 407.0], [90.3, 407.0], [90.4, 408.0], [90.5, 408.0], [90.6, 409.0], [90.7, 409.0], [90.8, 410.0], [90.9, 410.0], [91.0, 411.0], [91.1, 411.0], [91.2, 412.0], [91.3, 412.0], [91.4, 413.0], [91.5, 413.0], [91.6, 413.0], [91.7, 414.0], [91.8, 414.0], [91.9, 415.0], [92.0, 416.0], [92.1, 416.0], [92.2, 418.0], [92.3, 419.0], [92.4, 419.0], [92.5, 420.0], [92.6, 420.0], [92.7, 421.0], [92.8, 421.0], [92.9, 422.0], [93.0, 422.0], [93.1, 423.0], [93.2, 424.0], [93.3, 425.0], [93.4, 425.0], [93.5, 426.0], [93.6, 428.0], [93.7, 428.0], [93.8, 430.0], [93.9, 430.0], [94.0, 433.0], [94.1, 434.0], [94.2, 434.0], [94.3, 435.0], [94.4, 436.0], [94.5, 437.0], [94.6, 438.0], [94.7, 440.0], [94.8, 441.0], [94.9, 441.0], [95.0, 443.0], [95.1, 444.0], [95.2, 446.0], [95.3, 447.0], [95.4, 448.0], [95.5, 449.0], [95.6, 450.0], [95.7, 451.0], [95.8, 452.0], [95.9, 453.0], [96.0, 454.0], [96.1, 454.0], [96.2, 455.0], [96.3, 457.0], [96.4, 458.0], [96.5, 459.0], [96.6, 460.0], [96.7, 462.0], [96.8, 463.0], [96.9, 464.0], [97.0, 465.0], [97.1, 467.0], [97.2, 470.0], [97.3, 471.0], [97.4, 472.0], [97.5, 473.0], [97.6, 475.0], [97.7, 478.0], [97.8, 480.0], [97.9, 482.0], [98.0, 484.0], [98.1, 486.0], [98.2, 489.0], [98.3, 493.0], [98.4, 496.0], [98.5, 500.0], [98.6, 503.0], [98.7, 504.0], [98.8, 508.0], [98.9, 511.0], [99.0, 520.0], [99.1, 523.0], [99.2, 531.0], [99.3, 538.0], [99.4, 546.0], [99.5, 553.0], [99.6, 569.0], [99.7, 579.0], [99.8, 591.0], [99.9, 612.0]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 9.0, "minX": 200.0, "maxY": 2833.0, "series": [{"data": [[300.0, 2833.0], [600.0, 9.0], [200.0, 2501.0], [400.0, 582.0], [500.0, 82.0]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 89.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5918.0, "series": [{"data": [[0.0, 5918.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 89.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 14.67013888888889, "minX": 1.6259955E12, "maxY": 50.0, "series": [{"data": [[1.62599562E12, 50.0], [1.6259958E12, 48.614015572858726], [1.6259955E12, 14.67013888888889], [1.62599568E12, 50.0], [1.62599556E12, 47.05906480721908], [1.62599574E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259958E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 268.25, "minX": 1.0, "maxY": 477.70588235294116, "series": [{"data": [[2.0, 289.0], [3.0, 268.25], [4.0, 271.5], [5.0, 273.3636363636363], [6.0, 281.1538461538462], [7.0, 291.61538461538464], [8.0, 289.3636363636364], [9.0, 297.3571428571429], [10.0, 294.0714285714286], [11.0, 304.6428571428571], [12.0, 364.76923076923083], [13.0, 410.2857142857142], [14.0, 441.33333333333326], [15.0, 430.0], [16.0, 428.5294117647059], [17.0, 405.1538461538462], [18.0, 397.7857142857143], [19.0, 366.91666666666663], [20.0, 435.93333333333334], [21.0, 354.8181818181818], [22.0, 404.8235294117647], [23.0, 401.9166666666667], [24.0, 349.1875], [25.0, 412.61538461538464], [26.0, 327.33333333333337], [27.0, 456.20000000000005], [28.0, 399.19999999999993], [29.0, 358.90000000000003], [30.0, 477.70588235294116], [31.0, 370.21428571428567], [32.0, 472.64285714285717], [33.0, 388.99999999999994], [34.0, 320.1818181818182], [35.0, 435.2777777777778], [36.0, 360.5333333333333], [37.0, 349.9], [38.0, 448.5], [39.0, 394.38461538461536], [40.0, 372.92857142857144], [41.0, 466.53333333333336], [42.0, 399.92307692307696], [43.0, 371.4], [44.0, 406.92307692307696], [45.0, 419.0], [46.0, 396.68749999999994], [47.0, 332.75], [48.0, 422.61538461538464], [49.0, 397.4705882352941], [50.0, 317.0871670702163], [1.0, 313.6666666666667]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx", "isController": false}, {"data": [[47.50191443316128, 323.76027967371476]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 739.2, "minX": 1.6259955E12, "maxY": 3636.6833333333334, "series": [{"data": [[1.62599562E12, 3082.5666666666666], [1.6259958E12, 2307.4333333333334], [1.6259955E12, 739.2], [1.62599568E12, 3082.5666666666666], [1.62599556E12, 3128.766666666667], [1.62599574E12, 3077.4333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62599562E12, 3582.983333333333], [1.6259958E12, 2682.016666666667], [1.6259955E12, 859.2], [1.62599568E12, 3582.983333333333], [1.62599556E12, 3636.6833333333334], [1.62599574E12, 3577.016666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259958E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 316.3703085904923, "minX": 1.6259955E12, "maxY": 360.23958333333303, "series": [{"data": [[1.62599562E12, 316.7785179017484], [1.6259958E12, 316.65072302558406], [1.6259955E12, 360.23958333333303], [1.62599568E12, 317.555370524563], [1.62599556E12, 340.64561115668556], [1.62599574E12, 316.3703085904923]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259958E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 316.3644703919938, "minX": 1.6259955E12, "maxY": 360.22916666666663, "series": [{"data": [[1.62599562E12, 316.7710241465446], [1.6259958E12, 316.6440489432709], [1.6259955E12, 360.22916666666663], [1.62599568E12, 317.55120732722696], [1.62599556E12, 340.63904840032774], [1.62599574E12, 316.3644703919938]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259958E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 37.05555555555554, "minX": 1.6259955E12, "maxY": 37.23133716160786, "series": [{"data": [[1.62599562E12, 37.193172356369644], [1.6259958E12, 37.212458286985544], [1.6259955E12, 37.05555555555554], [1.62599568E12, 37.22980849292251], [1.62599556E12, 37.23133716160786], [1.62599574E12, 37.181818181818194]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259958E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 252.0, "minX": 1.6259955E12, "maxY": 693.0, "series": [{"data": [[1.62599562E12, 531.0], [1.6259958E12, 530.0], [1.6259955E12, 663.0], [1.62599568E12, 504.0], [1.62599556E12, 693.0], [1.62599574E12, 534.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62599562E12, 254.0], [1.6259958E12, 254.0], [1.6259955E12, 254.0], [1.62599568E12, 254.0], [1.62599556E12, 255.0], [1.62599574E12, 254.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62599562E12, 254.0], [1.6259958E12, 254.0], [1.6259955E12, 254.0], [1.62599568E12, 254.0], [1.62599556E12, 255.0], [1.62599574E12, 254.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62599562E12, 254.0], [1.6259958E12, 254.0], [1.6259955E12, 254.0], [1.62599568E12, 254.0], [1.62599556E12, 255.0], [1.62599574E12, 254.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62599562E12, 252.0], [1.6259958E12, 252.0], [1.6259955E12, 253.0], [1.62599568E12, 252.0], [1.62599556E12, 252.0], [1.62599574E12, 252.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62599562E12, 307.0], [1.6259958E12, 306.0], [1.6259955E12, 332.0], [1.62599568E12, 308.0], [1.62599556E12, 323.0], [1.62599574E12, 307.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259958E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 256.0, "minX": 1.0, "maxY": 433.5, "series": [{"data": [[14.0, 259.0], [1.0, 256.0], [16.0, 320.5], [17.0, 364.0], [18.0, 317.0], [19.0, 297.0], [20.0, 312.0], [21.0, 314.0], [22.0, 320.0], [23.0, 421.5], [24.0, 410.5], [25.0, 395.0], [26.0, 433.5], [7.0, 257.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 256.0, "minX": 1.0, "maxY": 433.5, "series": [{"data": [[14.0, 259.0], [1.0, 256.0], [16.0, 320.5], [17.0, 364.0], [18.0, 317.0], [19.0, 297.0], [20.0, 312.0], [21.0, 314.0], [22.0, 320.0], [23.0, 421.5], [24.0, 410.5], [25.0, 395.0], [26.0, 433.5], [7.0, 257.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.883333333333334, "minX": 1.6259955E12, "maxY": 20.35, "series": [{"data": [[1.62599562E12, 20.0], [1.6259958E12, 14.883333333333333], [1.6259955E12, 4.883333333333334], [1.62599568E12, 20.0], [1.62599556E12, 20.35], [1.62599574E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259958E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.8, "minX": 1.6259955E12, "maxY": 20.316666666666666, "series": [{"data": [[1.62599562E12, 20.016666666666666], [1.6259958E12, 14.983333333333333], [1.6259955E12, 4.8], [1.62599568E12, 20.016666666666666], [1.62599556E12, 20.316666666666666], [1.62599574E12, 19.983333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6259958E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.8, "minX": 1.6259955E12, "maxY": 20.316666666666666, "series": [{"data": [[1.62599562E12, 20.016666666666666], [1.6259958E12, 14.983333333333333], [1.6259955E12, 4.8], [1.62599568E12, 20.016666666666666], [1.62599556E12, 20.316666666666666], [1.62599574E12, 19.983333333333334]], "isOverall": false, "label": "cpu\/1\/vertx\/vertx-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259958E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.8, "minX": 1.6259955E12, "maxY": 20.316666666666666, "series": [{"data": [[1.62599562E12, 20.016666666666666], [1.6259958E12, 14.983333333333333], [1.6259955E12, 4.8], [1.62599568E12, 20.016666666666666], [1.62599556E12, 20.316666666666666], [1.62599574E12, 19.983333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6259958E12, "title": "Total Transactions Per Second"}},
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

