<template>
  <nav
    class=" sm:h-20 pb-2 sm:pb-0 bg-white sm:shadow-sm flex flex-wrap  sm:flex-nowrap items-center justify-between px-2 pt-2 sm:pt-0 sm:p-0"
  >
    <div class="logo w-2/12 ml-2 mr-48 py-2 sm:py-0 sm:mr-0 sm:ml-24 flex items-center justify-between sm:justify-start">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-4 sm:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <img
        class="object-contain w-28 sm:w-32 h-12 cursor-pointer max-w-md"
        src="../assets/jumia-seeklogo.com.svg"
        alt=""
      />
      <div class="icons sm:hidden flex ml-28">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-8 mr-4 stroke-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 stroke-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
    </div>
    </div>
    
    <div
      class="w-5/12 h-9 sm:h-10 border border-gray-400 sm:rounded-sm rounded-full flex items-center grow  mx-0.75 py-1 px-2 flex-row sm:mr-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 sm:text-gray-500 text-gray-900 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        class="focus:outline-none w-full text-sm sm:text-lg placeholder-gray-500 placeholder:text-sm"
        placeholder="Search products, brands and categories"
        type="text"
      />
    </div>
    <div class="w-1/12 hidden sm:block">
      <button
        type="button"
        class="px-4 py-2.5 bg-orng text-white font-medium text-sm leading-tight uppercase rounded-sm shadow-lg hover:bg-orange-500 hover:shadow-lg focus:bg-yellow-600 focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
      >
        SEARCH
      </button>
    </div>
    <div class="w-4/12 items-center hidden sm:flex">
      <div class="flex cursor-pointer group items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-8 group-hover:stroke-orng"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span class="mx-1 font-medium group-hover:text-orng">Account</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-4 group-hover:stroke-orng"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div class="flex cursor-pointer group items-center mx-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 group-hover:stroke-orng"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="mx-1 font-medium group-hover:text-orng">Help</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-4 group-hover:stroke-orng"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div class="flex cursor-pointer group items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 group-hover:stroke-orng"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span class="mx-1 font-medium group-hover:text-orng">Cart</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>