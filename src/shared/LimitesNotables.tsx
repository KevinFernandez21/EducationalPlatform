// src/components/LimitesNotables.jsx
import 'katex/dist/katex.min.css';
import katex from 'katex';
import styled from '@emotion/styled';

// JSON con los límites notables
const limitesNotables = [
  { expresion: "lim_{x \\to 0} \\frac{\\sin x}{x}", resultado: "1" },
  { expresion: "lim_{x \\to 0} \\frac{\\tan x}{x}", resultado: "1" },
  { expresion: "lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}", resultado: "\\frac{1}{2}" },
  { expresion: "lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x", resultado: "e" },
  { expresion: "lim_{x \\to 0} (1 + x)^{1/x}", resultado: "e" },
  { expresion: "lim_{x \\to \\infty} \\left(\\frac{x+1}{x}\\right)^x", resultado: "e" },
  { expresion: "lim_{x \\to 0} \\frac{\\ln(1+x)}{x}", resultado: "1" },
  { expresion: "lim_{x \\to 0} \\frac{e^x - 1}{x}", resultado: "1" },
  { expresion: "lim_{x \\to 0} \\frac{a^x - 1}{x}", resultado: "\\ln a", condicion: "a > 0" },
  { expresion: "lim_{x \\to 0} \\frac{x}{\\sin x}", resultado: "1" },
  { expresion: "lim_{x \\to \\infty} \\frac{\\ln x}{x}", resultado: "0" },
  { expresion: "lim_{x \\to 0^+} x^x", resultado: "1" },
  { expresion: "lim_{x \\to \\infty} \\frac{x^n}{e^x}", resultado: "0", condicion: "para cualquier n" },
  { expresion: "lim_{x \\to 0} (1 - \\cos x)", resultado: "0" },
  { expresion: "lim_{x \\to \\infty} \\left(1 + \\frac{k}{x}\\right)^x", resultado: "e^k" },
  { expresion: "lim_{x \\to 0} \\frac{\\arctan x}{x}", resultado: "1" },
  { expresion: "lim_{x \\to \\infty} \\frac{n!}{x^x}", resultado: "0" },
  { expresion: "lim_{x \\to 0} \\left(\\frac{\\sin x}{x}\\right)^x", resultado: "1" }
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Formula = styled.div`
  font-size: 1.2em;
  margin: 10px 0;
`;

const LimitesNotables = () => {
  return (
    <Container>
      {limitesNotables.map((limite, index) => (
        <Formula  key={index}>
          <div className='flex'>
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString(limite.expresion) }} />
          <span> = </span>
          <div dangerouslySetInnerHTML={{ __html: katex.renderToString(limite.resultado) }} />
          </div>
          
          {limite.condicion && (
            <div>
              <small>{limite.condicion}</small>
            </div>
          )}
        </Formula>
      ))}
    </Container>
  );
};

export default LimitesNotables;