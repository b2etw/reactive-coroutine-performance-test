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
        data: {"result": {"minY": 1005.0, "minX": 0.0, "maxY": 4915.0, "series": [{"data": [[0.0, 1005.0], [0.1, 1005.0], [0.2, 1005.0], [0.3, 1005.0], [0.4, 1006.0], [0.5, 1006.0], [0.6, 1006.0], [0.7, 1006.0], [0.8, 1007.0], [0.9, 1007.0], [1.0, 1008.0], [1.1, 1025.0], [1.2, 1046.0], [1.3, 1095.0], [1.4, 1105.0], [1.5, 1179.0], [1.6, 1210.0], [1.7, 1226.0], [1.8, 1293.0], [1.9, 1314.0], [2.0, 1338.0], [2.1, 1417.0], [2.2, 1494.0], [2.3, 1498.0], [2.4, 1503.0], [2.5, 1597.0], [2.6, 1683.0], [2.7, 1706.0], [2.8, 1727.0], [2.9, 1745.0], [3.0, 1797.0], [3.1, 1825.0], [3.2, 1902.0], [3.3, 1912.0], [3.4, 1994.0], [3.5, 2022.0], [3.6, 2073.0], [3.7, 2107.0], [3.8, 2143.0], [3.9, 2210.0], [4.0, 2224.0], [4.1, 2268.0], [4.2, 2338.0], [4.3, 2396.0], [4.4, 2402.0], [4.5, 2443.0], [4.6, 2474.0], [4.7, 2522.0], [4.8, 2595.0], [4.9, 2613.0], [5.0, 2673.0], [5.1, 2707.0], [5.2, 2768.0], [5.3, 2794.0], [5.4, 2807.0], [5.5, 2847.0], [5.6, 2914.0], [5.7, 3006.0], [5.8, 3016.0], [5.9, 3093.0], [6.0, 3107.0], [6.1, 3113.0], [6.2, 3204.0], [6.3, 3217.0], [6.4, 3288.0], [6.5, 3304.0], [6.6, 3322.0], [6.7, 3408.0], [6.8, 3417.0], [6.9, 3507.0], [7.0, 3519.0], [7.1, 3551.0], [7.2, 3614.0], [7.3, 3674.0], [7.4, 3706.0], [7.5, 3720.0], [7.6, 3798.0], [7.7, 3811.0], [7.8, 3821.0], [7.9, 3894.0], [8.0, 3911.0], [8.1, 3980.0], [8.2, 4011.0], [8.3, 4025.0], [8.4, 4081.0], [8.5, 4112.0], [8.6, 4115.0], [8.7, 4151.0], [8.8, 4208.0], [8.9, 4223.0], [9.0, 4290.0], [9.1, 4304.0], [9.2, 4313.0], [9.3, 4325.0], [9.4, 4401.0], [9.5, 4417.0], [9.6, 4423.0], [9.7, 4476.0], [9.8, 4510.0], [9.9, 4514.0], [10.0, 4515.0], [10.1, 4516.0], [10.2, 4517.0], [10.3, 4518.0], [10.4, 4519.0], [10.5, 4525.0], [10.6, 4527.0], [10.7, 4529.0], [10.8, 4530.0], [10.9, 4531.0], [11.0, 4544.0], [11.1, 4567.0], [11.2, 4588.0], [11.3, 4595.0], [11.4, 4599.0], [11.5, 4600.0], [11.6, 4602.0], [11.7, 4602.0], [11.8, 4604.0], [11.9, 4605.0], [12.0, 4606.0], [12.1, 4610.0], [12.2, 4610.0], [12.3, 4611.0], [12.4, 4611.0], [12.5, 4611.0], [12.6, 4611.0], [12.7, 4611.0], [12.8, 4612.0], [12.9, 4612.0], [13.0, 4612.0], [13.1, 4612.0], [13.2, 4612.0], [13.3, 4613.0], [13.4, 4613.0], [13.5, 4613.0], [13.6, 4613.0], [13.7, 4613.0], [13.8, 4613.0], [13.9, 4613.0], [14.0, 4613.0], [14.1, 4613.0], [14.2, 4613.0], [14.3, 4613.0], [14.4, 4614.0], [14.5, 4614.0], [14.6, 4614.0], [14.7, 4614.0], [14.8, 4614.0], [14.9, 4614.0], [15.0, 4614.0], [15.1, 4614.0], [15.2, 4614.0], [15.3, 4614.0], [15.4, 4614.0], [15.5, 4614.0], [15.6, 4614.0], [15.7, 4614.0], [15.8, 4614.0], [15.9, 4614.0], [16.0, 4614.0], [16.1, 4614.0], [16.2, 4614.0], [16.3, 4614.0], [16.4, 4614.0], [16.5, 4614.0], [16.6, 4614.0], [16.7, 4614.0], [16.8, 4615.0], [16.9, 4615.0], [17.0, 4615.0], [17.1, 4615.0], [17.2, 4615.0], [17.3, 4615.0], [17.4, 4615.0], [17.5, 4615.0], [17.6, 4615.0], [17.7, 4615.0], [17.8, 4615.0], [17.9, 4615.0], [18.0, 4615.0], [18.1, 4615.0], [18.2, 4615.0], [18.3, 4615.0], [18.4, 4615.0], [18.5, 4615.0], [18.6, 4615.0], [18.7, 4615.0], [18.8, 4615.0], [18.9, 4615.0], [19.0, 4615.0], [19.1, 4615.0], [19.2, 4616.0], [19.3, 4616.0], [19.4, 4616.0], [19.5, 4616.0], [19.6, 4616.0], [19.7, 4616.0], [19.8, 4616.0], [19.9, 4616.0], [20.0, 4616.0], [20.1, 4616.0], [20.2, 4616.0], [20.3, 4616.0], [20.4, 4616.0], [20.5, 4616.0], [20.6, 4616.0], [20.7, 4616.0], [20.8, 4616.0], [20.9, 4616.0], [21.0, 4616.0], [21.1, 4616.0], [21.2, 4616.0], [21.3, 4616.0], [21.4, 4616.0], [21.5, 4616.0], [21.6, 4616.0], [21.7, 4616.0], [21.8, 4616.0], [21.9, 4616.0], [22.0, 4616.0], [22.1, 4617.0], [22.2, 4617.0], [22.3, 4617.0], [22.4, 4617.0], [22.5, 4617.0], [22.6, 4617.0], [22.7, 4617.0], [22.8, 4617.0], [22.9, 4617.0], [23.0, 4617.0], [23.1, 4617.0], [23.2, 4617.0], [23.3, 4617.0], [23.4, 4617.0], [23.5, 4617.0], [23.6, 4617.0], [23.7, 4617.0], [23.8, 4618.0], [23.9, 4618.0], [24.0, 4618.0], [24.1, 4618.0], [24.2, 4618.0], [24.3, 4618.0], [24.4, 4618.0], [24.5, 4618.0], [24.6, 4618.0], [24.7, 4618.0], [24.8, 4618.0], [24.9, 4618.0], [25.0, 4618.0], [25.1, 4618.0], [25.2, 4619.0], [25.3, 4619.0], [25.4, 4619.0], [25.5, 4619.0], [25.6, 4619.0], [25.7, 4619.0], [25.8, 4619.0], [25.9, 4619.0], [26.0, 4619.0], [26.1, 4619.0], [26.2, 4619.0], [26.3, 4619.0], [26.4, 4620.0], [26.5, 4620.0], [26.6, 4620.0], [26.7, 4620.0], [26.8, 4620.0], [26.9, 4621.0], [27.0, 4621.0], [27.1, 4621.0], [27.2, 4621.0], [27.3, 4621.0], [27.4, 4621.0], [27.5, 4622.0], [27.6, 4622.0], [27.7, 4623.0], [27.8, 4623.0], [27.9, 4623.0], [28.0, 4624.0], [28.1, 4624.0], [28.2, 4624.0], [28.3, 4624.0], [28.4, 4624.0], [28.5, 4625.0], [28.6, 4625.0], [28.7, 4625.0], [28.8, 4625.0], [28.9, 4625.0], [29.0, 4626.0], [29.1, 4626.0], [29.2, 4626.0], [29.3, 4627.0], [29.4, 4627.0], [29.5, 4627.0], [29.6, 4627.0], [29.7, 4627.0], [29.8, 4628.0], [29.9, 4628.0], [30.0, 4628.0], [30.1, 4628.0], [30.2, 4628.0], [30.3, 4628.0], [30.4, 4629.0], [30.5, 4629.0], [30.6, 4629.0], [30.7, 4629.0], [30.8, 4629.0], [30.9, 4629.0], [31.0, 4629.0], [31.1, 4629.0], [31.2, 4630.0], [31.3, 4630.0], [31.4, 4630.0], [31.5, 4630.0], [31.6, 4630.0], [31.7, 4631.0], [31.8, 4631.0], [31.9, 4631.0], [32.0, 4631.0], [32.1, 4631.0], [32.2, 4631.0], [32.3, 4631.0], [32.4, 4631.0], [32.5, 4632.0], [32.6, 4632.0], [32.7, 4632.0], [32.8, 4633.0], [32.9, 4633.0], [33.0, 4633.0], [33.1, 4634.0], [33.2, 4637.0], [33.3, 4641.0], [33.4, 4645.0], [33.5, 4646.0], [33.6, 4647.0], [33.7, 4648.0], [33.8, 4649.0], [33.9, 4653.0], [34.0, 4654.0], [34.1, 4656.0], [34.2, 4660.0], [34.3, 4663.0], [34.4, 4664.0], [34.5, 4666.0], [34.6, 4668.0], [34.7, 4671.0], [34.8, 4672.0], [34.9, 4674.0], [35.0, 4676.0], [35.1, 4678.0], [35.2, 4680.0], [35.3, 4683.0], [35.4, 4684.0], [35.5, 4686.0], [35.6, 4689.0], [35.7, 4689.0], [35.8, 4690.0], [35.9, 4694.0], [36.0, 4696.0], [36.1, 4697.0], [36.2, 4697.0], [36.3, 4698.0], [36.4, 4698.0], [36.5, 4698.0], [36.6, 4698.0], [36.7, 4699.0], [36.8, 4699.0], [36.9, 4699.0], [37.0, 4699.0], [37.1, 4699.0], [37.2, 4700.0], [37.3, 4700.0], [37.4, 4700.0], [37.5, 4700.0], [37.6, 4700.0], [37.7, 4701.0], [37.8, 4701.0], [37.9, 4701.0], [38.0, 4701.0], [38.1, 4702.0], [38.2, 4702.0], [38.3, 4702.0], [38.4, 4702.0], [38.5, 4702.0], [38.6, 4702.0], [38.7, 4702.0], [38.8, 4703.0], [38.9, 4703.0], [39.0, 4703.0], [39.1, 4703.0], [39.2, 4703.0], [39.3, 4704.0], [39.4, 4704.0], [39.5, 4704.0], [39.6, 4704.0], [39.7, 4704.0], [39.8, 4705.0], [39.9, 4705.0], [40.0, 4705.0], [40.1, 4705.0], [40.2, 4705.0], [40.3, 4706.0], [40.4, 4706.0], [40.5, 4706.0], [40.6, 4706.0], [40.7, 4707.0], [40.8, 4707.0], [40.9, 4707.0], [41.0, 4707.0], [41.1, 4707.0], [41.2, 4708.0], [41.3, 4708.0], [41.4, 4708.0], [41.5, 4708.0], [41.6, 4708.0], [41.7, 4708.0], [41.8, 4709.0], [41.9, 4709.0], [42.0, 4709.0], [42.1, 4709.0], [42.2, 4709.0], [42.3, 4709.0], [42.4, 4709.0], [42.5, 4709.0], [42.6, 4710.0], [42.7, 4710.0], [42.8, 4710.0], [42.9, 4710.0], [43.0, 4710.0], [43.1, 4710.0], [43.2, 4710.0], [43.3, 4710.0], [43.4, 4710.0], [43.5, 4711.0], [43.6, 4711.0], [43.7, 4711.0], [43.8, 4711.0], [43.9, 4711.0], [44.0, 4711.0], [44.1, 4711.0], [44.2, 4711.0], [44.3, 4711.0], [44.4, 4711.0], [44.5, 4711.0], [44.6, 4711.0], [44.7, 4711.0], [44.8, 4711.0], [44.9, 4711.0], [45.0, 4711.0], [45.1, 4711.0], [45.2, 4712.0], [45.3, 4712.0], [45.4, 4712.0], [45.5, 4712.0], [45.6, 4712.0], [45.7, 4712.0], [45.8, 4712.0], [45.9, 4712.0], [46.0, 4712.0], [46.1, 4712.0], [46.2, 4712.0], [46.3, 4712.0], [46.4, 4712.0], [46.5, 4712.0], [46.6, 4712.0], [46.7, 4712.0], [46.8, 4712.0], [46.9, 4712.0], [47.0, 4712.0], [47.1, 4712.0], [47.2, 4712.0], [47.3, 4712.0], [47.4, 4712.0], [47.5, 4712.0], [47.6, 4712.0], [47.7, 4713.0], [47.8, 4713.0], [47.9, 4713.0], [48.0, 4713.0], [48.1, 4713.0], [48.2, 4713.0], [48.3, 4713.0], [48.4, 4713.0], [48.5, 4713.0], [48.6, 4713.0], [48.7, 4713.0], [48.8, 4713.0], [48.9, 4713.0], [49.0, 4713.0], [49.1, 4713.0], [49.2, 4713.0], [49.3, 4713.0], [49.4, 4713.0], [49.5, 4713.0], [49.6, 4713.0], [49.7, 4713.0], [49.8, 4713.0], [49.9, 4713.0], [50.0, 4713.0], [50.1, 4713.0], [50.2, 4713.0], [50.3, 4713.0], [50.4, 4713.0], [50.5, 4713.0], [50.6, 4713.0], [50.7, 4713.0], [50.8, 4713.0], [50.9, 4713.0], [51.0, 4713.0], [51.1, 4713.0], [51.2, 4713.0], [51.3, 4713.0], [51.4, 4713.0], [51.5, 4713.0], [51.6, 4713.0], [51.7, 4713.0], [51.8, 4713.0], [51.9, 4713.0], [52.0, 4713.0], [52.1, 4713.0], [52.2, 4713.0], [52.3, 4713.0], [52.4, 4713.0], [52.5, 4713.0], [52.6, 4713.0], [52.7, 4713.0], [52.8, 4713.0], [52.9, 4713.0], [53.0, 4713.0], [53.1, 4713.0], [53.2, 4713.0], [53.3, 4713.0], [53.4, 4713.0], [53.5, 4713.0], [53.6, 4713.0], [53.7, 4713.0], [53.8, 4714.0], [53.9, 4714.0], [54.0, 4714.0], [54.1, 4714.0], [54.2, 4714.0], [54.3, 4714.0], [54.4, 4714.0], [54.5, 4714.0], [54.6, 4714.0], [54.7, 4714.0], [54.8, 4714.0], [54.9, 4714.0], [55.0, 4714.0], [55.1, 4714.0], [55.2, 4714.0], [55.3, 4714.0], [55.4, 4714.0], [55.5, 4714.0], [55.6, 4714.0], [55.7, 4714.0], [55.8, 4714.0], [55.9, 4714.0], [56.0, 4714.0], [56.1, 4714.0], [56.2, 4714.0], [56.3, 4714.0], [56.4, 4714.0], [56.5, 4714.0], [56.6, 4714.0], [56.7, 4714.0], [56.8, 4714.0], [56.9, 4714.0], [57.0, 4714.0], [57.1, 4714.0], [57.2, 4714.0], [57.3, 4714.0], [57.4, 4714.0], [57.5, 4714.0], [57.6, 4714.0], [57.7, 4714.0], [57.8, 4714.0], [57.9, 4714.0], [58.0, 4714.0], [58.1, 4714.0], [58.2, 4714.0], [58.3, 4714.0], [58.4, 4714.0], [58.5, 4714.0], [58.6, 4714.0], [58.7, 4714.0], [58.8, 4714.0], [58.9, 4714.0], [59.0, 4714.0], [59.1, 4714.0], [59.2, 4714.0], [59.3, 4714.0], [59.4, 4714.0], [59.5, 4714.0], [59.6, 4714.0], [59.7, 4714.0], [59.8, 4714.0], [59.9, 4714.0], [60.0, 4714.0], [60.1, 4714.0], [60.2, 4714.0], [60.3, 4714.0], [60.4, 4714.0], [60.5, 4714.0], [60.6, 4714.0], [60.7, 4714.0], [60.8, 4714.0], [60.9, 4714.0], [61.0, 4714.0], [61.1, 4714.0], [61.2, 4714.0], [61.3, 4714.0], [61.4, 4714.0], [61.5, 4715.0], [61.6, 4715.0], [61.7, 4715.0], [61.8, 4715.0], [61.9, 4715.0], [62.0, 4715.0], [62.1, 4715.0], [62.2, 4715.0], [62.3, 4715.0], [62.4, 4715.0], [62.5, 4715.0], [62.6, 4715.0], [62.7, 4715.0], [62.8, 4715.0], [62.9, 4715.0], [63.0, 4715.0], [63.1, 4715.0], [63.2, 4715.0], [63.3, 4715.0], [63.4, 4715.0], [63.5, 4715.0], [63.6, 4715.0], [63.7, 4715.0], [63.8, 4715.0], [63.9, 4715.0], [64.0, 4715.0], [64.1, 4715.0], [64.2, 4715.0], [64.3, 4715.0], [64.4, 4715.0], [64.5, 4715.0], [64.6, 4715.0], [64.7, 4715.0], [64.8, 4715.0], [64.9, 4715.0], [65.0, 4715.0], [65.1, 4715.0], [65.2, 4715.0], [65.3, 4715.0], [65.4, 4715.0], [65.5, 4715.0], [65.6, 4715.0], [65.7, 4715.0], [65.8, 4715.0], [65.9, 4715.0], [66.0, 4715.0], [66.1, 4715.0], [66.2, 4715.0], [66.3, 4715.0], [66.4, 4715.0], [66.5, 4715.0], [66.6, 4715.0], [66.7, 4715.0], [66.8, 4715.0], [66.9, 4715.0], [67.0, 4715.0], [67.1, 4715.0], [67.2, 4715.0], [67.3, 4715.0], [67.4, 4715.0], [67.5, 4715.0], [67.6, 4715.0], [67.7, 4715.0], [67.8, 4715.0], [67.9, 4715.0], [68.0, 4715.0], [68.1, 4715.0], [68.2, 4715.0], [68.3, 4715.0], [68.4, 4715.0], [68.5, 4715.0], [68.6, 4715.0], [68.7, 4715.0], [68.8, 4715.0], [68.9, 4715.0], [69.0, 4715.0], [69.1, 4715.0], [69.2, 4715.0], [69.3, 4715.0], [69.4, 4715.0], [69.5, 4715.0], [69.6, 4715.0], [69.7, 4715.0], [69.8, 4715.0], [69.9, 4715.0], [70.0, 4715.0], [70.1, 4715.0], [70.2, 4716.0], [70.3, 4716.0], [70.4, 4716.0], [70.5, 4716.0], [70.6, 4716.0], [70.7, 4716.0], [70.8, 4716.0], [70.9, 4716.0], [71.0, 4716.0], [71.1, 4716.0], [71.2, 4716.0], [71.3, 4716.0], [71.4, 4716.0], [71.5, 4716.0], [71.6, 4716.0], [71.7, 4716.0], [71.8, 4716.0], [71.9, 4716.0], [72.0, 4716.0], [72.1, 4716.0], [72.2, 4716.0], [72.3, 4716.0], [72.4, 4716.0], [72.5, 4716.0], [72.6, 4716.0], [72.7, 4716.0], [72.8, 4716.0], [72.9, 4716.0], [73.0, 4716.0], [73.1, 4716.0], [73.2, 4716.0], [73.3, 4716.0], [73.4, 4716.0], [73.5, 4716.0], [73.6, 4716.0], [73.7, 4716.0], [73.8, 4716.0], [73.9, 4716.0], [74.0, 4716.0], [74.1, 4716.0], [74.2, 4716.0], [74.3, 4716.0], [74.4, 4716.0], [74.5, 4716.0], [74.6, 4716.0], [74.7, 4716.0], [74.8, 4716.0], [74.9, 4716.0], [75.0, 4716.0], [75.1, 4716.0], [75.2, 4716.0], [75.3, 4717.0], [75.4, 4717.0], [75.5, 4717.0], [75.6, 4717.0], [75.7, 4717.0], [75.8, 4717.0], [75.9, 4717.0], [76.0, 4717.0], [76.1, 4717.0], [76.2, 4717.0], [76.3, 4717.0], [76.4, 4717.0], [76.5, 4717.0], [76.6, 4717.0], [76.7, 4717.0], [76.8, 4717.0], [76.9, 4717.0], [77.0, 4717.0], [77.1, 4717.0], [77.2, 4717.0], [77.3, 4717.0], [77.4, 4717.0], [77.5, 4717.0], [77.6, 4717.0], [77.7, 4717.0], [77.8, 4717.0], [77.9, 4717.0], [78.0, 4717.0], [78.1, 4717.0], [78.2, 4717.0], [78.3, 4717.0], [78.4, 4718.0], [78.5, 4718.0], [78.6, 4718.0], [78.7, 4718.0], [78.8, 4718.0], [78.9, 4718.0], [79.0, 4718.0], [79.1, 4718.0], [79.2, 4718.0], [79.3, 4718.0], [79.4, 4718.0], [79.5, 4718.0], [79.6, 4718.0], [79.7, 4718.0], [79.8, 4719.0], [79.9, 4719.0], [80.0, 4719.0], [80.1, 4719.0], [80.2, 4719.0], [80.3, 4719.0], [80.4, 4719.0], [80.5, 4719.0], [80.6, 4719.0], [80.7, 4720.0], [80.8, 4720.0], [80.9, 4720.0], [81.0, 4720.0], [81.1, 4720.0], [81.2, 4720.0], [81.3, 4721.0], [81.4, 4721.0], [81.5, 4722.0], [81.6, 4722.0], [81.7, 4722.0], [81.8, 4722.0], [81.9, 4722.0], [82.0, 4722.0], [82.1, 4723.0], [82.2, 4723.0], [82.3, 4724.0], [82.4, 4724.0], [82.5, 4724.0], [82.6, 4725.0], [82.7, 4725.0], [82.8, 4725.0], [82.9, 4725.0], [83.0, 4725.0], [83.1, 4726.0], [83.2, 4726.0], [83.3, 4726.0], [83.4, 4726.0], [83.5, 4727.0], [83.6, 4727.0], [83.7, 4727.0], [83.8, 4727.0], [83.9, 4728.0], [84.0, 4728.0], [84.1, 4728.0], [84.2, 4728.0], [84.3, 4728.0], [84.4, 4728.0], [84.5, 4728.0], [84.6, 4729.0], [84.7, 4729.0], [84.8, 4729.0], [84.9, 4729.0], [85.0, 4730.0], [85.1, 4730.0], [85.2, 4730.0], [85.3, 4731.0], [85.4, 4731.0], [85.5, 4731.0], [85.6, 4732.0], [85.7, 4732.0], [85.8, 4732.0], [85.9, 4732.0], [86.0, 4733.0], [86.1, 4733.0], [86.2, 4735.0], [86.3, 4741.0], [86.4, 4743.0], [86.5, 4748.0], [86.6, 4752.0], [86.7, 4761.0], [86.8, 4763.0], [86.9, 4766.0], [87.0, 4773.0], [87.1, 4781.0], [87.2, 4785.0], [87.3, 4788.0], [87.4, 4790.0], [87.5, 4793.0], [87.6, 4795.0], [87.7, 4797.0], [87.8, 4797.0], [87.9, 4798.0], [88.0, 4798.0], [88.1, 4798.0], [88.2, 4799.0], [88.3, 4799.0], [88.4, 4800.0], [88.5, 4800.0], [88.6, 4800.0], [88.7, 4800.0], [88.8, 4800.0], [88.9, 4801.0], [89.0, 4801.0], [89.1, 4801.0], [89.2, 4801.0], [89.3, 4802.0], [89.4, 4802.0], [89.5, 4802.0], [89.6, 4802.0], [89.7, 4803.0], [89.8, 4803.0], [89.9, 4804.0], [90.0, 4804.0], [90.1, 4804.0], [90.2, 4804.0], [90.3, 4804.0], [90.4, 4805.0], [90.5, 4806.0], [90.6, 4806.0], [90.7, 4807.0], [90.8, 4807.0], [90.9, 4807.0], [91.0, 4808.0], [91.1, 4808.0], [91.2, 4809.0], [91.3, 4809.0], [91.4, 4809.0], [91.5, 4810.0], [91.6, 4810.0], [91.7, 4811.0], [91.8, 4811.0], [91.9, 4811.0], [92.0, 4811.0], [92.1, 4811.0], [92.2, 4811.0], [92.3, 4811.0], [92.4, 4812.0], [92.5, 4812.0], [92.6, 4812.0], [92.7, 4812.0], [92.8, 4812.0], [92.9, 4812.0], [93.0, 4812.0], [93.1, 4812.0], [93.2, 4812.0], [93.3, 4812.0], [93.4, 4813.0], [93.5, 4813.0], [93.6, 4813.0], [93.7, 4813.0], [93.8, 4813.0], [93.9, 4813.0], [94.0, 4813.0], [94.1, 4813.0], [94.2, 4813.0], [94.3, 4813.0], [94.4, 4813.0], [94.5, 4814.0], [94.6, 4814.0], [94.7, 4814.0], [94.8, 4814.0], [94.9, 4814.0], [95.0, 4814.0], [95.1, 4814.0], [95.2, 4814.0], [95.3, 4814.0], [95.4, 4814.0], [95.5, 4814.0], [95.6, 4814.0], [95.7, 4814.0], [95.8, 4814.0], [95.9, 4814.0], [96.0, 4814.0], [96.1, 4814.0], [96.2, 4814.0], [96.3, 4815.0], [96.4, 4815.0], [96.5, 4815.0], [96.6, 4815.0], [96.7, 4815.0], [96.8, 4815.0], [96.9, 4815.0], [97.0, 4815.0], [97.1, 4815.0], [97.2, 4815.0], [97.3, 4815.0], [97.4, 4815.0], [97.5, 4815.0], [97.6, 4815.0], [97.7, 4816.0], [97.8, 4816.0], [97.9, 4816.0], [98.0, 4816.0], [98.1, 4816.0], [98.2, 4816.0], [98.3, 4816.0], [98.4, 4816.0], [98.5, 4816.0], [98.6, 4816.0], [98.7, 4817.0], [98.8, 4817.0], [98.9, 4817.0], [99.0, 4818.0], [99.1, 4818.0], [99.2, 4818.0], [99.3, 4819.0], [99.4, 4827.0], [99.5, 4856.0], [99.6, 4900.0], [99.7, 4906.0], [99.8, 4911.0], [99.9, 4913.0]], "isOverall": false, "label": "network/2/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 1000.0, "maxY": 1635.0, "series": [{"data": [[1000.0, 44.0], [1100.0, 7.0], [1200.0, 8.0], [1300.0, 7.0], [1400.0, 9.0], [1500.0, 5.0], [1600.0, 4.0], [1700.0, 12.0], [1800.0, 5.0], [1900.0, 8.0], [2000.0, 7.0], [2100.0, 7.0], [2200.0, 9.0], [2300.0, 8.0], [2400.0, 8.0], [2500.0, 6.0], [2600.0, 6.0], [2700.0, 11.0], [2800.0, 5.0], [2900.0, 4.0], [3000.0, 11.0], [3100.0, 6.0], [3200.0, 10.0], [3300.0, 5.0], [3400.0, 7.0], [3500.0, 8.0], [3600.0, 9.0], [3700.0, 7.0], [3800.0, 11.0], [3900.0, 5.0], [4000.0, 11.0], [4200.0, 9.0], [4100.0, 11.0], [4300.0, 10.0], [4400.0, 11.0], [4500.0, 56.0], [4600.0, 820.0], [4700.0, 1635.0], [4800.0, 359.0], [4900.0, 13.0]], "isOverall": false, "label": "network/2/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 75.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3119.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 75.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3119.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 20.52777777777778, "minX": 1.62618126E12, "maxY": 50.0, "series": [{"data": [[1.62618138E12, 50.0], [1.62618156E12, 47.367741935483856], [1.62618126E12, 20.52777777777778], [1.62618144E12, 50.0], [1.62618132E12, 48.927559055118095], [1.6261815E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62618156E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1479.142857142857, "minX": 1.0, "maxY": 4697.891206117484, "series": [{"data": [[2.0, 2479.5], [3.0, 2459.0], [4.0, 2008.0], [5.0, 2012.6666666666665], [6.0, 1782.5], [7.0, 1609.6], [8.0, 1627.4], [9.0, 1524.0], [10.0, 1554.6666666666665], [11.0, 1479.142857142857], [12.0, 1508.0], [13.0, 1540.5714285714284], [14.0, 1660.0], [15.0, 1663.2500000000002], [16.0, 1892.8333333333333], [17.0, 1770.75], [18.0, 1913.857142857143], [19.0, 1940.2857142857142], [20.0, 2101.375], [21.0, 2086.0], [22.0, 2225.8571428571427], [23.0, 2365.1666666666665], [24.0, 2311.0], [25.0, 2457.0], [26.0, 2508.5714285714284], [27.0, 2549.25], [28.0, 2333.6], [29.0, 2929.5555555555557], [30.0, 2789.1428571428573], [31.0, 2980.3333333333335], [32.0, 2877.6666666666665], [33.0, 3010.1428571428573], [34.0, 3079.142857142857], [35.0, 3204.285714285714], [36.0, 3319.0], [37.0, 3294.375], [38.0, 3365.375], [39.0, 3443.5714285714284], [40.0, 3509.875], [41.0, 3660.0], [42.0, 3682.285714285714], [43.0, 3756.4285714285716], [44.0, 3780.4444444444443], [45.0, 3896.1428571428573], [46.0, 3990.285714285714], [47.0, 4056.1666666666665], [48.0, 4086.8571428571427], [49.0, 4221.285714285715], [50.0, 4697.891206117484], [1.0, 3811.0]], "isOverall": false, "label": "network/2/spring/mvc", "isController": false}, {"data": [[47.74264245460241, 4498.09893550407]], "isOverall": false, "label": "network/2/spring/mvc-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 645.0, "minX": 1.62618126E12, "maxY": 2811.6, "series": [{"data": [[1.62618138E12, 2811.6], [1.62618156E12, 2046.0], [1.62618126E12, 792.0], [1.62618144E12, 2802.8], [1.62618132E12, 2794.0], [1.6261815E12, 2807.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62618138E12, 2289.75], [1.62618156E12, 1666.25], [1.62618126E12, 645.0], [1.62618144E12, 2282.5833333333335], [1.62618132E12, 2275.4166666666665], [1.6261815E12, 2286.1666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62618156E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1777.0888888888885, "minX": 1.62618126E12, "maxY": 4702.747252747253, "series": [{"data": [[1.62618138E12, 4702.546165884194], [1.62618156E12, 4680.068817204297], [1.62618126E12, 1777.0888888888885], [1.62618144E12, 4702.747252747253], [1.62618132E12, 4519.746456692911], [1.6261815E12, 4702.514106583074]], "isOverall": false, "label": "network/2/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62618156E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1777.0222222222217, "minX": 1.62618126E12, "maxY": 4702.718995290429, "series": [{"data": [[1.62618138E12, 4702.527386541466], [1.62618156E12, 4680.040860215052], [1.62618126E12, 1777.0222222222217], [1.62618144E12, 4702.718995290429], [1.62618132E12, 4519.685039370079], [1.6261815E12, 4702.490595611292]], "isOverall": false, "label": "network/2/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62618156E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5102040816326529, "minX": 1.62618126E12, "maxY": 1.0055555555555553, "series": [{"data": [[1.62618138E12, 0.5899843505477302], [1.62618156E12, 0.513978494623656], [1.62618126E12, 1.0055555555555553], [1.62618144E12, 0.5102040816326529], [1.62618132E12, 0.6535433070866145], [1.6261815E12, 0.53448275862069]], "isOverall": false, "label": "network/2/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62618156E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1005.0, "minX": 1.62618126E12, "maxY": 4915.0, "series": [{"data": [[1.62618138E12, 4911.0], [1.62618156E12, 4915.0], [1.62618126E12, 3095.0], [1.62618144E12, 4913.0], [1.62618132E12, 4913.0], [1.6261815E12, 4906.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62618138E12, 4812.0], [1.62618156E12, 4807.2], [1.62618126E12, 2706.3], [1.62618144E12, 4805.2], [1.62618132E12, 4787.4], [1.6261815E12, 4806.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62618138E12, 4818.0], [1.62618156E12, 4850.119999999998], [1.62618126E12, 3028.58], [1.62618144E12, 4818.0], [1.62618132E12, 4815.0], [1.6261815E12, 4817.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62618138E12, 4815.0], [1.62618156E12, 4814.0], [1.62618126E12, 2804.6], [1.62618144E12, 4814.0], [1.62618132E12, 4811.0], [1.6261815E12, 4814.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62618138E12, 4515.0], [1.62618156E12, 3811.0], [1.62618126E12, 1005.0], [1.62618144E12, 4518.0], [1.62618132E12, 2905.0], [1.6261815E12, 4514.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62618138E12, 4714.0], [1.62618156E12, 4713.0], [1.62618126E12, 1728.0], [1.62618144E12, 4714.0], [1.62618132E12, 4710.0], [1.6261815E12, 4714.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62618156E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1006.0, "minX": 2.0, "maxY": 4805.0, "series": [{"data": [[2.0, 1026.5], [8.0, 4714.0], [9.0, 4714.0], [10.0, 4713.0], [11.0, 4713.0], [12.0, 4713.0], [13.0, 4713.0], [14.0, 4713.0], [4.0, 1006.5], [16.0, 4616.5], [5.0, 1006.0], [6.0, 4805.0], [7.0, 4715.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1006.0, "minX": 2.0, "maxY": 4805.0, "series": [{"data": [[2.0, 1025.0], [8.0, 4714.0], [9.0, 4714.0], [10.0, 4713.0], [11.0, 4713.0], [12.0, 4713.0], [13.0, 4713.0], [14.0, 4713.0], [4.0, 1006.5], [16.0, 4616.5], [5.0, 1006.0], [6.0, 4805.0], [7.0, 4715.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.5833333333333335, "minX": 1.62618126E12, "maxY": 10.833333333333334, "series": [{"data": [[1.62618138E12, 10.65], [1.62618156E12, 6.916666666666667], [1.62618126E12, 3.5833333333333335], [1.62618144E12, 10.616666666666667], [1.62618132E12, 10.833333333333334], [1.6261815E12, 10.633333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62618156E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.62618126E12, "maxY": 10.65, "series": [{"data": [[1.62618138E12, 10.65], [1.62618156E12, 7.75], [1.62618126E12, 3.0], [1.62618144E12, 10.616666666666667], [1.62618132E12, 10.583333333333334], [1.6261815E12, 10.633333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62618156E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.62618126E12, "maxY": 10.65, "series": [{"data": [[1.62618138E12, 10.65], [1.62618156E12, 7.75], [1.62618126E12, 3.0], [1.62618144E12, 10.616666666666667], [1.62618132E12, 10.583333333333334], [1.6261815E12, 10.633333333333333]], "isOverall": false, "label": "network/2/spring/mvc-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62618156E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.62618126E12, "maxY": 10.65, "series": [{"data": [[1.62618138E12, 10.65], [1.62618156E12, 7.75], [1.62618126E12, 3.0], [1.62618144E12, 10.616666666666667], [1.62618132E12, 10.583333333333334], [1.6261815E12, 10.633333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62618156E12, "title": "Total Transactions Per Second"}},
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

