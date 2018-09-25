import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductosComponent } from '../app/productos/components/modal-productos/modal-productos.component';



describe('ModalProductosComponent', () => {
  let component: ModalProductosComponent;
  let fixture: ComponentFixture<ModalProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
