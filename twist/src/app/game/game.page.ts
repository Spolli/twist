import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-game",
  templateUrl: "./game.page.html",
  styleUrls: ["./game.page.scss"],
  template: `
    <pre>{{ state$ | async | json }}</pre>
  `
})
export class GamePage implements OnInit {
  private moves: string[] = ["mano", "piede"];
  private directions: string[] = ["dx", "sx"];
  private colors: string[] = [];
  private players: string[];
  private state$: Observable<object>;

  private genRandomNumber(len: number): number {
    return Math.floor(Math.random() * len);
  }

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
}
