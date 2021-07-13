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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 683.0, "series": [{"data": [[0.0, 183.0], [0.1, 184.0], [0.2, 184.0], [0.3, 184.0], [0.4, 184.0], [0.5, 184.0], [0.6, 184.0], [0.7, 184.0], [0.8, 184.0], [0.9, 184.0], [1.0, 184.0], [1.1, 184.0], [1.2, 184.0], [1.3, 184.0], [1.4, 184.0], [1.5, 184.0], [1.6, 184.0], [1.7, 184.0], [1.8, 184.0], [1.9, 184.0], [2.0, 184.0], [2.1, 184.0], [2.2, 184.0], [2.3, 184.0], [2.4, 184.0], [2.5, 184.0], [2.6, 185.0], [2.7, 185.0], [2.8, 185.0], [2.9, 185.0], [3.0, 185.0], [3.1, 185.0], [3.2, 185.0], [3.3, 185.0], [3.4, 185.0], [3.5, 185.0], [3.6, 185.0], [3.7, 185.0], [3.8, 185.0], [3.9, 185.0], [4.0, 185.0], [4.1, 185.0], [4.2, 185.0], [4.3, 185.0], [4.4, 185.0], [4.5, 185.0], [4.6, 185.0], [4.7, 185.0], [4.8, 185.0], [4.9, 185.0], [5.0, 185.0], [5.1, 185.0], [5.2, 185.0], [5.3, 185.0], [5.4, 185.0], [5.5, 185.0], [5.6, 185.0], [5.7, 185.0], [5.8, 185.0], [5.9, 185.0], [6.0, 185.0], [6.1, 185.0], [6.2, 185.0], [6.3, 185.0], [6.4, 185.0], [6.5, 185.0], [6.6, 185.0], [6.7, 185.0], [6.8, 185.0], [6.9, 185.0], [7.0, 185.0], [7.1, 185.0], [7.2, 185.0], [7.3, 185.0], [7.4, 186.0], [7.5, 186.0], [7.6, 186.0], [7.7, 186.0], [7.8, 186.0], [7.9, 186.0], [8.0, 186.0], [8.1, 186.0], [8.2, 186.0], [8.3, 186.0], [8.4, 186.0], [8.5, 186.0], [8.6, 186.0], [8.7, 186.0], [8.8, 186.0], [8.9, 186.0], [9.0, 186.0], [9.1, 186.0], [9.2, 186.0], [9.3, 186.0], [9.4, 186.0], [9.5, 186.0], [9.6, 187.0], [9.7, 187.0], [9.8, 187.0], [9.9, 187.0], [10.0, 188.0], [10.1, 188.0], [10.2, 188.0], [10.3, 188.0], [10.4, 189.0], [10.5, 189.0], [10.6, 189.0], [10.7, 189.0], [10.8, 189.0], [10.9, 190.0], [11.0, 190.0], [11.1, 190.0], [11.2, 190.0], [11.3, 191.0], [11.4, 192.0], [11.5, 192.0], [11.6, 192.0], [11.7, 193.0], [11.8, 193.0], [11.9, 194.0], [12.0, 194.0], [12.1, 195.0], [12.2, 195.0], [12.3, 196.0], [12.4, 196.0], [12.5, 196.0], [12.6, 197.0], [12.7, 197.0], [12.8, 197.0], [12.9, 197.0], [13.0, 197.0], [13.1, 197.0], [13.2, 197.0], [13.3, 198.0], [13.4, 198.0], [13.5, 198.0], [13.6, 198.0], [13.7, 199.0], [13.8, 199.0], [13.9, 200.0], [14.0, 200.0], [14.1, 201.0], [14.2, 201.0], [14.3, 201.0], [14.4, 202.0], [14.5, 203.0], [14.6, 203.0], [14.7, 203.0], [14.8, 204.0], [14.9, 204.0], [15.0, 205.0], [15.1, 206.0], [15.2, 206.0], [15.3, 206.0], [15.4, 206.0], [15.5, 207.0], [15.6, 207.0], [15.7, 208.0], [15.8, 208.0], [15.9, 208.0], [16.0, 209.0], [16.1, 209.0], [16.2, 210.0], [16.3, 210.0], [16.4, 211.0], [16.5, 211.0], [16.6, 211.0], [16.7, 212.0], [16.8, 212.0], [16.9, 213.0], [17.0, 214.0], [17.1, 214.0], [17.2, 215.0], [17.3, 215.0], [17.4, 215.0], [17.5, 216.0], [17.6, 216.0], [17.7, 216.0], [17.8, 217.0], [17.9, 217.0], [18.0, 217.0], [18.1, 218.0], [18.2, 218.0], [18.3, 218.0], [18.4, 218.0], [18.5, 218.0], [18.6, 219.0], [18.7, 219.0], [18.8, 219.0], [18.9, 219.0], [19.0, 219.0], [19.1, 219.0], [19.2, 220.0], [19.3, 220.0], [19.4, 220.0], [19.5, 220.0], [19.6, 220.0], [19.7, 221.0], [19.8, 221.0], [19.9, 221.0], [20.0, 221.0], [20.1, 221.0], [20.2, 221.0], [20.3, 222.0], [20.4, 222.0], [20.5, 222.0], [20.6, 223.0], [20.7, 223.0], [20.8, 223.0], [20.9, 224.0], [21.0, 224.0], [21.1, 224.0], [21.2, 224.0], [21.3, 225.0], [21.4, 225.0], [21.5, 225.0], [21.6, 226.0], [21.7, 226.0], [21.8, 226.0], [21.9, 227.0], [22.0, 227.0], [22.1, 227.0], [22.2, 227.0], [22.3, 228.0], [22.4, 228.0], [22.5, 228.0], [22.6, 229.0], [22.7, 229.0], [22.8, 229.0], [22.9, 229.0], [23.0, 230.0], [23.1, 231.0], [23.2, 231.0], [23.3, 231.0], [23.4, 232.0], [23.5, 232.0], [23.6, 233.0], [23.7, 233.0], [23.8, 233.0], [23.9, 233.0], [24.0, 234.0], [24.1, 234.0], [24.2, 235.0], [24.3, 235.0], [24.4, 235.0], [24.5, 236.0], [24.6, 236.0], [24.7, 236.0], [24.8, 237.0], [24.9, 237.0], [25.0, 238.0], [25.1, 238.0], [25.2, 238.0], [25.3, 239.0], [25.4, 239.0], [25.5, 239.0], [25.6, 240.0], [25.7, 240.0], [25.8, 241.0], [25.9, 241.0], [26.0, 242.0], [26.1, 242.0], [26.2, 242.0], [26.3, 243.0], [26.4, 243.0], [26.5, 244.0], [26.6, 244.0], [26.7, 244.0], [26.8, 245.0], [26.9, 245.0], [27.0, 246.0], [27.1, 246.0], [27.2, 246.0], [27.3, 247.0], [27.4, 248.0], [27.5, 248.0], [27.6, 249.0], [27.7, 249.0], [27.8, 250.0], [27.9, 250.0], [28.0, 251.0], [28.1, 251.0], [28.2, 252.0], [28.3, 252.0], [28.4, 252.0], [28.5, 254.0], [28.6, 254.0], [28.7, 255.0], [28.8, 256.0], [28.9, 256.0], [29.0, 256.0], [29.1, 257.0], [29.2, 258.0], [29.3, 258.0], [29.4, 260.0], [29.5, 260.0], [29.6, 260.0], [29.7, 261.0], [29.8, 261.0], [29.9, 262.0], [30.0, 262.0], [30.1, 263.0], [30.2, 263.0], [30.3, 263.0], [30.4, 264.0], [30.5, 264.0], [30.6, 265.0], [30.7, 265.0], [30.8, 265.0], [30.9, 266.0], [31.0, 266.0], [31.1, 266.0], [31.2, 266.0], [31.3, 267.0], [31.4, 267.0], [31.5, 268.0], [31.6, 268.0], [31.7, 268.0], [31.8, 268.0], [31.9, 269.0], [32.0, 269.0], [32.1, 269.0], [32.2, 269.0], [32.3, 270.0], [32.4, 270.0], [32.5, 271.0], [32.6, 271.0], [32.7, 271.0], [32.8, 272.0], [32.9, 273.0], [33.0, 273.0], [33.1, 273.0], [33.2, 273.0], [33.3, 274.0], [33.4, 274.0], [33.5, 275.0], [33.6, 275.0], [33.7, 276.0], [33.8, 276.0], [33.9, 276.0], [34.0, 277.0], [34.1, 277.0], [34.2, 277.0], [34.3, 278.0], [34.4, 278.0], [34.5, 278.0], [34.6, 279.0], [34.7, 279.0], [34.8, 279.0], [34.9, 280.0], [35.0, 280.0], [35.1, 280.0], [35.2, 281.0], [35.3, 281.0], [35.4, 281.0], [35.5, 282.0], [35.6, 282.0], [35.7, 283.0], [35.8, 283.0], [35.9, 283.0], [36.0, 284.0], [36.1, 284.0], [36.2, 285.0], [36.3, 285.0], [36.4, 286.0], [36.5, 286.0], [36.6, 286.0], [36.7, 287.0], [36.8, 287.0], [36.9, 288.0], [37.0, 288.0], [37.1, 289.0], [37.2, 289.0], [37.3, 290.0], [37.4, 290.0], [37.5, 290.0], [37.6, 291.0], [37.7, 292.0], [37.8, 292.0], [37.9, 293.0], [38.0, 293.0], [38.1, 293.0], [38.2, 293.0], [38.3, 294.0], [38.4, 294.0], [38.5, 295.0], [38.6, 295.0], [38.7, 295.0], [38.8, 296.0], [38.9, 296.0], [39.0, 296.0], [39.1, 297.0], [39.2, 297.0], [39.3, 297.0], [39.4, 298.0], [39.5, 298.0], [39.6, 299.0], [39.7, 299.0], [39.8, 299.0], [39.9, 300.0], [40.0, 300.0], [40.1, 300.0], [40.2, 301.0], [40.3, 301.0], [40.4, 301.0], [40.5, 302.0], [40.6, 302.0], [40.7, 302.0], [40.8, 303.0], [40.9, 303.0], [41.0, 304.0], [41.1, 304.0], [41.2, 304.0], [41.3, 304.0], [41.4, 305.0], [41.5, 305.0], [41.6, 306.0], [41.7, 306.0], [41.8, 306.0], [41.9, 306.0], [42.0, 307.0], [42.1, 307.0], [42.2, 308.0], [42.3, 308.0], [42.4, 308.0], [42.5, 309.0], [42.6, 309.0], [42.7, 309.0], [42.8, 309.0], [42.9, 310.0], [43.0, 310.0], [43.1, 311.0], [43.2, 311.0], [43.3, 311.0], [43.4, 311.0], [43.5, 312.0], [43.6, 312.0], [43.7, 312.0], [43.8, 313.0], [43.9, 313.0], [44.0, 313.0], [44.1, 314.0], [44.2, 314.0], [44.3, 314.0], [44.4, 315.0], [44.5, 315.0], [44.6, 315.0], [44.7, 315.0], [44.8, 316.0], [44.9, 316.0], [45.0, 316.0], [45.1, 316.0], [45.2, 317.0], [45.3, 317.0], [45.4, 317.0], [45.5, 318.0], [45.6, 318.0], [45.7, 318.0], [45.8, 319.0], [45.9, 319.0], [46.0, 319.0], [46.1, 320.0], [46.2, 320.0], [46.3, 320.0], [46.4, 321.0], [46.5, 321.0], [46.6, 321.0], [46.7, 321.0], [46.8, 322.0], [46.9, 322.0], [47.0, 322.0], [47.1, 323.0], [47.2, 323.0], [47.3, 323.0], [47.4, 324.0], [47.5, 324.0], [47.6, 324.0], [47.7, 325.0], [47.8, 325.0], [47.9, 325.0], [48.0, 325.0], [48.1, 326.0], [48.2, 326.0], [48.3, 326.0], [48.4, 326.0], [48.5, 327.0], [48.6, 327.0], [48.7, 327.0], [48.8, 328.0], [48.9, 328.0], [49.0, 328.0], [49.1, 329.0], [49.2, 329.0], [49.3, 329.0], [49.4, 330.0], [49.5, 330.0], [49.6, 330.0], [49.7, 331.0], [49.8, 331.0], [49.9, 332.0], [50.0, 332.0], [50.1, 332.0], [50.2, 333.0], [50.3, 333.0], [50.4, 333.0], [50.5, 333.0], [50.6, 333.0], [50.7, 334.0], [50.8, 334.0], [50.9, 334.0], [51.0, 334.0], [51.1, 335.0], [51.2, 335.0], [51.3, 335.0], [51.4, 335.0], [51.5, 336.0], [51.6, 336.0], [51.7, 336.0], [51.8, 337.0], [51.9, 337.0], [52.0, 337.0], [52.1, 337.0], [52.2, 338.0], [52.3, 338.0], [52.4, 338.0], [52.5, 338.0], [52.6, 339.0], [52.7, 339.0], [52.8, 339.0], [52.9, 339.0], [53.0, 340.0], [53.1, 340.0], [53.2, 340.0], [53.3, 341.0], [53.4, 341.0], [53.5, 342.0], [53.6, 342.0], [53.7, 342.0], [53.8, 342.0], [53.9, 343.0], [54.0, 343.0], [54.1, 343.0], [54.2, 343.0], [54.3, 344.0], [54.4, 344.0], [54.5, 344.0], [54.6, 344.0], [54.7, 345.0], [54.8, 345.0], [54.9, 346.0], [55.0, 346.0], [55.1, 346.0], [55.2, 346.0], [55.3, 347.0], [55.4, 347.0], [55.5, 347.0], [55.6, 348.0], [55.7, 348.0], [55.8, 348.0], [55.9, 348.0], [56.0, 349.0], [56.1, 349.0], [56.2, 349.0], [56.3, 349.0], [56.4, 349.0], [56.5, 350.0], [56.6, 350.0], [56.7, 350.0], [56.8, 351.0], [56.9, 351.0], [57.0, 351.0], [57.1, 351.0], [57.2, 352.0], [57.3, 352.0], [57.4, 352.0], [57.5, 353.0], [57.6, 353.0], [57.7, 353.0], [57.8, 353.0], [57.9, 353.0], [58.0, 354.0], [58.1, 354.0], [58.2, 355.0], [58.3, 355.0], [58.4, 355.0], [58.5, 356.0], [58.6, 356.0], [58.7, 356.0], [58.8, 357.0], [58.9, 357.0], [59.0, 357.0], [59.1, 357.0], [59.2, 358.0], [59.3, 358.0], [59.4, 358.0], [59.5, 358.0], [59.6, 359.0], [59.7, 359.0], [59.8, 359.0], [59.9, 360.0], [60.0, 360.0], [60.1, 360.0], [60.2, 360.0], [60.3, 361.0], [60.4, 361.0], [60.5, 361.0], [60.6, 361.0], [60.7, 362.0], [60.8, 362.0], [60.9, 362.0], [61.0, 362.0], [61.1, 363.0], [61.2, 363.0], [61.3, 363.0], [61.4, 363.0], [61.5, 364.0], [61.6, 364.0], [61.7, 364.0], [61.8, 364.0], [61.9, 365.0], [62.0, 365.0], [62.1, 366.0], [62.2, 366.0], [62.3, 366.0], [62.4, 366.0], [62.5, 366.0], [62.6, 367.0], [62.7, 367.0], [62.8, 367.0], [62.9, 367.0], [63.0, 367.0], [63.1, 368.0], [63.2, 368.0], [63.3, 368.0], [63.4, 368.0], [63.5, 369.0], [63.6, 369.0], [63.7, 369.0], [63.8, 369.0], [63.9, 370.0], [64.0, 370.0], [64.1, 370.0], [64.2, 371.0], [64.3, 371.0], [64.4, 371.0], [64.5, 371.0], [64.6, 371.0], [64.7, 372.0], [64.8, 372.0], [64.9, 372.0], [65.0, 373.0], [65.1, 373.0], [65.2, 373.0], [65.3, 373.0], [65.4, 373.0], [65.5, 373.0], [65.6, 374.0], [65.7, 374.0], [65.8, 374.0], [65.9, 374.0], [66.0, 374.0], [66.1, 375.0], [66.2, 375.0], [66.3, 375.0], [66.4, 375.0], [66.5, 375.0], [66.6, 376.0], [66.7, 376.0], [66.8, 376.0], [66.9, 376.0], [67.0, 377.0], [67.1, 377.0], [67.2, 377.0], [67.3, 377.0], [67.4, 377.0], [67.5, 378.0], [67.6, 378.0], [67.7, 378.0], [67.8, 378.0], [67.9, 379.0], [68.0, 379.0], [68.1, 379.0], [68.2, 379.0], [68.3, 380.0], [68.4, 380.0], [68.5, 380.0], [68.6, 381.0], [68.7, 381.0], [68.8, 381.0], [68.9, 382.0], [69.0, 382.0], [69.1, 382.0], [69.2, 382.0], [69.3, 383.0], [69.4, 383.0], [69.5, 383.0], [69.6, 384.0], [69.7, 384.0], [69.8, 384.0], [69.9, 384.0], [70.0, 385.0], [70.1, 385.0], [70.2, 385.0], [70.3, 385.0], [70.4, 386.0], [70.5, 386.0], [70.6, 386.0], [70.7, 387.0], [70.8, 387.0], [70.9, 387.0], [71.0, 387.0], [71.1, 388.0], [71.2, 388.0], [71.3, 388.0], [71.4, 388.0], [71.5, 389.0], [71.6, 389.0], [71.7, 389.0], [71.8, 389.0], [71.9, 389.0], [72.0, 390.0], [72.1, 390.0], [72.2, 390.0], [72.3, 391.0], [72.4, 391.0], [72.5, 391.0], [72.6, 391.0], [72.7, 391.0], [72.8, 392.0], [72.9, 392.0], [73.0, 392.0], [73.1, 393.0], [73.2, 393.0], [73.3, 393.0], [73.4, 394.0], [73.5, 394.0], [73.6, 394.0], [73.7, 395.0], [73.8, 395.0], [73.9, 395.0], [74.0, 395.0], [74.1, 396.0], [74.2, 396.0], [74.3, 396.0], [74.4, 396.0], [74.5, 397.0], [74.6, 397.0], [74.7, 397.0], [74.8, 398.0], [74.9, 398.0], [75.0, 398.0], [75.1, 398.0], [75.2, 399.0], [75.3, 399.0], [75.4, 399.0], [75.5, 400.0], [75.6, 400.0], [75.7, 400.0], [75.8, 400.0], [75.9, 401.0], [76.0, 401.0], [76.1, 401.0], [76.2, 402.0], [76.3, 402.0], [76.4, 402.0], [76.5, 403.0], [76.6, 403.0], [76.7, 403.0], [76.8, 404.0], [76.9, 404.0], [77.0, 404.0], [77.1, 405.0], [77.2, 405.0], [77.3, 405.0], [77.4, 406.0], [77.5, 406.0], [77.6, 407.0], [77.7, 407.0], [77.8, 407.0], [77.9, 408.0], [78.0, 408.0], [78.1, 409.0], [78.2, 409.0], [78.3, 409.0], [78.4, 409.0], [78.5, 410.0], [78.6, 410.0], [78.7, 410.0], [78.8, 411.0], [78.9, 411.0], [79.0, 411.0], [79.1, 412.0], [79.2, 412.0], [79.3, 412.0], [79.4, 413.0], [79.5, 413.0], [79.6, 414.0], [79.7, 414.0], [79.8, 415.0], [79.9, 415.0], [80.0, 415.0], [80.1, 416.0], [80.2, 416.0], [80.3, 416.0], [80.4, 416.0], [80.5, 417.0], [80.6, 417.0], [80.7, 418.0], [80.8, 418.0], [80.9, 419.0], [81.0, 419.0], [81.1, 420.0], [81.2, 420.0], [81.3, 420.0], [81.4, 421.0], [81.5, 421.0], [81.6, 422.0], [81.7, 422.0], [81.8, 423.0], [81.9, 423.0], [82.0, 423.0], [82.1, 424.0], [82.2, 424.0], [82.3, 425.0], [82.4, 425.0], [82.5, 425.0], [82.6, 426.0], [82.7, 426.0], [82.8, 426.0], [82.9, 427.0], [83.0, 427.0], [83.1, 427.0], [83.2, 428.0], [83.3, 428.0], [83.4, 428.0], [83.5, 429.0], [83.6, 429.0], [83.7, 429.0], [83.8, 430.0], [83.9, 430.0], [84.0, 431.0], [84.1, 431.0], [84.2, 432.0], [84.3, 432.0], [84.4, 433.0], [84.5, 433.0], [84.6, 434.0], [84.7, 434.0], [84.8, 434.0], [84.9, 435.0], [85.0, 435.0], [85.1, 435.0], [85.2, 436.0], [85.3, 436.0], [85.4, 437.0], [85.5, 437.0], [85.6, 437.0], [85.7, 438.0], [85.8, 439.0], [85.9, 439.0], [86.0, 440.0], [86.1, 440.0], [86.2, 441.0], [86.3, 441.0], [86.4, 441.0], [86.5, 441.0], [86.6, 442.0], [86.7, 443.0], [86.8, 444.0], [86.9, 444.0], [87.0, 444.0], [87.1, 445.0], [87.2, 445.0], [87.3, 445.0], [87.4, 445.0], [87.5, 446.0], [87.6, 447.0], [87.7, 447.0], [87.8, 447.0], [87.9, 448.0], [88.0, 448.0], [88.1, 449.0], [88.2, 449.0], [88.3, 449.0], [88.4, 450.0], [88.5, 450.0], [88.6, 451.0], [88.7, 451.0], [88.8, 452.0], [88.9, 452.0], [89.0, 453.0], [89.1, 453.0], [89.2, 454.0], [89.3, 454.0], [89.4, 455.0], [89.5, 455.0], [89.6, 456.0], [89.7, 456.0], [89.8, 457.0], [89.9, 458.0], [90.0, 458.0], [90.1, 458.0], [90.2, 459.0], [90.3, 459.0], [90.4, 460.0], [90.5, 460.0], [90.6, 461.0], [90.7, 461.0], [90.8, 462.0], [90.9, 462.0], [91.0, 463.0], [91.1, 463.0], [91.2, 464.0], [91.3, 464.0], [91.4, 464.0], [91.5, 465.0], [91.6, 466.0], [91.7, 467.0], [91.8, 468.0], [91.9, 468.0], [92.0, 469.0], [92.1, 469.0], [92.2, 470.0], [92.3, 471.0], [92.4, 471.0], [92.5, 472.0], [92.6, 473.0], [92.7, 473.0], [92.8, 474.0], [92.9, 475.0], [93.0, 475.0], [93.1, 476.0], [93.2, 477.0], [93.3, 478.0], [93.4, 478.0], [93.5, 479.0], [93.6, 479.0], [93.7, 480.0], [93.8, 480.0], [93.9, 481.0], [94.0, 482.0], [94.1, 483.0], [94.2, 483.0], [94.3, 484.0], [94.4, 485.0], [94.5, 486.0], [94.6, 487.0], [94.7, 487.0], [94.8, 487.0], [94.9, 488.0], [95.0, 489.0], [95.1, 490.0], [95.2, 490.0], [95.3, 491.0], [95.4, 492.0], [95.5, 493.0], [95.6, 494.0], [95.7, 495.0], [95.8, 496.0], [95.9, 498.0], [96.0, 499.0], [96.1, 499.0], [96.2, 500.0], [96.3, 501.0], [96.4, 502.0], [96.5, 502.0], [96.6, 503.0], [96.7, 505.0], [96.8, 506.0], [96.9, 507.0], [97.0, 507.0], [97.1, 508.0], [97.2, 510.0], [97.3, 511.0], [97.4, 512.0], [97.5, 513.0], [97.6, 514.0], [97.7, 515.0], [97.8, 519.0], [97.9, 521.0], [98.0, 522.0], [98.1, 525.0], [98.2, 526.0], [98.3, 530.0], [98.4, 533.0], [98.5, 536.0], [98.6, 540.0], [98.7, 542.0], [98.8, 545.0], [98.9, 552.0], [99.0, 556.0], [99.1, 562.0], [99.2, 566.0], [99.3, 571.0], [99.4, 582.0], [99.5, 590.0], [99.6, 603.0], [99.7, 612.0], [99.8, 628.0], [99.9, 651.0], [100.0, 683.0]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 25.0, "minX": 100.0, "maxY": 2142.0, "series": [{"data": [[300.0, 2142.0], [600.0, 25.0], [200.0, 1566.0], [100.0, 835.0], [400.0, 1242.0], [500.0, 208.0]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 225.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5793.0, "series": [{"data": [[0.0, 5793.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 225.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 22.35270541082164, "minX": 1.62617382E12, "maxY": 50.0, "series": [{"data": [[1.62617406E12, 50.0], [1.62617388E12, 49.681555004135674], [1.626174E12, 50.0], [1.62617382E12, 22.35270541082164], [1.62617412E12, 48.249647390691116], [1.62617394E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617412E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 201.84615384615384, "minX": 1.0, "maxY": 543.2352941176471, "series": [{"data": [[2.0, 210.42857142857142], [3.0, 207.10000000000002], [4.0, 201.84615384615384], [5.0, 212.24999999999997], [6.0, 230.30769230769232], [7.0, 232.66666666666666], [8.0, 256.7], [9.0, 257.1428571428571], [10.0, 266.79999999999995], [11.0, 274.08333333333337], [12.0, 312.6153846153846], [13.0, 338.57142857142856], [14.0, 413.25], [15.0, 388.2727272727273], [16.0, 378.3571428571428], [17.0, 386.5625], [18.0, 380.3125], [19.0, 247.22222222222226], [20.0, 374.6470588235294], [21.0, 385.1818181818182], [22.0, 326.6666666666667], [23.0, 402.4], [24.0, 266.5], [25.0, 404.93333333333334], [26.0, 278.7692307692308], [27.0, 410.1538461538462], [28.0, 347.31249999999994], [29.0, 359.37499999999994], [30.0, 444.93333333333334], [31.0, 325.20000000000005], [32.0, 457.9333333333333], [33.0, 341.24999999999994], [34.0, 356.0], [35.0, 471.9333333333333], [36.0, 370.18750000000006], [37.0, 354.66666666666663], [38.0, 467.66666666666663], [39.0, 406.59999999999997], [40.0, 369.4], [41.0, 472.52941176470586], [42.0, 432.0909090909091], [43.0, 377.35714285714283], [44.0, 473.99999999999994], [45.0, 543.2352941176471], [46.0, 478.70588235294116], [47.0, 384.33333333333337], [48.0, 448.4285714285715], [49.0, 415.75000000000006], [50.0, 323.6174446717513], [1.0, 274.3333333333333]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}, {"data": [[47.43735460285815, 327.85510136257886]], "isOverall": false, "label": "cpu/1/spring/flux-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1280.7666666666667, "minX": 1.62617382E12, "maxY": 3586.7, "series": [{"data": [[1.62617406E12, 3080.0], [1.62617388E12, 3103.1], [1.626174E12, 3080.0], [1.62617382E12, 1280.7666666666667], [1.62617412E12, 1819.7666666666667], [1.62617394E12, 3082.5666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62617406E12, 3560.0], [1.62617388E12, 3586.7], [1.626174E12, 3560.0], [1.62617382E12, 1480.3666666666666], [1.62617412E12, 2103.366666666667], [1.62617394E12, 3562.9666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617412E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 319.475317348378, "minX": 1.62617382E12, "maxY": 348.3166332665331, "series": [{"data": [[1.62617406E12, 322.4975000000004], [1.62617388E12, 338.9727047146404], [1.626174E12, 322.6200000000001], [1.62617382E12, 348.3166332665331], [1.62617412E12, 319.475317348378], [1.62617394E12, 323.69275603663567]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617412E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 319.4640338504935, "minX": 1.62617382E12, "maxY": 348.2645290581163, "series": [{"data": [[1.62617406E12, 322.48500000000035], [1.62617388E12, 338.9536807278749], [1.626174E12, 322.61083333333323], [1.62617382E12, 348.2645290581163], [1.62617412E12, 319.4640338504935], [1.62617394E12, 323.67693588676036]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617412E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.45916666666666717, "minX": 1.62617382E12, "maxY": 0.7374749498997998, "series": [{"data": [[1.62617406E12, 0.45916666666666717], [1.62617388E12, 0.583126550868487], [1.626174E12, 0.5125000000000008], [1.62617382E12, 0.7374749498997998], [1.62617412E12, 0.4880112834978845], [1.62617394E12, 0.4945878434637805]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617412E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.62617382E12, "maxY": 683.0, "series": [{"data": [[1.62617406E12, 577.0], [1.62617388E12, 683.0], [1.626174E12, 583.0], [1.62617382E12, 643.0], [1.62617412E12, 568.0], [1.62617394E12, 590.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62617406E12, 445.0], [1.62617388E12, 473.0], [1.626174E12, 444.0], [1.62617382E12, 523.0], [1.62617412E12, 441.0], [1.62617394E12, 452.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62617406E12, 514.0], [1.62617388E12, 625.4000000000015], [1.626174E12, 515.99], [1.62617382E12, 619.0], [1.62617412E12, 508.79999999999995], [1.62617394E12, 518.9200000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62617406E12, 475.95000000000005], [1.62617388E12, 507.0], [1.626174E12, 474.95000000000005], [1.62617382E12, 556.0], [1.62617412E12, 469.0], [1.62617394E12, 479.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62617406E12, 184.0], [1.62617388E12, 184.0], [1.626174E12, 184.0], [1.62617382E12, 185.0], [1.62617412E12, 183.0], [1.62617394E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62617406E12, 330.0], [1.62617388E12, 340.0], [1.626174E12, 329.0], [1.62617382E12, 335.0], [1.62617412E12, 327.0], [1.62617394E12, 326.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617412E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 185.0, "minX": 6.0, "maxY": 447.5, "series": [{"data": [[10.0, 378.5], [15.0, 294.5], [16.0, 185.0], [17.0, 332.5], [18.0, 321.5], [19.0, 326.0], [20.0, 328.0], [21.0, 341.0], [22.0, 325.0], [23.0, 353.0], [6.0, 186.0], [24.0, 331.0], [25.0, 331.0], [26.0, 447.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 185.0, "minX": 6.0, "maxY": 447.5, "series": [{"data": [[10.0, 378.5], [15.0, 294.5], [16.0, 185.0], [17.0, 332.5], [18.0, 321.5], [19.0, 326.0], [20.0, 328.0], [21.0, 341.0], [22.0, 325.0], [23.0, 353.0], [6.0, 186.0], [24.0, 331.0], [25.0, 331.0], [26.0, 447.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.483333333333333, "minX": 1.62617382E12, "maxY": 20.133333333333333, "series": [{"data": [[1.62617406E12, 20.0], [1.62617388E12, 20.133333333333333], [1.626174E12, 20.0], [1.62617382E12, 8.483333333333333], [1.62617412E12, 11.683333333333334], [1.62617394E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617412E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.316666666666666, "minX": 1.62617382E12, "maxY": 20.15, "series": [{"data": [[1.62617406E12, 20.0], [1.62617388E12, 20.15], [1.626174E12, 20.0], [1.62617382E12, 8.316666666666666], [1.62617412E12, 11.816666666666666], [1.62617394E12, 20.016666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617412E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.316666666666666, "minX": 1.62617382E12, "maxY": 20.15, "series": [{"data": [[1.62617406E12, 20.0], [1.62617388E12, 20.15], [1.626174E12, 20.0], [1.62617382E12, 8.316666666666666], [1.62617412E12, 11.816666666666666], [1.62617394E12, 20.016666666666666]], "isOverall": false, "label": "cpu/1/spring/flux-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617412E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.316666666666666, "minX": 1.62617382E12, "maxY": 20.15, "series": [{"data": [[1.62617406E12, 20.0], [1.62617388E12, 20.15], [1.626174E12, 20.0], [1.62617382E12, 8.316666666666666], [1.62617412E12, 11.816666666666666], [1.62617394E12, 20.016666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617412E12, "title": "Total Transactions Per Second"}},
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

