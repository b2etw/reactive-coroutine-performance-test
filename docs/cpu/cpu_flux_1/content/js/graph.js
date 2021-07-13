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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 1211.0, "series": [{"data": [[0.0, 183.0], [0.1, 184.0], [0.2, 184.0], [0.3, 184.0], [0.4, 184.0], [0.5, 184.0], [0.6, 184.0], [0.7, 184.0], [0.8, 184.0], [0.9, 184.0], [1.0, 184.0], [1.1, 184.0], [1.2, 184.0], [1.3, 184.0], [1.4, 184.0], [1.5, 184.0], [1.6, 184.0], [1.7, 184.0], [1.8, 184.0], [1.9, 184.0], [2.0, 184.0], [2.1, 184.0], [2.2, 184.0], [2.3, 184.0], [2.4, 184.0], [2.5, 184.0], [2.6, 184.0], [2.7, 184.0], [2.8, 184.0], [2.9, 184.0], [3.0, 185.0], [3.1, 185.0], [3.2, 185.0], [3.3, 185.0], [3.4, 185.0], [3.5, 185.0], [3.6, 185.0], [3.7, 185.0], [3.8, 185.0], [3.9, 185.0], [4.0, 185.0], [4.1, 185.0], [4.2, 185.0], [4.3, 185.0], [4.4, 185.0], [4.5, 185.0], [4.6, 185.0], [4.7, 185.0], [4.8, 185.0], [4.9, 185.0], [5.0, 185.0], [5.1, 185.0], [5.2, 185.0], [5.3, 185.0], [5.4, 185.0], [5.5, 185.0], [5.6, 185.0], [5.7, 185.0], [5.8, 185.0], [5.9, 185.0], [6.0, 185.0], [6.1, 185.0], [6.2, 185.0], [6.3, 185.0], [6.4, 185.0], [6.5, 185.0], [6.6, 185.0], [6.7, 185.0], [6.8, 185.0], [6.9, 185.0], [7.0, 185.0], [7.1, 185.0], [7.2, 185.0], [7.3, 185.0], [7.4, 185.0], [7.5, 185.0], [7.6, 185.0], [7.7, 185.0], [7.8, 185.0], [7.9, 185.0], [8.0, 185.0], [8.1, 186.0], [8.2, 186.0], [8.3, 186.0], [8.4, 186.0], [8.5, 186.0], [8.6, 186.0], [8.7, 186.0], [8.8, 186.0], [8.9, 186.0], [9.0, 186.0], [9.1, 186.0], [9.2, 186.0], [9.3, 186.0], [9.4, 186.0], [9.5, 186.0], [9.6, 186.0], [9.7, 186.0], [9.8, 186.0], [9.9, 186.0], [10.0, 186.0], [10.1, 186.0], [10.2, 187.0], [10.3, 187.0], [10.4, 187.0], [10.5, 187.0], [10.6, 187.0], [10.7, 187.0], [10.8, 187.0], [10.9, 187.0], [11.0, 188.0], [11.1, 188.0], [11.2, 188.0], [11.3, 188.0], [11.4, 188.0], [11.5, 188.0], [11.6, 188.0], [11.7, 189.0], [11.8, 189.0], [11.9, 189.0], [12.0, 189.0], [12.1, 190.0], [12.2, 190.0], [12.3, 190.0], [12.4, 190.0], [12.5, 191.0], [12.6, 191.0], [12.7, 192.0], [12.8, 192.0], [12.9, 192.0], [13.0, 193.0], [13.1, 193.0], [13.2, 193.0], [13.3, 194.0], [13.4, 194.0], [13.5, 194.0], [13.6, 195.0], [13.7, 195.0], [13.8, 195.0], [13.9, 196.0], [14.0, 196.0], [14.1, 196.0], [14.2, 196.0], [14.3, 197.0], [14.4, 197.0], [14.5, 197.0], [14.6, 197.0], [14.7, 197.0], [14.8, 198.0], [14.9, 198.0], [15.0, 198.0], [15.1, 199.0], [15.2, 199.0], [15.3, 200.0], [15.4, 200.0], [15.5, 200.0], [15.6, 201.0], [15.7, 201.0], [15.8, 201.0], [15.9, 202.0], [16.0, 202.0], [16.1, 203.0], [16.2, 204.0], [16.3, 204.0], [16.4, 204.0], [16.5, 205.0], [16.6, 206.0], [16.7, 206.0], [16.8, 206.0], [16.9, 207.0], [17.0, 207.0], [17.1, 207.0], [17.2, 208.0], [17.3, 208.0], [17.4, 208.0], [17.5, 209.0], [17.6, 209.0], [17.7, 209.0], [17.8, 210.0], [17.9, 210.0], [18.0, 210.0], [18.1, 211.0], [18.2, 211.0], [18.3, 212.0], [18.4, 212.0], [18.5, 213.0], [18.6, 213.0], [18.7, 214.0], [18.8, 214.0], [18.9, 215.0], [19.0, 215.0], [19.1, 216.0], [19.2, 216.0], [19.3, 216.0], [19.4, 217.0], [19.5, 217.0], [19.6, 218.0], [19.7, 218.0], [19.8, 218.0], [19.9, 219.0], [20.0, 219.0], [20.1, 219.0], [20.2, 220.0], [20.3, 220.0], [20.4, 221.0], [20.5, 221.0], [20.6, 221.0], [20.7, 222.0], [20.8, 222.0], [20.9, 222.0], [21.0, 223.0], [21.1, 223.0], [21.2, 224.0], [21.3, 224.0], [21.4, 224.0], [21.5, 224.0], [21.6, 225.0], [21.7, 225.0], [21.8, 226.0], [21.9, 226.0], [22.0, 226.0], [22.1, 226.0], [22.2, 227.0], [22.3, 227.0], [22.4, 227.0], [22.5, 228.0], [22.6, 228.0], [22.7, 228.0], [22.8, 229.0], [22.9, 229.0], [23.0, 229.0], [23.1, 230.0], [23.2, 230.0], [23.3, 230.0], [23.4, 231.0], [23.5, 231.0], [23.6, 231.0], [23.7, 232.0], [23.8, 232.0], [23.9, 232.0], [24.0, 233.0], [24.1, 233.0], [24.2, 233.0], [24.3, 234.0], [24.4, 234.0], [24.5, 234.0], [24.6, 235.0], [24.7, 235.0], [24.8, 235.0], [24.9, 236.0], [25.0, 236.0], [25.1, 237.0], [25.2, 237.0], [25.3, 238.0], [25.4, 238.0], [25.5, 238.0], [25.6, 239.0], [25.7, 239.0], [25.8, 240.0], [25.9, 240.0], [26.0, 240.0], [26.1, 241.0], [26.2, 241.0], [26.3, 241.0], [26.4, 242.0], [26.5, 242.0], [26.6, 242.0], [26.7, 243.0], [26.8, 243.0], [26.9, 243.0], [27.0, 244.0], [27.1, 244.0], [27.2, 244.0], [27.3, 245.0], [27.4, 245.0], [27.5, 245.0], [27.6, 245.0], [27.7, 246.0], [27.8, 246.0], [27.9, 246.0], [28.0, 247.0], [28.1, 247.0], [28.2, 247.0], [28.3, 248.0], [28.4, 248.0], [28.5, 248.0], [28.6, 249.0], [28.7, 249.0], [28.8, 249.0], [28.9, 250.0], [29.0, 250.0], [29.1, 251.0], [29.2, 251.0], [29.3, 251.0], [29.4, 252.0], [29.5, 252.0], [29.6, 252.0], [29.7, 253.0], [29.8, 253.0], [29.9, 253.0], [30.0, 254.0], [30.1, 254.0], [30.2, 254.0], [30.3, 255.0], [30.4, 255.0], [30.5, 255.0], [30.6, 256.0], [30.7, 256.0], [30.8, 256.0], [30.9, 257.0], [31.0, 257.0], [31.1, 257.0], [31.2, 257.0], [31.3, 258.0], [31.4, 258.0], [31.5, 259.0], [31.6, 259.0], [31.7, 260.0], [31.8, 260.0], [31.9, 260.0], [32.0, 261.0], [32.1, 261.0], [32.2, 261.0], [32.3, 261.0], [32.4, 262.0], [32.5, 262.0], [32.6, 263.0], [32.7, 263.0], [32.8, 263.0], [32.9, 264.0], [33.0, 264.0], [33.1, 264.0], [33.2, 264.0], [33.3, 265.0], [33.4, 265.0], [33.5, 266.0], [33.6, 266.0], [33.7, 266.0], [33.8, 266.0], [33.9, 267.0], [34.0, 267.0], [34.1, 267.0], [34.2, 268.0], [34.3, 268.0], [34.4, 268.0], [34.5, 268.0], [34.6, 269.0], [34.7, 269.0], [34.8, 269.0], [34.9, 269.0], [35.0, 269.0], [35.1, 270.0], [35.2, 270.0], [35.3, 270.0], [35.4, 270.0], [35.5, 271.0], [35.6, 271.0], [35.7, 271.0], [35.8, 272.0], [35.9, 272.0], [36.0, 272.0], [36.1, 272.0], [36.2, 273.0], [36.3, 273.0], [36.4, 273.0], [36.5, 273.0], [36.6, 274.0], [36.7, 274.0], [36.8, 275.0], [36.9, 275.0], [37.0, 275.0], [37.1, 276.0], [37.2, 276.0], [37.3, 276.0], [37.4, 276.0], [37.5, 277.0], [37.6, 277.0], [37.7, 277.0], [37.8, 278.0], [37.9, 278.0], [38.0, 278.0], [38.1, 278.0], [38.2, 279.0], [38.3, 279.0], [38.4, 279.0], [38.5, 280.0], [38.6, 280.0], [38.7, 280.0], [38.8, 281.0], [38.9, 281.0], [39.0, 281.0], [39.1, 282.0], [39.2, 282.0], [39.3, 282.0], [39.4, 283.0], [39.5, 283.0], [39.6, 283.0], [39.7, 283.0], [39.8, 284.0], [39.9, 284.0], [40.0, 284.0], [40.1, 284.0], [40.2, 285.0], [40.3, 285.0], [40.4, 285.0], [40.5, 286.0], [40.6, 286.0], [40.7, 286.0], [40.8, 287.0], [40.9, 287.0], [41.0, 287.0], [41.1, 288.0], [41.2, 288.0], [41.3, 288.0], [41.4, 289.0], [41.5, 289.0], [41.6, 289.0], [41.7, 290.0], [41.8, 290.0], [41.9, 290.0], [42.0, 291.0], [42.1, 291.0], [42.2, 291.0], [42.3, 292.0], [42.4, 292.0], [42.5, 292.0], [42.6, 293.0], [42.7, 293.0], [42.8, 293.0], [42.9, 294.0], [43.0, 294.0], [43.1, 294.0], [43.2, 295.0], [43.3, 295.0], [43.4, 295.0], [43.5, 296.0], [43.6, 296.0], [43.7, 297.0], [43.8, 297.0], [43.9, 297.0], [44.0, 298.0], [44.1, 298.0], [44.2, 299.0], [44.3, 299.0], [44.4, 300.0], [44.5, 300.0], [44.6, 300.0], [44.7, 301.0], [44.8, 301.0], [44.9, 302.0], [45.0, 302.0], [45.1, 302.0], [45.2, 303.0], [45.3, 303.0], [45.4, 304.0], [45.5, 304.0], [45.6, 304.0], [45.7, 305.0], [45.8, 305.0], [45.9, 306.0], [46.0, 306.0], [46.1, 307.0], [46.2, 307.0], [46.3, 308.0], [46.4, 308.0], [46.5, 308.0], [46.6, 309.0], [46.7, 309.0], [46.8, 310.0], [46.9, 310.0], [47.0, 310.0], [47.1, 311.0], [47.2, 311.0], [47.3, 311.0], [47.4, 312.0], [47.5, 312.0], [47.6, 313.0], [47.7, 313.0], [47.8, 313.0], [47.9, 314.0], [48.0, 314.0], [48.1, 314.0], [48.2, 315.0], [48.3, 315.0], [48.4, 316.0], [48.5, 316.0], [48.6, 316.0], [48.7, 317.0], [48.8, 317.0], [48.9, 317.0], [49.0, 318.0], [49.1, 318.0], [49.2, 318.0], [49.3, 319.0], [49.4, 319.0], [49.5, 319.0], [49.6, 320.0], [49.7, 320.0], [49.8, 320.0], [49.9, 321.0], [50.0, 321.0], [50.1, 321.0], [50.2, 322.0], [50.3, 322.0], [50.4, 322.0], [50.5, 323.0], [50.6, 323.0], [50.7, 323.0], [50.8, 324.0], [50.9, 324.0], [51.0, 325.0], [51.1, 325.0], [51.2, 326.0], [51.3, 326.0], [51.4, 326.0], [51.5, 327.0], [51.6, 327.0], [51.7, 328.0], [51.8, 328.0], [51.9, 328.0], [52.0, 329.0], [52.1, 329.0], [52.2, 330.0], [52.3, 330.0], [52.4, 330.0], [52.5, 331.0], [52.6, 331.0], [52.7, 332.0], [52.8, 332.0], [52.9, 332.0], [53.0, 333.0], [53.1, 333.0], [53.2, 334.0], [53.3, 334.0], [53.4, 335.0], [53.5, 335.0], [53.6, 335.0], [53.7, 336.0], [53.8, 336.0], [53.9, 337.0], [54.0, 337.0], [54.1, 338.0], [54.2, 338.0], [54.3, 339.0], [54.4, 339.0], [54.5, 340.0], [54.6, 340.0], [54.7, 340.0], [54.8, 341.0], [54.9, 341.0], [55.0, 341.0], [55.1, 341.0], [55.2, 342.0], [55.3, 342.0], [55.4, 342.0], [55.5, 343.0], [55.6, 343.0], [55.7, 344.0], [55.8, 344.0], [55.9, 344.0], [56.0, 345.0], [56.1, 345.0], [56.2, 345.0], [56.3, 346.0], [56.4, 346.0], [56.5, 347.0], [56.6, 347.0], [56.7, 348.0], [56.8, 348.0], [56.9, 348.0], [57.0, 349.0], [57.1, 349.0], [57.2, 349.0], [57.3, 349.0], [57.4, 350.0], [57.5, 350.0], [57.6, 351.0], [57.7, 351.0], [57.8, 351.0], [57.9, 352.0], [58.0, 352.0], [58.1, 352.0], [58.2, 353.0], [58.3, 353.0], [58.4, 353.0], [58.5, 354.0], [58.6, 354.0], [58.7, 355.0], [58.8, 355.0], [58.9, 356.0], [59.0, 356.0], [59.1, 357.0], [59.2, 357.0], [59.3, 357.0], [59.4, 358.0], [59.5, 358.0], [59.6, 359.0], [59.7, 359.0], [59.8, 359.0], [59.9, 360.0], [60.0, 360.0], [60.1, 360.0], [60.2, 361.0], [60.3, 361.0], [60.4, 362.0], [60.5, 362.0], [60.6, 363.0], [60.7, 363.0], [60.8, 363.0], [60.9, 364.0], [61.0, 364.0], [61.1, 365.0], [61.2, 365.0], [61.3, 365.0], [61.4, 366.0], [61.5, 366.0], [61.6, 366.0], [61.7, 367.0], [61.8, 367.0], [61.9, 368.0], [62.0, 368.0], [62.1, 369.0], [62.2, 369.0], [62.3, 369.0], [62.4, 370.0], [62.5, 370.0], [62.6, 371.0], [62.7, 371.0], [62.8, 371.0], [62.9, 372.0], [63.0, 372.0], [63.1, 372.0], [63.2, 373.0], [63.3, 373.0], [63.4, 373.0], [63.5, 374.0], [63.6, 374.0], [63.7, 374.0], [63.8, 375.0], [63.9, 375.0], [64.0, 376.0], [64.1, 376.0], [64.2, 377.0], [64.3, 377.0], [64.4, 377.0], [64.5, 378.0], [64.6, 378.0], [64.7, 378.0], [64.8, 379.0], [64.9, 380.0], [65.0, 380.0], [65.1, 380.0], [65.2, 381.0], [65.3, 381.0], [65.4, 381.0], [65.5, 382.0], [65.6, 383.0], [65.7, 383.0], [65.8, 383.0], [65.9, 384.0], [66.0, 384.0], [66.1, 385.0], [66.2, 385.0], [66.3, 385.0], [66.4, 385.0], [66.5, 386.0], [66.6, 386.0], [66.7, 387.0], [66.8, 387.0], [66.9, 388.0], [67.0, 388.0], [67.1, 388.0], [67.2, 389.0], [67.3, 389.0], [67.4, 390.0], [67.5, 390.0], [67.6, 390.0], [67.7, 391.0], [67.8, 391.0], [67.9, 391.0], [68.0, 392.0], [68.1, 392.0], [68.2, 393.0], [68.3, 393.0], [68.4, 393.0], [68.5, 394.0], [68.6, 394.0], [68.7, 395.0], [68.8, 395.0], [68.9, 395.0], [69.0, 396.0], [69.1, 396.0], [69.2, 397.0], [69.3, 397.0], [69.4, 398.0], [69.5, 398.0], [69.6, 398.0], [69.7, 399.0], [69.8, 399.0], [69.9, 399.0], [70.0, 400.0], [70.1, 400.0], [70.2, 401.0], [70.3, 401.0], [70.4, 401.0], [70.5, 402.0], [70.6, 402.0], [70.7, 403.0], [70.8, 403.0], [70.9, 404.0], [71.0, 404.0], [71.1, 405.0], [71.2, 405.0], [71.3, 406.0], [71.4, 407.0], [71.5, 407.0], [71.6, 408.0], [71.7, 408.0], [71.8, 408.0], [71.9, 409.0], [72.0, 409.0], [72.1, 410.0], [72.2, 410.0], [72.3, 411.0], [72.4, 411.0], [72.5, 411.0], [72.6, 412.0], [72.7, 412.0], [72.8, 413.0], [72.9, 413.0], [73.0, 413.0], [73.1, 414.0], [73.2, 414.0], [73.3, 415.0], [73.4, 415.0], [73.5, 416.0], [73.6, 416.0], [73.7, 417.0], [73.8, 417.0], [73.9, 418.0], [74.0, 418.0], [74.1, 418.0], [74.2, 419.0], [74.3, 419.0], [74.4, 420.0], [74.5, 420.0], [74.6, 420.0], [74.7, 421.0], [74.8, 421.0], [74.9, 421.0], [75.0, 422.0], [75.1, 422.0], [75.2, 423.0], [75.3, 423.0], [75.4, 423.0], [75.5, 424.0], [75.6, 424.0], [75.7, 424.0], [75.8, 425.0], [75.9, 425.0], [76.0, 426.0], [76.1, 426.0], [76.2, 427.0], [76.3, 427.0], [76.4, 427.0], [76.5, 428.0], [76.6, 428.0], [76.7, 429.0], [76.8, 429.0], [76.9, 429.0], [77.0, 430.0], [77.1, 430.0], [77.2, 431.0], [77.3, 431.0], [77.4, 431.0], [77.5, 432.0], [77.6, 432.0], [77.7, 433.0], [77.8, 433.0], [77.9, 434.0], [78.0, 434.0], [78.1, 435.0], [78.2, 435.0], [78.3, 435.0], [78.4, 436.0], [78.5, 436.0], [78.6, 437.0], [78.7, 437.0], [78.8, 437.0], [78.9, 438.0], [79.0, 438.0], [79.1, 438.0], [79.2, 439.0], [79.3, 439.0], [79.4, 440.0], [79.5, 440.0], [79.6, 440.0], [79.7, 441.0], [79.8, 441.0], [79.9, 442.0], [80.0, 442.0], [80.1, 442.0], [80.2, 443.0], [80.3, 443.0], [80.4, 444.0], [80.5, 444.0], [80.6, 444.0], [80.7, 445.0], [80.8, 445.0], [80.9, 446.0], [81.0, 446.0], [81.1, 446.0], [81.2, 447.0], [81.3, 447.0], [81.4, 448.0], [81.5, 448.0], [81.6, 449.0], [81.7, 449.0], [81.8, 449.0], [81.9, 450.0], [82.0, 451.0], [82.1, 451.0], [82.2, 451.0], [82.3, 452.0], [82.4, 452.0], [82.5, 453.0], [82.6, 453.0], [82.7, 454.0], [82.8, 454.0], [82.9, 454.0], [83.0, 455.0], [83.1, 455.0], [83.2, 456.0], [83.3, 456.0], [83.4, 457.0], [83.5, 457.0], [83.6, 458.0], [83.7, 458.0], [83.8, 459.0], [83.9, 459.0], [84.0, 460.0], [84.1, 460.0], [84.2, 461.0], [84.3, 461.0], [84.4, 462.0], [84.5, 462.0], [84.6, 463.0], [84.7, 463.0], [84.8, 464.0], [84.9, 464.0], [85.0, 464.0], [85.1, 465.0], [85.2, 465.0], [85.3, 466.0], [85.4, 466.0], [85.5, 467.0], [85.6, 467.0], [85.7, 468.0], [85.8, 468.0], [85.9, 468.0], [86.0, 469.0], [86.1, 469.0], [86.2, 470.0], [86.3, 470.0], [86.4, 471.0], [86.5, 471.0], [86.6, 472.0], [86.7, 472.0], [86.8, 473.0], [86.9, 473.0], [87.0, 474.0], [87.1, 474.0], [87.2, 475.0], [87.3, 476.0], [87.4, 477.0], [87.5, 477.0], [87.6, 478.0], [87.7, 478.0], [87.8, 479.0], [87.9, 479.0], [88.0, 480.0], [88.1, 480.0], [88.2, 481.0], [88.3, 481.0], [88.4, 482.0], [88.5, 482.0], [88.6, 483.0], [88.7, 484.0], [88.8, 484.0], [88.9, 485.0], [89.0, 485.0], [89.1, 486.0], [89.2, 487.0], [89.3, 487.0], [89.4, 488.0], [89.5, 489.0], [89.6, 489.0], [89.7, 489.0], [89.8, 490.0], [89.9, 491.0], [90.0, 491.0], [90.1, 492.0], [90.2, 493.0], [90.3, 493.0], [90.4, 494.0], [90.5, 495.0], [90.6, 496.0], [90.7, 497.0], [90.8, 498.0], [90.9, 498.0], [91.0, 499.0], [91.1, 500.0], [91.2, 500.0], [91.3, 501.0], [91.4, 502.0], [91.5, 503.0], [91.6, 504.0], [91.7, 505.0], [91.8, 505.0], [91.9, 505.0], [92.0, 507.0], [92.1, 507.0], [92.2, 508.0], [92.3, 509.0], [92.4, 510.0], [92.5, 511.0], [92.6, 512.0], [92.7, 513.0], [92.8, 514.0], [92.9, 515.0], [93.0, 516.0], [93.1, 517.0], [93.2, 518.0], [93.3, 520.0], [93.4, 521.0], [93.5, 522.0], [93.6, 523.0], [93.7, 524.0], [93.8, 525.0], [93.9, 526.0], [94.0, 527.0], [94.1, 528.0], [94.2, 529.0], [94.3, 530.0], [94.4, 532.0], [94.5, 533.0], [94.6, 535.0], [94.7, 536.0], [94.8, 538.0], [94.9, 539.0], [95.0, 541.0], [95.1, 542.0], [95.2, 544.0], [95.3, 546.0], [95.4, 547.0], [95.5, 549.0], [95.6, 550.0], [95.7, 554.0], [95.8, 555.0], [95.9, 558.0], [96.0, 562.0], [96.1, 563.0], [96.2, 567.0], [96.3, 569.0], [96.4, 572.0], [96.5, 575.0], [96.6, 579.0], [96.7, 581.0], [96.8, 584.0], [96.9, 586.0], [97.0, 591.0], [97.1, 597.0], [97.2, 601.0], [97.3, 610.0], [97.4, 615.0], [97.5, 625.0], [97.6, 634.0], [97.7, 644.0], [97.8, 666.0], [97.9, 688.0], [98.0, 723.0], [98.1, 758.0], [98.2, 789.0], [98.3, 820.0], [98.4, 860.0], [98.5, 901.0], [98.6, 945.0], [98.7, 963.0], [98.8, 984.0], [98.9, 997.0], [99.0, 1010.0], [99.1, 1019.0], [99.2, 1028.0], [99.3, 1037.0], [99.4, 1043.0], [99.5, 1053.0], [99.6, 1065.0], [99.7, 1073.0], [99.8, 1092.0], [99.9, 1111.0], [100.0, 1211.0]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 5253.0, "series": [{"data": [[1100.0, 29.0], [300.0, 4609.0], [600.0, 140.0], [1200.0, 2.0], [700.0, 54.0], [100.0, 2757.0], [200.0, 5253.0], [400.0, 3820.0], [800.0, 46.0], [900.0, 77.0], [500.0, 1095.0], [1000.0, 164.0]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1581.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 16465.0, "series": [{"data": [[0.0, 16465.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1581.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.758389261744968, "minX": 1.6261686E12, "maxY": 50.0, "series": [{"data": [[1.62616932E12, 36.75797373358351], [1.62616962E12, 41.33986928104575], [1.62616902E12, 50.0], [1.62616896E12, 29.259854014598528], [1.62616866E12, 43.88634505314795], [1.62616908E12, 50.0], [1.62616878E12, 50.0], [1.62616872E12, 50.0], [1.62616938E12, 50.0], [1.62616884E12, 50.0], [1.62616944E12, 50.0], [1.6261695E12, 50.0], [1.62616914E12, 50.0], [1.6261686E12, 8.758389261744968], [1.62616926E12, 47.60112359550562], [1.6261692E12, 50.0], [1.6261689E12, 48.75579150579151], [1.62616956E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62616962E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 210.81081081081086, "minX": 1.0, "maxY": 680.4680851063831, "series": [{"data": [[2.0, 222.57142857142858], [3.0, 225.2142857142857], [4.0, 210.81081081081086], [5.0, 220.62162162162164], [6.0, 232.73684210526315], [7.0, 236.23255813953486], [8.0, 281.49999999999994], [9.0, 308.25000000000006], [10.0, 312.2380952380952], [11.0, 315.3333333333333], [12.0, 336.5750000000001], [13.0, 377.76923076923066], [14.0, 437.57500000000005], [15.0, 449.08571428571423], [16.0, 428.3095238095238], [17.0, 446.45238095238096], [18.0, 427.8], [19.0, 349.9032258064516], [20.0, 399.40384615384613], [21.0, 413.50000000000006], [22.0, 375.3913043478261], [23.0, 434.57500000000005], [24.0, 340.2750000000001], [25.0, 445.64285714285717], [26.0, 347.0454545454546], [27.0, 415.575], [28.0, 390.0000000000001], [29.0, 354.7931034482758], [30.0, 441.49999999999994], [31.0, 375.175], [32.0, 468.84782608695656], [33.0, 415.6315789473684], [34.0, 421.65625000000006], [35.0, 587.9565217391305], [36.0, 486.2439024390244], [37.0, 536.8666666666667], [38.0, 620.5490196078431], [39.0, 564.8478260869565], [40.0, 629.7941176470588], [41.0, 603.7555555555555], [42.0, 665.4749999999998], [43.0, 592.5625000000002], [44.0, 611.9411764705882], [45.0, 680.4680851063831], [46.0, 560.9318181818185], [47.0, 587.3421052631579], [48.0, 599.7560975609755], [49.0, 613.8292682926829], [50.0, 331.1644761314323], [1.0, 294.5]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}, {"data": [[47.459824891942674, 342.7536850271526]], "isOverall": false, "label": "cpu/1/spring/flux-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 382.43333333333334, "minX": 1.6261686E12, "maxY": 3628.233333333333, "series": [{"data": [[1.62616932E12, 2736.0666666666666], [1.62616962E12, 392.7], [1.62616902E12, 3080.0], [1.62616896E12, 1758.1666666666667], [1.62616866E12, 3139.0333333333333], [1.62616908E12, 3077.4333333333334], [1.62616878E12, 3080.0], [1.62616872E12, 3080.0], [1.62616938E12, 3082.5666666666666], [1.62616884E12, 3080.0], [1.62616944E12, 3080.0], [1.6261695E12, 3074.866666666667], [1.62616914E12, 3082.5666666666666], [1.6261686E12, 382.43333333333334], [1.62616926E12, 1370.6], [1.6261692E12, 3080.0], [1.6261689E12, 2659.0666666666666], [1.62616956E12, 3082.5666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62616932E12, 3162.4666666666667], [1.62616962E12, 453.9], [1.62616902E12, 3560.0], [1.62616896E12, 2032.1666666666667], [1.62616866E12, 3628.233333333333], [1.62616908E12, 3557.0333333333333], [1.62616878E12, 3560.0], [1.62616872E12, 3560.0], [1.62616938E12, 3562.9666666666667], [1.62616884E12, 3560.0], [1.62616944E12, 3560.0], [1.6261695E12, 3554.0666666666666], [1.62616914E12, 3562.9666666666667], [1.6261686E12, 442.03333333333336], [1.62616926E12, 1584.2], [1.6261692E12, 3560.0], [1.6261689E12, 3073.4666666666667], [1.62616956E12, 3562.9666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62616962E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 306.53333333333313, "minX": 1.6261686E12, "maxY": 556.5739983646775, "series": [{"data": [[1.62616932E12, 367.49812382739174], [1.62616962E12, 361.2810457516341], [1.62616902E12, 306.53333333333313], [1.62616896E12, 352.70364963503636], [1.62616866E12, 556.5739983646775], [1.62616908E12, 308.2768974145121], [1.62616878E12, 319.8883333333329], [1.62616872E12, 332.7250000000002], [1.62616938E12, 331.95087427144085], [1.62616884E12, 324.66333333333336], [1.62616944E12, 330.3758333333333], [1.6261695E12, 330.8823038397324], [1.62616914E12, 307.44379683597], [1.6261686E12, 343.0604026845638], [1.62616926E12, 308.27715355805225], [1.6261692E12, 312.18749999999994], [1.6261689E12, 343.7403474903481], [1.62616956E12, 331.87260616153173]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62616962E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 306.5058333333336, "minX": 1.6261686E12, "maxY": 556.5388389206871, "series": [{"data": [[1.62616932E12, 367.45872420262674], [1.62616962E12, 361.2810457516341], [1.62616902E12, 306.5058333333336], [1.62616896E12, 352.65693430656927], [1.62616866E12, 556.5388389206871], [1.62616908E12, 308.2593828190165], [1.62616878E12, 319.87583333333345], [1.62616872E12, 332.7141666666664], [1.62616938E12, 331.9367194004995], [1.62616884E12, 324.64750000000066], [1.62616944E12, 330.36166666666634], [1.6261695E12, 330.86894824707804], [1.62616914E12, 307.4304746044959], [1.6261686E12, 343.00671140939585], [1.62616926E12, 308.26966292134875], [1.6261692E12, 312.17833333333334], [1.6261689E12, 343.72490347490344], [1.62616956E12, 331.8559533721899]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62616962E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.4509803921568627, "minX": 1.6261686E12, "maxY": 0.9530201342281879, "series": [{"data": [[1.62616932E12, 0.6885553470919329], [1.62616962E12, 0.4509803921568627], [1.62616902E12, 0.5283333333333338], [1.62616896E12, 0.7620437956204379], [1.62616866E12, 0.6320523303352412], [1.62616908E12, 0.4703919933277727], [1.62616878E12, 0.47333333333333377], [1.62616872E12, 0.5158333333333336], [1.62616938E12, 0.5220649458784342], [1.62616884E12, 0.5099999999999997], [1.62616944E12, 0.5208333333333329], [1.6261695E12, 0.4624373956594329], [1.62616914E12, 0.45129059117402204], [1.6261686E12, 0.9530201342281879], [1.62616926E12, 0.5037453183520597], [1.6261692E12, 0.4966666666666668], [1.6261689E12, 0.5067567567567569], [1.62616956E12, 0.4870940882597834]], "isOverall": false, "label": "cpu/1/spring/flux", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62616962E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.6261686E12, "maxY": 1211.0, "series": [{"data": [[1.62616932E12, 732.0], [1.62616962E12, 644.0], [1.62616902E12, 549.0], [1.62616896E12, 733.0], [1.62616866E12, 1211.0], [1.62616908E12, 555.0], [1.62616878E12, 597.0], [1.62616872E12, 642.0], [1.62616938E12, 614.0], [1.62616884E12, 742.0], [1.62616944E12, 634.0], [1.6261695E12, 629.0], [1.62616914E12, 561.0], [1.6261686E12, 600.0], [1.62616926E12, 545.0], [1.6261692E12, 558.0], [1.6261689E12, 829.0], [1.62616956E12, 598.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62616932E12, 546.0], [1.62616962E12, 524.6], [1.62616902E12, 435.0], [1.62616896E12, 525.0], [1.62616866E12, 1038.0], [1.62616908E12, 435.0], [1.62616878E12, 477.9000000000001], [1.62616872E12, 500.0], [1.62616938E12, 479.79999999999995], [1.62616884E12, 480.0], [1.62616944E12, 471.9000000000001], [1.6261695E12, 467.10000000000014], [1.62616914E12, 428.0], [1.6261686E12, 501.0], [1.62616926E12, 437.5], [1.6261692E12, 434.0], [1.6261689E12, 520.0], [1.62616956E12, 476.79999999999995]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62616932E12, 645.3199999999997], [1.62616962E12, 634.8200000000002], [1.62616902E12, 506.98], [1.62616896E12, 646.1199999999999], [1.62616866E12, 1134.6399999999999], [1.62616908E12, 505.0], [1.62616878E12, 545.99], [1.62616872E12, 586.99], [1.62616938E12, 567.98], [1.62616884E12, 581.99], [1.62616944E12, 572.0], [1.6261695E12, 556.02], [1.62616914E12, 504.98], [1.6261686E12, 593.0], [1.62616926E12, 513.9499999999999], [1.6261692E12, 508.97], [1.6261689E12, 687.5599999999986], [1.62616956E12, 557.96]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62616932E12, 584.0], [1.62616962E12, 575.8], [1.62616902E12, 464.0], [1.62616896E12, 565.6999999999999], [1.62616866E12, 1071.0], [1.62616908E12, 462.0], [1.62616878E12, 500.95000000000005], [1.62616872E12, 533.0], [1.62616938E12, 512.0], [1.62616884E12, 519.9000000000001], [1.62616944E12, 507.0], [1.6261695E12, 501.0], [1.62616914E12, 456.0], [1.6261686E12, 558.5], [1.62616926E12, 460.5], [1.6261692E12, 463.95000000000005], [1.6261689E12, 572.0], [1.62616956E12, 504.7999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62616932E12, 184.0], [1.62616962E12, 184.0], [1.62616902E12, 183.0], [1.62616896E12, 184.0], [1.62616866E12, 185.0], [1.62616908E12, 184.0], [1.62616878E12, 184.0], [1.62616872E12, 184.0], [1.62616938E12, 184.0], [1.62616884E12, 184.0], [1.62616944E12, 184.0], [1.6261695E12, 184.0], [1.62616914E12, 184.0], [1.6261686E12, 189.0], [1.62616926E12, 184.0], [1.6261692E12, 184.0], [1.6261689E12, 184.0], [1.62616956E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62616932E12, 358.5], [1.62616962E12, 360.0], [1.62616902E12, 305.0], [1.62616896E12, 339.0], [1.62616866E12, 469.0], [1.62616908E12, 307.0], [1.62616878E12, 289.5], [1.62616872E12, 300.0], [1.62616938E12, 320.0], [1.62616884E12, 292.5], [1.62616944E12, 317.0], [1.6261695E12, 320.0], [1.62616914E12, 310.0], [1.6261686E12, 326.0], [1.62616926E12, 306.5], [1.6261692E12, 315.5], [1.6261689E12, 318.5], [1.62616956E12, 320.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62616962E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 186.5, "minX": 2.0, "maxY": 435.0, "series": [{"data": [[2.0, 207.0], [12.0, 189.0], [13.0, 435.0], [14.0, 265.5], [15.0, 263.0], [16.0, 257.5], [17.0, 289.0], [18.0, 302.0], [19.0, 293.0], [20.0, 324.0], [21.0, 328.5], [22.0, 351.5], [23.0, 375.0], [24.0, 365.0], [6.0, 186.5], [25.0, 345.0], [26.0, 326.5], [27.0, 323.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 186.0, "minX": 2.0, "maxY": 435.0, "series": [{"data": [[2.0, 205.5], [12.0, 189.0], [13.0, 435.0], [14.0, 265.5], [15.0, 263.0], [16.0, 257.5], [17.0, 289.0], [18.0, 302.0], [19.0, 293.0], [20.0, 324.0], [21.0, 328.5], [22.0, 351.0], [23.0, 375.0], [24.0, 365.0], [6.0, 186.0], [25.0, 345.0], [26.0, 326.5], [27.0, 323.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.4, "minX": 1.6261686E12, "maxY": 20.316666666666666, "series": [{"data": [[1.62616932E12, 17.916666666666668], [1.62616962E12, 2.4], [1.62616902E12, 20.0], [1.62616896E12, 11.45], [1.62616866E12, 20.316666666666666], [1.62616908E12, 20.0], [1.62616878E12, 20.0], [1.62616872E12, 19.983333333333334], [1.62616938E12, 20.0], [1.62616884E12, 20.016666666666666], [1.62616944E12, 20.0], [1.6261695E12, 20.0], [1.62616914E12, 20.0], [1.6261686E12, 2.6333333333333333], [1.62616926E12, 8.866666666666667], [1.6261692E12, 20.0], [1.6261689E12, 17.183333333333334], [1.62616956E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62616962E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.6261686E12, "maxY": 20.383333333333333, "series": [{"data": [[1.62616932E12, 17.766666666666666], [1.62616962E12, 2.55], [1.62616902E12, 20.0], [1.62616896E12, 11.416666666666666], [1.62616866E12, 20.383333333333333], [1.62616908E12, 19.983333333333334], [1.62616878E12, 20.0], [1.62616872E12, 20.0], [1.62616938E12, 20.016666666666666], [1.62616884E12, 20.0], [1.62616944E12, 20.0], [1.6261695E12, 19.966666666666665], [1.62616914E12, 20.016666666666666], [1.6261686E12, 2.4833333333333334], [1.62616926E12, 8.9], [1.6261692E12, 20.0], [1.6261689E12, 17.266666666666666], [1.62616956E12, 20.016666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62616962E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.6261686E12, "maxY": 20.383333333333333, "series": [{"data": [[1.62616932E12, 17.766666666666666], [1.62616962E12, 2.55], [1.62616902E12, 20.0], [1.62616896E12, 11.416666666666666], [1.62616866E12, 20.383333333333333], [1.62616908E12, 19.983333333333334], [1.62616878E12, 20.0], [1.62616872E12, 20.0], [1.62616938E12, 20.016666666666666], [1.62616884E12, 20.0], [1.62616944E12, 20.0], [1.6261695E12, 19.966666666666665], [1.62616914E12, 20.016666666666666], [1.6261686E12, 2.4833333333333334], [1.62616926E12, 8.9], [1.6261692E12, 20.0], [1.6261689E12, 17.266666666666666], [1.62616956E12, 20.016666666666666]], "isOverall": false, "label": "cpu/1/spring/flux-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62616962E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.6261686E12, "maxY": 20.383333333333333, "series": [{"data": [[1.62616932E12, 17.766666666666666], [1.62616962E12, 2.55], [1.62616902E12, 20.0], [1.62616896E12, 11.416666666666666], [1.62616866E12, 20.383333333333333], [1.62616908E12, 19.983333333333334], [1.62616878E12, 20.0], [1.62616872E12, 20.0], [1.62616938E12, 20.016666666666666], [1.62616884E12, 20.0], [1.62616944E12, 20.0], [1.6261695E12, 19.966666666666665], [1.62616914E12, 20.016666666666666], [1.6261686E12, 2.4833333333333334], [1.62616926E12, 8.9], [1.6261692E12, 20.0], [1.6261689E12, 17.266666666666666], [1.62616956E12, 20.016666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62616962E12, "title": "Total Transactions Per Second"}},
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

