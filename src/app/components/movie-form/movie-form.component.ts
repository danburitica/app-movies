import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit {
  movie: Movie = {
    title: '',
    titleType: '',
    year: '',
  };
  btnMessage: string = 'Create';
  edit: boolean = false;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    if (id) {
      this.movieService.getMovie(id).subscribe({
        next: (res) => {
          this.movie = res;
          this.edit = true;
          this.btnMessage = 'Update';
        },
        error: (err) => console.error(err),
      });
    }
  }

  onSubmit() {
    !this.edit
      ? this.movieService.createMovie(this.movie).subscribe({
          next: (res) => this.router.navigate(['/']),
          error: (err) => console.error(err),
        })
      : this.movieService.updateMovie(this.movie._id, this.movie).subscribe({
          next: (res) => this.router.navigate(['/']),
          error: (err) => console.error(err),
        });
  }
}
