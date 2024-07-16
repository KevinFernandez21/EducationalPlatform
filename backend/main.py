from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import sympy as sym

app = FastAPI()

# Configuración de CORS
origins = [
    "http://localhost:3000",  # React por defecto corre en el puerto 3000
    "http://localhost:8000"   # Si estás usando Vite.js para React
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FunctionInput(BaseModel):
    function: str

@app.post("/plot")
def plot_function(input: FunctionInput):
    x = sym.symbols('x')
    f_input = input.function.replace('e', 'sym.E')
    
    try:
        f = sym.sympify(f_input)
    except sym.SympifyError as e:
        raise HTTPException(status_code=400, detail=f"Error al convertir la función: {e}")

    f_num = sym.lambdify(x, f, 'numpy')
    x_vals = np.linspace(-10, 10, 400)
    y_vals = f_num(x_vals).tolist()  # Convertir a lista para JSON

    return {"x_vals": x_vals.tolist(), "y_vals": y_vals, "latex": sym.latex(f)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=7000)