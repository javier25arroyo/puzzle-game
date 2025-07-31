import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PuzzleBoardComponent } from './components/puzzle-board/puzzle-board.component'; // ← Comenta o corrige este import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // , PuzzleBoardComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rompecabezas';
}
