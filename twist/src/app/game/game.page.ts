import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-game",
  templateUrl: "./game.page.html",
  styleUrls: ["./game.page.scss"]
})
export class GamePage implements OnInit {
  private moves: string[] = ["mano", "piede"];
  private directions: string[] = ["destra", "sinistra"];
  private colors: string[] = [
    "nero",
    "giallo",
    "arancione",
    "blu",
    "verde",
    "celeste",
    "rosa"
  ];
  private players: string[];
  private game_text: string = "";
  private turn: number = 0;

  private color2hex: object = {
    nero: "#ffffff",
    giallo: "#FFC300 ",
    arancione: "#ffa500",
    blu: "#0000ff",
    verde: "#00ff00",
    celeste: "#03fce3",
    rosa: "#ffc0cb"
  };

  private genRandomNumber(len: number): number {
    return Math.floor(Math.random() * len);
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.players = this.router.getCurrentNavigation().extras.state.players;
    this.next();
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
