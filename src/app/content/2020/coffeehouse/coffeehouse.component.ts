
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-coffeehouse',
  templateUrl: './coffeehouse.component.html',
  styleUrls: ['./coffeehouse.component.scss']
})
export class CoffeehouseComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/postx/2020/2020_11_28%2BSecurity-Coffeehouse-bc2-speaker-interviews', this.post.title,
                    this.post.imageUrl, 1500, 500,
                    ['beercon2', 'coffeehouse', 'panel', 'international', 'online']);
  }

}