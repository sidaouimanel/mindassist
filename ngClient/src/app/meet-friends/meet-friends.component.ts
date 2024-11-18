import { Component } from '@angular/core';

@Component({
  selector: 'app-meet-friends',
  templateUrl: './meet-friends.component.html',
  styleUrls: ['./meet-friends.component.css']
})
export class MeetFriendsComponent {
  searchText = '';
  
  friends = [
    {
      name: 'sidaoui manel',
      profileImage: '../../assets/img/team/user.jpg',
      mutualFriends: 10,
    },
    {
      name: 'sidaoui sidaoui ',
      profileImage: '../../assets/img/team/user.jpg',
      mutualFriends: 5,
    },
    {
      name: 'manel manel',
      profileImage: '../../assets/img/team/user.jpg',
      mutualFriends: 8,
    },
    {
      name: 'manel sidawi ',
      profileImage: '../../assets/img/team/user.jpg',
      mutualFriends: 3,
    },
    // Ajoutez d'autres amis au besoin
  ];

  get filteredFriends() {
    return this.friends.filter(friend => 
      friend.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  onSearch() {
    // Vous pouvez ajouter une logique ici si nécessaire,
    // sinon cette méthode peut rester vide
  }
}
