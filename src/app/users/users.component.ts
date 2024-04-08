import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../Services/users.service';
import { UserData} from '../core/interfaces/users';
import { userRegister } from '../core/interfaces/userRegister';
import { ModalComponent } from '../components/modal/modal.component';
import { MessageService } from '../Services/message.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ModalComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: UserData;
  id: number=0;
  isError: boolean = false;
  alert: string = '';
  errormsg: string = '';
  userfilter: string = 'all';
  newUser:userRegister = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    status: 1,
    rol_id: 1
  }
  putUser:userRegister = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    status: 1,
    rol_id: 1
  }

  constructor(private usersService: UsersService, private messageService: MessageService) {
    this.users = {data: []};
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => this.users = users);
    this.errormsg = this.messageService.getMessage();
    if(this.errormsg == 'Usuario Eliminado Correctamente') {
      this.isError = true;
      this.alert = 'alert alert-success';
      setTimeout(() => {
        this.isError = false;
        this.alert = '';
        this.errormsg = '';
      }, 10000);
    }
    if(this.errormsg == 'Usuario Creado Correctamente') {
      this.isError = true;
      this.alert = 'alert alert-success';
      setTimeout(() => {
        this.isError = false;
        this.alert = '';
        this.errormsg = '';
      }, 10000);
    }
    if(this.errormsg == 'Usuario Actualizado Correctamente') {
      this.isError = true;
      this.alert = 'alert alert-success';
      setTimeout(() => {
        this.isError = false;
        this.alert = '';
        this.errormsg = '';
      }, 10000);
    }
  }

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password_confirmation: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    rol_id: new FormControl('', [Validators.required])
  });

  updateUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password_confirmation: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    rol_id: new FormControl('', [Validators.required])
  });

  get name() { return this.userForm.get('name') }
  get email() { return this.userForm.get('email') }
  get password() { return this.userForm.get('password') }
  get password_confirmation() { return this.userForm.get('password_confirmation') }
  get status() { return this.userForm.get('status') }
  get rol_id() { return this.userForm.get('rol_id') }

  createUser() {
    this.usersService.StoreUser(this.newUser).subscribe(res => {
      console.log(res);
      this.messageService.setMessage('Usuario Creado Correctamente');
      this.ngOnInit();
    });
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe(res => {
      console.log(res);
      this.messageService.setMessage('Usuario Eliminado Correctamente');
      this.ngOnInit();

    }, error => {
      this.isError = true;
      this.errormsg = error.message;
      setTimeout(() => {
        this.isError = false;
      }, 3000);
    });
  }

  editUser(id: number) {
    this.usersService.putUser(this.putUser, id).subscribe(res => {
      this.messageService.setMessage('Usuario Actualizado Correctamente');
      this.ngOnInit();
    }
    );
  }

  openModal(id: number) {
    this.id = id;
  }

  editModal(id: number, name: string, email: string, status: number) {
    this.id = id;
    this.putUser.name = name;
    this.putUser.email = email;
    this.putUser.status = status;
  }

  filterUsers(user: any) {
    if(user == 'all') {
      this.userfilter = 'all';
    } else if(user == 'active') {
      this.userfilter = 'active';
    }
    else if(user == 'inactive') {
      this.userfilter = 'inactive';
  }
}
}
