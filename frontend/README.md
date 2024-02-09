## Deciphers
# NEGOTIATION-ENGINE USING MACHINE LEARNING

<center><img src="/frontend/public/Assets/logo.png" alt="logo" width="25%" /></center>

# Description

The project aims to develop a negotiation engine using machine learning model that predicts the convergence or divergence of terms proposed by buyers & sellers and create a user-friendly web application to provide the easy access. It has the potential to significantly enhance the efficiency, transparency, and success of negotiations in e-commerce networks.

# Problem Statement

A network of e-commerce participants & marketplaces would involve negotiation;
Negotiations can be related to terms of trade (called Transaction contract in ONDC) or other product attributes such as price, settlement terms, etc;
Negotiation would typically involve one party proposing their terms & conditions as above and the counterparty either accepting each term or proposing their counter-terms;
Negotiation ends either when both parties agree to common terms & conditions or one or both of the parties decides to terminate the transaction.

# Application

* Improve e-commerce enviornment: Facilitate dynamic negotiations between buyers and sellers, which leads to increased sales and customer satisfaction.
* Personalize offers based on customer needs: Suggest win-win offers tailored to individual client's preferences and budget constraints.
* Mediate conflicts: Analyze arguments and can propose compromises based on fairness and precedent.

# Machine Learning Model

Integrate a machine learning model using the large existing dataset. The model's primary task is to determine whether terms of both parties (i.e., buyer and seller) are converging or diverging.

<img src="" alt="ML_flowchart" width="40%" />

# Web Application Development

Create a web Application that allows users to easily access the products and negotiate. The application offers the following features:
* Convergence/Divergence Prediction : Utilizes a machine learning model trained on negotiation data to predict whether the terms proposed by both parties are converging (moving closer to agreement) or diverging (moving further apart).
* Visualization and Explainability: Presents clear visualizations of the negotiation landscape, predicted convergence/divergence scores.
* User-Friendly Interface: Intuitive and easy-to-use interface accessible through a web browser.

## Assumptions
* Data Availability: The machine learning model uses a substantial dataset of past negotiations.
* Users have sufficient negotiation skills and knowledge.
* Ethical considerations: The use of AI in negotiations has ethical considerations regarding fairness, and transparency.

# Getting started

```
git clone https://github.com/vivekpathakgit/Negotiator-AI.git
cd Negotiator-AI
cd frontend
npm install
npm start
```

# Technology Stack
![MongoDB](https://img.shields.io/badge/-mongodb-333333?style=flat&logo=mongodb)
![React](https://img.shields.io/badge/-React-333333?style=flat&logo=react)
![Node.js](https://img.shields.io/badge/-node.js-333333?style=flat&logo=node.js)
![Tailwind](https://img.shields.io/badge/-tailwind-333333?style=flat&logo=tailwindcss)
