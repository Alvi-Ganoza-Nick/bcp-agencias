import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private service: StorageService
  ) {
    this.form = this.fb.group({
      id: null,
      agencia: null,
      provincia: null,
      direccion: null,
      departamento: null,
      distrito: null,
      imagen: null,
      lat: null,
      lon: null,
    });
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) {
      const value = this.service.get(+id);
      this.form.patchValue(value);
    }
  }

  save() {
    const values = this.form.value;
    this.service.loading.next(true);
    this.service.register(values).subscribe(obs => {
      this.service.loading.next(false);
      this.router.navigateByUrl('/');
    });
  }
}
