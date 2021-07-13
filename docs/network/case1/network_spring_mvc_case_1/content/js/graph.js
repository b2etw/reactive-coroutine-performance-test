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
        data: {"result": {"minY": 1005.0, "minX": 0.0, "maxY": 7226.0, "series": [{"data": [[0.0, 1005.0], [0.1, 1006.0], [0.2, 1006.0], [0.3, 1007.0], [0.4, 1008.0], [0.5, 1009.0], [0.6, 1012.0], [0.7, 1021.0], [0.8, 1093.0], [0.9, 1148.0], [1.0, 1187.0], [1.1, 1266.0], [1.2, 1285.0], [1.3, 1300.0], [1.4, 1315.0], [1.5, 1408.0], [1.6, 1423.0], [1.7, 1529.0], [1.8, 1597.0], [1.9, 1630.0], [2.0, 1710.0], [2.1, 1752.0], [2.2, 1815.0], [2.3, 1890.0], [2.4, 1917.0], [2.5, 2008.0], [2.6, 2021.0], [2.7, 2118.0], [2.8, 2181.0], [2.9, 2243.0], [3.0, 2305.0], [3.1, 2309.0], [3.2, 2414.0], [3.3, 2423.0], [3.4, 2526.0], [3.5, 2605.0], [3.6, 2639.0], [3.7, 2713.0], [3.8, 2773.0], [3.9, 2838.0], [4.0, 2883.0], [4.1, 2900.0], [4.2, 3010.0], [4.3, 3073.0], [4.4, 3125.0], [4.5, 3192.0], [4.6, 3252.0], [4.7, 3309.0], [4.8, 3319.0], [4.9, 3424.0], [5.0, 3481.0], [5.1, 3489.0], [5.2, 3604.0], [5.3, 3639.0], [5.4, 3724.0], [5.5, 3728.0], [5.6, 3858.0], [5.7, 3901.0], [5.8, 3907.0], [5.9, 4008.0], [6.0, 4074.0], [6.1, 4138.0], [6.2, 4193.0], [6.3, 4254.0], [6.4, 4308.0], [6.5, 4362.0], [6.6, 4418.0], [6.7, 4465.0], [6.8, 4500.0], [6.9, 4608.0], [7.0, 4609.0], [7.1, 4726.0], [7.2, 4791.0], [7.3, 4843.0], [7.4, 4889.0], [7.5, 4908.0], [7.6, 5020.0], [7.7, 5082.0], [7.8, 5188.0], [7.9, 5196.0], [8.0, 5257.0], [8.1, 5316.0], [8.2, 5327.0], [8.3, 5426.0], [8.4, 5492.0], [8.5, 5509.0], [8.6, 5610.0], [8.7, 5612.0], [8.8, 5730.0], [8.9, 5788.0], [9.0, 5847.0], [9.1, 5911.0], [9.2, 5912.0], [9.3, 6016.0], [9.4, 6080.0], [9.5, 6144.0], [9.6, 6205.0], [9.7, 6210.0], [9.8, 6319.0], [9.9, 6373.0], [10.0, 6427.0], [10.1, 6484.0], [10.2, 6503.0], [10.3, 6616.0], [10.4, 6679.0], [10.5, 6727.0], [10.6, 6797.0], [10.7, 6806.0], [10.8, 6912.0], [10.9, 6913.0], [11.0, 7027.0], [11.1, 7029.0], [11.2, 7108.0], [11.3, 7109.0], [11.4, 7109.0], [11.5, 7109.0], [11.6, 7109.0], [11.7, 7110.0], [11.8, 7110.0], [11.9, 7110.0], [12.0, 7110.0], [12.1, 7110.0], [12.2, 7110.0], [12.3, 7110.0], [12.4, 7110.0], [12.5, 7110.0], [12.6, 7110.0], [12.7, 7110.0], [12.8, 7110.0], [12.9, 7110.0], [13.0, 7111.0], [13.1, 7111.0], [13.2, 7111.0], [13.3, 7111.0], [13.4, 7111.0], [13.5, 7111.0], [13.6, 7111.0], [13.7, 7112.0], [13.8, 7112.0], [13.9, 7112.0], [14.0, 7112.0], [14.1, 7112.0], [14.2, 7112.0], [14.3, 7113.0], [14.4, 7113.0], [14.5, 7113.0], [14.6, 7113.0], [14.7, 7114.0], [14.8, 7114.0], [14.9, 7114.0], [15.0, 7114.0], [15.1, 7114.0], [15.2, 7114.0], [15.3, 7115.0], [15.4, 7115.0], [15.5, 7115.0], [15.6, 7115.0], [15.7, 7115.0], [15.8, 7115.0], [15.9, 7116.0], [16.0, 7116.0], [16.1, 7116.0], [16.2, 7117.0], [16.3, 7117.0], [16.4, 7117.0], [16.5, 7117.0], [16.6, 7118.0], [16.7, 7118.0], [16.8, 7119.0], [16.9, 7119.0], [17.0, 7119.0], [17.1, 7119.0], [17.2, 7119.0], [17.3, 7120.0], [17.4, 7120.0], [17.5, 7120.0], [17.6, 7121.0], [17.7, 7121.0], [17.8, 7121.0], [17.9, 7122.0], [18.0, 7123.0], [18.1, 7123.0], [18.2, 7123.0], [18.3, 7123.0], [18.4, 7124.0], [18.5, 7124.0], [18.6, 7125.0], [18.7, 7126.0], [18.8, 7126.0], [18.9, 7127.0], [19.0, 7128.0], [19.1, 7128.0], [19.2, 7129.0], [19.3, 7129.0], [19.4, 7130.0], [19.5, 7130.0], [19.6, 7130.0], [19.7, 7131.0], [19.8, 7131.0], [19.9, 7132.0], [20.0, 7132.0], [20.1, 7133.0], [20.2, 7133.0], [20.3, 7133.0], [20.4, 7133.0], [20.5, 7133.0], [20.6, 7134.0], [20.7, 7135.0], [20.8, 7135.0], [20.9, 7135.0], [21.0, 7135.0], [21.1, 7136.0], [21.2, 7136.0], [21.3, 7137.0], [21.4, 7138.0], [21.5, 7138.0], [21.6, 7139.0], [21.7, 7140.0], [21.8, 7141.0], [21.9, 7142.0], [22.0, 7142.0], [22.1, 7144.0], [22.2, 7146.0], [22.3, 7190.0], [22.4, 7191.0], [22.5, 7194.0], [22.6, 7194.0], [22.7, 7195.0], [22.8, 7197.0], [22.9, 7199.0], [23.0, 7199.0], [23.1, 7199.0], [23.2, 7200.0], [23.3, 7200.0], [23.4, 7200.0], [23.5, 7201.0], [23.6, 7201.0], [23.7, 7201.0], [23.8, 7201.0], [23.9, 7201.0], [24.0, 7201.0], [24.1, 7202.0], [24.2, 7202.0], [24.3, 7202.0], [24.4, 7202.0], [24.5, 7202.0], [24.6, 7202.0], [24.7, 7202.0], [24.8, 7202.0], [24.9, 7202.0], [25.0, 7202.0], [25.1, 7202.0], [25.2, 7202.0], [25.3, 7202.0], [25.4, 7202.0], [25.5, 7202.0], [25.6, 7202.0], [25.7, 7202.0], [25.8, 7202.0], [25.9, 7202.0], [26.0, 7202.0], [26.1, 7202.0], [26.2, 7202.0], [26.3, 7202.0], [26.4, 7203.0], [26.5, 7203.0], [26.6, 7203.0], [26.7, 7203.0], [26.8, 7203.0], [26.9, 7203.0], [27.0, 7203.0], [27.1, 7203.0], [27.2, 7203.0], [27.3, 7203.0], [27.4, 7203.0], [27.5, 7203.0], [27.6, 7203.0], [27.7, 7203.0], [27.8, 7203.0], [27.9, 7203.0], [28.0, 7203.0], [28.1, 7203.0], [28.2, 7203.0], [28.3, 7203.0], [28.4, 7203.0], [28.5, 7203.0], [28.6, 7203.0], [28.7, 7203.0], [28.8, 7203.0], [28.9, 7203.0], [29.0, 7204.0], [29.1, 7204.0], [29.2, 7204.0], [29.3, 7204.0], [29.4, 7204.0], [29.5, 7204.0], [29.6, 7204.0], [29.7, 7204.0], [29.8, 7204.0], [29.9, 7204.0], [30.0, 7204.0], [30.1, 7204.0], [30.2, 7204.0], [30.3, 7204.0], [30.4, 7204.0], [30.5, 7204.0], [30.6, 7204.0], [30.7, 7204.0], [30.8, 7204.0], [30.9, 7204.0], [31.0, 7204.0], [31.1, 7204.0], [31.2, 7204.0], [31.3, 7204.0], [31.4, 7204.0], [31.5, 7205.0], [31.6, 7205.0], [31.7, 7205.0], [31.8, 7205.0], [31.9, 7205.0], [32.0, 7205.0], [32.1, 7205.0], [32.2, 7205.0], [32.3, 7205.0], [32.4, 7205.0], [32.5, 7205.0], [32.6, 7205.0], [32.7, 7205.0], [32.8, 7205.0], [32.9, 7205.0], [33.0, 7205.0], [33.1, 7206.0], [33.2, 7206.0], [33.3, 7206.0], [33.4, 7206.0], [33.5, 7206.0], [33.6, 7206.0], [33.7, 7206.0], [33.8, 7206.0], [33.9, 7206.0], [34.0, 7206.0], [34.1, 7206.0], [34.2, 7206.0], [34.3, 7206.0], [34.4, 7206.0], [34.5, 7206.0], [34.6, 7206.0], [34.7, 7206.0], [34.8, 7206.0], [34.9, 7206.0], [35.0, 7206.0], [35.1, 7206.0], [35.2, 7206.0], [35.3, 7206.0], [35.4, 7206.0], [35.5, 7206.0], [35.6, 7207.0], [35.7, 7207.0], [35.8, 7207.0], [35.9, 7207.0], [36.0, 7207.0], [36.1, 7207.0], [36.2, 7207.0], [36.3, 7207.0], [36.4, 7207.0], [36.5, 7207.0], [36.6, 7207.0], [36.7, 7207.0], [36.8, 7207.0], [36.9, 7207.0], [37.0, 7207.0], [37.1, 7207.0], [37.2, 7207.0], [37.3, 7207.0], [37.4, 7207.0], [37.5, 7207.0], [37.6, 7207.0], [37.7, 7207.0], [37.8, 7207.0], [37.9, 7207.0], [38.0, 7207.0], [38.1, 7207.0], [38.2, 7207.0], [38.3, 7207.0], [38.4, 7207.0], [38.5, 7207.0], [38.6, 7207.0], [38.7, 7207.0], [38.8, 7207.0], [38.9, 7207.0], [39.0, 7207.0], [39.1, 7207.0], [39.2, 7207.0], [39.3, 7207.0], [39.4, 7207.0], [39.5, 7207.0], [39.6, 7207.0], [39.7, 7207.0], [39.8, 7207.0], [39.9, 7207.0], [40.0, 7207.0], [40.1, 7207.0], [40.2, 7208.0], [40.3, 7208.0], [40.4, 7208.0], [40.5, 7208.0], [40.6, 7208.0], [40.7, 7208.0], [40.8, 7208.0], [40.9, 7208.0], [41.0, 7208.0], [41.1, 7208.0], [41.2, 7208.0], [41.3, 7208.0], [41.4, 7208.0], [41.5, 7208.0], [41.6, 7208.0], [41.7, 7208.0], [41.8, 7208.0], [41.9, 7208.0], [42.0, 7208.0], [42.1, 7208.0], [42.2, 7208.0], [42.3, 7208.0], [42.4, 7208.0], [42.5, 7208.0], [42.6, 7208.0], [42.7, 7208.0], [42.8, 7208.0], [42.9, 7208.0], [43.0, 7208.0], [43.1, 7208.0], [43.2, 7208.0], [43.3, 7208.0], [43.4, 7208.0], [43.5, 7208.0], [43.6, 7208.0], [43.7, 7208.0], [43.8, 7208.0], [43.9, 7208.0], [44.0, 7208.0], [44.1, 7208.0], [44.2, 7208.0], [44.3, 7208.0], [44.4, 7208.0], [44.5, 7208.0], [44.6, 7208.0], [44.7, 7208.0], [44.8, 7208.0], [44.9, 7208.0], [45.0, 7208.0], [45.1, 7208.0], [45.2, 7208.0], [45.3, 7208.0], [45.4, 7208.0], [45.5, 7208.0], [45.6, 7208.0], [45.7, 7208.0], [45.8, 7208.0], [45.9, 7208.0], [46.0, 7208.0], [46.1, 7208.0], [46.2, 7208.0], [46.3, 7208.0], [46.4, 7208.0], [46.5, 7208.0], [46.6, 7208.0], [46.7, 7208.0], [46.8, 7208.0], [46.9, 7208.0], [47.0, 7208.0], [47.1, 7208.0], [47.2, 7208.0], [47.3, 7208.0], [47.4, 7208.0], [47.5, 7208.0], [47.6, 7208.0], [47.7, 7208.0], [47.8, 7209.0], [47.9, 7209.0], [48.0, 7209.0], [48.1, 7209.0], [48.2, 7209.0], [48.3, 7209.0], [48.4, 7209.0], [48.5, 7209.0], [48.6, 7209.0], [48.7, 7209.0], [48.8, 7209.0], [48.9, 7209.0], [49.0, 7209.0], [49.1, 7209.0], [49.2, 7209.0], [49.3, 7209.0], [49.4, 7209.0], [49.5, 7209.0], [49.6, 7209.0], [49.7, 7209.0], [49.8, 7209.0], [49.9, 7209.0], [50.0, 7209.0], [50.1, 7209.0], [50.2, 7209.0], [50.3, 7209.0], [50.4, 7209.0], [50.5, 7209.0], [50.6, 7209.0], [50.7, 7209.0], [50.8, 7209.0], [50.9, 7209.0], [51.0, 7209.0], [51.1, 7209.0], [51.2, 7209.0], [51.3, 7209.0], [51.4, 7209.0], [51.5, 7209.0], [51.6, 7209.0], [51.7, 7209.0], [51.8, 7209.0], [51.9, 7209.0], [52.0, 7209.0], [52.1, 7209.0], [52.2, 7209.0], [52.3, 7209.0], [52.4, 7209.0], [52.5, 7209.0], [52.6, 7209.0], [52.7, 7209.0], [52.8, 7209.0], [52.9, 7209.0], [53.0, 7209.0], [53.1, 7209.0], [53.2, 7209.0], [53.3, 7209.0], [53.4, 7209.0], [53.5, 7209.0], [53.6, 7209.0], [53.7, 7209.0], [53.8, 7209.0], [53.9, 7209.0], [54.0, 7209.0], [54.1, 7209.0], [54.2, 7209.0], [54.3, 7209.0], [54.4, 7209.0], [54.5, 7209.0], [54.6, 7209.0], [54.7, 7209.0], [54.8, 7209.0], [54.9, 7209.0], [55.0, 7209.0], [55.1, 7209.0], [55.2, 7209.0], [55.3, 7209.0], [55.4, 7209.0], [55.5, 7209.0], [55.6, 7209.0], [55.7, 7209.0], [55.8, 7209.0], [55.9, 7209.0], [56.0, 7209.0], [56.1, 7209.0], [56.2, 7209.0], [56.3, 7209.0], [56.4, 7209.0], [56.5, 7209.0], [56.6, 7209.0], [56.7, 7209.0], [56.8, 7209.0], [56.9, 7209.0], [57.0, 7209.0], [57.1, 7209.0], [57.2, 7209.0], [57.3, 7209.0], [57.4, 7209.0], [57.5, 7209.0], [57.6, 7209.0], [57.7, 7209.0], [57.8, 7209.0], [57.9, 7209.0], [58.0, 7209.0], [58.1, 7210.0], [58.2, 7210.0], [58.3, 7210.0], [58.4, 7210.0], [58.5, 7210.0], [58.6, 7210.0], [58.7, 7210.0], [58.8, 7210.0], [58.9, 7210.0], [59.0, 7210.0], [59.1, 7210.0], [59.2, 7210.0], [59.3, 7210.0], [59.4, 7210.0], [59.5, 7210.0], [59.6, 7210.0], [59.7, 7210.0], [59.8, 7210.0], [59.9, 7210.0], [60.0, 7210.0], [60.1, 7210.0], [60.2, 7210.0], [60.3, 7210.0], [60.4, 7210.0], [60.5, 7210.0], [60.6, 7210.0], [60.7, 7210.0], [60.8, 7210.0], [60.9, 7210.0], [61.0, 7210.0], [61.1, 7210.0], [61.2, 7210.0], [61.3, 7210.0], [61.4, 7210.0], [61.5, 7210.0], [61.6, 7210.0], [61.7, 7210.0], [61.8, 7210.0], [61.9, 7210.0], [62.0, 7210.0], [62.1, 7210.0], [62.2, 7210.0], [62.3, 7210.0], [62.4, 7210.0], [62.5, 7210.0], [62.6, 7210.0], [62.7, 7210.0], [62.8, 7210.0], [62.9, 7210.0], [63.0, 7210.0], [63.1, 7210.0], [63.2, 7210.0], [63.3, 7210.0], [63.4, 7210.0], [63.5, 7210.0], [63.6, 7210.0], [63.7, 7210.0], [63.8, 7210.0], [63.9, 7210.0], [64.0, 7210.0], [64.1, 7210.0], [64.2, 7210.0], [64.3, 7210.0], [64.4, 7210.0], [64.5, 7210.0], [64.6, 7210.0], [64.7, 7210.0], [64.8, 7210.0], [64.9, 7210.0], [65.0, 7210.0], [65.1, 7210.0], [65.2, 7210.0], [65.3, 7210.0], [65.4, 7210.0], [65.5, 7210.0], [65.6, 7210.0], [65.7, 7210.0], [65.8, 7210.0], [65.9, 7210.0], [66.0, 7210.0], [66.1, 7210.0], [66.2, 7210.0], [66.3, 7210.0], [66.4, 7210.0], [66.5, 7210.0], [66.6, 7210.0], [66.7, 7210.0], [66.8, 7210.0], [66.9, 7210.0], [67.0, 7210.0], [67.1, 7210.0], [67.2, 7210.0], [67.3, 7210.0], [67.4, 7210.0], [67.5, 7210.0], [67.6, 7210.0], [67.7, 7210.0], [67.8, 7210.0], [67.9, 7210.0], [68.0, 7210.0], [68.1, 7210.0], [68.2, 7210.0], [68.3, 7210.0], [68.4, 7210.0], [68.5, 7210.0], [68.6, 7210.0], [68.7, 7210.0], [68.8, 7210.0], [68.9, 7210.0], [69.0, 7210.0], [69.1, 7210.0], [69.2, 7210.0], [69.3, 7210.0], [69.4, 7210.0], [69.5, 7210.0], [69.6, 7210.0], [69.7, 7210.0], [69.8, 7210.0], [69.9, 7210.0], [70.0, 7210.0], [70.1, 7210.0], [70.2, 7210.0], [70.3, 7210.0], [70.4, 7210.0], [70.5, 7210.0], [70.6, 7210.0], [70.7, 7210.0], [70.8, 7210.0], [70.9, 7210.0], [71.0, 7210.0], [71.1, 7210.0], [71.2, 7210.0], [71.3, 7210.0], [71.4, 7210.0], [71.5, 7210.0], [71.6, 7210.0], [71.7, 7210.0], [71.8, 7210.0], [71.9, 7210.0], [72.0, 7210.0], [72.1, 7210.0], [72.2, 7210.0], [72.3, 7210.0], [72.4, 7210.0], [72.5, 7210.0], [72.6, 7210.0], [72.7, 7210.0], [72.8, 7210.0], [72.9, 7210.0], [73.0, 7210.0], [73.1, 7210.0], [73.2, 7210.0], [73.3, 7210.0], [73.4, 7210.0], [73.5, 7210.0], [73.6, 7210.0], [73.7, 7210.0], [73.8, 7210.0], [73.9, 7210.0], [74.0, 7210.0], [74.1, 7210.0], [74.2, 7210.0], [74.3, 7210.0], [74.4, 7210.0], [74.5, 7210.0], [74.6, 7210.0], [74.7, 7210.0], [74.8, 7210.0], [74.9, 7210.0], [75.0, 7210.0], [75.1, 7210.0], [75.2, 7210.0], [75.3, 7210.0], [75.4, 7210.0], [75.5, 7210.0], [75.6, 7210.0], [75.7, 7210.0], [75.8, 7210.0], [75.9, 7210.0], [76.0, 7210.0], [76.1, 7210.0], [76.2, 7210.0], [76.3, 7210.0], [76.4, 7210.0], [76.5, 7210.0], [76.6, 7210.0], [76.7, 7210.0], [76.8, 7210.0], [76.9, 7210.0], [77.0, 7210.0], [77.1, 7210.0], [77.2, 7210.0], [77.3, 7210.0], [77.4, 7210.0], [77.5, 7210.0], [77.6, 7210.0], [77.7, 7210.0], [77.8, 7210.0], [77.9, 7210.0], [78.0, 7210.0], [78.1, 7210.0], [78.2, 7211.0], [78.3, 7211.0], [78.4, 7211.0], [78.5, 7211.0], [78.6, 7211.0], [78.7, 7211.0], [78.8, 7211.0], [78.9, 7211.0], [79.0, 7211.0], [79.1, 7211.0], [79.2, 7211.0], [79.3, 7211.0], [79.4, 7211.0], [79.5, 7211.0], [79.6, 7211.0], [79.7, 7211.0], [79.8, 7211.0], [79.9, 7211.0], [80.0, 7211.0], [80.1, 7211.0], [80.2, 7211.0], [80.3, 7211.0], [80.4, 7211.0], [80.5, 7211.0], [80.6, 7211.0], [80.7, 7211.0], [80.8, 7211.0], [80.9, 7211.0], [81.0, 7211.0], [81.1, 7211.0], [81.2, 7211.0], [81.3, 7211.0], [81.4, 7211.0], [81.5, 7211.0], [81.6, 7211.0], [81.7, 7211.0], [81.8, 7211.0], [81.9, 7211.0], [82.0, 7211.0], [82.1, 7211.0], [82.2, 7211.0], [82.3, 7211.0], [82.4, 7211.0], [82.5, 7211.0], [82.6, 7211.0], [82.7, 7211.0], [82.8, 7211.0], [82.9, 7211.0], [83.0, 7211.0], [83.1, 7211.0], [83.2, 7211.0], [83.3, 7211.0], [83.4, 7211.0], [83.5, 7211.0], [83.6, 7211.0], [83.7, 7211.0], [83.8, 7211.0], [83.9, 7211.0], [84.0, 7211.0], [84.1, 7211.0], [84.2, 7211.0], [84.3, 7211.0], [84.4, 7211.0], [84.5, 7211.0], [84.6, 7211.0], [84.7, 7211.0], [84.8, 7211.0], [84.9, 7211.0], [85.0, 7211.0], [85.1, 7211.0], [85.2, 7211.0], [85.3, 7211.0], [85.4, 7211.0], [85.5, 7211.0], [85.6, 7211.0], [85.7, 7211.0], [85.8, 7211.0], [85.9, 7211.0], [86.0, 7211.0], [86.1, 7211.0], [86.2, 7211.0], [86.3, 7211.0], [86.4, 7211.0], [86.5, 7211.0], [86.6, 7211.0], [86.7, 7211.0], [86.8, 7211.0], [86.9, 7211.0], [87.0, 7211.0], [87.1, 7211.0], [87.2, 7211.0], [87.3, 7211.0], [87.4, 7211.0], [87.5, 7211.0], [87.6, 7211.0], [87.7, 7211.0], [87.8, 7211.0], [87.9, 7211.0], [88.0, 7211.0], [88.1, 7211.0], [88.2, 7211.0], [88.3, 7211.0], [88.4, 7211.0], [88.5, 7211.0], [88.6, 7211.0], [88.7, 7211.0], [88.8, 7211.0], [88.9, 7211.0], [89.0, 7211.0], [89.1, 7211.0], [89.2, 7211.0], [89.3, 7211.0], [89.4, 7211.0], [89.5, 7211.0], [89.6, 7212.0], [89.7, 7212.0], [89.8, 7212.0], [89.9, 7212.0], [90.0, 7212.0], [90.1, 7212.0], [90.2, 7212.0], [90.3, 7212.0], [90.4, 7212.0], [90.5, 7212.0], [90.6, 7212.0], [90.7, 7212.0], [90.8, 7212.0], [90.9, 7212.0], [91.0, 7212.0], [91.1, 7212.0], [91.2, 7212.0], [91.3, 7212.0], [91.4, 7212.0], [91.5, 7212.0], [91.6, 7212.0], [91.7, 7212.0], [91.8, 7212.0], [91.9, 7212.0], [92.0, 7212.0], [92.1, 7212.0], [92.2, 7212.0], [92.3, 7212.0], [92.4, 7212.0], [92.5, 7212.0], [92.6, 7212.0], [92.7, 7212.0], [92.8, 7212.0], [92.9, 7212.0], [93.0, 7212.0], [93.1, 7212.0], [93.2, 7212.0], [93.3, 7212.0], [93.4, 7212.0], [93.5, 7212.0], [93.6, 7212.0], [93.7, 7212.0], [93.8, 7213.0], [93.9, 7213.0], [94.0, 7213.0], [94.1, 7213.0], [94.2, 7213.0], [94.3, 7213.0], [94.4, 7213.0], [94.5, 7213.0], [94.6, 7213.0], [94.7, 7213.0], [94.8, 7213.0], [94.9, 7213.0], [95.0, 7213.0], [95.1, 7213.0], [95.2, 7213.0], [95.3, 7213.0], [95.4, 7213.0], [95.5, 7213.0], [95.6, 7213.0], [95.7, 7213.0], [95.8, 7213.0], [95.9, 7213.0], [96.0, 7213.0], [96.1, 7213.0], [96.2, 7213.0], [96.3, 7213.0], [96.4, 7213.0], [96.5, 7213.0], [96.6, 7213.0], [96.7, 7213.0], [96.8, 7213.0], [96.9, 7213.0], [97.0, 7213.0], [97.1, 7213.0], [97.2, 7213.0], [97.3, 7214.0], [97.4, 7214.0], [97.5, 7214.0], [97.6, 7214.0], [97.7, 7214.0], [97.8, 7214.0], [97.9, 7214.0], [98.0, 7214.0], [98.1, 7214.0], [98.2, 7214.0], [98.3, 7215.0], [98.4, 7215.0], [98.5, 7216.0], [98.6, 7218.0], [98.7, 7219.0], [98.8, 7219.0], [98.9, 7220.0], [99.0, 7220.0], [99.1, 7220.0], [99.2, 7222.0], [99.3, 7222.0], [99.4, 7223.0], [99.5, 7223.0], [99.6, 7224.0], [99.7, 7224.0], [99.8, 7225.0], [99.9, 7225.0], [100.0, 7226.0]], "isOverall": false, "label": "network/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1000.0, "maxY": 1627.0, "series": [{"data": [[1000.0, 17.0], [1100.0, 6.0], [1200.0, 4.0], [1300.0, 3.0], [1400.0, 5.0], [1500.0, 4.0], [1600.0, 2.0], [1700.0, 5.0], [1800.0, 4.0], [1900.0, 1.0], [2000.0, 5.0], [2100.0, 5.0], [2200.0, 1.0], [2300.0, 5.0], [2400.0, 4.0], [2500.0, 2.0], [2600.0, 4.0], [2700.0, 5.0], [2800.0, 4.0], [2900.0, 1.0], [3000.0, 5.0], [3100.0, 5.0], [3200.0, 1.0], [3300.0, 5.0], [3400.0, 5.0], [3500.0, 1.0], [3600.0, 4.0], [3700.0, 5.0], [3800.0, 2.0], [3900.0, 4.0], [4000.0, 4.0], [4100.0, 4.0], [4200.0, 2.0], [4300.0, 5.0], [4400.0, 4.0], [4500.0, 1.0], [4600.0, 5.0], [4700.0, 5.0], [4800.0, 3.0], [4900.0, 3.0], [5000.0, 5.0], [5100.0, 3.0], [5200.0, 2.0], [5300.0, 5.0], [5400.0, 4.0], [5500.0, 2.0], [5600.0, 4.0], [5700.0, 5.0], [5800.0, 2.0], [5900.0, 4.0], [6000.0, 5.0], [6100.0, 2.0], [6200.0, 3.0], [6300.0, 5.0], [6400.0, 4.0], [6500.0, 2.0], [6600.0, 5.0], [6800.0, 2.0], [6700.0, 3.0], [6900.0, 5.0], [7000.0, 5.0], [7100.0, 253.0], [7200.0, 1627.0]], "isOverall": false, "label": "network/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 35.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2082.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 35.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2082.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 35.323129251700685, "minX": 1.62617586E12, "maxY": 50.0, "series": [{"data": [[1.62617598E12, 50.0], [1.62617592E12, 50.0], [1.6261761E12, 50.0], [1.62617604E12, 50.0], [1.62617616E12, 42.147435897435884], [1.62617586E12, 35.323129251700685]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617616E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2169.3333333333335, "minX": 1.0, "maxY": 7211.0, "series": [{"data": [[2.0, 7210.0], [3.0, 3141.666666666667], [4.0, 4108.5], [5.0, 2559.25], [6.0, 2558.5], [7.0, 2557.75], [8.0, 2248.8], [9.0, 2321.4], [10.0, 2169.3333333333335], [11.0, 2478.0], [12.0, 2551.2], [13.0, 2644.2], [14.0, 2712.2], [15.0, 2642.5], [16.0, 2926.4], [17.0, 3030.0], [18.0, 3110.2], [19.0, 3156.6], [20.0, 3132.8333333333335], [21.0, 3388.8], [22.0, 3509.6], [23.0, 3574.8], [24.0, 3659.0], [25.0, 3745.2], [26.0, 3709.5], [27.0, 3959.4], [28.0, 4054.6], [29.0, 4136.4], [30.0, 4215.6], [31.0, 4322.6], [32.0, 4290.5], [33.0, 4530.2], [34.0, 4601.8], [35.0, 4669.6], [36.0, 4776.8], [37.0, 4878.2], [38.0, 4882.5], [39.0, 5077.6], [40.0, 5158.8], [41.0, 5247.2], [42.0, 5322.8], [43.0, 5371.5], [44.0, 5541.0], [45.0, 5635.2], [46.0, 5706.0], [47.0, 5812.6], [48.0, 5905.2], [49.0, 5951.5], [50.0, 7178.476595744683], [1.0, 7211.0]], "isOverall": false, "label": "network/1/spring/mvc", "isController": false}, {"data": [[47.383089277279154, 6822.976854038735]], "isOverall": false, "label": "network/1/spring/mvc-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 530.4, "minX": 1.62617586E12, "maxY": 1598.5, "series": [{"data": [[1.62617598E12, 1594.6666666666667], [1.62617592E12, 1598.5], [1.6261761E12, 1598.5], [1.62617604E12, 1598.5], [1.62617616E12, 598.0], [1.62617586E12, 1127.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62617598E12, 1414.4], [1.62617592E12, 1417.8], [1.6261761E12, 1417.8], [1.62617604E12, 1417.8], [1.62617616E12, 530.4], [1.62617586E12, 999.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617616E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4497.765306122449, "minX": 1.62617586E12, "maxY": 7199.206235011992, "series": [{"data": [[1.62617598E12, 7198.16105769231], [1.62617592E12, 7199.206235011992], [1.6261761E12, 7197.6618705035935], [1.62617604E12, 7197.4244604316555], [1.62617616E12, 7196.4358974358975], [1.62617586E12, 4497.765306122449]], "isOverall": false, "label": "network/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617616E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4497.717687074832, "minX": 1.62617586E12, "maxY": 7199.131894484414, "series": [{"data": [[1.62617598E12, 7198.12980769231], [1.62617592E12, 7199.131894484414], [1.6261761E12, 7197.61870503597], [1.62617604E12, 7197.398081534772], [1.62617616E12, 7196.403846153845], [1.62617586E12, 4497.717687074832]], "isOverall": false, "label": "network/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617616E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.4615384615384615, "minX": 1.62617586E12, "maxY": 0.8435374149659863, "series": [{"data": [[1.62617598E12, 0.658653846153846], [1.62617592E12, 0.7386091127098329], [1.6261761E12, 0.5371702637889686], [1.62617604E12, 0.6378896882494001], [1.62617616E12, 0.4615384615384615], [1.62617586E12, 0.8435374149659863]], "isOverall": false, "label": "network/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617616E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1005.0, "minX": 1.62617586E12, "maxY": 7226.0, "series": [{"data": [[1.62617598E12, 7214.0], [1.62617592E12, 7226.0], [1.6261761E12, 7220.0], [1.62617604E12, 7213.0], [1.62617616E12, 7211.0], [1.62617586E12, 7223.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62617598E12, 7212.0], [1.62617592E12, 7213.0], [1.6261761E12, 7212.0], [1.62617604E12, 7211.0], [1.62617616E12, 7210.0], [1.62617586E12, 7208.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62617598E12, 7214.0], [1.62617592E12, 7225.0], [1.6261761E12, 7220.0], [1.62617604E12, 7212.0], [1.62617616E12, 7211.0], [1.62617586E12, 7214.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62617598E12, 7213.0], [1.62617592E12, 7218.1], [1.6261761E12, 7213.0], [1.62617604E12, 7212.0], [1.62617616E12, 7210.0], [1.62617586E12, 7213.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62617598E12, 7115.0], [1.62617592E12, 7130.0], [1.6261761E12, 7109.0], [1.62617604E12, 7108.0], [1.62617616E12, 7109.0], [1.62617586E12, 1005.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62617598E12, 7209.0], [1.62617592E12, 7207.0], [1.6261761E12, 7210.0], [1.62617604E12, 7210.0], [1.62617616E12, 7209.0], [1.62617586E12, 4608.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617616E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1006.0, "minX": 2.0, "maxY": 7209.0, "series": [{"data": [[2.0, 1157.5], [5.0, 1006.0], [3.0, 4060.0], [6.0, 7209.0], [7.0, 7209.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1006.0, "minX": 2.0, "maxY": 7209.0, "series": [{"data": [[2.0, 1156.0], [5.0, 1006.0], [3.0, 4060.0], [6.0, 7209.0], [7.0, 7209.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.62617586E12, "maxY": 6.95, "series": [{"data": [[1.62617598E12, 6.933333333333334], [1.62617592E12, 6.95], [1.6261761E12, 6.95], [1.62617604E12, 6.95], [1.62617616E12, 1.7666666666666666], [1.62617586E12, 5.733333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617616E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.6, "minX": 1.62617586E12, "maxY": 6.95, "series": [{"data": [[1.62617598E12, 6.933333333333334], [1.62617592E12, 6.95], [1.6261761E12, 6.95], [1.62617604E12, 6.95], [1.62617616E12, 2.6], [1.62617586E12, 4.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617616E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.6, "minX": 1.62617586E12, "maxY": 6.95, "series": [{"data": [[1.62617598E12, 6.933333333333334], [1.62617592E12, 6.95], [1.6261761E12, 6.95], [1.62617604E12, 6.95], [1.62617616E12, 2.6], [1.62617586E12, 4.9]], "isOverall": false, "label": "network/1/spring/mvc-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617616E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.6, "minX": 1.62617586E12, "maxY": 6.95, "series": [{"data": [[1.62617598E12, 6.933333333333334], [1.62617592E12, 6.95], [1.6261761E12, 6.95], [1.62617604E12, 6.95], [1.62617616E12, 2.6], [1.62617586E12, 4.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617616E12, "title": "Total Transactions Per Second"}},
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

