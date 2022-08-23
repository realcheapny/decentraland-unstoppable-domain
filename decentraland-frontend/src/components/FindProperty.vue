<template>
  <div class="w-full h-full">
    <!-- HERE  IS A NEW  -->
    <div class="flex gap-4">
      <img
        class="flex justify-start w-1/4 items-center"
        src="../assets/images/logoOfficial.png"
        alt="Logo"
      />
    </div>
    <div class="mx-auto w-10/12">
      <h1 class="font-bold text-2xl mb-10">Property Data</h1>
      <div class="w-1/2 grid grid-cols-2 gap-6">
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >Alcaldía</label
        >
        <span
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
        >
          {{ property[0].alcaldia }}
        </span>
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >Valor</label
        >
        <span
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
        >
          {{ property[0].value }}
        </span>
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >Cuenta Catastral</label
        >
        <span
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
        >
          {{ property[0].cuenta_catastral }}
        </span>
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >Cuenta Catastral</label
        >
        <span
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
        >
          {{ property[0].cuenta_catastral }}
        </span>
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >Calle</label
        >
        <span
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
        >
          {{ property[0].calle }}
        </span>
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >Número exterior</label
        >
        <span
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
        >
          {{ property[0].no_externo }}
        </span>
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >Colonia</label
        >
        <span
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
        >
          {{ property[0].city }}
        </span>
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >Área Libre</label
        >
        <span
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
        >
          {{ property[0].area_libre }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import property from "@/metadata/property.json";

export default {
  data() {
    return {
      property,
    };
  },
  methods: {
    transferedAlert() {
      alert("You've succesfully transfered your property");
    },
  },
};
</script>
