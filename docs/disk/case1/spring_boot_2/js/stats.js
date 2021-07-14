var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "29944",
        "ok": "23961",
        "ko": "5983"
    },
    "minResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "7206"
    },
    "maxResponseTime": {
        "total": "36890",
        "ok": "36890",
        "ko": "29718"
    },
    "meanResponseTime": {
        "total": "11754",
        "ok": "12164",
        "ko": "10116"
    },
    "standardDeviation": {
        "total": "5348",
        "ok": "5884",
        "ko": "1057"
    },
    "percentiles1": {
        "total": "10534",
        "ok": "13039",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "14971",
        "ok": "15428",
        "ko": "10005"
    },
    "percentiles3": {
        "total": "21403",
        "ok": "21987",
        "ko": "10133"
    },
    "percentiles4": {
        "total": "30406",
        "ok": "32549",
        "ko": "13349"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 41,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 183,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23737,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "count": 5983,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "453.697",
        "ok": "363.045",
        "ko": "90.652"
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
        "total": "29944",
        "ok": "23961",
        "ko": "5983"
    },
    "minResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "7206"
    },
    "maxResponseTime": {
        "total": "36890",
        "ok": "36890",
        "ko": "29718"
    },
    "meanResponseTime": {
        "total": "11754",
        "ok": "12164",
        "ko": "10116"
    },
    "standardDeviation": {
        "total": "5348",
        "ok": "5884",
        "ko": "1057"
    },
    "percentiles1": {
        "total": "10533",
        "ok": "13040",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "14971",
        "ok": "15428",
        "ko": "10005"
    },
    "percentiles3": {
        "total": "21403",
        "ok": "21987",
        "ko": "10133"
    },
    "percentiles4": {
        "total": "30406",
        "ok": "32549",
        "ko": "13349"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 41,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 183,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23737,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "count": 5983,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "453.697",
        "ok": "363.045",
        "ko": "90.652"
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
