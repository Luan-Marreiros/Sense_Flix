import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    for(var i = 0;i<20;i++){
      var random = Math.floor(Math.random() * 1500000) + 1000000
      $.ajax({
        method: "get",
        url: "http://www.omdbapi.com/?apikey=2729c5a&i=tt"+ random,
        success: (data)=>{     

        var Title = JSON.stringify(data.Title);
        var Plot = JSON.stringify(data.Plot);
        var imdbRating = JSON.stringify(data.imdbRating)
        var Runtime = JSON.stringify(data.Runtime)
        var Poster = JSON.stringify(data.Poster)
        var imdbID = JSON.stringify(data.imdbID)
        var Conversor;

        if(Poster == undefined || Poster == '"N/A"'){
          Poster = JSON.stringify("/assets/Imagens/n-a.jpg")
        }

        $('#filmes').append(`
        <a class="col-md-2 bgfime" href="/detalhes/${JSON.parse(imdbID)}">
          <img class="poster col-md-12" src="${JSON.parse(Poster)}" alt="">
          <div class="poster-text">
            <h3>${JSON.parse(Title)}</h3>
            <p>${JSON.parse(Plot)}</p>
            <div class="form-group">
              <small id="notaFilme">Nota: ${JSON.parse(imdbRating)}</small>
              <small id="tempoFilme">${JSON.parse(Runtime)}</small>
            </div>    
          </div>
        </a>
        `)
       }
     })     
    }
  }
}
