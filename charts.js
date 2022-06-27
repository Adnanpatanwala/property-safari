var data = [
    {x:"PROFIT",value:64},
    {x:"LOSS",value:36}
];
var chart = anychart.pie(data);
chart.innerRadius("50%");
chart.container("continer-chart");
chart.draw();

 var databar = [
    ["2011",60000],
    ["2012",75000],
    ["2013",85000],
    ["2014",90000],
    ["2015",100000],
    ["2016",12000],
    ["2017",130000],
    ["2018",10000],
    ["2019",56000],
    ["2020",78000],
    ["2021",65000],
    ["2022",70000],
 ];
 var chartbar = anychart.column();
 var series = chartbar.column(databar);
 chartbar.container("bar");
 chartbar.draw();