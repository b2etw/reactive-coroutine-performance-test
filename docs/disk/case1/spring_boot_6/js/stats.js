var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "72060",
        "ok": "71990",
        "ko": "70"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "11031",
        "ok": "11031",
        "ko": "10012"
    },
    "meanResponseTime": {
        "total": "1191",
        "ok": "1183",
        "ko": "10002"
    },
    "standardDeviation": {
        "total": "1791",
        "ok": "1771",
        "ko": "3"
    },
    "percentiles1": {
        "total": "81",
        "ok": "80",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "1929",
        "ok": "1922",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "4897",
        "ok": "4878",
        "ko": "10008"
    },
    "percentiles4": {
        "total": "7142",
        "ok": "7071",
        "ko": "10011"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 45156,
    "percentage": 63
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2445,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24389,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 70,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "567.402",
        "ok": "566.85",
        "ko": "0.551"
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
        "ok": "71990",
        "ko": "70"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "11031",
        "ok": "11031",
        "ko": "10012"
    },
    "meanResponseTime": {
        "total": "1191",
        "ok": "1183",
        "ko": "10002"
    },
    "standardDeviation": {
        "total": "1791",
        "ok": "1771",
        "ko": "3"
    },
    "percentiles1": {
        "total": "81",
        "ok": "80",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "1929",
        "ok": "1923",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "4897",
        "ok": "4878",
        "ko": "10008"
    },
    "percentiles4": {
        "total": "7142",
        "ok": "7071",
        "ko": "10011"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 45156,
    "percentage": 63
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2445,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24389,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 70,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "567.402",
        "ok": "566.85",
        "ko": "0.551"
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
