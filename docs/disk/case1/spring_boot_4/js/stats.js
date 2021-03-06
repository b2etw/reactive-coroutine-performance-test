var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "72060",
        "ok": "59787",
        "ko": "12273"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "59377",
        "ok": "59377",
        "ko": "55386"
    },
    "meanResponseTime": {
        "total": "6759",
        "ok": "6161",
        "ko": "9673"
    },
    "standardDeviation": {
        "total": "6333",
        "ok": "6697",
        "ko": "2609"
    },
    "percentiles1": {
        "total": "6835",
        "ok": "5328",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "10011",
        "ok": "9450",
        "ko": "10065"
    },
    "percentiles3": {
        "total": "16392",
        "ok": "17050",
        "ko": "10513"
    },
    "percentiles4": {
        "total": "30469",
        "ok": "31346",
        "ko": "10774"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19457,
    "percentage": 27
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1467,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 38863,
    "percentage": 54
},
    "group4": {
    "name": "failed",
    "count": 12273,
    "percentage": 17
},
    "meanNumberOfRequestsPerSecond": {
        "total": "464.903",
        "ok": "385.723",
        "ko": "79.181"
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
        "ok": "59787",
        "ko": "12273"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "59377",
        "ok": "59377",
        "ko": "55386"
    },
    "meanResponseTime": {
        "total": "6759",
        "ok": "6161",
        "ko": "9673"
    },
    "standardDeviation": {
        "total": "6333",
        "ok": "6697",
        "ko": "2609"
    },
    "percentiles1": {
        "total": "6835",
        "ok": "5330",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "10012",
        "ok": "9449",
        "ko": "10065"
    },
    "percentiles3": {
        "total": "16392",
        "ok": "17050",
        "ko": "10513"
    },
    "percentiles4": {
        "total": "30469",
        "ok": "31346",
        "ko": "10774"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19457,
    "percentage": 27
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1467,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 38863,
    "percentage": 54
},
    "group4": {
    "name": "failed",
    "count": 12273,
    "percentage": 17
},
    "meanNumberOfRequestsPerSecond": {
        "total": "464.903",
        "ok": "385.723",
        "ko": "79.181"
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
