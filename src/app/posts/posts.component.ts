import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : any;
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private services : PostService){
  }

  ngOnInit(){
    this.services.getAll().subscribe(post => this.posts = post,
    (error : AppError) =>{
      if(error instanceof NotFoundError){
        alert('Not Found error');
      }else throw error;
    });
  }

  createPost(input : HTMLInputElement){
    let post : any = { title : input.value};
    this.posts.splice(0,0,post);

    input.value = '';

    this.services.create(post)
    .subscribe(newPost =>{
    },
    (error : AppError) =>{
      this.posts.splice(0,1);

      if(error instanceof NotFoundError){
        alert('Not Found error');
      }else throw error;
    });
  }

  updatePost(input :any){
    this.services.update(input).
    subscribe(response =>{
    },
    (error : AppError) =>{
      if(error instanceof NotFoundError){
        alert('Not Found error');
      }else throw error;
    });
  }

  deletePost(input : any){
    let index = this.posts.indexOf(input);
    this.posts.splice(index,1);

    this.services.delete(input.Id).subscribe(
      null,
     (error : Response)=>{
       this.posts.splice(index,0,input);

       if(error.status == 400){
         alert('This post had been deleted');
       }else throw error;
       
     });
  }
}
