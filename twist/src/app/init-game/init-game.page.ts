import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-init-game",
  templateUrl: "./init-game.page.html",
  styleUrls: ["./init-game.page.scss"]
})
export class InitGamePage implements OnInit {
  private players: string[] = new Array();
  private playerVar: string;

  constructor() {}

  ngOnInit() {}

  addPlayer(): void {
    if (this.playerVar !== null) {
      this.players.push(this.playerVar);
    }
    this.playerVar = null;
  }

  removePlayer(name: string): void {
    this.players = this.players.filter(data => {
      return data !== name;
    });
  }
}
