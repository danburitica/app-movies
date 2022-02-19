import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe({
      next: (res) => (this.movies = res),
      error: (err) => console.error(err),
    });
  }

  updateMovie(id: any, movie: Movie) {}

  deleteMovie(id: string | undefined) {
    this.movieService.deleteMovie(id).subscribe({
      next: (res) => {
        alert('Movie deleted successfully');
        this.getMovies();
      },
      error: (err) => console.error(err),
    });
  }
}
