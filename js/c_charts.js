var colors = [{
    radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7
    },
    stops: [
        [0, "#219EEE"]
    ]
}, {
    radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 1
    },
    stops: [
        [0, "#8B63BE"],
        [1, Highcharts.Color("#26A5EE").brighten(0).get('rgb')]
    ]
}];

// Build the chart
Highcharts.chart('chart-mobile', {
    credits: {
        enabled: false
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        style: {
            color: '#219EEE',
            fontWeight: 'bolder',
            fontFamily: "FontLight",
            fontSize: "17px"
        },

        text: '20%',

        align: 'center',
        verticalAlign: 'middle',
        y: 0
    },
    tooltip: {
        enabled: false
        //pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            borderWidth: 3,
            slicedOffset: 15,
            startAngle: 0,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true, shadow: false,
                format: '{point.name}',
                color: "#219EEE",
                distance:5,
               
                style: {
                    textShadow: "none"  ,
                    fontFamily: "FontLight",
                    fontSize:"9px"
                },
                connectorColor: 'transperent'
            }
        }
    },
    series: [{
        point: {
            events: {
                click: function (event) {
                   
                    this.series.chart.setTitle({ text: this.y + "%" });
                }
            }
        },
        name: '',
        size: '45%',
        innerSize: '60%',
        data: [
            { name: 'Crowdfunding', y: 50, color: colors[1] },
            { name: 'Miner<br>incentive ', y: 10, color: colors[0] },
            { name: 'Development<br>team ', y: 10, color: colors[0] },
            { name: 'Internal<br>team &<br>advisors', y: 10, color: colors[0] },
            { name: 'Pre-ico ', y: 20, sliced: true, selected: true, color: colors[0] },
        ]
    }]
});





var colors = [{
    radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7
    },
    stops: [
        [0, "#219EEE"]
    ]
}, {
    radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 1
    },
    stops: [
        [0, "#8B63BE"],
        [1, Highcharts.Color("#26A5EE").brighten(0).get('rgb')]
    ]
}];

// Build the chart
Highcharts.chart('chart-web', {
    credits: {
        enabled: false
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        style: {
            color: '#219EEE',
            fontWeight: 'bolder',
            fontFamily: "FontLight",
            fontSize: "20px"
        },

        text: '20%',

        align: 'center',
        verticalAlign: 'middle',
        y: 0
    },
    tooltip: {
        enabled: false
        //pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            borderWidth: 3,
            slicedOffset: 35,
            startAngle: 0,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true, shadow: false,
                format: '{point.name}',
                color: "#219EEE",
               
                style: {
                    textShadow: "none"  ,
                    fontFamily: "FontLight",
                },
                connectorColor: 'transperent'
            }
        }
    },
    series: [{
        point: {
            events: {
                click: function (event) {
                    this.series.chart.setTitle({ text: this.y + "%" });
                }
            }
        },
        name: '',
        size: '80%',
        innerSize: '70%',
        data: [
            { name: 'Crowdfunding', y: 50, color: colors[1] },
            { name: 'Miner<br>incentive ', y: 10, color: colors[0] },
            { name: 'Development<br>team ', y: 10, color: colors[0] },
            { name: 'Internal<br>team &<br>advisors', y: 10, color: colors[0] },
            { name: 'Pre-ico ', y: 20, sliced: true, selected: true, color: colors[0] },
        ]
    }]
});