<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { myProductStore } from '../stores/products.js';
import { showDialog } from '../utils/Toggles.js';
import ProductDialog from '../components/ProductDialog.vue';

const $q = useQuasar();
const filter = ref('');
const productStore = myProductStore();
const selectedDialog = ref(null);

const filteredColumns = () => {
  if ($q.screen.gt.sm) return ['number', 'image', 'category'];
  else if ($q.screen.gt.xs) return ['image'];
  else return [];
};

const columns = [
  {
    name: 'number',
    label: 'Item #',
    sortable: true,
    align: 'center',
    format: (val) => `${val}`,
  },
  {
    name: 'image',
    label: 'Image',
    align: 'center',
  },
  {
    name: 'name',
    required: true,
    label: 'Name',
    sortable: true,
    align: 'left',
  },
  {
    name: 'category',
    label: 'Category',
    sortable: true,
    align: 'left',
  },
  {
    name: 'price',
    required: true,
    label: 'Price',
    sortable: true,
    align: 'center',
  },
];
</script>

<template>
  <!-- #region datatable -->
  <div>
    <q-table
      class="my-sticky-virtscroll-table"
      height="80vh"
      virtual-scroll
      flat
      bordered
      :rows-per-page-options="[20]"
      :virtual-scroll-sticky-size-start="48"
      :rows="productStore.products"
      :columns="columns"
      :filter="filter"
      row-key="itemNumber"
      :visible-columns="filteredColumns()"
    >
      <template #top-left>
        <div class="text-grey-8 text-h5">Our Products</div>
      </template>
      <template #top-right>
        <div class="q-gutter-y-md column" style="max-width: 200px">
          <q-input
            dense
            debounce="300"
            v-model="filter"
            bottom-slots
            label="search for Products"
            stack-label
            counter
            maxlength="40"
          >
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">{{ filter }}</div>
            </template>
            <template v-slot:append>
              <q-icon
                v-if="filter !== ''"
                name="close"
                class="cursor-pointer"
                @click="filter = ''"
              />
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props" class="text-grey-8">
          <q-td key="number" :props="props" style="width: 10%">
            {{ props.row.itemNumber }}
          </q-td>
          <q-td
            key="image"
            :props="props"
            @click="
              showDialog = !showDialog;
              selectedDialog = props.row;
            "
          >
            <q-img :src="'/images/products/' + props.row.image" />
          </q-td>
          <q-td key="name" :props="props">
            <span class="text-subtitle1">
              {{ props.row.name }}
            </span>
          </q-td>
          <q-td key="category" :props="props">
            {{ props.row.category }}
          </q-td>
          <q-td key="price" :props="props" class="text-right">
            <div class="text-grey-8 text-subtitle2">
              {{ '€ ' + props.row.discount }}
            </div>
            <span> ({{ '€ ' + props.row.price }}) </span>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-dialog v-model="showDialog"
      ><ProductDialog :product="selectedDialog"></ProductDialog
    ></q-dialog>
  </div>
  <!-- #endregion -->
</template>

<style lang="sass">
.my-sticky-virtscroll-table
  /* height or max-height is important */
  height: 80vh

  .q-table__top,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: $accent

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>
