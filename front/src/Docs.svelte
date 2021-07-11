<script lang="ts">
  import { getCheeses, getCheese, getRandomCheese, searchCheese } from './api/index'
  import QueryDoc from './components/QueryDoc.svelte'
  import JSDoc from './components/JSDoc.svelte'
</script>


<div class="w-full max-w-4xl">
  <h1 class="mt-10 text-4xl font-bold md:text-7xl">API Documentation</h1>

  <p class="mt-10 text-xl leading-relaxed">
    This documentation explains how each query works as well as what it returns.
  </p>

  <div class="mt-20 space-y-16">
    <QueryDoc
      getData={getCheeses}
      title="Get all the cheese:"
      query="/cheeses"
    >
      <span slot="description">
        <JSDoc tag="@description">
          Gets all the available cheese
        </JSDoc>
        <JSDoc tag="@returns" type="Array<Cheese>">
          An array of cheese
        </JSDoc>
      </span>
    </QueryDoc>

    <QueryDoc
      getData={() => getCheese('morbier')}
      title="Get a specific cheese:"
      query="/cheese/morbier"
    >
      <span slot="description">
        <JSDoc tag="@description">
          Gets a specific cheese
        </JSDoc>
        <JSDoc tag="@param" type="string" name="name">
          A cheese name
        </JSDoc>
      </span>
    </QueryDoc>

    <QueryDoc
      getData={getRandomCheese}
      title="Get a random cheese:"
      query="/random"
    >
      <span slot="description">
        <JSDoc tag="@description">
          Gets a random cheese
        </JSDoc>
      </span>
    </QueryDoc>

    <QueryDoc
      getData={() => searchCheese({ name: 'raclette', milk: 'cow' })}
      title="Search some cheeses"
      query="/search?name=raclette&milk=cow"
    >
      <span slot="description">
        <JSDoc tag="@description">
          Search some cheeses
        </JSDoc>
        <JSDoc tag="@param" name="?name" type="string">
          An optionnal name to search for
        </JSDoc>
        <JSDoc tag="@param" name="?milk" type="string">
          An optionnal milk type to search for, accepts multiple options seperated by a comma
        </JSDoc>
        <JSDoc tag="@param" name="?image" type="boolean">
          If the results should always have an image or never
        </JSDoc>
        <JSDoc tag="@returns" type="Array<Cheese>">
          An array of cheese
        </JSDoc>
      </span>
    </QueryDoc>
  </div>
</div>
