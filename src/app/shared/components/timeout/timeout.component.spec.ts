import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ProtobufService } from 'src/app/core/services/protobuf.service';

import { TimeoutComponent } from './timeout.component';

describe('TimeoutComponent', () => {
  let component: TimeoutComponent;
  let fixture: ComponentFixture<TimeoutComponent>;
  let service: ProtobufService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeoutComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    service = TestBed.inject(ProtobufService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
