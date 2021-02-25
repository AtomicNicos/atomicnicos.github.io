import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-mental-health-v1',
  templateUrl: './mental-health-v1.component.html',
  styleUrls: ['./mental-health-v1.component.scss']
})
export class MentalHealthV1Component implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/postx/2021/2021_01_03%2BMental-Health', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['health', 'personal']);
  }

}
