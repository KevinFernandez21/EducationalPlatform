import React, { useState } from 'react';
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

const Graficas = () => {
  const [functionInput, setFunctionInput] = useState<string>('');
  const [plotData, setPlotData] = useState<PlotData | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/plot', { function: functionInput });
      const { x_vals, y_vals, latex } = response.data;
      setPlotData({
        labels: x_vals,
        datasets: [
          {
            label: `f(x) = ${latex}`,
            data: y_vals,
            borderColor: 'orange',
            borderWidth: 2,
            fill: false,
          },
        ],
      });
    } catch (error) {
      console.error('Error al generar la gráfica:', error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={functionInput}
          onChange={(e) => setFunctionInput(e.target.value)}
          placeholder="Ingrese la función f(x)"
        />
        <button type="submit">Generar Gráfica</button>
      </form>
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

export default Graficas;
