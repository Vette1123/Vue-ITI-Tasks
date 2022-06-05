<template>
  <main id="mainwrapper" class="container-fluid">
    <nav
      class="d-flex bg-dark justify-content-between text-light p-2 my-2 align-items-baseline"
    >
      <a href="/" class="link" @click="isVisible = true"> Books </a>
      <div class="d-flex align-items-baseline">
        <p class="px-2">
          [{{ wishlist.length }}]
          <span v-if="wishlist.length == 1">Book</span>
          <span v-else>Books</span> with total price
          {{ formatCurrency(getTotalPrice()) }}
        </p>
        <div class="btn btn-primary" @click="isVisible = false">
          Wished List
        </div>
      </div>
    </nav>
    <div
      class="row d-flex justify-content-between align-items-baseline"
      v-if="isVisible"
    >
      <div
        v-for="book in books"
        class="d-flex my-3 mx-3 align-items-center card col-8 col-sm-8 col-md-4 col-lg-2"
      >
        <div class="row">
          <img
            class="col-12 img-fluid rounded"
            :src="book.image"
            :alt="book.title"
            :title="book.title"
          />
          <p class="my-2 col-12 text-center bg-info m-auto">
            ISBN: {{ book.ISBN }}
          </p>

          <p class="my-2 col-12 text-center m-auto">
            Category: {{ book.categories }}
          </p>
          <p class="col-12 text-center bg-secondary text-white m-auto">
            Author: {{ book.author }}
          </p>
          <p
            class="my-2 col-6 text-center m-auto"
            :class="[book.NumberOfPages < 50 ? 'btn-warning' : 'btn-success']"
          >
            Pages: {{ book.NumberOfPages }}
          </p>
          <p class="col-6 text-center m-auto bg-secondary text-white">
            Price: {{ formatCurrency(book.price) }}
          </p>
          <button
            class="col-12 btn btn-primary"
            @click="addToWishList(book)"
            :disabled="isWished(book)"
          >
            Add To Wish list
          </button>
        </div>
      </div>
    </div>
    <div
      class="alert alert-danger text-center"
      role="alert"
      v-if="!isVisible && wishlist.length == 0"
    >
      You don't have any Books in the wish list
    </div>
    <table class="table" v-if="!isVisible && wishlist.length != 0">
      <thead>
        <tr>
          <th scope="col">ISBN</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
          <th scope="col">Author</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in wishlist">
          <td scope="col">{{ book.ISBN }}</td>
          <td scope="col">{{ book.title }}</td>
          <td scope="col">{{ book.categories }}</td>
          <td scope="col">{{ book.author }}</td>
          <td scope="col">{{ formatCurrency(book.price) }}</td>
          <td>
            <div class="btn btn-danger" @click="removeBook(book)">Remove</div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">Total Price</td>
          <td colspan="2">{{ formatCurrency(getTotalPrice()) }}</td>
        </tr>
        <tr>
          <td colspan="4">Taxis</td>
          <td colspan="2">{{ formatCurrency(getTotalPrice() * 0.1) }}</td>
        </tr>
        <tr>
          <td colspan="4">Grand Total</td>
          <td colspan="2">{{ formatCurrency(getTotalPrice() * 1.1) }}</td>
        </tr>
      </tfoot>
    </table>
  </main>
</template>

<script>
import books from "../books";

export default {
  data() {
    return {
      isVisible: true,
      message: "test",
      books: books,
      wishlist: [],
    };
  },
  methods: {
    addToWishList(book) {
      this.wishlist.push(book);
    },
    isWished(book) {
      return this.wishlist.some((wbook) => wbook.ISBN == book.ISBN);
    },
    removeBook(book) {
      this.wishlist.splice(
        this.wishlist.findIndex((wbook) => wbook.ISBN == book.ISBN),
        1
      );
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("ar-SA", {
        style: "currency",
        currency: "SAR",
      }).format(value);
    },
    getTotalPrice() {
      let totalPrice = 0;
      this.wishlist.forEach((book) => (totalPrice += book.price));
      return totalPrice;
    },
  },
};
</script>
