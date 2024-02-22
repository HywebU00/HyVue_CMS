<template>
  <apexchart
    type="pie"
    style="width: 100%"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  data() {
    return {
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          type: "pie",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        colors: ["#0156a2", "#32a7fa", "#3fd1b5", "#405db2", "#1c93d0"],
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 1200,
            options: {
              chart: {},
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 991,
            options: {
              chart: {},
              legend: {
                position: "right",
              },
            },
          },
          {
            breakpoint: 767,
            options: {
              chart: {},
              legend: {
                position: "right",
              },
            },
          },
        ],
      },
    };
  },
};
// https://apexcharts.com/docs/chart-types/pie-donut/
</script>

<style></style>
