import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    var url = location.href.split('/')[4]

    if(url.includes('tt') == false){
      url = "http://www.omdbapi.com/?apikey=2729c5a&t="+ location.href.split('/')[4]
    }else{
      url = "http://www.omdbapi.com/?apikey=2729c5a&i="+ location.href.split('/')[4]
    }

    $.ajax({
      method: "get",
      url: url,
      success: (data)=>{    

      try{
        var Title = JSON.stringify(data.Title);
        var Plot = JSON.stringify(data.Plot);
        var imdbRating = JSON.stringify(data.imdbRating)
        var Runtime = JSON.stringify(data.Runtime)
        var Poster = JSON.stringify(data.Poster)
        var imdbID = JSON.stringify(data.imdbID)
        var Diretor = JSON.stringify(data.Director)
        var Writer = JSON.stringify(data.Writer)
        var Awards = JSON.stringify(data.Awards)
        var Production = JSON.stringify(data.Production)
        var Year = JSON.stringify(data.Year)
        var Language = JSON.stringify(data.Language)
        var Actors = JSON.stringify(data.Actors)
        var Genre = JSON.stringify(data.Genre)
        
        var Star = []

        if(data.Response == 'True')
          {document.getElementById('jumbotron').remove()}
        if(data.Response == 'False' || Title == undefined || Title == '"N/A"')
          {Title = '"Indefinido"'}
        if(data.Response == 'False' || Plot == undefined ||Plot == '"N/A"')
          {Plot = '"Indefinido"'}
        if(data.Response == 'False' || imdbRating == undefined || imdbRating == '"N/A"')
          {imdbRating = '"0"'}
        if(data.Response == 'False' || imdbID == undefined || imdbID == '"N/A"')
          {imdbID = '"Indefinido"'}
        if(data.Response == 'False' || Diretor == undefined || Diretor == '"N/A"')
          {Diretor = '"Indefinido"'}
        if(data.Response == 'False' || Writer == undefined || Writer == '"N/A"')
          {Writer = '"Indefinido"'}
        if(data.Response == 'False' || Awards == undefined || Awards == '"N/A"')
          {Awards = '"Indefinido"'}
        if(data.Response == 'False' || Production == undefined || Production == '"N/A"')
          {Production = '"Indefinido"'}
        if(data.Response == 'False' || Year == undefined || Year == '"N/A"')
          {Year = '"Indefinido"'}
        if(data.Response == 'False' || Language == undefined || Language == '"N/A"')
          {Language = '"Indefinido"'}
        if(data.Response == 'False' || Actors == undefined || Actors == '"N/A"')
          {Actors = '"Indefinido"'}
          if(data.Response == 'False' || Genre == undefined || Genre == '"N/A"')
          {Genre = '"Indefinido"'}
        if(data.Response == 'False' || Poster == undefined || Poster == '"N/A"')
          {Poster = JSON.stringify("/assets/Imagens/n-a.jpg")}

          if(JSON.parse(imdbRating) <= 0){
          for(var i = 0;i<5;i++)
          Star.push('fa fa-star-o')
        }

        if(JSON.parse(imdbRating) > 0 && JSON.parse(imdbRating) < 2){
          Star.push('fa fa-star')
          for(var i = 0;i<5;i++)
          Star.push('fa fa-star-o')
        }

        if(JSON.parse(imdbRating) > 2 && JSON.parse(imdbRating) < 4){
          Star.push('fa fa-star')
          Star.push('fa fa-star')
          for(var i = 0;i<3;i++)
          Star.push('fa fa-star-o')
        }

        if(JSON.parse(imdbRating) > 4 && JSON.parse(imdbRating) < 6){
          Star.push('fa fa-star')
          Star.push('fa fa-star')
          Star.push('fa fa-star')
          for(var i = 0;i<2;i++)
          Star.push('fa fa-star-o')
        }

        if(JSON.parse(imdbRating) > 6 && JSON.parse(imdbRating) < 8){
          Star.push('fa fa-star')
          Star.push('fa fa-star')
          Star.push('fa fa-star')
          Star.push('fa fa-star')
          for(var i = 0;i<5;i++)
          Star.push('fa fa-star-o')
        }
      
        else{
          for(var i = 0;i<5;i++)
          Star.push('fa fa-star')
        }


        Runtime = Runtime.replace(' ','')

        var control = `
        <div class="row">
          <div class="jumbotron col-md-12">
            <div class="row">
              <div class="col-md-10">
                <h1 class="display-3">${JSON.parse(Title)}</h1>
                <p class="lead">${JSON.parse(Plot)}</p>
                <hr class="my-2" style="width: 600px;">
                <div class="row">
                  <h2 class="col-md-12" style="margin-bottom: 30px">Mais informações</h2>   
                  <div class="col-md-3">       
                    <div class="row">
                      <h5 class="col-md-12">Genêro: <span>${JSON.parse(Genre)}</span></h5>
                    </div>       
                    <div class="row">
                      <h5 class="col-md-3">Linguagem: <span>${JSON.parse(Language)}</span></h5>
                    </div>           
                    <div class="row">
                      <h5 class="col-md-3">Tempo: <span>${JSON.parse(Runtime)}</span></h5>
                    </div>
                    <div class="row">
                      <h5 class="col-md-3">Ano: <span>${JSON.parse(Year)}</span></h5>
                    </div>
                    <div class="row">
                      <h5 class="col-md-3">Produtora: <span>${JSON.parse(Production)}</span></h5>
                    </div>
                    <div class="row">
                      <h5 class="col-md-3">Nota:</h5>
                      <div class="rating col-md-8">
                        <span style="font-size: 20px !important;" class="${Star[0]}"></span>
                        <span style="font-size: 20px !important;" class="${Star[1]}"></span>
                        <span style="font-size: 20px !important;" class="${Star[2]}"></span>
                        <span style="font-size: 20px !important;" class="${Star[3]}"></span>
                        <span style="font-size: 20px !important;" class="${Star[4]}"></span>
                      </div>
                    </div>              
                  </div>                
                  <div class="col-md-2">              
                    <div style="text-align: center;">
                      <h3 class="col-md-12">Diretores</h3>
                      <p class="col-md-12">${JSON.parse(Diretor)}</p>
                    </div>
                  </div>
                  <div class="col-md-2">              
                    <div style="text-align: center;">
                      <h3 class="col-md-12">Escritores</h3>
                      <p class="col-md-12">${JSON.parse(Writer)}</p>
                    </div>
                  </div>
                  <div class="col-md-2">      
                    <div style="text-align: center;">
                      <h3 class="col-md-12">Atores</h3>
                      <p class="col-md-12">${JSON.parse(Actors)}</p>
                    </div>
                  </div>
                  <div class="col-md-2">              
                    <div style="text-align: center;">
                      <h3 class="col-md-12">Prêmios</h3>
                      <p class="col-md-12">${JSON.parse(Awards)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <img class="poster col-md-2" src="${JSON.parse(Poster)}" alt="">
            </div>
            </div>
        </div>  
        `
        $('#description').append(control)
      }
      catch{
        document.getElementById('jumbotron').style.display = 'block'
      }
      
     }
    })    
  }

}
