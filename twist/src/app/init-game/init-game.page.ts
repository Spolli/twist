import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-init-game",
  templateUrl: "./init-game.page.html",
  styleUrls: ["./init-game.page.scss"]
})
export class InitGamePage implements OnInit {
  private players: string[];
  private playerVar: string;
  private navExtra: NavigationExtras;
  constructor(private router: Router) {}

  ngOnInit() {
    this.players = new Array();
    this.playerVar = null;
    this.navExtra = {
      state: { players: this.players }
    };
  }

  addPlayer(): void {
    if (this.playerVar !== null) {
      this.players.push(this.playerVar);
    }
    this.playerVar = null;
  }

  startGame(): void {
    if (this.players.length > 0) {
      this.router.navigate(["/game"], this.navExtra);
    }
  }

  removePlayer(name: string): void {
    this.players = this.players.filter(data => {
      return data !== name;
    });
  }
}
