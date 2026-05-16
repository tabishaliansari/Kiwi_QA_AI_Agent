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
        data: {"result": {"minY": 276.0, "minX": 0.0, "maxY": 8569.0, "series": [{"data": [[0.0, 276.0], [0.1, 276.0], [0.2, 276.0], [0.3, 276.0], [0.4, 276.0], [0.5, 276.0], [0.6, 276.0], [0.7, 276.0], [0.8, 276.0], [0.9, 276.0], [1.0, 276.0], [1.1, 276.0], [1.2, 277.0], [1.3, 277.0], [1.4, 277.0], [1.5, 277.0], [1.6, 277.0], [1.7, 277.0], [1.8, 277.0], [1.9, 277.0], [2.0, 277.0], [2.1, 277.0], [2.2, 277.0], [2.3, 278.0], [2.4, 278.0], [2.5, 278.0], [2.6, 278.0], [2.7, 278.0], [2.8, 278.0], [2.9, 279.0], [3.0, 279.0], [3.1, 279.0], [3.2, 279.0], [3.3, 279.0], [3.4, 279.0], [3.5, 280.0], [3.6, 280.0], [3.7, 280.0], [3.8, 280.0], [3.9, 280.0], [4.0, 281.0], [4.1, 281.0], [4.2, 281.0], [4.3, 281.0], [4.4, 281.0], [4.5, 281.0], [4.6, 281.0], [4.7, 281.0], [4.8, 281.0], [4.9, 281.0], [5.0, 281.0], [5.1, 281.0], [5.2, 281.0], [5.3, 281.0], [5.4, 281.0], [5.5, 281.0], [5.6, 281.0], [5.7, 282.0], [5.8, 282.0], [5.9, 282.0], [6.0, 282.0], [6.1, 282.0], [6.2, 282.0], [6.3, 285.0], [6.4, 285.0], [6.5, 285.0], [6.6, 285.0], [6.7, 285.0], [6.8, 285.0], [6.9, 286.0], [7.0, 286.0], [7.1, 286.0], [7.2, 286.0], [7.3, 286.0], [7.4, 287.0], [7.5, 287.0], [7.6, 287.0], [7.7, 287.0], [7.8, 287.0], [7.9, 287.0], [8.0, 288.0], [8.1, 288.0], [8.2, 288.0], [8.3, 288.0], [8.4, 288.0], [8.5, 288.0], [8.6, 289.0], [8.7, 289.0], [8.8, 289.0], [8.9, 289.0], [9.0, 289.0], [9.1, 292.0], [9.2, 292.0], [9.3, 292.0], [9.4, 292.0], [9.5, 292.0], [9.6, 292.0], [9.7, 292.0], [9.8, 292.0], [9.9, 292.0], [10.0, 292.0], [10.1, 292.0], [10.2, 292.0], [10.3, 294.0], [10.4, 294.0], [10.5, 294.0], [10.6, 294.0], [10.7, 294.0], [10.8, 294.0], [10.9, 294.0], [11.0, 294.0], [11.1, 294.0], [11.2, 294.0], [11.3, 294.0], [11.4, 298.0], [11.5, 298.0], [11.6, 298.0], [11.7, 298.0], [11.8, 298.0], [11.9, 298.0], [12.0, 298.0], [12.1, 298.0], [12.2, 298.0], [12.3, 298.0], [12.4, 298.0], [12.5, 298.0], [12.6, 298.0], [12.7, 298.0], [12.8, 298.0], [12.9, 298.0], [13.0, 298.0], [13.1, 299.0], [13.2, 299.0], [13.3, 299.0], [13.4, 299.0], [13.5, 299.0], [13.6, 299.0], [13.7, 300.0], [13.8, 300.0], [13.9, 300.0], [14.0, 300.0], [14.1, 300.0], [14.2, 300.0], [14.3, 301.0], [14.4, 301.0], [14.5, 301.0], [14.6, 301.0], [14.7, 301.0], [14.8, 304.0], [14.9, 304.0], [15.0, 304.0], [15.1, 304.0], [15.2, 304.0], [15.3, 304.0], [15.4, 304.0], [15.5, 304.0], [15.6, 304.0], [15.7, 304.0], [15.8, 304.0], [15.9, 304.0], [16.0, 306.0], [16.1, 306.0], [16.2, 306.0], [16.3, 306.0], [16.4, 306.0], [16.5, 306.0], [16.6, 306.0], [16.7, 306.0], [16.8, 306.0], [16.9, 306.0], [17.0, 306.0], [17.1, 307.0], [17.2, 307.0], [17.3, 307.0], [17.4, 307.0], [17.5, 307.0], [17.6, 307.0], [17.7, 308.0], [17.8, 308.0], [17.9, 308.0], [18.0, 308.0], [18.1, 308.0], [18.2, 308.0], [18.3, 308.0], [18.4, 308.0], [18.5, 308.0], [18.6, 308.0], [18.7, 308.0], [18.8, 308.0], [18.9, 308.0], [19.0, 308.0], [19.1, 308.0], [19.2, 308.0], [19.3, 308.0], [19.4, 309.0], [19.5, 309.0], [19.6, 309.0], [19.7, 309.0], [19.8, 309.0], [19.9, 312.0], [20.0, 312.0], [20.1, 312.0], [20.2, 312.0], [20.3, 312.0], [20.4, 312.0], [20.5, 313.0], [20.6, 313.0], [20.7, 313.0], [20.8, 313.0], [20.9, 313.0], [21.0, 313.0], [21.1, 317.0], [21.2, 317.0], [21.3, 317.0], [21.4, 317.0], [21.5, 317.0], [21.6, 317.0], [21.7, 317.0], [21.8, 317.0], [21.9, 317.0], [22.0, 317.0], [22.1, 317.0], [22.2, 318.0], [22.3, 318.0], [22.4, 318.0], [22.5, 318.0], [22.6, 318.0], [22.7, 318.0], [22.8, 318.0], [22.9, 318.0], [23.0, 318.0], [23.1, 318.0], [23.2, 318.0], [23.3, 323.0], [23.4, 323.0], [23.5, 323.0], [23.6, 323.0], [23.7, 323.0], [23.8, 323.0], [23.9, 325.0], [24.0, 325.0], [24.1, 325.0], [24.2, 325.0], [24.3, 325.0], [24.4, 325.0], [24.5, 337.0], [24.6, 337.0], [24.7, 337.0], [24.8, 337.0], [24.9, 337.0], [25.0, 347.0], [25.1, 347.0], [25.2, 347.0], [25.3, 347.0], [25.4, 347.0], [25.5, 347.0], [25.6, 348.0], [25.7, 348.0], [25.8, 348.0], [25.9, 348.0], [26.0, 348.0], [26.1, 348.0], [26.2, 348.0], [26.3, 348.0], [26.4, 348.0], [26.5, 348.0], [26.6, 348.0], [26.7, 348.0], [26.8, 351.0], [26.9, 351.0], [27.0, 351.0], [27.1, 351.0], [27.2, 351.0], [27.3, 352.0], [27.4, 352.0], [27.5, 352.0], [27.6, 352.0], [27.7, 352.0], [27.8, 352.0], [27.9, 357.0], [28.0, 357.0], [28.1, 357.0], [28.2, 357.0], [28.3, 357.0], [28.4, 357.0], [28.5, 357.0], [28.6, 357.0], [28.7, 357.0], [28.8, 357.0], [28.9, 357.0], [29.0, 366.0], [29.1, 366.0], [29.2, 366.0], [29.3, 366.0], [29.4, 366.0], [29.5, 366.0], [29.6, 373.0], [29.7, 373.0], [29.8, 373.0], [29.9, 373.0], [30.0, 373.0], [30.1, 373.0], [30.2, 379.0], [30.3, 379.0], [30.4, 379.0], [30.5, 379.0], [30.6, 379.0], [30.7, 381.0], [30.8, 381.0], [30.9, 381.0], [31.0, 381.0], [31.1, 381.0], [31.2, 381.0], [31.3, 385.0], [31.4, 385.0], [31.5, 385.0], [31.6, 385.0], [31.7, 385.0], [31.8, 385.0], [31.9, 386.0], [32.0, 386.0], [32.1, 386.0], [32.2, 386.0], [32.3, 386.0], [32.4, 392.0], [32.5, 392.0], [32.6, 392.0], [32.7, 392.0], [32.8, 392.0], [32.9, 392.0], [33.0, 393.0], [33.1, 393.0], [33.2, 393.0], [33.3, 393.0], [33.4, 393.0], [33.5, 393.0], [33.6, 397.0], [33.7, 397.0], [33.8, 397.0], [33.9, 397.0], [34.0, 397.0], [34.1, 400.0], [34.2, 400.0], [34.3, 400.0], [34.4, 400.0], [34.5, 400.0], [34.6, 400.0], [34.7, 400.0], [34.8, 400.0], [34.9, 400.0], [35.0, 400.0], [35.1, 400.0], [35.2, 400.0], [35.3, 404.0], [35.4, 404.0], [35.5, 404.0], [35.6, 404.0], [35.7, 404.0], [35.8, 405.0], [35.9, 405.0], [36.0, 405.0], [36.1, 405.0], [36.2, 405.0], [36.3, 405.0], [36.4, 405.0], [36.5, 405.0], [36.6, 405.0], [36.7, 405.0], [36.8, 405.0], [36.9, 405.0], [37.0, 410.0], [37.1, 410.0], [37.2, 410.0], [37.3, 410.0], [37.4, 410.0], [37.5, 411.0], [37.6, 411.0], [37.7, 411.0], [37.8, 411.0], [37.9, 411.0], [38.0, 411.0], [38.1, 412.0], [38.2, 412.0], [38.3, 412.0], [38.4, 412.0], [38.5, 412.0], [38.6, 412.0], [38.7, 413.0], [38.8, 413.0], [38.9, 413.0], [39.0, 413.0], [39.1, 413.0], [39.2, 413.0], [39.3, 413.0], [39.4, 413.0], [39.5, 413.0], [39.6, 413.0], [39.7, 413.0], [39.8, 414.0], [39.9, 414.0], [40.0, 414.0], [40.1, 414.0], [40.2, 414.0], [40.3, 414.0], [40.4, 420.0], [40.5, 420.0], [40.6, 420.0], [40.7, 420.0], [40.8, 420.0], [40.9, 420.0], [41.0, 430.0], [41.1, 430.0], [41.2, 430.0], [41.3, 430.0], [41.4, 430.0], [41.5, 430.0], [41.6, 430.0], [41.7, 430.0], [41.8, 430.0], [41.9, 430.0], [42.0, 430.0], [42.1, 432.0], [42.2, 432.0], [42.3, 432.0], [42.4, 432.0], [42.5, 432.0], [42.6, 432.0], [42.7, 432.0], [42.8, 432.0], [42.9, 432.0], [43.0, 432.0], [43.1, 432.0], [43.2, 436.0], [43.3, 436.0], [43.4, 436.0], [43.5, 436.0], [43.6, 436.0], [43.7, 436.0], [43.8, 442.0], [43.9, 442.0], [44.0, 442.0], [44.1, 442.0], [44.2, 442.0], [44.3, 442.0], [44.4, 450.0], [44.5, 450.0], [44.6, 450.0], [44.7, 450.0], [44.8, 450.0], [44.9, 459.0], [45.0, 459.0], [45.1, 459.0], [45.2, 459.0], [45.3, 459.0], [45.4, 459.0], [45.5, 480.0], [45.6, 480.0], [45.7, 480.0], [45.8, 480.0], [45.9, 480.0], [46.0, 480.0], [46.1, 485.0], [46.2, 485.0], [46.3, 485.0], [46.4, 485.0], [46.5, 485.0], [46.6, 493.0], [46.7, 493.0], [46.8, 493.0], [46.9, 493.0], [47.0, 493.0], [47.1, 493.0], [47.2, 498.0], [47.3, 498.0], [47.4, 498.0], [47.5, 498.0], [47.6, 498.0], [47.7, 498.0], [47.8, 501.0], [47.9, 501.0], [48.0, 501.0], [48.1, 501.0], [48.2, 501.0], [48.3, 504.0], [48.4, 504.0], [48.5, 504.0], [48.6, 504.0], [48.7, 504.0], [48.8, 504.0], [48.9, 509.0], [49.0, 509.0], [49.1, 509.0], [49.2, 509.0], [49.3, 509.0], [49.4, 509.0], [49.5, 516.0], [49.6, 516.0], [49.7, 516.0], [49.8, 516.0], [49.9, 516.0], [50.0, 518.0], [50.1, 518.0], [50.2, 518.0], [50.3, 518.0], [50.4, 518.0], [50.5, 518.0], [50.6, 533.0], [50.7, 533.0], [50.8, 533.0], [50.9, 533.0], [51.0, 533.0], [51.1, 533.0], [51.2, 535.0], [51.3, 535.0], [51.4, 535.0], [51.5, 535.0], [51.6, 535.0], [51.7, 535.0], [51.8, 546.0], [51.9, 546.0], [52.0, 546.0], [52.1, 546.0], [52.2, 546.0], [52.3, 564.0], [52.4, 564.0], [52.5, 564.0], [52.6, 564.0], [52.7, 564.0], [52.8, 564.0], [52.9, 570.0], [53.0, 570.0], [53.1, 570.0], [53.2, 570.0], [53.3, 570.0], [53.4, 570.0], [53.5, 570.0], [53.6, 570.0], [53.7, 570.0], [53.8, 570.0], [53.9, 570.0], [54.0, 572.0], [54.1, 572.0], [54.2, 572.0], [54.3, 572.0], [54.4, 572.0], [54.5, 572.0], [54.6, 579.0], [54.7, 579.0], [54.8, 579.0], [54.9, 579.0], [55.0, 579.0], [55.1, 579.0], [55.2, 587.0], [55.3, 587.0], [55.4, 587.0], [55.5, 587.0], [55.6, 587.0], [55.7, 598.0], [55.8, 598.0], [55.9, 598.0], [56.0, 598.0], [56.1, 598.0], [56.2, 598.0], [56.3, 611.0], [56.4, 611.0], [56.5, 611.0], [56.6, 611.0], [56.7, 611.0], [56.8, 611.0], [56.9, 616.0], [57.0, 616.0], [57.1, 616.0], [57.2, 616.0], [57.3, 616.0], [57.4, 620.0], [57.5, 620.0], [57.6, 620.0], [57.7, 620.0], [57.8, 620.0], [57.9, 620.0], [58.0, 620.0], [58.1, 620.0], [58.2, 620.0], [58.3, 620.0], [58.4, 620.0], [58.5, 620.0], [58.6, 622.0], [58.7, 622.0], [58.8, 622.0], [58.9, 622.0], [59.0, 622.0], [59.1, 622.0], [59.2, 622.0], [59.3, 622.0], [59.4, 622.0], [59.5, 622.0], [59.6, 622.0], [59.7, 631.0], [59.8, 631.0], [59.9, 631.0], [60.0, 631.0], [60.1, 631.0], [60.2, 631.0], [60.3, 636.0], [60.4, 636.0], [60.5, 636.0], [60.6, 636.0], [60.7, 636.0], [60.8, 666.0], [60.9, 666.0], [61.0, 666.0], [61.1, 666.0], [61.2, 666.0], [61.3, 666.0], [61.4, 667.0], [61.5, 667.0], [61.6, 667.0], [61.7, 667.0], [61.8, 667.0], [61.9, 667.0], [62.0, 691.0], [62.1, 691.0], [62.2, 691.0], [62.3, 691.0], [62.4, 691.0], [62.5, 691.0], [62.6, 708.0], [62.7, 708.0], [62.8, 708.0], [62.9, 708.0], [63.0, 708.0], [63.1, 719.0], [63.2, 719.0], [63.3, 719.0], [63.4, 719.0], [63.5, 719.0], [63.6, 719.0], [63.7, 730.0], [63.8, 730.0], [63.9, 730.0], [64.0, 730.0], [64.1, 730.0], [64.2, 730.0], [64.3, 734.0], [64.4, 734.0], [64.5, 734.0], [64.6, 734.0], [64.7, 734.0], [64.8, 741.0], [64.9, 741.0], [65.0, 741.0], [65.1, 741.0], [65.2, 741.0], [65.3, 741.0], [65.4, 750.0], [65.5, 750.0], [65.6, 750.0], [65.7, 750.0], [65.8, 750.0], [65.9, 750.0], [66.0, 755.0], [66.1, 755.0], [66.2, 755.0], [66.3, 755.0], [66.4, 755.0], [66.5, 759.0], [66.6, 759.0], [66.7, 759.0], [66.8, 759.0], [66.9, 759.0], [67.0, 759.0], [67.1, 776.0], [67.2, 776.0], [67.3, 776.0], [67.4, 776.0], [67.5, 776.0], [67.6, 776.0], [67.7, 786.0], [67.8, 786.0], [67.9, 786.0], [68.0, 786.0], [68.1, 786.0], [68.2, 788.0], [68.3, 788.0], [68.4, 788.0], [68.5, 788.0], [68.6, 788.0], [68.7, 788.0], [68.8, 790.0], [68.9, 790.0], [69.0, 790.0], [69.1, 790.0], [69.2, 790.0], [69.3, 790.0], [69.4, 796.0], [69.5, 796.0], [69.6, 796.0], [69.7, 796.0], [69.8, 796.0], [69.9, 796.0], [70.0, 796.0], [70.1, 796.0], [70.2, 796.0], [70.3, 796.0], [70.4, 796.0], [70.5, 814.0], [70.6, 814.0], [70.7, 814.0], [70.8, 814.0], [70.9, 814.0], [71.0, 814.0], [71.1, 823.0], [71.2, 823.0], [71.3, 823.0], [71.4, 823.0], [71.5, 823.0], [71.6, 824.0], [71.7, 824.0], [71.8, 824.0], [71.9, 824.0], [72.0, 824.0], [72.1, 824.0], [72.2, 832.0], [72.3, 832.0], [72.4, 832.0], [72.5, 832.0], [72.6, 832.0], [72.7, 832.0], [72.8, 840.0], [72.9, 840.0], [73.0, 840.0], [73.1, 840.0], [73.2, 840.0], [73.3, 858.0], [73.4, 858.0], [73.5, 858.0], [73.6, 858.0], [73.7, 858.0], [73.8, 858.0], [73.9, 860.0], [74.0, 860.0], [74.1, 860.0], [74.2, 860.0], [74.3, 860.0], [74.4, 860.0], [74.5, 861.0], [74.6, 861.0], [74.7, 861.0], [74.8, 861.0], [74.9, 861.0], [75.0, 884.0], [75.1, 884.0], [75.2, 884.0], [75.3, 884.0], [75.4, 884.0], [75.5, 884.0], [75.6, 906.0], [75.7, 906.0], [75.8, 906.0], [75.9, 906.0], [76.0, 906.0], [76.1, 906.0], [76.2, 926.0], [76.3, 926.0], [76.4, 926.0], [76.5, 926.0], [76.6, 926.0], [76.7, 926.0], [76.8, 935.0], [76.9, 935.0], [77.0, 935.0], [77.1, 935.0], [77.2, 935.0], [77.3, 956.0], [77.4, 956.0], [77.5, 956.0], [77.6, 956.0], [77.7, 956.0], [77.8, 956.0], [77.9, 1024.0], [78.0, 1024.0], [78.1, 1024.0], [78.2, 1024.0], [78.3, 1024.0], [78.4, 1024.0], [78.5, 1039.0], [78.6, 1039.0], [78.7, 1039.0], [78.8, 1039.0], [78.9, 1039.0], [79.0, 1091.0], [79.1, 1091.0], [79.2, 1091.0], [79.3, 1091.0], [79.4, 1091.0], [79.5, 1091.0], [79.6, 1093.0], [79.7, 1093.0], [79.8, 1093.0], [79.9, 1093.0], [80.0, 1093.0], [80.1, 1093.0], [80.2, 1118.0], [80.3, 1118.0], [80.4, 1118.0], [80.5, 1118.0], [80.6, 1118.0], [80.7, 1138.0], [80.8, 1138.0], [80.9, 1138.0], [81.0, 1138.0], [81.1, 1138.0], [81.2, 1138.0], [81.3, 1138.0], [81.4, 1138.0], [81.5, 1138.0], [81.6, 1138.0], [81.7, 1138.0], [81.8, 1138.0], [81.9, 1142.0], [82.0, 1142.0], [82.1, 1142.0], [82.2, 1142.0], [82.3, 1142.0], [82.4, 1156.0], [82.5, 1156.0], [82.6, 1156.0], [82.7, 1156.0], [82.8, 1156.0], [82.9, 1156.0], [83.0, 1160.0], [83.1, 1160.0], [83.2, 1160.0], [83.3, 1160.0], [83.4, 1160.0], [83.5, 1160.0], [83.6, 1173.0], [83.7, 1173.0], [83.8, 1173.0], [83.9, 1173.0], [84.0, 1173.0], [84.1, 1191.0], [84.2, 1191.0], [84.3, 1191.0], [84.4, 1191.0], [84.5, 1191.0], [84.6, 1191.0], [84.7, 1200.0], [84.8, 1200.0], [84.9, 1200.0], [85.0, 1200.0], [85.1, 1200.0], [85.2, 1200.0], [85.3, 1206.0], [85.4, 1206.0], [85.5, 1206.0], [85.6, 1206.0], [85.7, 1206.0], [85.8, 1276.0], [85.9, 1276.0], [86.0, 1276.0], [86.1, 1276.0], [86.2, 1276.0], [86.3, 1276.0], [86.4, 1277.0], [86.5, 1277.0], [86.6, 1277.0], [86.7, 1277.0], [86.8, 1277.0], [86.9, 1277.0], [87.0, 1317.0], [87.1, 1317.0], [87.2, 1317.0], [87.3, 1317.0], [87.4, 1317.0], [87.5, 1331.0], [87.6, 1331.0], [87.7, 1331.0], [87.8, 1331.0], [87.9, 1331.0], [88.0, 1331.0], [88.1, 1349.0], [88.2, 1349.0], [88.3, 1349.0], [88.4, 1349.0], [88.5, 1349.0], [88.6, 1349.0], [88.7, 1351.0], [88.8, 1351.0], [88.9, 1351.0], [89.0, 1351.0], [89.1, 1351.0], [89.2, 1351.0], [89.3, 1383.0], [89.4, 1383.0], [89.5, 1383.0], [89.6, 1383.0], [89.7, 1383.0], [89.8, 1389.0], [89.9, 1389.0], [90.0, 1389.0], [90.1, 1389.0], [90.2, 1389.0], [90.3, 1389.0], [90.4, 1440.0], [90.5, 1440.0], [90.6, 1440.0], [90.7, 1440.0], [90.8, 1440.0], [90.9, 1440.0], [91.0, 1465.0], [91.1, 1465.0], [91.2, 1465.0], [91.3, 1465.0], [91.4, 1465.0], [91.5, 1556.0], [91.6, 1556.0], [91.7, 1556.0], [91.8, 1556.0], [91.9, 1556.0], [92.0, 1556.0], [92.1, 1557.0], [92.2, 1557.0], [92.3, 1557.0], [92.4, 1557.0], [92.5, 1557.0], [92.6, 1557.0], [92.7, 1612.0], [92.8, 1612.0], [92.9, 1612.0], [93.0, 1612.0], [93.1, 1612.0], [93.2, 1668.0], [93.3, 1668.0], [93.4, 1668.0], [93.5, 1668.0], [93.6, 1668.0], [93.7, 1668.0], [93.8, 1674.0], [93.9, 1674.0], [94.0, 1674.0], [94.1, 1674.0], [94.2, 1674.0], [94.3, 1674.0], [94.4, 1681.0], [94.5, 1681.0], [94.6, 1681.0], [94.7, 1681.0], [94.8, 1681.0], [94.9, 1770.0], [95.0, 1770.0], [95.1, 1770.0], [95.2, 1770.0], [95.3, 1770.0], [95.4, 1770.0], [95.5, 1901.0], [95.6, 1901.0], [95.7, 1901.0], [95.8, 1901.0], [95.9, 1901.0], [96.0, 1901.0], [96.1, 2047.0], [96.2, 2047.0], [96.3, 2047.0], [96.4, 2047.0], [96.5, 2047.0], [96.6, 2133.0], [96.7, 2133.0], [96.8, 2133.0], [96.9, 2133.0], [97.0, 2133.0], [97.1, 2133.0], [97.2, 2176.0], [97.3, 2176.0], [97.4, 2176.0], [97.5, 2176.0], [97.6, 2176.0], [97.7, 2176.0], [97.8, 2276.0], [97.9, 2276.0], [98.0, 2276.0], [98.1, 2276.0], [98.2, 2276.0], [98.3, 2524.0], [98.4, 2524.0], [98.5, 2524.0], [98.6, 2524.0], [98.7, 2524.0], [98.8, 2524.0], [98.9, 2842.0], [99.0, 2842.0], [99.1, 2842.0], [99.2, 2842.0], [99.3, 2842.0], [99.4, 2842.0], [99.5, 8569.0], [99.6, 8569.0], [99.7, 8569.0], [99.8, 8569.0], [99.9, 8569.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 36.0, "series": [{"data": [[2100.0, 2.0], [8500.0, 1.0], [2200.0, 1.0], [600.0, 11.0], [2500.0, 1.0], [2800.0, 1.0], [700.0, 14.0], [200.0, 24.0], [800.0, 9.0], [900.0, 4.0], [1000.0, 4.0], [1100.0, 8.0], [300.0, 36.0], [1200.0, 4.0], [1300.0, 6.0], [1400.0, 2.0], [1500.0, 2.0], [400.0, 24.0], [1600.0, 4.0], [1700.0, 1.0], [1900.0, 1.0], [500.0, 15.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 84.0, "series": [{"data": [[0.0, 84.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 75.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.381578947368427, "minX": 1.7789208E12, "maxY": 9.590000000000002, "series": [{"data": [[1.77892086E12, 9.590000000000002], [1.7789208E12, 9.381578947368427]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77892086E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 549.0, "minX": 1.0, "maxY": 1674.0, "series": [{"data": [[8.0, 549.0], [4.0, 823.0], [2.0, 935.0], [1.0, 1674.0], [9.0, 707.5555555555555], [5.0, 1645.0], [10.0, 723.585034013605], [6.0, 804.5], [3.0, 1160.0], [7.0, 1001.1428571428572]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.500000000000004, 749.8806818181814]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 148.2, "minX": 1.7789208E12, "maxY": 812.8333333333334, "series": [{"data": [[1.77892086E12, 812.8333333333334], [1.7789208E12, 623.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77892086E12, 195.0], [1.7789208E12, 148.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77892086E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 719.9473684210527, "minX": 1.7789208E12, "maxY": 772.6300000000002, "series": [{"data": [[1.77892086E12, 772.6300000000002], [1.7789208E12, 719.9473684210527]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77892086E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 719.4210526315791, "minX": 1.7789208E12, "maxY": 772.5399999999998, "series": [{"data": [[1.77892086E12, 772.5399999999998], [1.7789208E12, 719.4210526315791]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77892086E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 0.0, "minX": 1.7789208E12, "maxY": 136.3421052631579, "series": [{"data": [[1.77892086E12, 0.0], [1.7789208E12, 136.3421052631579]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77892086E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 276.0, "minX": 1.7789208E12, "maxY": 8569.0, "series": [{"data": [[1.77892086E12, 8569.0], [1.7789208E12, 2842.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77892086E12, 277.0], [1.7789208E12, 276.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77892086E12, 1462.800000000002], [1.7789208E12, 1411.7999999999997]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77892086E12, 8569.0], [1.7789208E12, 2842.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77892086E12, 510.0], [1.7789208E12, 527.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77892086E12, 2135.15], [1.7789208E12, 1622.3499999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77892086E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
    data: {"result": {"minY": 357.0, "minX": 6.0, "maxY": 1353.0, "series": [{"data": [[17.0, 357.0], [18.0, 499.5], [10.0, 782.0], [11.0, 518.0], [6.0, 1353.0], [12.0, 482.5], [13.0, 450.0], [14.0, 527.5], [7.0, 453.5], [15.0, 579.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 620.0], [15.0, 1276.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 356.0, "minX": 6.0, "maxY": 1336.0, "series": [{"data": [[17.0, 356.0], [18.0, 499.5], [10.0, 782.0], [11.0, 518.0], [6.0, 1336.0], [12.0, 482.5], [13.0, 450.0], [14.0, 527.5], [7.0, 453.5], [15.0, 579.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 620.0], [15.0, 1276.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4166666666666667, "minX": 1.7789208E12, "maxY": 1.5166666666666666, "series": [{"data": [[1.77892086E12, 1.5166666666666666], [1.7789208E12, 1.4166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77892086E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7789208E12, "maxY": 1.6333333333333333, "series": [{"data": [[1.77892086E12, 1.6333333333333333], [1.7789208E12, 1.2666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.77892086E12, 0.03333333333333333]], "isOverall": false, "label": "502", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77892086E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7789208E12, "maxY": 1.6333333333333333, "series": [{"data": [[1.77892086E12, 1.6333333333333333], [1.7789208E12, 1.2666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.77892086E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77892086E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7789208E12, "maxY": 1.6333333333333333, "series": [{"data": [[1.77892086E12, 1.6333333333333333], [1.7789208E12, 1.2666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77892086E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77892086E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 19800000);
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

