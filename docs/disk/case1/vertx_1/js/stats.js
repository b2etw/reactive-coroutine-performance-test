var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "32078",
        "ok": "32078",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "759",
        "ok": "759",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14715",
        "ok": "14715",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "10927",
        "ok": "10927",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2407",
        "ok": "2407",
        "ko": "-"
    },
    "percentiles1": {
        "total": "11644",
        "ok": "11644",
        "ko": "-"
    },
    "percentiles2": {
        "total": "12738",
        "ok": "12738",
        "ko": "-"
    },
    "percentiles3": {
        "total": "13653",
        "ok": "13653",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14168",
        "ok": "14168",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 33,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 32043,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "525.869",
        "ok": "525.869",
        "ko": "-"
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
        "total": "32078",
        "ok": "32078",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "759",
        "ok": "759",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14715",
        "ok": "14715",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "10927",
        "ok": "10927",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2407",
        "ok": "2407",
        "ko": "-"
    },
    "percentiles1": {
        "total": "11644",
        "ok": "11646",
        "ko": "-"
    },
    "percentiles2": {
        "total": "12738",
        "ok": "12738",
        "ko": "-"
    },
    "percentiles3": {
        "total": "13653",
        "ok": "13653",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14168",
        "ok": "14168",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 33,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 32043,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "525.869",
        "ok": "525.869",
        "ko": "-"
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
