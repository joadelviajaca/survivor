import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Definimos la interfaz aquí mismo por ahora
export interface Tarea {
  id: number;
  titulo: string;
  prioridad: 'baja' | 'media' | 'alta'; // Un pequeño extra visual
  completada: boolean;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nuevaTarea = '';
  
  tareas: Tarea[] = [
    { id: 1, titulo: 'Revisar generadores de oxígeno', prioridad: 'alta', completada: false },
    { id: 2, titulo: 'Inventario de latas de conserva', prioridad: 'media', completada: true }
  ];

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      const tarea: Tarea = {
        id: Date.now(),
        titulo: this.nuevaTarea,
        prioridad: 'media', // Por defecto
        completada: false
      };
      this.tareas.push(tarea);
      this.nuevaTarea = ''; // Limpiar input
    }
  }

  borrarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

  cambiarEstado(tarea: Tarea) {
    tarea.completada = !tarea.completada;
  }
}
