import { Component, Input, OnInit } from '@angular/core';
import { authorList } from 'src/app/data/authors';
import { Author } from 'src/app/interfaces/author';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss']
})
export class PostBodyComponent implements OnInit {
  // tslint:disable-next-line: no-string-literal
  @Input() authors: Author[] = [ authorList['AtomicNicos'] ];
  @Input() date: number[];
  @Input() edited: number[];
  @Input() post: Post;

  constructor() { }

  ngOnInit(): void { }
}
