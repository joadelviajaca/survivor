// Definimos la interfaz aquí mismo por ahora
export interface Task {
  id: number;
  title: string;
  priority: 'baja' | 'media' | 'alta'; // Un pequeño extra visual
  completed: boolean;
}
