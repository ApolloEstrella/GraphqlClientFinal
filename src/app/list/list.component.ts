import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import gql from "graphql-tag"

import { Movie, Query } from '../types'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movie: Observable<Movie[]>
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.movie = this.apollo.watchQuery<Query>({
       query: gql`
         query allMovie {
           movies {
              
             name
             
           }
         }     
       `
       })
       .valueChanges
       .pipe(
         map(result => result.data.allMovie)
       )
       
  }

}
