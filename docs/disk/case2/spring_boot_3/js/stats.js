var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "37466",
        "ok": "32495",
        "ko": "4971"
    },
    "minResponseTime": {
        "total": "540",
        "ok": "540",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "55363",
        "ok": "55363",
        "ko": "54361"
    },
    "meanResponseTime": {
        "total": "9682",
        "ok": "9592",
        "ko": "10273"
    },
    "standardDeviation": {
        "total": "5697",
        "ok": "6025",
        "ko": "2626"
    },
    "percentiles1": {
        "total": "9588",
        "ok": "9047",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10765",
        "ok": "11288",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "18709",
        "ok": "21101",
        "ko": "10049"
    },
    "percentiles4": {
        "total": "34833",
        "ok": "34953",
        "ko": "20700"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 30,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 194,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 32271,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 4971,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "492.974",
        "ok": "427.566",
        "ko": "65.408"
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
        "total": "37466",
        "ok": "32495",
        "ko": "4971"
    },
    "minResponseTime": {
        "total": "540",
        "ok": "540",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "55363",
        "ok": "55363",
        "ko": "54361"
    },
    "meanResponseTime": {
        "total": "9682",
        "ok": "9592",
        "ko": "10273"
    },
    "standardDeviation": {
        "total": "5697",
        "ok": "6025",
        "ko": "2626"
    },
    "percentiles1": {
        "total": "9589",
        "ok": "9048",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10765",
        "ok": "11288",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "18706",
        "ok": "21116",
        "ko": "10049"
    },
    "percentiles4": {
        "total": "34833",
        "ok": "34953",
        "ko": "20700"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 30,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 194,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 32271,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 4971,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "492.974",
        "ok": "427.566",
        "ko": "65.408"
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
