$(function() {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict';
  var data = {
    labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [10, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var multiLineData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: [
          '#587ce4'
        ],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Dataset 2',
        data: [5, 23, 7, 12, 42, 23],
        borderColor: [
          '#ede190'
        ],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Dataset 3',
        data: [15, 10, 21, 32, 12, 33],
        borderColor: [
          '#f44252'
        ],
        borderWidth: 2,
        fill: false
      }
    ]
  };
  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };

  // Pie chart start

  var pieData = {
    datasets: [{
      data: [65, 35],
      backgroundColor: [
        "#6e44ff",
        "#ef7a85",
      ],
      borderColor: "rgba(0,0,0,0)"
    }],

    labels: [
      'Women',
      'Men',
    ]
  };
  var pieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: {
      display: false},

      legendCallback: function(chart) { 
        var text = [];
        text.push('<div class="report-chart">');
        text.push('<div class="d-flex justify-content-center mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><p class="mb-0">2017</p></div>');
        text.push('</div>');
        text.push('</div>');
        return text.join("");
      },
  };

  var pieData2 = {
    datasets: [{
      data: [55, 45],
      backgroundColor: [
        "#6e44ff",
        "#ef7a85",
      ],
      borderColor: "rgba(0,0,0,0)"
    }],

    labels: [
      'Women',
      'Men',
    ]
  };
  var pieOptions2 = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: {
      display: false},

      legendCallback: function(chart) { 
        var text = [];
        text.push('<div class="report-chart">');
        text.push('<div class="d-flex justify-content-center mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><p class="mb-0">2018</p></div>');
        text.push('</div>');
        text.push('</div>');
        return text.join("");
      },
  };

  var pieData3 = {
    datasets: [{
      data: [60, 40],
      backgroundColor: [
        "#6e44ff",
        "#ef7a85",

      ],
      borderColor: "rgba(0,0,0,0)"
    }],

    labels: [
      'Women',
      'Men',
    ]
  };
  var pieOptions3 = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: {
      display: false},

      legendCallback: function(chart) { 
        var text = [];
        text.push('<div class="report-chart">');
        text.push('<div class="d-flex justify-content-center mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><p class="mb-0">2019</p></div>');
        text.push('</div>');
        text.push('</div>');
        return text.join("");
      },
  };


// donut chart start

  var doughnutPieData = {
    datasets: [{
      data: [1, 16],
      backgroundColor: [
        '#98BDFF',
        '#4B49AC'
      ],
    }],

    labels: [
      'Local',
      'Expat',
    ]
  };
  var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: {
      display: false},

      legendCallback: function(chart) { 
        var text = [];
        text.push('<div class="report-chart">');
          text.push('<div class="d-flex justify-content-center mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[0] + '"></div><p class="mb-0">Locals:</p></div>');
          text.push('<p class="mb-0 ml-1">1</p>');
          text.push('</div>');
          text.push('<div class="d-flex justify-content-center mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-2" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[1] + '"></div><p class="mb-0">Expats:</p></div>');
          text.push('<p class="mb-0 ml-1">16</p>');
          text.push('</div>');
        text.push('</div>');
        return text.join("");
      },
  };
  var doughnutPieData2 = {
    datasets: [{
      data: [2, 14],
      backgroundColor: [
        '#98BDFF',
        '#4B49AC'
      ],
    }],

    labels: [
      'Local',
      'Expat',
    ]
  };
  var doughnutPieOptions2 = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: {
      display: false},
      legendCallback: function(chart) { 
        var text = [];
        text.push('<div class="report-chart">');
          text.push('<div class="d-flex justify-content-center mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[0] + '"></div><p class="mb-0">Locals:</p></div>');
          text.push('<p class="mb-0 ml-1">1</p>');
          text.push('</div>');
          text.push('<div class="d-flex justify-content-center mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-2" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[1] + '"></div><p class="mb-0">Expats:</p></div>');
          text.push('<p class="mb-0 ml-1">14</p>');
          text.push('</div>');
        text.push('</div>');
        return text.join("");
      },
  };

  var doughnutPieData3 = {
    datasets: [{
      data: [1, 11],
      backgroundColor: [
        '#98BDFF',
        '#4B49AC'
      ],
    }],

    labels: [
      'Local',
      'Expat',
    ]
  };
  var doughnutPieOptions3 = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: {
      display: false},
      legendCallback: function(chart) { 
        var text = [];
        text.push('<div class="report-chart">');
          text.push('<div class="d-flex justify-content-center mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[0] + '"></div><p class="mb-0">Locals:</p></div>');
          text.push('<p class="mb-0 ml-1">2</p>');
          text.push('</div>');
          text.push('<div class="d-flex justify-content-center mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-2" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[1] + '"></div><p class="mb-0">Expats:</p></div>');
          text.push('<p class="mb-0 ml-1">11</p>');
          text.push('</div>');
        text.push('</div>');
        return text.join("");
      },
  };

// donut chart over

  var areaData = {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: true, // 3: no fill
    }]
  };

  var areaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    }
  }

  var multiAreaData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: 'Facebook',
        data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
        borderColor: ['rgba(255, 99, 132, 0.5)'],
        backgroundColor: ['rgba(255, 99, 132, 0.5)'],
        borderWidth: 1,
        fill: true
      },
      {
        label: 'Twitter',
        data: [7, 17, 12, 16, 14, 18, 16, 12, 15, 11, 13, 9],
        borderColor: ['rgba(54, 162, 235, 0.5)'],
        backgroundColor: ['rgba(54, 162, 235, 0.5)'],
        borderWidth: 1,
        fill: true
      },
      {
        label: 'Linkedin',
        data: [6, 14, 16, 20, 12, 18, 15, 12, 17, 19, 15, 11],
        borderColor: ['rgba(255, 206, 86, 0.5)'],
        backgroundColor: ['rgba(255, 206, 86, 0.5)'],
        borderWidth: 1,
        fill: true
      }
    ]
  };

  var multiAreaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }

  var scatterChartData = {
    datasets: [{
        label: 'First Dataset',
        data: [{
            x: -10,
            y: 0
          },
          {
            x: 0,
            y: 3
          },
          {
            x: -25,
            y: 5
          },
          {
            x: 40,
            y: 5
          }
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)'
        ],
        borderWidth: 1
      },
      {
        label: 'Second Dataset',
        data: [{
            x: 10,
            y: 5
          },
          {
            x: 20,
            y: -30
          },
          {
            x: -25,
            y: 15
          },
          {
            x: -10,
            y: 5
          }
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      }
    ]
  }

  var scatterChartOptions = {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }]
    }
  }
  // Get context with jQuery - using jQuery's .get() method.
  if ($("#barChart").length) {
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: data,
      options: options
    });
  }

  if ($("#lineChart").length) {
    var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: data,
      options: options
    });
  }

  if ($("#linechart-multi").length) {
    var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
    var lineChart = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData,
      options: options
    });
  }

  if ($("#areachart-multi").length) {
    var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
    var multiAreaChart = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData,
      options: multiAreaOptions
    });
  }

  if ($("#doughnutChart").length) {
    var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
    
    var doughnutChartPlugins = {
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = 1.5;
        ctx.font = "500 " + fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#324a5f";
    
        var text = "2017",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
    
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData,
      options: doughnutPieOptions,
      plugins: doughnutChartPlugins
    });

    document.getElementById('doughnutChart-legend').innerHTML = doughnutChart.generateLegend();
  }

  if ($("#doughnutChart2").length) {
    var doughnutChartCanvas = $("#doughnutChart2").get(0).getContext("2d");
    
    var doughnutChartPlugins2 = {
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = 1.5;
        ctx.font = "500 " + fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#324a5f";
    
        var text = "2018",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
    
    var doughnutChart2 = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData2,
      options: doughnutPieOptions2,
      plugins: doughnutChartPlugins2
    });

    document.getElementById('doughnutChart2-legend').innerHTML = doughnutChart2.generateLegend();
  }

  if ($("#doughnutChart3").length) {
    var doughnutChartCanvas = $("#doughnutChart3").get(0).getContext("2d");
    
    var doughnutChartPlugins3 = {
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = 1.5;
        ctx.font = "500 " + fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#324a5f";
    
        var text = "2019",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
    
    var doughnutChart3 = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData3,
      options: doughnutPieOptions3,
      plugins: doughnutChartPlugins3
    });

    document.getElementById('doughnutChart3-legend').innerHTML = doughnutChart3.generateLegend();
  }
  if ($("#pieChart").length) {
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: pieData,
      options: pieOptions
    });
    document.getElementById('pieChart-legend').innerHTML = pieChart.generateLegend();

  }

  if ($("#pieChart2").length) {
    var pieChartCanvas = $("#pieChart2").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: pieData2,
      options: pieOptions2
    });
    document.getElementById('pieChart2-legend').innerHTML = pieChart.generateLegend();

  }

  if ($("#pieChart3").length) {
    var pieChartCanvas = $("#pieChart3").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: pieData3,
      options: pieOptions3
    });
    document.getElementById('pieChart3-legend').innerHTML = pieChart.generateLegend();

  }

  if ($("#areaChart").length) {
    var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: areaData,
      options: areaOptions
    });
  }

  if ($("#scatterChart").length) {
    var scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
    var scatterChart = new Chart(scatterChartCanvas, {
      type: 'scatter',
      data: scatterChartData,
      options: scatterChartOptions
    });
  }

  if ($("#browserTrafficChart").length) {
    var doughnutChartCanvas = $("#browserTrafficChart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: browserTrafficData,
      options: doughnutPieOptions
    });
  }
});