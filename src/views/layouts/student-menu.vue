<template>
  <ul class="flex space-x-6 w-fit">
    <template v-for="item in HeaderData" :key="item.tittle">
      <li v-if="item.separateRoute" :class="{ 'font-bold text-blue-500': route_array[1] === item.active_link }">
        <router-link :to="{ path: item.route }" class="px-4 py-2 hover:text-blue-500">
          {{ item.tittle }}
        </router-link>
      </li>

      <li v-else class="relative group">
        <a href="javascript:void(0);" @click="toggleTab(item)" class="px-4 py-2 flex items-center">
          {{ item.tittle }} <i class="fas fa-chevron-down ml-1"></i>
        </a>

        <ul v-show="item.showAsTab" class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
          <template v-for="menuItem in item.menu" :key="menuItem.menuValue">
            <li v-if="!menuItem.hasSubRoute"
                :class="{ 'font-bold text-blue-500': currentPath === (menuItem.active_link || '') }">
              <router-link :to="{ path: menuItem.route }" class="block px-4 py-2 hover:bg-gray-100">
                {{ menuItem.menuValue }}
              </router-link>
            </li>

            <li v-else class="relative group">
              <a href="javascript:void(0);" class="block px-4 py-2 hover:bg-gray-100">{{ menuItem.menuValue }}</a>
              <ul v-show="menuItem.showSubRoute"
                  class="absolute left-full top-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
                <template v-for="subMenu in menuItem.subMenus" :key="subMenu.menuValue">
                  <li :class="{ 'font-bold text-blue-500': currentPath === (subMenu.active_link || '') }">
                    <router-link :to="{ path: subMenu.route }" class="block px-4 py-2 hover:bg-gray-100">
                      {{ subMenu.menuValue }}
                    </router-link>
                  </li>
                </template>
              </ul>
            </li>
          </template>
        </ul>
      </li>
    </template>
  </ul>
</template>

<script>
import { computed, watch, ref } from "vue";
import { useRoute } from "vue-router";
import HeaderData from "@/assets/json/header.json";

export default {
  setup() {
    const route = useRoute();
    const route_array = ref(route.path.split("/"));
    const currentPath = computed(() => route.path);

    watch(currentPath, (newPath) => {
      route_array.value = newPath.split("/");
    });

    const toggleTab = (item) => {
      item.showAsTab = !item.showAsTab;
    };

    return {
      HeaderData,
      route_array,
      currentPath,
      toggleTab,
    };
  },
};
</script>
