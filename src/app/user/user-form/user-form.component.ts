import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  title: string = "Cadastrar usuário";
  form!: FormGroup;
  // form = this.formBuilder.group(
  //   {
  //     nome: new FormControl('', [Validators.required]),
  //     email: new FormControl('', [Validators.required]),
  //     telefone: new FormControl('', [Validators.required]),
  //     data_nascimento: new FormControl('', [Validators.required]),
  //   }
  // )

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nome: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        telefone: new FormControl('', [Validators.required]),
        data_nascimento: new FormControl('', [Validators.required]),
      }
    )
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value)
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
