import { Injectable } from '@angular/core';

import { Configuration } from 'src/assets/proto/configuration';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ProtobufService {

  latestMessage = {};

  editSettings(values: any): void {
    this.latestMessage = {
      timeout: values.timeout ? values.timeout : null,
      deviceName: values.deviceName ? values.deviceName : null,
      audibleFeedback: values.audibleFeedback ? parseInt(values.audibleFeedback) : null,
      visibleFeedback: values.visibleFeedback ? parseInt(values.visibleFeedback): null
    };

    const message = Configuration.create(this.latestMessage);
  }

  downloadBinaryFile(): void {
    const buffer = Configuration.encode(this.latestMessage).finish();

    const blob = new Blob([ buffer ], { type: 'application/protobuf' });
    saveAs(blob, 'myConfig.config');
  }
}
