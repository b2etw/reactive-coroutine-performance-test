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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 1128.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 184.0], [0.3, 184.0], [0.4, 184.0], [0.5, 184.0], [0.6, 184.0], [0.7, 184.0], [0.8, 184.0], [0.9, 184.0], [1.0, 184.0], [1.1, 184.0], [1.2, 184.0], [1.3, 184.0], [1.4, 184.0], [1.5, 184.0], [1.6, 184.0], [1.7, 184.0], [1.8, 184.0], [1.9, 184.0], [2.0, 184.0], [2.1, 184.0], [2.2, 184.0], [2.3, 184.0], [2.4, 184.0], [2.5, 184.0], [2.6, 184.0], [2.7, 184.0], [2.8, 185.0], [2.9, 185.0], [3.0, 185.0], [3.1, 185.0], [3.2, 185.0], [3.3, 185.0], [3.4, 185.0], [3.5, 185.0], [3.6, 185.0], [3.7, 185.0], [3.8, 185.0], [3.9, 185.0], [4.0, 185.0], [4.1, 185.0], [4.2, 185.0], [4.3, 185.0], [4.4, 185.0], [4.5, 185.0], [4.6, 185.0], [4.7, 185.0], [4.8, 185.0], [4.9, 185.0], [5.0, 185.0], [5.1, 185.0], [5.2, 185.0], [5.3, 186.0], [5.4, 186.0], [5.5, 186.0], [5.6, 186.0], [5.7, 186.0], [5.8, 186.0], [5.9, 186.0], [6.0, 187.0], [6.1, 187.0], [6.2, 187.0], [6.3, 187.0], [6.4, 188.0], [6.5, 188.0], [6.6, 188.0], [6.7, 189.0], [6.8, 189.0], [6.9, 189.0], [7.0, 190.0], [7.1, 191.0], [7.2, 191.0], [7.3, 192.0], [7.4, 192.0], [7.5, 192.0], [7.6, 192.0], [7.7, 193.0], [7.8, 193.0], [7.9, 194.0], [8.0, 194.0], [8.1, 194.0], [8.2, 194.0], [8.3, 195.0], [8.4, 195.0], [8.5, 195.0], [8.6, 196.0], [8.7, 196.0], [8.8, 196.0], [8.9, 196.0], [9.0, 197.0], [9.1, 197.0], [9.2, 197.0], [9.3, 197.0], [9.4, 198.0], [9.5, 198.0], [9.6, 198.0], [9.7, 199.0], [9.8, 199.0], [9.9, 200.0], [10.0, 200.0], [10.1, 201.0], [10.2, 201.0], [10.3, 201.0], [10.4, 202.0], [10.5, 202.0], [10.6, 203.0], [10.7, 204.0], [10.8, 204.0], [10.9, 204.0], [11.0, 205.0], [11.1, 205.0], [11.2, 205.0], [11.3, 205.0], [11.4, 206.0], [11.5, 206.0], [11.6, 206.0], [11.7, 206.0], [11.8, 207.0], [11.9, 207.0], [12.0, 207.0], [12.1, 208.0], [12.2, 208.0], [12.3, 209.0], [12.4, 209.0], [12.5, 210.0], [12.6, 210.0], [12.7, 211.0], [12.8, 211.0], [12.9, 212.0], [13.0, 212.0], [13.1, 213.0], [13.2, 213.0], [13.3, 214.0], [13.4, 215.0], [13.5, 215.0], [13.6, 215.0], [13.7, 216.0], [13.8, 216.0], [13.9, 217.0], [14.0, 217.0], [14.1, 217.0], [14.2, 218.0], [14.3, 218.0], [14.4, 218.0], [14.5, 219.0], [14.6, 219.0], [14.7, 219.0], [14.8, 219.0], [14.9, 220.0], [15.0, 220.0], [15.1, 220.0], [15.2, 220.0], [15.3, 221.0], [15.4, 221.0], [15.5, 221.0], [15.6, 221.0], [15.7, 222.0], [15.8, 222.0], [15.9, 222.0], [16.0, 222.0], [16.1, 223.0], [16.2, 223.0], [16.3, 223.0], [16.4, 223.0], [16.5, 224.0], [16.6, 224.0], [16.7, 224.0], [16.8, 225.0], [16.9, 225.0], [17.0, 225.0], [17.1, 225.0], [17.2, 225.0], [17.3, 226.0], [17.4, 226.0], [17.5, 226.0], [17.6, 226.0], [17.7, 226.0], [17.8, 227.0], [17.9, 227.0], [18.0, 227.0], [18.1, 228.0], [18.2, 228.0], [18.3, 228.0], [18.4, 228.0], [18.5, 228.0], [18.6, 228.0], [18.7, 228.0], [18.8, 229.0], [18.9, 229.0], [19.0, 229.0], [19.1, 229.0], [19.2, 229.0], [19.3, 229.0], [19.4, 230.0], [19.5, 230.0], [19.6, 230.0], [19.7, 230.0], [19.8, 230.0], [19.9, 230.0], [20.0, 231.0], [20.1, 231.0], [20.2, 231.0], [20.3, 231.0], [20.4, 231.0], [20.5, 232.0], [20.6, 232.0], [20.7, 232.0], [20.8, 232.0], [20.9, 232.0], [21.0, 232.0], [21.1, 232.0], [21.2, 233.0], [21.3, 233.0], [21.4, 233.0], [21.5, 233.0], [21.6, 233.0], [21.7, 234.0], [21.8, 234.0], [21.9, 234.0], [22.0, 234.0], [22.1, 234.0], [22.2, 234.0], [22.3, 235.0], [22.4, 235.0], [22.5, 235.0], [22.6, 235.0], [22.7, 236.0], [22.8, 236.0], [22.9, 236.0], [23.0, 236.0], [23.1, 237.0], [23.2, 237.0], [23.3, 237.0], [23.4, 237.0], [23.5, 237.0], [23.6, 237.0], [23.7, 238.0], [23.8, 238.0], [23.9, 238.0], [24.0, 238.0], [24.1, 239.0], [24.2, 239.0], [24.3, 239.0], [24.4, 239.0], [24.5, 240.0], [24.6, 240.0], [24.7, 240.0], [24.8, 240.0], [24.9, 240.0], [25.0, 241.0], [25.1, 241.0], [25.2, 241.0], [25.3, 241.0], [25.4, 241.0], [25.5, 242.0], [25.6, 242.0], [25.7, 242.0], [25.8, 242.0], [25.9, 242.0], [26.0, 242.0], [26.1, 243.0], [26.2, 243.0], [26.3, 243.0], [26.4, 243.0], [26.5, 244.0], [26.6, 244.0], [26.7, 244.0], [26.8, 244.0], [26.9, 244.0], [27.0, 244.0], [27.1, 244.0], [27.2, 244.0], [27.3, 245.0], [27.4, 245.0], [27.5, 245.0], [27.6, 245.0], [27.7, 245.0], [27.8, 245.0], [27.9, 246.0], [28.0, 246.0], [28.1, 246.0], [28.2, 246.0], [28.3, 246.0], [28.4, 247.0], [28.5, 247.0], [28.6, 247.0], [28.7, 248.0], [28.8, 248.0], [28.9, 248.0], [29.0, 248.0], [29.1, 249.0], [29.2, 249.0], [29.3, 249.0], [29.4, 249.0], [29.5, 250.0], [29.6, 250.0], [29.7, 250.0], [29.8, 250.0], [29.9, 251.0], [30.0, 251.0], [30.1, 251.0], [30.2, 251.0], [30.3, 252.0], [30.4, 252.0], [30.5, 253.0], [30.6, 253.0], [30.7, 253.0], [30.8, 254.0], [30.9, 254.0], [31.0, 254.0], [31.1, 254.0], [31.2, 255.0], [31.3, 255.0], [31.4, 255.0], [31.5, 255.0], [31.6, 256.0], [31.7, 256.0], [31.8, 256.0], [31.9, 257.0], [32.0, 257.0], [32.1, 258.0], [32.2, 258.0], [32.3, 258.0], [32.4, 259.0], [32.5, 259.0], [32.6, 259.0], [32.7, 260.0], [32.8, 260.0], [32.9, 260.0], [33.0, 260.0], [33.1, 261.0], [33.2, 261.0], [33.3, 262.0], [33.4, 262.0], [33.5, 262.0], [33.6, 263.0], [33.7, 264.0], [33.8, 264.0], [33.9, 265.0], [34.0, 265.0], [34.1, 265.0], [34.2, 265.0], [34.3, 266.0], [34.4, 266.0], [34.5, 266.0], [34.6, 267.0], [34.7, 267.0], [34.8, 267.0], [34.9, 268.0], [35.0, 268.0], [35.1, 269.0], [35.2, 269.0], [35.3, 269.0], [35.4, 270.0], [35.5, 270.0], [35.6, 270.0], [35.7, 270.0], [35.8, 271.0], [35.9, 271.0], [36.0, 272.0], [36.1, 272.0], [36.2, 272.0], [36.3, 272.0], [36.4, 273.0], [36.5, 273.0], [36.6, 273.0], [36.7, 274.0], [36.8, 274.0], [36.9, 275.0], [37.0, 275.0], [37.1, 275.0], [37.2, 275.0], [37.3, 276.0], [37.4, 276.0], [37.5, 276.0], [37.6, 276.0], [37.7, 277.0], [37.8, 277.0], [37.9, 277.0], [38.0, 277.0], [38.1, 278.0], [38.2, 278.0], [38.3, 278.0], [38.4, 279.0], [38.5, 279.0], [38.6, 279.0], [38.7, 280.0], [38.8, 280.0], [38.9, 280.0], [39.0, 281.0], [39.1, 281.0], [39.2, 282.0], [39.3, 282.0], [39.4, 282.0], [39.5, 282.0], [39.6, 283.0], [39.7, 283.0], [39.8, 283.0], [39.9, 284.0], [40.0, 284.0], [40.1, 285.0], [40.2, 285.0], [40.3, 285.0], [40.4, 286.0], [40.5, 286.0], [40.6, 286.0], [40.7, 286.0], [40.8, 287.0], [40.9, 287.0], [41.0, 287.0], [41.1, 288.0], [41.2, 288.0], [41.3, 289.0], [41.4, 289.0], [41.5, 289.0], [41.6, 290.0], [41.7, 290.0], [41.8, 290.0], [41.9, 290.0], [42.0, 291.0], [42.1, 291.0], [42.2, 291.0], [42.3, 292.0], [42.4, 292.0], [42.5, 293.0], [42.6, 293.0], [42.7, 293.0], [42.8, 294.0], [42.9, 294.0], [43.0, 294.0], [43.1, 295.0], [43.2, 295.0], [43.3, 296.0], [43.4, 296.0], [43.5, 297.0], [43.6, 298.0], [43.7, 298.0], [43.8, 298.0], [43.9, 299.0], [44.0, 299.0], [44.1, 300.0], [44.2, 301.0], [44.3, 301.0], [44.4, 301.0], [44.5, 302.0], [44.6, 303.0], [44.7, 303.0], [44.8, 304.0], [44.9, 305.0], [45.0, 305.0], [45.1, 306.0], [45.2, 307.0], [45.3, 307.0], [45.4, 308.0], [45.5, 308.0], [45.6, 308.0], [45.7, 309.0], [45.8, 310.0], [45.9, 310.0], [46.0, 311.0], [46.1, 311.0], [46.2, 311.0], [46.3, 312.0], [46.4, 312.0], [46.5, 313.0], [46.6, 313.0], [46.7, 314.0], [46.8, 314.0], [46.9, 314.0], [47.0, 315.0], [47.1, 316.0], [47.2, 316.0], [47.3, 316.0], [47.4, 317.0], [47.5, 317.0], [47.6, 318.0], [47.7, 318.0], [47.8, 318.0], [47.9, 319.0], [48.0, 319.0], [48.1, 320.0], [48.2, 321.0], [48.3, 322.0], [48.4, 322.0], [48.5, 323.0], [48.6, 323.0], [48.7, 323.0], [48.8, 324.0], [48.9, 324.0], [49.0, 324.0], [49.1, 325.0], [49.2, 326.0], [49.3, 326.0], [49.4, 327.0], [49.5, 327.0], [49.6, 327.0], [49.7, 327.0], [49.8, 328.0], [49.9, 328.0], [50.0, 328.0], [50.1, 328.0], [50.2, 329.0], [50.3, 329.0], [50.4, 330.0], [50.5, 330.0], [50.6, 331.0], [50.7, 331.0], [50.8, 332.0], [50.9, 332.0], [51.0, 332.0], [51.1, 333.0], [51.2, 333.0], [51.3, 333.0], [51.4, 333.0], [51.5, 334.0], [51.6, 334.0], [51.7, 335.0], [51.8, 335.0], [51.9, 335.0], [52.0, 336.0], [52.1, 336.0], [52.2, 337.0], [52.3, 337.0], [52.4, 338.0], [52.5, 338.0], [52.6, 338.0], [52.7, 339.0], [52.8, 339.0], [52.9, 340.0], [53.0, 340.0], [53.1, 340.0], [53.2, 341.0], [53.3, 341.0], [53.4, 342.0], [53.5, 342.0], [53.6, 343.0], [53.7, 343.0], [53.8, 344.0], [53.9, 344.0], [54.0, 344.0], [54.1, 345.0], [54.2, 345.0], [54.3, 346.0], [54.4, 346.0], [54.5, 347.0], [54.6, 347.0], [54.7, 347.0], [54.8, 348.0], [54.9, 348.0], [55.0, 349.0], [55.1, 349.0], [55.2, 350.0], [55.3, 350.0], [55.4, 351.0], [55.5, 351.0], [55.6, 351.0], [55.7, 352.0], [55.8, 353.0], [55.9, 353.0], [56.0, 354.0], [56.1, 354.0], [56.2, 354.0], [56.3, 355.0], [56.4, 355.0], [56.5, 356.0], [56.6, 356.0], [56.7, 357.0], [56.8, 358.0], [56.9, 358.0], [57.0, 359.0], [57.1, 360.0], [57.2, 361.0], [57.3, 361.0], [57.4, 362.0], [57.5, 362.0], [57.6, 363.0], [57.7, 363.0], [57.8, 363.0], [57.9, 364.0], [58.0, 364.0], [58.1, 365.0], [58.2, 365.0], [58.3, 365.0], [58.4, 366.0], [58.5, 366.0], [58.6, 366.0], [58.7, 367.0], [58.8, 367.0], [58.9, 367.0], [59.0, 367.0], [59.1, 368.0], [59.2, 369.0], [59.3, 369.0], [59.4, 370.0], [59.5, 370.0], [59.6, 371.0], [59.7, 372.0], [59.8, 372.0], [59.9, 372.0], [60.0, 373.0], [60.1, 374.0], [60.2, 374.0], [60.3, 375.0], [60.4, 375.0], [60.5, 376.0], [60.6, 376.0], [60.7, 377.0], [60.8, 377.0], [60.9, 377.0], [61.0, 378.0], [61.1, 379.0], [61.2, 379.0], [61.3, 379.0], [61.4, 380.0], [61.5, 380.0], [61.6, 380.0], [61.7, 381.0], [61.8, 381.0], [61.9, 382.0], [62.0, 382.0], [62.1, 383.0], [62.2, 383.0], [62.3, 383.0], [62.4, 384.0], [62.5, 384.0], [62.6, 385.0], [62.7, 385.0], [62.8, 385.0], [62.9, 386.0], [63.0, 386.0], [63.1, 387.0], [63.2, 387.0], [63.3, 387.0], [63.4, 388.0], [63.5, 388.0], [63.6, 389.0], [63.7, 389.0], [63.8, 390.0], [63.9, 390.0], [64.0, 390.0], [64.1, 391.0], [64.2, 391.0], [64.3, 391.0], [64.4, 392.0], [64.5, 392.0], [64.6, 392.0], [64.7, 393.0], [64.8, 393.0], [64.9, 394.0], [65.0, 394.0], [65.1, 394.0], [65.2, 395.0], [65.3, 395.0], [65.4, 395.0], [65.5, 396.0], [65.6, 396.0], [65.7, 397.0], [65.8, 397.0], [65.9, 398.0], [66.0, 398.0], [66.1, 398.0], [66.2, 399.0], [66.3, 399.0], [66.4, 400.0], [66.5, 400.0], [66.6, 400.0], [66.7, 400.0], [66.8, 401.0], [66.9, 401.0], [67.0, 401.0], [67.1, 402.0], [67.2, 402.0], [67.3, 403.0], [67.4, 403.0], [67.5, 404.0], [67.6, 404.0], [67.7, 404.0], [67.8, 405.0], [67.9, 405.0], [68.0, 405.0], [68.1, 406.0], [68.2, 406.0], [68.3, 407.0], [68.4, 408.0], [68.5, 409.0], [68.6, 409.0], [68.7, 410.0], [68.8, 410.0], [68.9, 410.0], [69.0, 411.0], [69.1, 412.0], [69.2, 412.0], [69.3, 412.0], [69.4, 413.0], [69.5, 414.0], [69.6, 415.0], [69.7, 415.0], [69.8, 416.0], [69.9, 416.0], [70.0, 417.0], [70.1, 417.0], [70.2, 417.0], [70.3, 418.0], [70.4, 419.0], [70.5, 419.0], [70.6, 420.0], [70.7, 421.0], [70.8, 421.0], [70.9, 421.0], [71.0, 422.0], [71.1, 422.0], [71.2, 422.0], [71.3, 423.0], [71.4, 423.0], [71.5, 423.0], [71.6, 424.0], [71.7, 424.0], [71.8, 425.0], [71.9, 425.0], [72.0, 425.0], [72.1, 426.0], [72.2, 426.0], [72.3, 427.0], [72.4, 427.0], [72.5, 428.0], [72.6, 428.0], [72.7, 429.0], [72.8, 429.0], [72.9, 429.0], [73.0, 430.0], [73.1, 430.0], [73.2, 431.0], [73.3, 431.0], [73.4, 431.0], [73.5, 432.0], [73.6, 432.0], [73.7, 432.0], [73.8, 432.0], [73.9, 433.0], [74.0, 433.0], [74.1, 433.0], [74.2, 434.0], [74.3, 435.0], [74.4, 435.0], [74.5, 436.0], [74.6, 436.0], [74.7, 437.0], [74.8, 437.0], [74.9, 437.0], [75.0, 438.0], [75.1, 438.0], [75.2, 438.0], [75.3, 439.0], [75.4, 439.0], [75.5, 440.0], [75.6, 440.0], [75.7, 441.0], [75.8, 441.0], [75.9, 441.0], [76.0, 442.0], [76.1, 442.0], [76.2, 443.0], [76.3, 443.0], [76.4, 443.0], [76.5, 444.0], [76.6, 444.0], [76.7, 445.0], [76.8, 445.0], [76.9, 446.0], [77.0, 446.0], [77.1, 446.0], [77.2, 447.0], [77.3, 448.0], [77.4, 448.0], [77.5, 449.0], [77.6, 450.0], [77.7, 450.0], [77.8, 451.0], [77.9, 451.0], [78.0, 452.0], [78.1, 452.0], [78.2, 453.0], [78.3, 454.0], [78.4, 455.0], [78.5, 455.0], [78.6, 456.0], [78.7, 457.0], [78.8, 457.0], [78.9, 457.0], [79.0, 458.0], [79.1, 458.0], [79.2, 458.0], [79.3, 459.0], [79.4, 460.0], [79.5, 461.0], [79.6, 461.0], [79.7, 461.0], [79.8, 462.0], [79.9, 462.0], [80.0, 463.0], [80.1, 464.0], [80.2, 465.0], [80.3, 465.0], [80.4, 466.0], [80.5, 466.0], [80.6, 467.0], [80.7, 467.0], [80.8, 468.0], [80.9, 469.0], [81.0, 470.0], [81.1, 470.0], [81.2, 471.0], [81.3, 471.0], [81.4, 471.0], [81.5, 472.0], [81.6, 472.0], [81.7, 473.0], [81.8, 473.0], [81.9, 474.0], [82.0, 474.0], [82.1, 474.0], [82.2, 475.0], [82.3, 476.0], [82.4, 476.0], [82.5, 477.0], [82.6, 478.0], [82.7, 478.0], [82.8, 479.0], [82.9, 480.0], [83.0, 480.0], [83.1, 481.0], [83.2, 481.0], [83.3, 482.0], [83.4, 483.0], [83.5, 484.0], [83.6, 484.0], [83.7, 485.0], [83.8, 485.0], [83.9, 486.0], [84.0, 486.0], [84.1, 487.0], [84.2, 488.0], [84.3, 488.0], [84.4, 488.0], [84.5, 489.0], [84.6, 490.0], [84.7, 490.0], [84.8, 491.0], [84.9, 491.0], [85.0, 492.0], [85.1, 493.0], [85.2, 493.0], [85.3, 495.0], [85.4, 496.0], [85.5, 497.0], [85.6, 497.0], [85.7, 497.0], [85.8, 498.0], [85.9, 498.0], [86.0, 498.0], [86.1, 499.0], [86.2, 500.0], [86.3, 501.0], [86.4, 502.0], [86.5, 503.0], [86.6, 504.0], [86.7, 505.0], [86.8, 506.0], [86.9, 507.0], [87.0, 508.0], [87.1, 510.0], [87.2, 511.0], [87.3, 512.0], [87.4, 513.0], [87.5, 514.0], [87.6, 515.0], [87.7, 516.0], [87.8, 516.0], [87.9, 517.0], [88.0, 519.0], [88.1, 519.0], [88.2, 520.0], [88.3, 522.0], [88.4, 522.0], [88.5, 523.0], [88.6, 524.0], [88.7, 525.0], [88.8, 526.0], [88.9, 527.0], [89.0, 527.0], [89.1, 528.0], [89.2, 529.0], [89.3, 531.0], [89.4, 532.0], [89.5, 533.0], [89.6, 534.0], [89.7, 536.0], [89.8, 538.0], [89.9, 539.0], [90.0, 539.0], [90.1, 540.0], [90.2, 541.0], [90.3, 542.0], [90.4, 543.0], [90.5, 544.0], [90.6, 544.0], [90.7, 546.0], [90.8, 548.0], [90.9, 549.0], [91.0, 550.0], [91.1, 551.0], [91.2, 552.0], [91.3, 554.0], [91.4, 556.0], [91.5, 557.0], [91.6, 558.0], [91.7, 559.0], [91.8, 560.0], [91.9, 561.0], [92.0, 562.0], [92.1, 565.0], [92.2, 566.0], [92.3, 567.0], [92.4, 570.0], [92.5, 572.0], [92.6, 574.0], [92.7, 575.0], [92.8, 577.0], [92.9, 579.0], [93.0, 580.0], [93.1, 581.0], [93.2, 584.0], [93.3, 585.0], [93.4, 589.0], [93.5, 591.0], [93.6, 592.0], [93.7, 593.0], [93.8, 597.0], [93.9, 599.0], [94.0, 600.0], [94.1, 602.0], [94.2, 605.0], [94.3, 609.0], [94.4, 611.0], [94.5, 618.0], [94.6, 620.0], [94.7, 623.0], [94.8, 625.0], [94.9, 628.0], [95.0, 631.0], [95.1, 636.0], [95.2, 637.0], [95.3, 640.0], [95.4, 642.0], [95.5, 645.0], [95.6, 648.0], [95.7, 653.0], [95.8, 658.0], [95.9, 660.0], [96.0, 663.0], [96.1, 670.0], [96.2, 677.0], [96.3, 679.0], [96.4, 683.0], [96.5, 688.0], [96.6, 693.0], [96.7, 698.0], [96.8, 704.0], [96.9, 711.0], [97.0, 714.0], [97.1, 720.0], [97.2, 727.0], [97.3, 732.0], [97.4, 738.0], [97.5, 747.0], [97.6, 750.0], [97.7, 759.0], [97.8, 765.0], [97.9, 768.0], [98.0, 769.0], [98.1, 776.0], [98.2, 784.0], [98.3, 792.0], [98.4, 793.0], [98.5, 796.0], [98.6, 803.0], [98.7, 811.0], [98.8, 815.0], [98.9, 829.0], [99.0, 837.0], [99.1, 854.0], [99.2, 859.0], [99.3, 870.0], [99.4, 877.0], [99.5, 890.0], [99.6, 910.0], [99.7, 921.0], [99.8, 949.0], [99.9, 999.0], [100.0, 1128.0]], "isOverall": false, "label": "cpu/1/ktor/ktor", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 2054.0, "series": [{"data": [[1100.0, 1.0], [300.0, 1346.0], [600.0, 166.0], [700.0, 109.0], [200.0, 2054.0], [100.0, 593.0], [400.0, 1188.0], [800.0, 59.0], [900.0, 22.0], [500.0, 472.0], [1000.0, 5.0]], "isOverall": false, "label": "cpu/1/ktor/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 829.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5186.0, "series": [{"data": [[0.0, 5186.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 829.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 37.0871177015755, "minX": 1.62617166E12, "maxY": 50.0, "series": [{"data": [[1.62617184E12, 50.0], [1.62617172E12, 50.0], [1.6261719E12, 50.0], [1.62617178E12, 50.0], [1.62617196E12, 40.17518248175181], [1.62617166E12, 37.0871177015755]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617196E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 210.46153846153848, "minX": 1.0, "maxY": 835.7142857142858, "series": [{"data": [[2.0, 237.85714285714283], [3.0, 220.8], [4.0, 210.46153846153848], [5.0, 229.75], [6.0, 242.0], [7.0, 231.20000000000002], [8.0, 284.20000000000005], [9.0, 279.2], [10.0, 331.83333333333337], [11.0, 410.72727272727275], [12.0, 449.40000000000003], [13.0, 390.31249999999994], [14.0, 412.4], [15.0, 383.5], [16.0, 399.3076923076923], [17.0, 423.82352941176464], [18.0, 441.5333333333333], [19.0, 328.75], [20.0, 500.18750000000006], [21.0, 452.75], [22.0, 558.95], [23.0, 493.0], [24.0, 507.16666666666674], [25.0, 468.875], [26.0, 557.6500000000001], [27.0, 449.22222222222223], [28.0, 575.2222222222221], [29.0, 436.42857142857144], [30.0, 653.0], [31.0, 677.2941176470588], [32.0, 602.8], [33.0, 756.0], [34.0, 566.9411764705883], [35.0, 577.0714285714286], [36.0, 555.2666666666665], [37.0, 521.7333333333333], [38.0, 605.4285714285713], [39.0, 610.5], [40.0, 715.9230769230769], [41.0, 684.4615384615383], [42.0, 835.7142857142858], [43.0, 743.5624999999999], [44.0, 597.4166666666666], [45.0, 688.0], [46.0, 686.1666666666666], [47.0, 611.6666666666667], [48.0, 621.5454545454545], [49.0, 795.0833333333333], [50.0, 338.23285634640285], [1.0, 325.0]], "isOverall": false, "label": "cpu/1/ktor/ktor", "isController": false}, {"data": [[47.45985037406468, 356.44222776392303]], "isOverall": false, "label": "cpu/1/ktor/ktor-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 408.71666666666664, "minX": 1.62617166E12, "maxY": 4378.166666666667, "series": [{"data": [[1.62617184E12, 4360.0], [1.62617172E12, 4341.833333333333], [1.6261719E12, 4356.366666666667], [1.62617178E12, 4378.166666666667], [1.62617196E12, 497.76666666666665], [1.62617166E12, 3920.366666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62617184E12, 3580.0], [1.62617172E12, 3565.0833333333335], [1.6261719E12, 3577.016666666667], [1.62617178E12, 3594.9166666666665], [1.62617196E12, 408.71666666666664], [1.62617166E12, 3219.016666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617196E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 326.79232693911626, "minX": 1.62617166E12, "maxY": 464.88137164040774, "series": [{"data": [[1.62617184E12, 331.31666666666655], [1.62617172E12, 335.529707112971], [1.6261719E12, 326.79232693911626], [1.62617178E12, 334.75684647302927], [1.62617196E12, 355.10218978102176], [1.62617166E12, 464.88137164040774]], "isOverall": false, "label": "cpu/1/ktor/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617196E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 326.77314428690573, "minX": 1.62617166E12, "maxY": 464.8517145505095, "series": [{"data": [[1.62617184E12, 331.29833333333374], [1.62617172E12, 335.510460251046], [1.6261719E12, 326.77314428690573], [1.62617178E12, 334.739419087137], [1.62617196E12, 355.0875912408759], [1.62617166E12, 464.8517145505095]], "isOverall": false, "label": "cpu/1/ktor/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617196E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.45833333333333287, "minX": 1.62617166E12, "maxY": 0.6867469879518067, "series": [{"data": [[1.62617184E12, 0.45833333333333287], [1.62617172E12, 0.5062761506276153], [1.6261719E12, 0.4595496246872398], [1.62617178E12, 0.5045643153526975], [1.62617196E12, 0.6058394160583942], [1.62617166E12, 0.6867469879518067]], "isOverall": false, "label": "cpu/1/ktor/ktor", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617196E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.62617166E12, "maxY": 1128.0, "series": [{"data": [[1.62617184E12, 698.0], [1.62617172E12, 758.0], [1.6261719E12, 703.0], [1.62617178E12, 670.0], [1.62617196E12, 664.0], [1.62617166E12, 1128.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62617184E12, 492.9000000000001], [1.62617172E12, 491.0], [1.6261719E12, 474.0], [1.62617178E12, 498.4000000000001], [1.62617196E12, 547.2], [1.62617166E12, 787.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62617184E12, 650.94], [1.62617172E12, 624.1599999999999], [1.6261719E12, 632.0], [1.62617178E12, 621.6800000000012], [1.62617196E12, 646.9000000000002], [1.62617166E12, 970.2]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62617184E12, 533.0], [1.62617172E12, 542.0], [1.6261719E12, 517.0], [1.62617178E12, 541.7], [1.62617196E12, 578.4999999999999], [1.62617166E12, 856.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62617184E12, 184.0], [1.62617172E12, 184.0], [1.6261719E12, 184.0], [1.62617178E12, 184.0], [1.62617196E12, 184.0], [1.62617166E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62617184E12, 307.0], [1.62617172E12, 322.0], [1.6261719E12, 310.0], [1.62617178E12, 313.0], [1.62617196E12, 322.0], [1.62617166E12, 432.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617196E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 202.5, "minX": 2.0, "maxY": 738.5, "series": [{"data": [[2.0, 202.5], [12.0, 229.5], [13.0, 210.0], [14.0, 247.0], [15.0, 260.0], [16.0, 315.5], [17.0, 346.5], [18.0, 353.0], [19.0, 337.5], [20.0, 338.0], [21.0, 322.5], [22.0, 314.0], [23.0, 329.5], [24.0, 359.0], [25.0, 424.0], [26.0, 738.5], [27.0, 599.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 201.0, "minX": 2.0, "maxY": 738.5, "series": [{"data": [[2.0, 201.0], [12.0, 229.5], [13.0, 209.0], [14.0, 247.0], [15.0, 260.0], [16.0, 315.5], [17.0, 346.5], [18.0, 353.0], [19.0, 337.5], [20.0, 338.0], [21.0, 322.5], [22.0, 314.0], [23.0, 329.5], [24.0, 359.0], [25.0, 424.0], [26.0, 738.5], [27.0, 599.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.216666666666667, "minX": 1.62617166E12, "maxY": 20.0, "series": [{"data": [[1.62617184E12, 20.0], [1.62617172E12, 20.0], [1.6261719E12, 20.0], [1.62617178E12, 20.0], [1.62617196E12, 2.216666666666667], [1.62617166E12, 18.033333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617196E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.62617166E12, "maxY": 20.083333333333332, "series": [{"data": [[1.62617184E12, 20.0], [1.62617172E12, 19.916666666666668], [1.6261719E12, 19.983333333333334], [1.62617178E12, 20.083333333333332], [1.62617196E12, 2.283333333333333], [1.62617166E12, 17.983333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617196E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.62617166E12, "maxY": 20.083333333333332, "series": [{"data": [[1.62617184E12, 20.0], [1.62617172E12, 19.916666666666668], [1.6261719E12, 19.983333333333334], [1.62617178E12, 20.083333333333332], [1.62617196E12, 2.283333333333333], [1.62617166E12, 17.983333333333334]], "isOverall": false, "label": "cpu/1/ktor/ktor-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617196E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.62617166E12, "maxY": 20.083333333333332, "series": [{"data": [[1.62617184E12, 20.0], [1.62617172E12, 19.916666666666668], [1.6261719E12, 19.983333333333334], [1.62617178E12, 20.083333333333332], [1.62617196E12, 2.283333333333333], [1.62617166E12, 17.983333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617196E12, "title": "Total Transactions Per Second"}},
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

