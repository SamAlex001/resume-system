# Review System —

## Task:

Create a review system form that accepts username, comment and rating as input and outputs time of submission of review, rating, comment username as a comment box on one side of page. Review box should be able to show multiple comments that have been added using local storage.

---

## How It Works

This mini project allows users to submit reviews and view all previously submitted reviews on the page. It uses **React**, **TypeScript**, **CSS**, and **localStorage** for saving data.

---

## How the system works

### 1. **User fills the review form**

The form accepts:

* **Username**
* **Rating** (1 to 5)
* **Comment**

When the user clicks **Submit**, the data is collected and processed.

---

### 2. **The review is saved in localStorage**

* A new review object is created containing:

  * Username
  * Rating
  * Comment
  * **Time of submission** (automatically generated)
* This review is added to an array stored in `localStorage` under the key `"reviews"`.
* The data stays saved even after refreshing or reopening the page.

---

### 3. **Reviews are displayed on the right side**

Each review appears inside a styled box showing:

* Username
* Rating
* Comment
* Submission time

Multiple reviews are displayed one below the other.
React automatically re-renders the review list whenever a new review is added.

---

### 4. **On page load, reviews are loaded automatically**

Whenever the page is opened or refreshed:

* The script reads all saved reviews from `localStorage`
* React displays them in the review section
* If no reviews exist, an empty message is shown

---

## Summary

This project demonstrates:

* Taking user input through a form
* Saving data persistently using localStorage
* Dynamically displaying multiple reviews using React state
* Maintaining data across page refreshes