import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactosComponent } from './componente.component';


describe('ContactosComponent', () => {
  type NewType = ContactosComponent;

  let component: NewType;
  let fixture: ComponentFixture<ContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
