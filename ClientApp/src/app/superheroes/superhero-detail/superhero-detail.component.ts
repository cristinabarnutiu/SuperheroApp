import { Component, OnInit } from '@angular/core';
import { Superhero } from '../../_models/superhero';
import { SuperheroService } from '../../_services/superhero.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-superhero-detail',
  templateUrl: './superhero-detail.component.html',
  styleUrls: ['./superhero-detail.component.css']
})
export class SuperheroDetailComponent implements OnInit {
  superhero: Superhero;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private superheroService: SuperheroService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.loadSuperhero();
    this.route.data.subscribe(data => {
      this.superhero = data['superhero'];
    });

    //this.route.queryParams.subscribe(params => {
    //  const selectedTab = params['tab'];
    //  this.superheroTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
    //});

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false,
      }
    ];
    this.galleryImages = this.getImages();
  }

  getImages() {
    const imageUrls = [];
    for (const photo of this.superhero.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description,
      });
    }
    return imageUrls;
  }

  //loadSuperhero() {
  //  this.superheroService.getSuperhero(+this.route.snapshot.params['id'])
  //    .subscribe((superhero: Superhero) => {
  //      this.superhero = superhero;
  //    }, error => {
  //        this.alertify.error(error);
  //    });
  //}


}
