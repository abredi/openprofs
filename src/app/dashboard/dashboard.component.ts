import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  groups = [];
  posts: Array<any> = [];
  searchView = true;
  locations: any;
  joinedGroups: any;
  photos: any;
  friends: any;

  activeTab = 'tab-profile';

  constructor(private api: ApiService, private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  onSearch(q: string): void {
    this.api.search(q).subscribe(
      (resp: any) => {
        if (resp) {
          this.searchView = false;
          this.groups = resp;
        }
      }
    );
  }

  openSearch(): void {
    this.searchView = true;
  }

  openPosts(profile: any): void {
    this.posts = profile.posts;
    this.locations = profile.locations.markers;
    this.joinedGroups = profile.groups;
    this.photos = profile.photos;
    this.friends = profile.friends;
  }

  changeAtiveTab(event: any, tabID: string): void {

    this.activeTab = tabID;

    // let element = event.target;
    // while (element.nodeName !== 'A'){
    //   element = element.parentNode;
    // }
    // const ulElement = element.parentNode.parentNode;
    // const aElements = ulElement.querySelectorAll('li > a');
    // const tabContents = document.getElementById('tabs-id').querySelectorAll('.tab-content > div');
    // for (let i = 0 ; i < aElements.length; i++){
    //   aElements[i].classList.remove('text-white');
    //   aElements[i].classList.remove('bg-pink-600');
    //   aElements[i].classList.add('text-pink-600');
    //   aElements[i].classList.add('bg-white');
    //   tabContents[i].classList.add('hidden');
    //   tabContents[i].classList.remove('block');
    // }
    // element.classList.remove('text-pink-600');
    // element.classList.remove('bg-white');
    // element.classList.add('text-white');
    // element.classList.add('bg-pink-600');
    // document.getElementById(tabID).classList.remove('hidden');
    // document.getElementById(tabID).classList.add('block');
  }
}
