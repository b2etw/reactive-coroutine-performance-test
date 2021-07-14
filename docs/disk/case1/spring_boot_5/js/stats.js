var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "72060",
        "ok": "69713",
        "ko": "2347"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "21467",
        "ok": "21467",
        "ko": "13366"
    },
    "meanResponseTime": {
        "total": "2972",
        "ok": "2735",
        "ko": "10015"
    },
    "standardDeviation": {
        "total": "3428",
        "ok": "3228",
        "ko": "208"
    },
    "percentiles1": {
        "total": "1359",
        "ok": "1246",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "5248",
        "ok": "4939",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "8959",
        "ko": "10011"
    },
    "percentiles4": {
        "total": "12487",
        "ok": "12503",
        "ko": "10068"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28993,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5358,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 35362,
    "percentage": 49
},
    "group4": {
    "name": "failed",
    "count": 2347,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "554.308",
        "ok": "536.254",
        "ko": "18.054"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "72060",
        "ok": "69713",
        "ko": "2347"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "21467",
        "ok": "21467",
        "ko": "13366"
    },
    "meanResponseTime": {
        "total": "2972",
        "ok": "2735",
        "ko": "10015"
    },
    "standardDeviation": {
        "total": "3428",
        "ok": "3228",
        "ko": "208"
    },
    "percentiles1": {
        "total": "1358",
        "ok": "1246",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "5247",
        "ok": "4939",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10000",
        "ok": "8959",
        "ko": "10011"
    },
    "percentiles4": {
        "total": "12487",
        "ok": "12503",
        "ko": "10068"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28993,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5358,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 35362,
    "percentage": 49
},
    "group4": {
    "name": "failed",
    "count": 2347,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "554.308",
        "ok": "536.254",
        "ko": "18.054"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
