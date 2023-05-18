import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export default function Doughnut({ data, title, label }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Pie Chart",
            data: data.values,
            backgroundColor: ["blue", "red", "green"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: "bottom",
          },
          title: {
            display: true,
            position: "bottom",

            text: title,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={canvasRef} />;
}
