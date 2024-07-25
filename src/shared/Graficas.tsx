import React, { useState, useEffect } from 'react';
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
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

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

interface GraficasProps {
  children: string;
}

const Graficas: React.FC<GraficasProps> = ({ children }) => {
  const [plotData, setPlotData] = useState<PlotData | null>(null);
  const [latexString, setLatexString] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://intellectual-corrinne-orangecorp-fd76069e.koyeb.app/plot', { function: children });
        const { x_vals, y_vals, latex } = response.data;
        setPlotData({
          labels: x_vals,
          datasets: [
            {
              label: ``,
              data: y_vals,
              borderColor: 'black',
              borderWidth: 2,
              fill: false,
            },
          ],
        });
        setLatexString(`\\(f(x) = ${latex}\\)`);
      } catch (error) {
        console.error('Error al generar la gráfica:', error);
      }
    };

    if (children) {
      fetchData();
    }
  }, [children]);

  return (
    <div className="text-center w-[300px]">
      {latexString && <Latex>{latexString}</Latex>}
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