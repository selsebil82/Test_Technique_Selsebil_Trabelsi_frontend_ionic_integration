import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Product } from 'src/app/product';
import { IonInput } from '@ionic/angular';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  data: any;
  searchKeyword: string = ''; // Variable pour stocker la valeur de recherche

  constructor(private dataService: DataService) {}

  getproductsSearch(event: any) {
    const keyword = event.target.value;

    if (keyword === '') {
      this.data = null; // Réinitialiser les résultats de recherche si le champ est vide
    } else {
      this.dataService.searchProducts(keyword).then(response => {
        this.data = response;
        console.log(this.data);
      });
    }
  }
  
  clearResults(searchInput: IonInput) {
    this.data = null; // Supprimer les résultats de recherche lors du clic sur l'un des résultats
    this.searchKeyword = ''; // Réinitialiser la valeur de la recherche au placeholder
    searchInput.value = ''; // Réinitialiser le champ de recherche en utilisant la valeur
  }
}
