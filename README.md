# 🏠 **ALX Listing App**

## 📋 Project Description

The **ALX Listing App** is a simple, responsive web application inspired by platforms like Airbnb.
Its goal is to showcase a modern property **listing page** with reusable components, clear structure, and scalable design.
It’s built to demonstrate best practices in React, TypeScript, and TailwindCSS.

## 🎯 Project Goals

* Build a reusable and maintainable component structure.
* Apply modern frontend technologies: React + Next.js + TypeScript.
* Showcase responsive design using TailwindCSS.
* Use interfaces and constants to make the app scalable and easy to extend.

## 🗂️ Project Structure

### 🔷 **`components/`**

This folder contains all the **reusable React components** used throughout the app.
Examples:

* `Card.tsx` — A reusable card component to display property details.
* `Button.tsx` — A reusable button component with variant styles.
* Any other UI components (Header, Footer, etc.) go here.

### 🔷 **`interfaces/`**

This folder defines **TypeScript interfaces and types** used in the app to enforce type safety and improve code readability.
Examples:

* `CardProps` — Defines the props expected by the `Card` component.
* `ButtonProps` — Defines the props expected by the `Button` component.

### 🔷 **`constants/`**

This folder contains any **static data, configuration, or constants** used in the app.
Examples:

* A list of property types, default settings, routes, or color definitions.

### 🔷 **`public/assets/`**

This folder contains **static files** that are publicly accessible.
Examples:

* Images, icons, or mock property photos used by the app.

## 🚀 Tech Stack

* [React](https://reactjs.org/) + [Next.js](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [TailwindCSS](https://tailwindcss.com/)

## 📖 Getting Started

Clone the repo and install dependencies:

```bash
git clone <repo-url>
cd alx-listing-app
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
