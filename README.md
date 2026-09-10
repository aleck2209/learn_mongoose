# Learn Mongoose

Projet d'apprentissage de **MongoDB et Mongoose avec Node.js et TypeScript**.

Ce repository accompagne un parcours pratique consacré à la découverte de Mongoose à travers des exemples et des exercices progressifs.

## 🎯 Objectif

L'objectif est de comprendre les concepts fondamentaux de Mongoose et de savoir les utiliser dans une application Node.js :

* Connexion à MongoDB
* Schemas et Models
* CRUD
* Validation
* Mise à jour des documents
* Suppression
* Timestamps
* Indexes et contraintes
* Relations entre documents
* References et ObjectId
* `populate()`
* Virtual Populate
* Embedded Documents
* Referencing
* Requêtes avancées
* Pagination
* `lean()`
* Gestion des erreurs Mongoose
* Middleware Mongoose
* Seed de données

## 🛠️ Technologies

* Node.js
* TypeScript
* MongoDB
* Mongoose
* Express
* dotenv

## 📁 Architecture

```text
learn_mongoose/
├── .env
├── package.json
├── tsconfig.json
│
└── src/
    ├── config/
    │   └── database.ts
    │
    ├── modules/
    │   ├── user/
    │   │   ├── user.model.ts
    │   │   ├── user.seed.ts
    │   │   ├── user.service.ts
    │   │   ├── user.controller.ts
    │   │   └── user.routes.ts
    │   │
    │   └── post/
    │       ├── post.model.ts
    │       └── post.seed.ts
    │
    ├── seed.ts
    └── server.ts
```

## 📚 Notions étudiées

### 1. Connexion à MongoDB

Configuration de la connexion avec Mongoose et utilisation d'une variable d'environnement pour l'URI MongoDB.

### 2. Schema et Model

Création de Schemas Mongoose et génération des Models permettant d'interagir avec MongoDB.

### 3. CRUD

Manipulation des documents avec :

* `create()`
* `insertMany()`
* `find()`
* `findOne()`
* `findById()`
* `updateOne()`
* `updateMany()`
* `findOneAndUpdate()`
* `findByIdAndUpdate()`
* `findOneAndDelete()`
* `deleteMany()`

### 4. Validation

Utilisation de :

* `required`
* `min`
* `max`
* `minLength`
* `maxLength`
* `enum`
* `default`
* `match`
* validation personnalisée

Et compréhension de `runValidators` lors des mises à jour.

### 5. Relations

Utilisation de `ObjectId` et `ref` pour créer des références entre documents.

Exemple :

```text
User
  ↑
  │ author
  │
Post
```

### 6. Populate

Utilisation de `populate()` pour récupérer les documents référencés.

```text
Post
 └── author
       ↓
     User
```

Le Virtual Populate a également été étudié pour permettre la relation inverse :

```text
User
 └── posts
```

sans stocker le tableau `posts` dans MongoDB.

### 7. Embedding vs Referencing

Comparaison entre :

* données embarquées dans un document ;
* documents indépendants reliés par une référence.

Le choix dépend notamment de la manière dont les données sont consultées, de leur taille, de leur indépendance et de leur évolution.

### 8. Requêtes avancées

Utilisation de :

* `select()`
* `sort()`
* `skip()`
* `limit()`
* `lean()`
* `countDocuments()`
* `Promise.all()`

Mise en place d'une pagination avec :

```text
page
limit
skip
total
totalPages
data
```

### 9. Gestion des erreurs

Étude des principales erreurs Mongoose/MongoDB :

* `ValidationError`
* `CastError`
* `MongoServerError`
* `E11000`

### 10. Middleware Mongoose

Introduction à :

* `pre()`
* `post()`

et à leur utilisation pour exécuter une logique avant ou après certaines opérations Mongoose.

### 11. Seed

Mise en place d'un système de seed permettant de reconstruire les données de développement avec :

```bash
npm run seed
```

Les seeds prennent également en compte les dépendances entre les données.

## 🚀 Lancement

Installer les dépendances :

```bash
npm install
```

Configurer `.env` :

```env
MONGODB_URI=
PORT=
```

Puis lancer le seed :

```bash
npm run seed
```

## 📌 Objectif final du parcours

Ce projet constitue un laboratoire d'apprentissage.

L'objectif n'est pas de construire une application complète, mais de maîtriser les concepts fondamentaux nécessaires avant de passer à un projet réel avec :

**Node.js + TypeScript + Express + Mongoose + MongoDB**

## 🔗 Documentation

Documentation officielle Mongoose :

https://mongoosejs.com/docs/
