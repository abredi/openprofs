import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  groups = [];
  posts: Array<Object> = [];
  searchView = true;
  constructor(private api: ApiService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onSearch(q: string) {
    this.api.search(q).subscribe(
      (resp) => {
        if (resp) {
          this.searchView = false;
          this.groups = resp;
        }
      }
    );
  }

  openSearch() {
    this.searchView = true;
  }

  openPosts(profilePosts: Array<Object>) {
    this.posts = profilePosts;
  }
}
