var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "72060",
        "ok": "72060",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8105",
        "ok": "8105",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1671",
        "ok": "1671",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2436",
        "ok": "2436",
        "ko": "-"
    },
    "percentiles1": {
        "total": "37",
        "ok": "37",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2920",
        "ok": "2924",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6987",
        "ok": "6987",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7669",
        "ok": "7669",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 40379,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5953,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 25728,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "562.969",
        "ok": "562.969",
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
        "total": "72060",
        "ok": "72060",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8105",
        "ok": "8105",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1671",
        "ok": "1671",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2436",
        "ok": "2436",
        "ko": "-"
    },
    "percentiles1": {
        "total": "36",
        "ok": "37",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2929",
        "ok": "2945",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6987",
        "ok": "6987",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7669",
        "ok": "7669",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 40379,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5953,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 25728,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "562.969",
        "ok": "562.969",
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
