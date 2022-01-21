import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PizzaViewModelService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './tmpl-main.component.html',
  styleUrls: ['./component.component.css']
})
export class PizzaComponent implements OnInit, OnDestroy {
  constructor(protected vm: PizzaViewModelService) { }
  public get VM(): PizzaViewModelService{ return this.vm; }
  ngOnInit(): void {
    this.vm.list();
  }
  ngOnDestroy():void{
    this.vm.clear();
  }
}
@Component({
  selector: 'app-pizza-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./component.component.css']
})
export class PizzaListComponent implements OnInit {
  constructor(protected vm: PizzaViewModelService) { }
  public get VM(): PizzaViewModelService{ return this.vm; }
  ngOnInit(): void {
    this.vm.list();
  }
}

@Component({
  selector: 'app-pizza-list-admin',
  templateUrl: './tmpl-list-admin.component.html',
  styleUrls: ['./component.component.css']
})
export class PizzaListAdminComponent implements OnInit {
  constructor(protected vm: PizzaViewModelService) { }
  public get VM(): PizzaViewModelService{ return this.vm; }
  ngOnInit(): void {
    this.vm.list();
  }
}

@Component({
  selector: 'app-pizza-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./component.component.css']
})
export class PizzaViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: PizzaViewModelService,
    protected route: ActivatedRoute, protected router: Router) { }
  public get VM(): PizzaViewModelService { return this.vm; }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params?.get('id')??'';
        if(id){
          this.vm.view(id);
        }else{
        //  this.router.navigate(['/404.html'])
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}
@Component({
  selector: 'app-pizza-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./component.component.css']
})
export class PizzaEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: PizzaViewModelService,
    protected route: ActivatedRoute, protected router: Router) { }
  public get VM(): PizzaViewModelService { return this.vm; }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params?.get('id')??'';
        if(id){
          this.vm.view(id);
        }else{
        //  this.router.navigate(['/404.html'])
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}
@Component({
  selector: 'app-pizza-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./component.component.css']
})
export class PizzasAddComponent implements OnInit {
  constructor(protected vm: PizzaViewModelService) { }
  public get VM(): PizzaViewModelService { return this.vm; }
  ngOnInit(): void {
    this.VM.add();
  }
}
export const PIZZA_COMPONENTS = [
  PizzaComponent, PizzaListComponent,PizzaViewComponent,
  PizzaEditComponent, PizzasAddComponent,PizzaListAdminComponent
];



