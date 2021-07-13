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
        data: {"result": {"minY": 196.0, "minX": 0.0, "maxY": 1657.0, "series": [{"data": [[0.0, 196.0], [0.1, 196.0], [0.2, 197.0], [0.3, 197.0], [0.4, 197.0], [0.5, 197.0], [0.6, 197.0], [0.7, 197.0], [0.8, 197.0], [0.9, 197.0], [1.0, 197.0], [1.1, 198.0], [1.2, 198.0], [1.3, 198.0], [1.4, 198.0], [1.5, 198.0], [1.6, 198.0], [1.7, 198.0], [1.8, 199.0], [1.9, 200.0], [2.0, 201.0], [2.1, 202.0], [2.2, 203.0], [2.3, 205.0], [2.4, 207.0], [2.5, 208.0], [2.6, 209.0], [2.7, 209.0], [2.8, 210.0], [2.9, 210.0], [3.0, 211.0], [3.1, 212.0], [3.2, 213.0], [3.3, 215.0], [3.4, 218.0], [3.5, 218.0], [3.6, 220.0], [3.7, 221.0], [3.8, 222.0], [3.9, 223.0], [4.0, 225.0], [4.1, 227.0], [4.2, 228.0], [4.3, 230.0], [4.4, 231.0], [4.5, 233.0], [4.6, 234.0], [4.7, 236.0], [4.8, 236.0], [4.9, 240.0], [5.0, 242.0], [5.1, 243.0], [5.2, 244.0], [5.3, 245.0], [5.4, 246.0], [5.5, 247.0], [5.6, 248.0], [5.7, 249.0], [5.8, 250.0], [5.9, 252.0], [6.0, 253.0], [6.1, 255.0], [6.2, 257.0], [6.3, 259.0], [6.4, 260.0], [6.5, 261.0], [6.6, 262.0], [6.7, 264.0], [6.8, 265.0], [6.9, 266.0], [7.0, 267.0], [7.1, 267.0], [7.2, 269.0], [7.3, 269.0], [7.4, 270.0], [7.5, 270.0], [7.6, 271.0], [7.7, 273.0], [7.8, 274.0], [7.9, 275.0], [8.0, 276.0], [8.1, 277.0], [8.2, 277.0], [8.3, 278.0], [8.4, 279.0], [8.5, 279.0], [8.6, 280.0], [8.7, 281.0], [8.8, 282.0], [8.9, 283.0], [9.0, 285.0], [9.1, 285.0], [9.2, 285.0], [9.3, 286.0], [9.4, 288.0], [9.5, 288.0], [9.6, 289.0], [9.7, 290.0], [9.8, 290.0], [9.9, 291.0], [10.0, 293.0], [10.1, 294.0], [10.2, 294.0], [10.3, 295.0], [10.4, 296.0], [10.5, 296.0], [10.6, 297.0], [10.7, 298.0], [10.8, 299.0], [10.9, 300.0], [11.0, 300.0], [11.1, 301.0], [11.2, 302.0], [11.3, 303.0], [11.4, 303.0], [11.5, 304.0], [11.6, 305.0], [11.7, 306.0], [11.8, 307.0], [11.9, 307.0], [12.0, 308.0], [12.1, 309.0], [12.2, 309.0], [12.3, 311.0], [12.4, 312.0], [12.5, 312.0], [12.6, 313.0], [12.7, 313.0], [12.8, 314.0], [12.9, 315.0], [13.0, 316.0], [13.1, 316.0], [13.2, 317.0], [13.3, 318.0], [13.4, 320.0], [13.5, 321.0], [13.6, 322.0], [13.7, 322.0], [13.8, 323.0], [13.9, 324.0], [14.0, 325.0], [14.1, 326.0], [14.2, 326.0], [14.3, 328.0], [14.4, 328.0], [14.5, 329.0], [14.6, 329.0], [14.7, 330.0], [14.8, 331.0], [14.9, 332.0], [15.0, 333.0], [15.1, 333.0], [15.2, 335.0], [15.3, 336.0], [15.4, 337.0], [15.5, 337.0], [15.6, 338.0], [15.7, 339.0], [15.8, 339.0], [15.9, 340.0], [16.0, 341.0], [16.1, 341.0], [16.2, 342.0], [16.3, 342.0], [16.4, 343.0], [16.5, 344.0], [16.6, 344.0], [16.7, 345.0], [16.8, 346.0], [16.9, 346.0], [17.0, 347.0], [17.1, 348.0], [17.2, 348.0], [17.3, 349.0], [17.4, 351.0], [17.5, 352.0], [17.6, 352.0], [17.7, 353.0], [17.8, 354.0], [17.9, 355.0], [18.0, 355.0], [18.1, 356.0], [18.2, 357.0], [18.3, 357.0], [18.4, 358.0], [18.5, 359.0], [18.6, 360.0], [18.7, 360.0], [18.8, 361.0], [18.9, 363.0], [19.0, 363.0], [19.1, 364.0], [19.2, 365.0], [19.3, 366.0], [19.4, 367.0], [19.5, 367.0], [19.6, 368.0], [19.7, 369.0], [19.8, 370.0], [19.9, 371.0], [20.0, 371.0], [20.1, 372.0], [20.2, 373.0], [20.3, 373.0], [20.4, 374.0], [20.5, 374.0], [20.6, 376.0], [20.7, 378.0], [20.8, 378.0], [20.9, 379.0], [21.0, 379.0], [21.1, 381.0], [21.2, 382.0], [21.3, 383.0], [21.4, 384.0], [21.5, 384.0], [21.6, 385.0], [21.7, 386.0], [21.8, 387.0], [21.9, 388.0], [22.0, 389.0], [22.1, 389.0], [22.2, 390.0], [22.3, 391.0], [22.4, 391.0], [22.5, 392.0], [22.6, 393.0], [22.7, 393.0], [22.8, 394.0], [22.9, 395.0], [23.0, 396.0], [23.1, 396.0], [23.2, 397.0], [23.3, 398.0], [23.4, 399.0], [23.5, 401.0], [23.6, 401.0], [23.7, 401.0], [23.8, 402.0], [23.9, 403.0], [24.0, 404.0], [24.1, 405.0], [24.2, 405.0], [24.3, 406.0], [24.4, 407.0], [24.5, 408.0], [24.6, 409.0], [24.7, 409.0], [24.8, 410.0], [24.9, 411.0], [25.0, 411.0], [25.1, 412.0], [25.2, 413.0], [25.3, 415.0], [25.4, 415.0], [25.5, 416.0], [25.6, 416.0], [25.7, 417.0], [25.8, 417.0], [25.9, 418.0], [26.0, 419.0], [26.1, 419.0], [26.2, 420.0], [26.3, 421.0], [26.4, 421.0], [26.5, 422.0], [26.6, 422.0], [26.7, 423.0], [26.8, 423.0], [26.9, 424.0], [27.0, 424.0], [27.1, 425.0], [27.2, 426.0], [27.3, 427.0], [27.4, 428.0], [27.5, 429.0], [27.6, 429.0], [27.7, 430.0], [27.8, 431.0], [27.9, 431.0], [28.0, 432.0], [28.1, 432.0], [28.2, 433.0], [28.3, 433.0], [28.4, 434.0], [28.5, 434.0], [28.6, 435.0], [28.7, 435.0], [28.8, 436.0], [28.9, 437.0], [29.0, 437.0], [29.1, 438.0], [29.2, 439.0], [29.3, 439.0], [29.4, 440.0], [29.5, 440.0], [29.6, 441.0], [29.7, 441.0], [29.8, 442.0], [29.9, 443.0], [30.0, 444.0], [30.1, 444.0], [30.2, 445.0], [30.3, 445.0], [30.4, 446.0], [30.5, 447.0], [30.6, 447.0], [30.7, 448.0], [30.8, 449.0], [30.9, 450.0], [31.0, 450.0], [31.1, 451.0], [31.2, 452.0], [31.3, 453.0], [31.4, 453.0], [31.5, 454.0], [31.6, 454.0], [31.7, 455.0], [31.8, 456.0], [31.9, 457.0], [32.0, 457.0], [32.1, 458.0], [32.2, 458.0], [32.3, 459.0], [32.4, 460.0], [32.5, 461.0], [32.6, 461.0], [32.7, 462.0], [32.8, 463.0], [32.9, 463.0], [33.0, 464.0], [33.1, 465.0], [33.2, 465.0], [33.3, 466.0], [33.4, 466.0], [33.5, 467.0], [33.6, 467.0], [33.7, 468.0], [33.8, 468.0], [33.9, 469.0], [34.0, 469.0], [34.1, 470.0], [34.2, 470.0], [34.3, 471.0], [34.4, 471.0], [34.5, 472.0], [34.6, 473.0], [34.7, 473.0], [34.8, 474.0], [34.9, 475.0], [35.0, 475.0], [35.1, 476.0], [35.2, 476.0], [35.3, 477.0], [35.4, 477.0], [35.5, 478.0], [35.6, 478.0], [35.7, 479.0], [35.8, 480.0], [35.9, 481.0], [36.0, 481.0], [36.1, 481.0], [36.2, 481.0], [36.3, 482.0], [36.4, 483.0], [36.5, 483.0], [36.6, 483.0], [36.7, 484.0], [36.8, 485.0], [36.9, 486.0], [37.0, 487.0], [37.1, 487.0], [37.2, 487.0], [37.3, 488.0], [37.4, 489.0], [37.5, 489.0], [37.6, 489.0], [37.7, 490.0], [37.8, 491.0], [37.9, 492.0], [38.0, 492.0], [38.1, 493.0], [38.2, 493.0], [38.3, 494.0], [38.4, 495.0], [38.5, 495.0], [38.6, 496.0], [38.7, 496.0], [38.8, 497.0], [38.9, 497.0], [39.0, 498.0], [39.1, 498.0], [39.2, 499.0], [39.3, 499.0], [39.4, 500.0], [39.5, 501.0], [39.6, 502.0], [39.7, 502.0], [39.8, 503.0], [39.9, 503.0], [40.0, 504.0], [40.1, 505.0], [40.2, 506.0], [40.3, 507.0], [40.4, 507.0], [40.5, 508.0], [40.6, 509.0], [40.7, 510.0], [40.8, 510.0], [40.9, 510.0], [41.0, 510.0], [41.1, 511.0], [41.2, 512.0], [41.3, 512.0], [41.4, 513.0], [41.5, 513.0], [41.6, 514.0], [41.7, 515.0], [41.8, 515.0], [41.9, 516.0], [42.0, 516.0], [42.1, 516.0], [42.2, 517.0], [42.3, 517.0], [42.4, 518.0], [42.5, 518.0], [42.6, 519.0], [42.7, 519.0], [42.8, 520.0], [42.9, 520.0], [43.0, 520.0], [43.1, 522.0], [43.2, 522.0], [43.3, 523.0], [43.4, 524.0], [43.5, 524.0], [43.6, 525.0], [43.7, 525.0], [43.8, 526.0], [43.9, 526.0], [44.0, 526.0], [44.1, 527.0], [44.2, 527.0], [44.3, 528.0], [44.4, 528.0], [44.5, 529.0], [44.6, 529.0], [44.7, 530.0], [44.8, 531.0], [44.9, 531.0], [45.0, 532.0], [45.1, 532.0], [45.2, 533.0], [45.3, 533.0], [45.4, 534.0], [45.5, 534.0], [45.6, 535.0], [45.7, 536.0], [45.8, 536.0], [45.9, 537.0], [46.0, 537.0], [46.1, 538.0], [46.2, 538.0], [46.3, 538.0], [46.4, 539.0], [46.5, 539.0], [46.6, 540.0], [46.7, 540.0], [46.8, 541.0], [46.9, 541.0], [47.0, 542.0], [47.1, 542.0], [47.2, 543.0], [47.3, 543.0], [47.4, 544.0], [47.5, 544.0], [47.6, 545.0], [47.7, 545.0], [47.8, 546.0], [47.9, 546.0], [48.0, 546.0], [48.1, 547.0], [48.2, 547.0], [48.3, 548.0], [48.4, 548.0], [48.5, 549.0], [48.6, 549.0], [48.7, 550.0], [48.8, 550.0], [48.9, 551.0], [49.0, 551.0], [49.1, 552.0], [49.2, 552.0], [49.3, 552.0], [49.4, 553.0], [49.5, 553.0], [49.6, 553.0], [49.7, 554.0], [49.8, 555.0], [49.9, 555.0], [50.0, 556.0], [50.1, 556.0], [50.2, 556.0], [50.3, 557.0], [50.4, 557.0], [50.5, 557.0], [50.6, 558.0], [50.7, 558.0], [50.8, 559.0], [50.9, 560.0], [51.0, 560.0], [51.1, 561.0], [51.2, 562.0], [51.3, 563.0], [51.4, 563.0], [51.5, 563.0], [51.6, 564.0], [51.7, 565.0], [51.8, 565.0], [51.9, 566.0], [52.0, 566.0], [52.1, 567.0], [52.2, 567.0], [52.3, 568.0], [52.4, 568.0], [52.5, 569.0], [52.6, 569.0], [52.7, 569.0], [52.8, 570.0], [52.9, 570.0], [53.0, 570.0], [53.1, 571.0], [53.2, 572.0], [53.3, 572.0], [53.4, 572.0], [53.5, 573.0], [53.6, 573.0], [53.7, 574.0], [53.8, 574.0], [53.9, 574.0], [54.0, 574.0], [54.1, 575.0], [54.2, 575.0], [54.3, 576.0], [54.4, 576.0], [54.5, 576.0], [54.6, 577.0], [54.7, 577.0], [54.8, 577.0], [54.9, 578.0], [55.0, 578.0], [55.1, 579.0], [55.2, 579.0], [55.3, 579.0], [55.4, 580.0], [55.5, 580.0], [55.6, 580.0], [55.7, 581.0], [55.8, 581.0], [55.9, 582.0], [56.0, 582.0], [56.1, 582.0], [56.2, 582.0], [56.3, 583.0], [56.4, 583.0], [56.5, 584.0], [56.6, 584.0], [56.7, 584.0], [56.8, 585.0], [56.9, 585.0], [57.0, 585.0], [57.1, 586.0], [57.2, 586.0], [57.3, 587.0], [57.4, 587.0], [57.5, 588.0], [57.6, 588.0], [57.7, 589.0], [57.8, 589.0], [57.9, 589.0], [58.0, 590.0], [58.1, 590.0], [58.2, 590.0], [58.3, 591.0], [58.4, 591.0], [58.5, 591.0], [58.6, 591.0], [58.7, 592.0], [58.8, 592.0], [58.9, 593.0], [59.0, 593.0], [59.1, 593.0], [59.2, 594.0], [59.3, 594.0], [59.4, 595.0], [59.5, 595.0], [59.6, 596.0], [59.7, 596.0], [59.8, 596.0], [59.9, 597.0], [60.0, 597.0], [60.1, 597.0], [60.2, 598.0], [60.3, 598.0], [60.4, 599.0], [60.5, 599.0], [60.6, 600.0], [60.7, 600.0], [60.8, 600.0], [60.9, 601.0], [61.0, 601.0], [61.1, 602.0], [61.2, 602.0], [61.3, 603.0], [61.4, 604.0], [61.5, 604.0], [61.6, 605.0], [61.7, 605.0], [61.8, 606.0], [61.9, 607.0], [62.0, 607.0], [62.1, 608.0], [62.2, 608.0], [62.3, 609.0], [62.4, 610.0], [62.5, 610.0], [62.6, 611.0], [62.7, 611.0], [62.8, 612.0], [62.9, 612.0], [63.0, 612.0], [63.1, 613.0], [63.2, 613.0], [63.3, 614.0], [63.4, 615.0], [63.5, 615.0], [63.6, 615.0], [63.7, 616.0], [63.8, 616.0], [63.9, 617.0], [64.0, 617.0], [64.1, 618.0], [64.2, 618.0], [64.3, 619.0], [64.4, 620.0], [64.5, 620.0], [64.6, 621.0], [64.7, 621.0], [64.8, 622.0], [64.9, 622.0], [65.0, 623.0], [65.1, 623.0], [65.2, 624.0], [65.3, 624.0], [65.4, 624.0], [65.5, 625.0], [65.6, 625.0], [65.7, 625.0], [65.8, 625.0], [65.9, 626.0], [66.0, 626.0], [66.1, 627.0], [66.2, 627.0], [66.3, 628.0], [66.4, 628.0], [66.5, 628.0], [66.6, 629.0], [66.7, 629.0], [66.8, 630.0], [66.9, 630.0], [67.0, 630.0], [67.1, 631.0], [67.2, 631.0], [67.3, 632.0], [67.4, 633.0], [67.5, 633.0], [67.6, 633.0], [67.7, 634.0], [67.8, 634.0], [67.9, 635.0], [68.0, 635.0], [68.1, 636.0], [68.2, 636.0], [68.3, 637.0], [68.4, 637.0], [68.5, 638.0], [68.6, 638.0], [68.7, 638.0], [68.8, 639.0], [68.9, 639.0], [69.0, 640.0], [69.1, 640.0], [69.2, 640.0], [69.3, 641.0], [69.4, 641.0], [69.5, 642.0], [69.6, 642.0], [69.7, 642.0], [69.8, 643.0], [69.9, 643.0], [70.0, 643.0], [70.1, 644.0], [70.2, 644.0], [70.3, 644.0], [70.4, 645.0], [70.5, 646.0], [70.6, 646.0], [70.7, 647.0], [70.8, 647.0], [70.9, 647.0], [71.0, 648.0], [71.1, 648.0], [71.2, 649.0], [71.3, 649.0], [71.4, 649.0], [71.5, 649.0], [71.6, 650.0], [71.7, 651.0], [71.8, 651.0], [71.9, 652.0], [72.0, 652.0], [72.1, 652.0], [72.2, 653.0], [72.3, 653.0], [72.4, 654.0], [72.5, 655.0], [72.6, 656.0], [72.7, 657.0], [72.8, 657.0], [72.9, 658.0], [73.0, 659.0], [73.1, 659.0], [73.2, 659.0], [73.3, 660.0], [73.4, 661.0], [73.5, 661.0], [73.6, 662.0], [73.7, 663.0], [73.8, 664.0], [73.9, 664.0], [74.0, 665.0], [74.1, 666.0], [74.2, 666.0], [74.3, 666.0], [74.4, 667.0], [74.5, 667.0], [74.6, 667.0], [74.7, 667.0], [74.8, 668.0], [74.9, 669.0], [75.0, 669.0], [75.1, 670.0], [75.2, 671.0], [75.3, 671.0], [75.4, 673.0], [75.5, 673.0], [75.6, 674.0], [75.7, 674.0], [75.8, 675.0], [75.9, 675.0], [76.0, 675.0], [76.1, 676.0], [76.2, 677.0], [76.3, 677.0], [76.4, 678.0], [76.5, 679.0], [76.6, 680.0], [76.7, 680.0], [76.8, 681.0], [76.9, 681.0], [77.0, 682.0], [77.1, 683.0], [77.2, 684.0], [77.3, 684.0], [77.4, 685.0], [77.5, 685.0], [77.6, 686.0], [77.7, 687.0], [77.8, 687.0], [77.9, 687.0], [78.0, 688.0], [78.1, 689.0], [78.2, 689.0], [78.3, 689.0], [78.4, 690.0], [78.5, 691.0], [78.6, 691.0], [78.7, 692.0], [78.8, 692.0], [78.9, 693.0], [79.0, 693.0], [79.1, 694.0], [79.2, 694.0], [79.3, 695.0], [79.4, 696.0], [79.5, 697.0], [79.6, 697.0], [79.7, 697.0], [79.8, 698.0], [79.9, 698.0], [80.0, 699.0], [80.1, 700.0], [80.2, 701.0], [80.3, 701.0], [80.4, 702.0], [80.5, 702.0], [80.6, 703.0], [80.7, 703.0], [80.8, 704.0], [80.9, 706.0], [81.0, 706.0], [81.1, 707.0], [81.2, 708.0], [81.3, 709.0], [81.4, 709.0], [81.5, 710.0], [81.6, 711.0], [81.7, 712.0], [81.8, 712.0], [81.9, 712.0], [82.0, 713.0], [82.1, 715.0], [82.2, 715.0], [82.3, 716.0], [82.4, 716.0], [82.5, 717.0], [82.6, 718.0], [82.7, 718.0], [82.8, 719.0], [82.9, 720.0], [83.0, 720.0], [83.1, 721.0], [83.2, 722.0], [83.3, 723.0], [83.4, 723.0], [83.5, 724.0], [83.6, 725.0], [83.7, 726.0], [83.8, 726.0], [83.9, 727.0], [84.0, 728.0], [84.1, 728.0], [84.2, 729.0], [84.3, 730.0], [84.4, 731.0], [84.5, 731.0], [84.6, 732.0], [84.7, 733.0], [84.8, 733.0], [84.9, 735.0], [85.0, 735.0], [85.1, 736.0], [85.2, 737.0], [85.3, 739.0], [85.4, 740.0], [85.5, 741.0], [85.6, 742.0], [85.7, 743.0], [85.8, 744.0], [85.9, 745.0], [86.0, 747.0], [86.1, 748.0], [86.2, 750.0], [86.3, 750.0], [86.4, 751.0], [86.5, 753.0], [86.6, 756.0], [86.7, 758.0], [86.8, 760.0], [86.9, 761.0], [87.0, 763.0], [87.1, 766.0], [87.2, 767.0], [87.3, 770.0], [87.4, 773.0], [87.5, 774.0], [87.6, 775.0], [87.7, 777.0], [87.8, 780.0], [87.9, 783.0], [88.0, 787.0], [88.1, 793.0], [88.2, 795.0], [88.3, 799.0], [88.4, 804.0], [88.5, 809.0], [88.6, 813.0], [88.7, 817.0], [88.8, 821.0], [88.9, 822.0], [89.0, 827.0], [89.1, 834.0], [89.2, 838.0], [89.3, 840.0], [89.4, 842.0], [89.5, 845.0], [89.6, 846.0], [89.7, 852.0], [89.8, 858.0], [89.9, 865.0], [90.0, 879.0], [90.1, 886.0], [90.2, 892.0], [90.3, 899.0], [90.4, 912.0], [90.5, 922.0], [90.6, 931.0], [90.7, 936.0], [90.8, 941.0], [90.9, 948.0], [91.0, 955.0], [91.1, 963.0], [91.2, 969.0], [91.3, 972.0], [91.4, 977.0], [91.5, 983.0], [91.6, 985.0], [91.7, 989.0], [91.8, 993.0], [91.9, 998.0], [92.0, 1000.0], [92.1, 1003.0], [92.2, 1016.0], [92.3, 1020.0], [92.4, 1025.0], [92.5, 1031.0], [92.6, 1037.0], [92.7, 1043.0], [92.8, 1049.0], [92.9, 1056.0], [93.0, 1061.0], [93.1, 1065.0], [93.2, 1072.0], [93.3, 1074.0], [93.4, 1079.0], [93.5, 1085.0], [93.6, 1091.0], [93.7, 1096.0], [93.8, 1099.0], [93.9, 1105.0], [94.0, 1112.0], [94.1, 1115.0], [94.2, 1119.0], [94.3, 1130.0], [94.4, 1138.0], [94.5, 1142.0], [94.6, 1149.0], [94.7, 1155.0], [94.8, 1161.0], [94.9, 1165.0], [95.0, 1170.0], [95.1, 1174.0], [95.2, 1179.0], [95.3, 1182.0], [95.4, 1193.0], [95.5, 1196.0], [95.6, 1203.0], [95.7, 1206.0], [95.8, 1210.0], [95.9, 1216.0], [96.0, 1224.0], [96.1, 1229.0], [96.2, 1241.0], [96.3, 1250.0], [96.4, 1258.0], [96.5, 1267.0], [96.6, 1272.0], [96.7, 1277.0], [96.8, 1283.0], [96.9, 1287.0], [97.0, 1299.0], [97.1, 1305.0], [97.2, 1308.0], [97.3, 1314.0], [97.4, 1320.0], [97.5, 1330.0], [97.6, 1339.0], [97.7, 1341.0], [97.8, 1346.0], [97.9, 1350.0], [98.0, 1354.0], [98.1, 1361.0], [98.2, 1367.0], [98.3, 1374.0], [98.4, 1380.0], [98.5, 1388.0], [98.6, 1390.0], [98.7, 1398.0], [98.8, 1403.0], [98.9, 1408.0], [99.0, 1413.0], [99.1, 1428.0], [99.2, 1432.0], [99.3, 1440.0], [99.4, 1447.0], [99.5, 1452.0], [99.6, 1471.0], [99.7, 1492.0], [99.8, 1524.0], [99.9, 1540.0], [100.0, 1657.0]], "isOverall": false, "label": "cpu/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 1273.0, "series": [{"data": [[600.0, 1171.0], [700.0, 497.0], [200.0, 537.0], [800.0, 121.0], [900.0, 99.0], [1000.0, 110.0], [1100.0, 106.0], [300.0, 758.0], [1200.0, 86.0], [1300.0, 103.0], [1400.0, 60.0], [1500.0, 15.0], [100.0, 114.0], [400.0, 953.0], [1600.0, 2.0], [500.0, 1273.0]], "isOverall": false, "label": "cpu/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 17.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3619.0, "series": [{"data": [[0.0, 2369.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3619.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 17.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 26.37412587412589, "minX": 1.62617502E12, "maxY": 50.0, "series": [{"data": [[1.62617502E12, 26.37412587412589], [1.62617532E12, 47.897893030794165], [1.62617514E12, 50.0], [1.62617526E12, 50.0], [1.62617508E12, 50.0], [1.6261752E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617532E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 198.0, "minX": 1.0, "maxY": 1313.4166666666667, "series": [{"data": [[2.0, 235.14285714285714], [3.0, 198.0], [4.0, 198.75], [5.0, 283.46153846153845], [6.0, 275.2307692307692], [7.0, 313.5833333333333], [8.0, 320.16666666666663], [9.0, 340.23076923076917], [10.0, 362.4615384615385], [11.0, 389.35714285714283], [12.0, 407.59999999999997], [13.0, 480.9166666666667], [14.0, 444.59999999999997], [15.0, 476.25], [16.0, 503.93333333333334], [17.0, 589.2142857142858], [18.0, 536.5], [19.0, 589.5], [20.0, 617.0833333333334], [21.0, 611.4166666666667], [22.0, 663.1874999999999], [23.0, 591.9], [24.0, 716.9375], [25.0, 647.1428571428571], [26.0, 786.4], [27.0, 681.5], [28.0, 835.6875], [29.0, 779.2857142857143], [30.0, 814.7], [31.0, 888.5625], [32.0, 806.25], [33.0, 964.1666666666666], [34.0, 959.4285714285716], [35.0, 862.2727272727273], [36.0, 1018.7692307692308], [37.0, 1027.3125], [38.0, 970.8], [39.0, 1050.4615384615386], [40.0, 1100.4666666666667], [41.0, 992.909090909091], [42.0, 1096.5454545454545], [43.0, 1168.4615384615386], [44.0, 1202.4444444444443], [45.0, 1077.4285714285713], [46.0, 1240.5], [47.0, 1313.4166666666667], [48.0, 1297.6666666666667], [49.0, 1252.3], [50.0, 560.59306637004], [1.0, 314.3333333333333]], "isOverall": false, "label": "cpu/1/spring/mvc", "isController": false}, {"data": [[47.53355537052456, 578.8499583680269]], "isOverall": false, "label": "cpu/1/spring/mvc-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1696.9333333333334, "minX": 1.62617502E12, "maxY": 5188.266666666666, "series": [{"data": [[1.62617502E12, 2440.5333333333333], [1.62617532E12, 2632.5333333333333], [1.62617514E12, 5128.533333333334], [1.62617526E12, 5111.466666666666], [1.62617508E12, 5188.266666666666], [1.6261752E12, 5120.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62617502E12, 1696.9333333333334], [1.62617532E12, 1830.4333333333334], [1.62617514E12, 3565.9333333333334], [1.62617526E12, 3554.0666666666666], [1.62617508E12, 3607.4666666666667], [1.6261752E12, 3560.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617532E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 499.9732888146913, "minX": 1.62617502E12, "maxY": 776.7202797202794, "series": [{"data": [[1.62617502E12, 776.7202797202794], [1.62617532E12, 511.07293354943266], [1.62617514E12, 502.9800332778704], [1.62617526E12, 499.9732888146913], [1.62617508E12, 736.8273026315791], [1.6261752E12, 514.0383333333335]], "isOverall": false, "label": "cpu/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617532E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 497.7554257095162, "minX": 1.62617502E12, "maxY": 773.3479020979022, "series": [{"data": [[1.62617502E12, 773.3479020979022], [1.62617532E12, 508.7147487844404], [1.62617514E12, 500.6381031613975], [1.62617526E12, 497.7554257095162], [1.62617508E12, 733.7014802631567], [1.6261752E12, 511.66833333333426]], "isOverall": false, "label": "cpu/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617532E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.4966611018363934, "minX": 1.62617502E12, "maxY": 0.7465034965034969, "series": [{"data": [[1.62617502E12, 0.7465034965034969], [1.62617532E12, 0.5348460291734197], [1.62617514E12, 0.5282861896838612], [1.62617526E12, 0.4966611018363934], [1.62617508E12, 0.6233552631578947], [1.6261752E12, 0.529166666666667]], "isOverall": false, "label": "cpu/1/spring/mvc", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617532E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 196.0, "minX": 1.62617502E12, "maxY": 1657.0, "series": [{"data": [[1.62617502E12, 1591.0], [1.62617532E12, 850.0], [1.62617514E12, 844.0], [1.62617526E12, 846.0], [1.62617508E12, 1657.0], [1.6261752E12, 840.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62617502E12, 1311.5000000000002], [1.62617532E12, 702.0], [1.62617514E12, 692.0], [1.62617526E12, 682.1000000000001], [1.62617508E12, 1287.3], [1.6261752E12, 698.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62617502E12, 1497.6699999999996], [1.62617532E12, 767.82], [1.62617514E12, 774.97], [1.62617526E12, 767.02], [1.62617508E12, 1508.449999999999], [1.6261752E12, 786.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62617502E12, 1385.4], [1.62617532E12, 725.0], [1.62617514E12, 726.8499999999999], [1.62617526E12, 713.0], [1.62617508E12, 1388.2999999999997], [1.6261752E12, 727.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62617502E12, 197.0], [1.62617532E12, 197.0], [1.62617514E12, 196.0], [1.62617526E12, 196.0], [1.62617508E12, 196.0], [1.6261752E12, 196.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62617502E12, 761.5], [1.62617532E12, 525.0], [1.62617514E12, 523.5], [1.62617526E12, 520.0], [1.62617508E12, 647.0], [1.6261752E12, 534.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617532E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 198.0, "minX": 5.0, "maxY": 1364.0, "series": [{"data": [[13.0, 198.0], [14.0, 1364.0], [15.0, 327.0], [16.0, 584.0], [17.0, 466.0], [18.0, 503.5], [19.0, 558.0], [5.0, 198.0], [20.0, 574.0], [21.0, 621.0], [22.0, 579.0], [23.0, 570.0], [24.0, 582.5], [25.0, 661.0], [27.0, 806.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 198.0, "minX": 5.0, "maxY": 1359.0, "series": [{"data": [[13.0, 198.0], [14.0, 1359.0], [15.0, 322.5], [16.0, 583.5], [17.0, 462.5], [18.0, 498.5], [19.0, 556.0], [5.0, 198.0], [20.0, 569.5], [21.0, 616.0], [22.0, 576.5], [23.0, 567.0], [24.0, 580.5], [25.0, 658.5], [27.0, 806.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.62617502E12, "maxY": 20.0, "series": [{"data": [[1.62617502E12, 10.0], [1.62617532E12, 10.083333333333334], [1.62617514E12, 20.0], [1.62617526E12, 20.0], [1.62617508E12, 20.0], [1.6261752E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617532E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.533333333333333, "minX": 1.62617502E12, "maxY": 20.266666666666666, "series": [{"data": [[1.62617502E12, 9.533333333333333], [1.62617532E12, 10.283333333333333], [1.62617514E12, 20.033333333333335], [1.62617526E12, 19.966666666666665], [1.62617508E12, 20.266666666666666], [1.6261752E12, 20.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62617532E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.533333333333333, "minX": 1.62617502E12, "maxY": 20.266666666666666, "series": [{"data": [[1.62617502E12, 9.533333333333333], [1.62617532E12, 10.283333333333333], [1.62617514E12, 20.033333333333335], [1.62617526E12, 19.966666666666665], [1.62617508E12, 20.266666666666666], [1.6261752E12, 20.0]], "isOverall": false, "label": "cpu/1/spring/mvc-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617532E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.533333333333333, "minX": 1.62617502E12, "maxY": 20.266666666666666, "series": [{"data": [[1.62617502E12, 9.533333333333333], [1.62617532E12, 10.283333333333333], [1.62617514E12, 20.033333333333335], [1.62617526E12, 19.966666666666665], [1.62617508E12, 20.266666666666666], [1.6261752E12, 20.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62617532E12, "title": "Total Transactions Per Second"}},
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

