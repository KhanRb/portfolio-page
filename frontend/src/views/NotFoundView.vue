<template>
  <main class="min-h-screen bg-zinc-900 text-zinc-100 flex items-center justify-center px-6">
    <div class="text-center max-w-md">
      <h1 class="text-6xl font-bold mb-4 text-red-500">
        404
      </h1>

      <h2 class="text-2xl font-semibold mb-4">
        Page not found
      </h2>

      <p class="text-zinc-400 mb-8">
        The page you are looking for doesn’t exist or was moved.
      </p>

      <RouterLink
          to="/"
          class="inline-block bg-red-500 text-zinc-900 px-6 py-3 rounded-lg font-semibold
               transition-all duration-300 hover:bg-red-600 hover:-translate-y-1"
      >
        Go back home
      </RouterLink>
    </div>
  </main>
</template>
