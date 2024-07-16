// src/types/preview.d.ts
declare module '../../data/preview.js' {
    interface ResumenItem {
      titulo: string;
      contenido: string;
    }
  
    interface Tema {
      tema_principal: string;
      resumen: ResumenItem[];
    }
  
    const previewData: Tema[];
    export default previewData;
  }