import {Component} from "@angular/core";
import {CommentService} from "../commentService";

@Component({
  selector: 'singlePage-component',
  templateUrl: './singlePage.component.html',
  styleUrls: ['../css/app.bootstrap.css', '../css/app.style.css', '../css/app.swipebox.css']
})

export class SinglePageComponent {
  private model = new Comment(1, '', new Date(), 1, 1);
  comment: Comment;

  constructor(private commentService: CommentService) {
  }

  addComment() {
    this.commentService.addComment(this.model).subscribe(comment=>this.comment = comment, err => {
      console.log(err);
    });
  }
}
