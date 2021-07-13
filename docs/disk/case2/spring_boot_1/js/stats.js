var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "31363",
        "ok": "15031",
        "ko": "16332"
    },
    "minResponseTime": {
        "total": "113",
        "ok": "113",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "54493",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "11371",
        "ok": "12221",
        "ko": "10588"
    },
    "standardDeviation": {
        "total": "6184",
        "ok": "7340",
        "ko": "4753"
    },
    "percentiles1": {
        "total": "10013",
        "ok": "10967",
        "ko": "10006"
    },
    "percentiles2": {
        "total": "10941",
        "ok": "15730",
        "ko": "10072"
    },
    "percentiles3": {
        "total": "20124",
        "ok": "22517",
        "ko": "10512"
    },
    "percentiles4": {
        "total": "41197",
        "ok": "42425",
        "ko": "33687"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 78,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 78,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14875,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "count": 16332,
    "percentage": 52
},
    "meanNumberOfRequestsPerSecond": {
        "total": "382.476",
        "ok": "183.305",
        "ko": "199.171"
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
        "total": "31363",
        "ok": "15031",
        "ko": "16332"
    },
    "minResponseTime": {
        "total": "113",
        "ok": "113",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "54493",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "11371",
        "ok": "12221",
        "ko": "10588"
    },
    "standardDeviation": {
        "total": "6184",
        "ok": "7340",
        "ko": "4753"
    },
    "percentiles1": {
        "total": "10013",
        "ok": "10967",
        "ko": "10005"
    },
    "percentiles2": {
        "total": "10940",
        "ok": "15730",
        "ko": "10072"
    },
    "percentiles3": {
        "total": "20125",
        "ok": "22517",
        "ko": "10512"
    },
    "percentiles4": {
        "total": "41197",
        "ok": "42425",
        "ko": "33687"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 78,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 78,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14875,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "count": 16332,
    "percentage": 52
},
    "meanNumberOfRequestsPerSecond": {
        "total": "382.476",
        "ok": "183.305",
        "ko": "199.171"
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
