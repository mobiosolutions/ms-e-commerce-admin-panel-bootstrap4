$(function () {
    /* ChartJS
     * -------
     * Data and config for chartjs
     */
    'use strict';

    /********************************* Upload Photos Chart ***************************/
    var ctx = document.getElementById('UploadedPhotos').getContext('2d');
    var UploadedPhotos = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep"],
            datasets: [{
                data: [0, 20, 15, 18, 22, 20, 22, 24, 20],
                backgroundColor: [
                    'rgba(255, 153, 0, .07)',
                ],
                borderColor: [
                    'rgba(255, 153, 0, 1)',
                ],
                borderWidth: 2,
                fill: true,
                pointBorderWidth: 0,
                pointRadius: [0, 0, 0, 0, 0],
                pointHoverRadius: [0, 0, 0, 0, 0],
            }]
        },
        options: {
            responsive: true,
            showTooltips: true,
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false,
                    position: 'bottom',
                    gridLines: {
                        drawBorder: false,
                        display: false,
                    },
                    ticks: {
                        beginAtZero: false,
                        stepSize: 0
                    }
                }],
            },
            legend: {
                display: false,
            },
            
            tooltips: {
                backgroundColor: 'rgba(2, 171, 254, 1)',
            }
        }
    });



    // var UploadedPhotosData = {
    //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep"],
    //     datasets: [{
    //         label: 'first label',
    //         data: [0, 20, 15, 18, 22, 20, 22, 24, 20],
    //         backgroundColor: [
    //             'rgba(255, 153, 0, .07)',
    //         ],
    //         borderColor: [
    //             'rgba(255, 153, 0, 1)',
    //         ],
    //         borderWidth: 2,
    //         fill: true,
    //         pointBorderWidth: 0,
    //         pointRadius: [0, 0, 0, 0, 0],
    //         pointHoverRadius: [0, 0, 0, 0, 0],
    //     },
    //     ],
    // };

    // var UploadedPhotosOptions = {
    //     scales: {
    //         yAxes: [{
    //             display: false
    //         }],
    //         xAxes: [{
    //             display: false,
    //             position: 'bottom',
    //             gridLines: {
    //                 drawBorder: false,
    //                 display: false,
    //             },
    //             ticks: {
    //                 beginAtZero: false,
    //                 stepSize: 0
    //             }
    //         }],
    //     },
    //     legend: {
    //         display: false,
    //     },
    //     elements: {
    //         point: {
    //             radius: 0
    //         },
    //     },
    //     tooltips: {
    //         backgroundColor: 'rgba(2, 171, 254, 1)',
    //     }
    // };
    // if ($("#UploadedPhotos").length) {
    //     var lineChartCanvas = $("#UploadedPhotos").get(0).getContext("2d");
    //     var saleschart = new Chart(lineChartCanvas, {
    //         type: 'line',
    //         data: UploadedPhotosData,
    //         options: UploadedPhotosOptions
    //     });
    // }

    /********************************* Downloaded Photos Chart ***************************/
    var DownloadedPhotosData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep"],
        datasets: [{
            label: 'first label',
            data: [10, 20, 23, 18, 22, 20, 22, 24, 20],
            backgroundColor: [
                'rgba(98, 236, 40, .07)',
            ],
            borderColor: [
                'rgba(98, 236, 40, 1)',
            ],
            borderWidth: 2,
            fill: true,
            pointBorderWidth: 0,
            pointRadius: [0, 0, 0, 0, 0],
            pointHoverRadius: [0, 0, 0, 0, 0],
        },
        ],
    };

    var DownloadedPhotosOptions = {
        scales: {
            yAxes: [{
                display: false
            }],
            xAxes: [{
                display: false,
                position: 'bottom',
                gridLines: {
                    drawBorder: false,
                    display: false,
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 0
                }
            }],
        },
        legend: {
            display: false,
        },
        elements: {
            point: {
                radius: 0
            },
        },
        tooltips: {
            backgroundColor: 'rgba(2, 171, 254, 1)',
        }
    };
    if ($("#DownloadedPhotos").length) {
        var lineChartCanvas = $("#DownloadedPhotos").get(0).getContext("2d");
        var saleschart = new Chart(lineChartCanvas, {
            type: 'line',
            data: DownloadedPhotosData,
            options: DownloadedPhotosOptions
        });
    }

    /********************************* Sold Chart ***************************/
    var SoldData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep"],
        datasets: [{
            label: 'first label',
            data: [0, 20, 15, 18, 15, 20, 21, 19, 20],
            backgroundColor: [
                'rgba(116, 112, 241, .07)',
            ],
            borderColor: [
                'rgba(116, 112, 241, 1)',
            ],
            borderWidth: 2,
            fill: true,
            pointBorderWidth: 0,
            pointRadius: [0, 0, 0, 0, 0],
            pointHoverRadius: [0, 0, 0, 0, 0],
        },
        ],
    };

    var SoldOptions = {
        scales: {
            yAxes: [{
                display: false
            }],
            xAxes: [{
                display: false,
                position: 'bottom',
                gridLines: {
                    drawBorder: false,
                    display: false,
                },
                ticks: {
                    beginAtZero: false,
                    stepSize: 0
                }
            }],
        },
        legend: {
            display: false,
        },
        elements: {
            point: {
                radius: 0
            },
        },
        tooltips: {
            backgroundColor: 'rgba(2, 171, 254, 1)',
        }
    };
    if ($("#Sold").length) {
        var lineChartCanvas = $("#Sold").get(0).getContext("2d");
        var saleschart = new Chart(lineChartCanvas, {
            type: 'line',
            data: SoldData,
            options: SoldOptions
        });
    }

    /********************************* Pending Payment Chart ***************************/
    var PendingPaymentData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep"],
        datasets: [{
            label: 'first label',
            data: [0, 15, 13, 18, 19, 14, 16, 15, 13],
            backgroundColor: [
                'rgba(229, 79, 23, .07)',
            ],
            borderColor: [
                'rgba(229, 79, 23, 1)',
            ],
            borderWidth: 2,
            fill: true,
            pointBorderWidth: 0,
            pointRadius: [0, 0, 0, 0, 0],
            pointHoverRadius: [0, 0, 0, 0, 0],
        },
        ],
    };

    var PendingPaymentOptions = {
        scales: {
            yAxes: [{
                display: false
            }],
            xAxes: [{
                display: false,
                position: 'bottom',
                gridLines: {
                    drawBorder: false,
                    display: false,
                },
                ticks: {
                    beginAtZero: false,
                    stepSize: 0
                }
            }],
        },
        legend: {
            display: false,
        },
        elements: {
            point: {
                radius: 0
            },
        },
        tooltips: {
            backgroundColor: 'rgba(2, 171, 254, 1)',
        }
    };
    if ($("#PendingPayment").length) {
        var lineChartCanvas = $("#PendingPayment").get(0).getContext("2d");
        var saleschart = new Chart(lineChartCanvas, {
            type: 'line',
            data: PendingPaymentData,
            options: PendingPaymentOptions
        });
    }

});