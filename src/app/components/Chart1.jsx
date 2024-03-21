'use client'
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Chart1 = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && data.sparkline_in_7d) {
      const ctx = chartRef.current;
      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          // labels: Array.from({ length: data.sparkline_in_7d.length }, (_, i) => i),
          datasets: [
            {
              label: "Price",
              data: data.sparkline_in_7d,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              
            },
          ],
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default Chart1;
