import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ArtistListComponent } from "./artist-list.component";
import { ArtistDetailComponent } from "./artist-detail.component";

const routes: Routes = [
  { path: 'artists', component: ArtistListComponent, data: { animation: 'heroes' }/*, canActivate: [AuthGuard]*/ },
  { path: 'artists/:id', component: ArtistDetailComponent, data: { animation: 'hero' } },
  // { path: 'artist/:id/edit', component: ArtistEditComponent },
];

@NgModule({
  declarations: [
    ArtistListComponent,
    ArtistDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [],
})

export class ArtistsModule { }
