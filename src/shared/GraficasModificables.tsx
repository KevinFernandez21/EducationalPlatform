import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Registrando los componentes necesarios de chart.js
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface PlotData {
  labels: number[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    borderWidth: number;
    fill: boolean;
  }[];
}

const GraficasModificables = () => {
  const [plotData, setPlotData] = useState<PlotData | null>(null);

  const functions = ['x', 'x^2', 'cos(x)', 'sin(x)', 'E^x'];
  let functionIndex = 0;

  const fetchData = async (func: string) => {
    try {
      const response = await axios.post('https://intellectual-corrinne-orangecorp-fd76069e.koyeb.app/plot', { function: func });
      const { x_vals, y_vals} = response.data;
      setPlotData({
        labels: x_vals,
        datasets: [
          {
            label: `f(x)`,
            data: y_vals,
            borderColor: 'black',
            borderWidth: 2,
            fill: false,
          },
        ],
      });
    } catch (error) {
      console.error('Error al generar la gráfica:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData(functions[functionIndex]);
      functionIndex = (functionIndex + 1) % functions.length;
    }, 10000);

    // Fetch the initial function
    fetchData(functions[functionIndex]);
    functionIndex = (functionIndex + 1) % functions.length;

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center xl:w-[500px] w-[250px] ">
      {plotData && (
        <div>
          <Line
            data={plotData}
            options={{
              responsive: true,
              scales: {
                x: {
                  type: 'linear',
                  position: 'bottom',
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default GraficasModificables;
