import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Reader } from 'protobufjs';
import { ProtobufService } from 'src/app/core/services/protobuf.service';
import { Configuration } from 'src/assets/proto/configuration';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent {

  myForm: FormGroup;

  audible = false;
  change = false;
  saved = false;

  constructor(
    private fb: FormBuilder,
    private protoBufService: ProtobufService
  ) {
    this.myForm = this.fb.group({
      timeout: new FormControl(null, [Validators.required, Validators.min(0)]),
      deviceName: new FormControl(null, [Validators.required]),
      audible: new FormControl('0'),
      visible: new FormControl('0')
    });
  }

  submitForm(): void {
    const values = {
      timeout: this.myForm.value.timeout,
      deviceName: this.myForm.value.deviceName,
      audibleFeedback: null,
      visibleFeedback: null
    };
    if (this.audible) {
      values.audibleFeedback = this.myForm.value.audible;
    } else {
      values.visibleFeedback = this.myForm.value.visible;
    }

    this.change = true;
    this.saved = true;
    setTimeout(() => {
      this.change = false;
    }, 3000);

    this.protoBufService.editSettings(values);
  }

  downloadBinaryFile(): void {
    this.protoBufService.downloadBinaryFile();
  }

  feedbackChanged($event: any): void {
    if ($event.target.value === 'audible') {
      this.audible = true;
    } else {
      this.audible = false;
    }
  }

  /**
   * upload configuration
   */
   uploadConfiguration(event: any): void {
    const file = event.target.files[0];
    file.arrayBuffer().then((arrayBuffer: any) => {
      const reader = new Reader(new Uint8Array(arrayBuffer));
      const message = Configuration.decode(reader);
      console.log(message);

      this.fillTheForm(message);
    });
  }

  fillTheForm(message: Configuration): void {
    this.myForm.patchValue({
      timeout: message.timeout,
      deviceName: message.deviceName
    });

    let audible = <HTMLInputElement>document.getElementById('audible');
    let visible = <HTMLInputElement>document.getElementById('visible');

    if (message.feedback === 'audibleFeedback') {
      this.audible = true;
      audible.checked = true;
      visible.checked = false;
      this.myForm.patchValue({
        audible: message.audibleFeedback?.toString()
      });
    } else {
      this.audible = false;
      audible.checked = false;
      visible.checked = true;
      this.myForm.patchValue({
        visible: message.visibleFeedback?.toString()
      });
    }
  }

}
