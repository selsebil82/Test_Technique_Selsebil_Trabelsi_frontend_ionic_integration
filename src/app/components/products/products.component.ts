import { DataService } from 'src/app/service/data.service';
import { Product } from 'src/app/product';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  @ViewChild(IonContent) content!: IonContent;
  products: any;
  originalProducts: any;
  product = new Product();
  successMessageId: number | null = null;
  searchQuery: string = '';

  constructor(private dataService: DataService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProductData();
    this.route.url.subscribe(() => {
      this.getProductData();
    });
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  getProductData() {
    console.log('liste des produits');
    this.dataService.getProducts().subscribe((res) => {
      console.log(res);
      this.products = res;
      this.originalProducts = res;
    });
  }

  insertData() {
    this.dataService.createProduct(this.product).subscribe((res) => {
      this.getProductData();
    });
  }

  deleteData(id: any) {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.dataService.deleteProduct(id).subscribe((res) => {
        this.getProductData();
        this.successMessageId = id;
        setTimeout(() => {
          this.successMessageId = null;
        }, 2000);
      });
    }
  }

  onSearchChange() {
    if (this.searchQuery.trim() !== '') {
      this.products = this.originalProducts.filter((prod: any) => {
        const name = prod.name.toLowerCase();
        const query = this.searchQuery.toLowerCase();
        return name.includes(query);
      });
    } else {
      this.products = this.originalProducts;
    }
  }

  scrollToBottom() {
    this.content.scrollToBottom(300); // Scroll with animation (300ms)
    // Use this.content.scrollToBottom(0) for an instant scroll without animation
  }
}
