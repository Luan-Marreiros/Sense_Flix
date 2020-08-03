import { Component, OnInit, Input } from '@angular/core';
import 'bootstrap'
import * as $ from 'jquery'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  frase = 'indefinido';

  constructor() { }

  click(){
    setTimeout(()=>{this.frase = $('#inputTitle').val()},200)
  }

  ngOnInit() {

    setInterval(()=>{
      if($( window ).width() < 640){
        $('#btn-botao').text('')
        $('#btn-botao').addClass('fa fa-search')
      }else{
        $('#btn-botao').text('Procurar')
        $('#btn-botao').removeClass('fa fa-search')
      }
    })

    $('#btnCat').click(()=>{
      $("#titleCat").css('display','block')
      $("#filmes").css('display','flex')
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#titleCat").offset().top}, 800);
    })

  }

}
