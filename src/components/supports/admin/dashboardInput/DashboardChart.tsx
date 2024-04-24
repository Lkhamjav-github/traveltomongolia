import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js library

export const DashboardChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: ["January", "February", "March", "April", "May"],
          datasets: [
            {
              label: "",
              data: [50, 60, 70, 65, 80],
              borderWidth: 2,
            },
          ],
        };

        const options = {
          elements: {
            point: {
              radius: 0,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          scales: {
            y: {
              display: false,
              grid: {
                display: false,
              },
            },
            x: {
              display: false,
              grid: {
                display: false,
              },
            },
          },
        };
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: data,
          options: options,
        });
      }
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="100" height="40"></canvas>
    </div>
  );
};
