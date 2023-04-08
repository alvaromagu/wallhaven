import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WallpaperComponent} from './wallpaper.component';

describe('ThumbnailComponent', () => {
  let component: WallpaperComponent;
  let fixture: ComponentFixture<WallpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WallpaperComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
