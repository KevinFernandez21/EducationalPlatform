import numpy as np
import matplotlib.pyplot as plt
import sympy as sym

# Definimos la variable simbólica
x = sym.symbols('x')

f_input = input('Ingrese la función f(x): ')


f_input = f_input.replace('e', 'sym.E')

try:
    f = sym.sympify(f_input)
except sym.SympifyError as e:
    print(f"Error al convertir la función: {e}")
    exit(1)


f_num = sym.lambdify(x, f, 'numpy')

x_vals = np.linspace(-10, 10, 400)
y_vals = f_num(x_vals)

plt.figure(figsize=(8, 6))
plt.plot(x_vals, y_vals, label=f'$f(x) = {sym.latex(f)}$', color='orange')
plt.xlabel('$x$')
plt.ylabel('$f(x)$')
plt.title(f'Gráfica de $f(x) = {sym.latex(f)}$')
plt.legend()
plt.grid(True)
plt.show()