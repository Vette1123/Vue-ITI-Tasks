<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2 container">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><i class="fa-solid fa-house-user"></i>
        </router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ms-4">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="mx-4" to="/first">Route1</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/second">Route2</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script></script>
