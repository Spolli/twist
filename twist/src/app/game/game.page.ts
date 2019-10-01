import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-game",
  templateUrl: "./game.page.html",
  styleUrls: ["./game.page.scss"]
})
export class GamePage implements OnInit {
  private moves: string[];
  private directions: string[];
  private colors: string[];
  private players: string[];
  private game_text: string;
  private turn: number;

  private color2hex: object = {
    nero: "#ffffff",
    giallo: "#FFC300 ",
    arancione: "#ffa500",
    blu: "#0000ff",
    verde: "#00ff00",
    celeste: "#03fce3",
    rosa: "#ffc0cb"
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.players = this.router.getCurrentNavigation().extras.state.players;
    this.next();
    this.moves = ["mano", "piede"];
    this.directions = ["destra", "sinistra"];
    this.colors = [
      "nero",
      "giallo",
      "arancione",
      "blu",
      "verde",
      "celeste",
      "rosa"
    ];
    this.turn = 0;
  }

  private genRandomNumber(len: number): number {
    return Math.floor(Math.random() * len);
  }

  private next(): void {
    let tmpColor: number = this.genRandomNumber(this.colors.length);
    this.game_text =
      this.players[this.turn] +
      ",\n" +
      this.moves[this.genRandomNumber(this.moves.length)] +
      " " +
      this.directions[this.genRandomNumber(this.directions.length)] +
      " sul colore " +
      this.colors[tmpColor];
    if (this.turn === this.players.length - 1) {
      this.turn = 0;
    } else {
      this.turn++;
    }
    document.body.style.setProperty(
      "--my-var",
      this.color2hex[this.colors[tmpColor]]
    );
  }
}
