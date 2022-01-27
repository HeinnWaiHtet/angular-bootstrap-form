import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { NotFoundError } from '../common/not-found-error';
import { GithubFollowersService } from '../github-followers.service';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs/index';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers : any;

  constructor(
    private route : ActivatedRoute,
    private service : GithubFollowersService) { 
  }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap,
    ]).pipe(
      switchMap(param =>{
        let id = param[0].get('id');
        let page = param[1].get('page');
        return this.service.getAll();
      })
    ).subscribe( follower => this.followers = follower);


    // this.service.getAll().subscribe(
    //   follower => {
    //     this.followers = follower
    //     console.log(this.followers);
    //   },
    //   ((error : AppComponent) =>{
    //     if(error instanceof NotFoundError){
    //       alert(error);
    //     }else{
    //       alert('Custom error');
    //     }
    //   })
    //   );
  }

}
