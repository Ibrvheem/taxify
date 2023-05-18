import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export default function Line({ data, title }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: title,
            data: data.values,
            backgroundColor: data.values.map((value, index) => {
              if (index % 2 == 0) {
                return "#FF5B5B";
              } else {
                return "#F7C604";
              }
            }),
          },
        ],
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
