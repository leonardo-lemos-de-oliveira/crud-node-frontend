import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from './../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() title!: string;

  form!: FormGroup;
  userID!: number;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.userID = params['id']);

    this.form = this.formBuilder.group(
      {
        id: "",
        nome: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        telefone: new FormControl('', [Validators.required]),
        data_nascimento: new FormControl('', [Validators.required]),
      });

    if (this.userID) {
      this.userService.getById(this.userID)
        .subscribe(
          data => {
            this.form.patchValue({
              id: data.id,
              nome: data.nome,
              email: data.email,
              telefone: data.telefone,
              data_nascimento: data.data_nascimento
            }),
            console.log(data)
          }
        );

    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.userService.save(this.form.value).subscribe(data => console.log(data));
  }

  //FORM VALIDATION

  get nome() {
    return this.form.get('nome')!;
  }

  get email() {
    return this.form.get('email')!;
  }

  get telefone() {
    return this.form.get('telefone')!;
  }

  get data_nascimento() {
    return this.form.get('data_nascimento')!;
  }
}
