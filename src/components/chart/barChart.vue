<template>
  <apexchart
    height="350"
    type="bar"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: "Marine Sprite",
          data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
          name: "Striking Calf",
          data: [53, 32, 33, 52, 13, 43, 32],
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 9, 15, 11, 20],
        },
        {
          name: "Bucket Slope",
          data: [19, 17, 15, 18, 16, 19, 14],
        },
        {
          name: "Reborn Kid",
          data: [25, 12, 19, 32, 25, 24, 10],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 450,
          stacked: true,

          toolbar: {
            show: false,
          },
        },

        colors: ["#0156a2", "#32a7fa", "#3fd1b5", "#405db2", "#1c93d0"],
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        xaxis: {
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
          labels: {
            show: false,
            formatter: function (val) {
              return val + "K";
            },
          },
        },
        yaxis: {
          title: {
            text: undefined,
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K";
            },
          },
        },
        fill: {
          opacity: 1,
        },
      },
    };
  },
};
</script>

<style></style>
