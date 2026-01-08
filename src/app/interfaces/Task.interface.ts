// Definimos la interfaz aquí mismo por ahora
export interface Task {
  id: number;
  titulo: string;
  prioridad: 'baja' | 'media' | 'alta'; // Un pequeño extra visual
  completada: boolean;
}
