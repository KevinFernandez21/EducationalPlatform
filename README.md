
## Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local.

### Prerrequisitos

- Node.js y npm
- Python 3.x
- pip

### Backend (FastAPI)

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/educationalplatform.git
    cd educationalplatform/backend
    ```

2. Crea y activa un entorno virtual (opcional pero recomendado):
    ```bash
    python -m venv env
    source env/bin/activate  # En Windows usa `env\Scripts\activate`
    ```

3. Instala las dependencias de Python:
    ```bash
    pip install -r requirements.txt
    ```

4. Inicia el servidor de FastAPI:
    ```bash
    uvicorn main:app --reload
    ```

### Frontend (React)

1. Abre una nueva terminal y navega al directorio del proyecto frontend:
    ```bash
    cd educationalplatform
    ```

2. Instala las dependencias de Node.js:
    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## Uso

Una vez que el servidor backend y el servidor frontend estén en funcionamiento, abre tu navegador web y navega a `http://localhost:3000` para ver la aplicación en acción.

## Dependencias

### Frontend

Las principales dependencias de JavaScript utilizadas en este proyecto son:

```json
"dependencies": {
    "express": "^4.19.2",
    "install": "^0.13.0",
    "katex": "^0.16.11",
    "react": "^18.3.1",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.3.1",
    "react-latex-next": "^3.0.0",
    "react-multi-carousel": "^2.8.5",
    "react-router-dom": "^6.24.1"
  },
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^7.13.1",
    "@typescript-eslint/parser": "^7.13.1",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "postcss": "^8.4.39",
    "tailwindcss": "^3.3.4",
    "typescript": "^5.2.2",
    "vite": "^5.3.1"
  }
