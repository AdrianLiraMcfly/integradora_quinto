import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorsService } from '../Services/sensors.service';
import { sensorsData, Sensors, Newsensor } from '../core/interfaces/sensors';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../components/modal/modal.component';
import { MessageService } from '../Services/message.service';


@Component({
  selector: 'app-sensors',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './sensors.component.html',
  styleUrl: './sensors.component.css'
})
export class SensorsComponent {
sensors: sensorsData;
id: number = 0;
newSensor: Newsensor = { name: '', status: 0};
updateSensors: Newsensor = { name: '', status: 0};
isError: boolean = false;
alert: string = '';
errormsg: string = '';

  constructor(private sensorsService: SensorsService, private messageService: MessageService){
    this.sensors = {data: []};
  }

  ngOnInit(){
    this.sensorsService.getSensors().subscribe(data => {
      console.log(data);
      this.sensors = data;
    });

    this.errormsg = this.messageService.getMessage();
    if(this.errormsg == 'Sensor eliminado correctamente'){
      this.isError = true;
      this.alert = 'alert alert-success';
      setTimeout(() => {
        this.isError = false;
        this.alert = '';
        this.errormsg = '';
      }, 10000);
    }
  }

  formSensor = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    status: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(1)])
  });

  updateSensorForm = new FormGroup({
    nameput: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    statusput: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(1)])
  });

  get name() { return this.formSensor.get('name')!; }
  get status() { return this.formSensor.get('status')!; }

  get nameput() { return this.updateSensorForm.get('nameput')!; }
  get statusput() { return this.updateSensorForm.get('statusput')!; }



  editModal(id: number, name: string, status: number){
    this.id = id;
    this.updateSensorForm.controls['nameput'].setValue(name);
    this.updateSensorForm.controls['statusput'].setValue(status);
  }

  deleteSensor(){
    this.sensorsService.deleteSensor(this.id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
      this.messageService.setMessage('Sensor eliminado correctamente');
    });
  }

  createSensor(){
    this.sensorsService.StoreSensor(this.newSensor).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

  updateSensor(){
    this.sensorsService.putSensor(this.id, this.updateSensors).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }
  openModal(id: number){
    this.id = id;
  }
}
