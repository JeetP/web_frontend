import { Component, OnInit } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Real-Time Stock Prices';
  stock: any;

  private socket$!: WebSocketSubject<any>;
  private WEBSOCKET_URL = "wss://your-api-id.execute-api.us-east-1.amazonaws.com/prod";

  ngOnInit() {
    this.socket$ = new WebSocketSubject(this.WEBSOCKET_URL);
    
    this.socket$.subscribe(
      (data) => this.stock = data,
      (err) => console.error(err),
      () => console.warn("WebSocket connection closed")
    );
  }
}