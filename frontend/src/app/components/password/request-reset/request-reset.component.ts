import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../../service/jarwis.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null
  };
  constructor(
    private Jarwis: JarwisService,
    private notify: SnotifyService,
    ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.notify.info('Wait...' ,{timeout:5000})
    this.Jarwis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }
  handleResponse(res) {
    this.notify.success(res.data,{timeout:0})
    this.form.email = null;
  }

}
