
<h1>Test Technique Selsebil Trabelsi - Frontend - Angular avec Ionic</h1>

<p>Ce dépôt contient la partie frontend du projet Test Technique Selsebil Trabelsi, l'autre dépôt contient la partie backend du projet Test Technique Selsebil Trabelsi. Il s'agit d'une application développée avec le framework Angular et intégration d'Ionic, permettant de gérer les produits en interagissant avec l'API backend.</p><br>

<p>N'hésitez pas à ouvrir une <a href="https://github.com/selsebil82/Test_Technique_Selsebil_Trabelsi_backend">Parite BackEnd</a> pour consulter le projet backend en laravel. Bonne utilisation !</p><br>

<h2>Installation</h2>

<ul>
  <li>Clonez ce dépôt en utilisant la commande suivante :</li>
</ul>

<pre><code class="language-bash">
git clone https://github.com/selsebil82/Test_Technique_Selsebil_Trabelsi_frontend_ionic_integration.git
</code></pre>

<ul>
  <li>Accédez au répertoire du projet :</li>
</ul>

<pre><code class="language-bash">
cd Test_Technique_Selsebil_Trabelsi_frontend_ionic_integration
</code></pre>

<h2>Configuration de l'API Backend</h2>

<p>Assurez-vous que l'API Backend (Laravel) est correctement configurée et en cours d'exécution avant de lancer l'application frontend. Vous pouvez trouver les instructions pour configurer l'API dans le fichier README.md de la partie backend du projet.</p>

<h2>Démarrer le serveur</h2>

<p>Pour lancer le serveur de développement, utilisez la commande suivante :</p>

<pre><code class="language-bash">
ng serve -o
</code></pre>

<p>L'application devrait s'ouvrir automatiquement dans votre navigateur par défaut à l'adresse <code>http://localhost:4200/</code>. Si ce n'est pas le cas, vous pouvez accéder à l'application en ouvrant cette URL dans votre navigateur.</p>

<h2>Intégration de ionic dans notre application angular</h2>

<h4>Installation de ionic cli</h4>

![Screenshot from 2023-08-03 10-31-25](https://github.com/selsebil82/Test_Technique_Selsebil_Trabelsi_frontend_ionic_integration/assets/134981597/95dfbd32-fe21-4a93-a9c0-28155f1dfa56)

<h4>Installation du package ionic dans notre projet Angular</h4>

![Screenshot from 2023-08-03 17-41-48](https://github.com/selsebil82/Test_Technique_Selsebil_Trabelsi_frontend_ionic_integration/assets/134981597/1002f469-dd6c-42ee-b71e-34c4fc226a6f)

<h4>Ajout du package ionic dans notre application Angular</h4>

![Screenshot from 2023-08-03 17-49-16](https://github.com/selsebil82/Test_Technique_Selsebil_Trabelsi_frontend_ionic_integration/assets/134981597/9e0718ec-4823-4d49-91c0-859d5c2a563a)

<h4>Changement de l'output path dans angular.json file de dist/.. vers www</h4>

![Screenshot from 2023-08-04 15-16-55](https://github.com/selsebil82/Test_Technique_Selsebil_Trabelsi_frontend_ionic_integration/assets/134981597/c5ddccae-2445-4c73-82dc-adc0801b4092)

<h4>Ajout des balises ionic à notre application Angular(exemple : app.component.html)</h4>

![Screenshot from 2023-08-04 15-17-30](https://github.com/selsebil82/Test_Technique_Selsebil_Trabelsi_frontend_ionic_integration/assets/134981597/b59486bc-cd2d-490a-b8ac-08e6017d6f55)



<h2>Utilisation de l'application</h2>

<p>L'application frontend vous permettra de gérer les produits en interagissant avec l'API backend. Vous pourrez :</p>

<ul>
  <li>Afficher la liste de tous les produits.</li>
  <li>Ajouter un nouveau produit à la base de données.</li>
  <li>Afficher les détails d'un produit spécifique en fonction de son ID.</li>
  <li>Mettre à jour les informations d'un produit existant en fonction de son ID.</li>
  <li>Supprimer un produit de la base de données en fonction de son ID.</li>
  <li>Rechercher des produits en fonction de leur nom.</li>
</ul>

<h2>Vidéo démonstratif de l'application FrontEndApp</h2>
<h3>Version web</h3>

[Screencast from 2023-08-04 15-36-30.webm](https://github.com/selsebil82/Test_Technique_Selsebil_Trabelsi_frontend_ionic_integration/assets/134981597/637a39e3-e127-4474-92c1-81f3fcfbdb3f)

<h3>Version mobile</h3>

[Screencast from 2023-08-04 15-43-20.webm](https://github.com/selsebil82/Test_Technique_Selsebil_Trabelsi_frontend_ionic_integration/assets/134981597/74b3332b-6b19-48c9-bcc1-bc24b298ebb3)

<h2>Auteur</h2>

<p>Ce projet a été réalisé par Selsebil Trabelsi.</p>
<p>N'hésitez pas à ouvrir une <a href="https://github.com/selsebil82/Test_Technique_Selsebil_Trabelsi_frontend_ionic_integration/issues">issue</a> si vous rencontrez des problèmes ou si vous avez des suggestions d'amélioration. Bonne utilisation !</p>
