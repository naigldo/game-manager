import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit{

  constructor() { }

  ngOnInit() {
  }

  gameMark = 8;

  gameType = "RPG";

  gameDescription = "Slaves to Armok: God of Blood - Chapter II: Dwarf Fortress (abrégé Dwarf Fortress voire DF) est un jeu vidéo indépendant créé par Tarn et Zach Adams. À la fois jeu de gestion et rogue-like, le jeu situe son action dans un univers médiéval-fantastique généré aléatoirement. En développement depuis 2002 et accessible gratuitement depuis 2006, le jeu est principalement financé par les donations de sa communauté. Le mode de jeu principal met le joueur aux commandes d'un groupe de nains pionniers, sans objectif défini autre que celui de survivre. Le jeu est connu pour sa complexité d’accès, à la fois célébrée et critiquée, et ses rapports de parties écrits par les joueurs. Il a notamment été intégré au sein du Museum of Modern Art en 2012 dans une collection consacrée à l'histoire du jeu vidéo. ";

}
