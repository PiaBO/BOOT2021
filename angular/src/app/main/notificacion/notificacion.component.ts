import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/common-services/notification.service';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  constructor(private vm: NotificationService) { }

  public get VM() { return this.vm; }
  ngOnInit(): void {
  }

}
