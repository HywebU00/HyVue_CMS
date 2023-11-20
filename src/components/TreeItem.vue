<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
      <div class="d-flex treeTitle">
        <template v-if="isFolder">
          <span class="iconList">
            <template v-if="isOpen">
              <v-icon class="mr-2" icon="mdi-folder-open" color="primary" />
            </template>
            <template v-else>
              <v-icon class="mr-2" icon="mdi-folder" color="primary" />
            </template>
          </span>
        </template>
        <template v-else>
          <v-icon class="mr-2" icon="mdi-file-document" color="secondary" />
        </template>
        {{ model.name }}
        <template v-if="isFolder">
          <template v-if="isOpen">
            <v-btn
              density="compact"
              variant="text"
              icon="mdi-chevron-up"
            ></v-btn>
          </template>
          <template v-else>
            <v-btn
              density="compact"
              variant="text"
              icon="mdi-chevron-down"
            ></v-btn>
          </template>
        </template>
      </div>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <div class="d-flex" v-for="model in model.children" :key="model">
        <tree-item class="item" :model="model"> </tree-item>
      </div>
      <!-- <li class="add" @click="addChild">+</li> -->
    </ul>
  </li>
</template>

<script>
export default {
  name: "TreeItem",
  props: {
    model: Object,
  },
  data() {
    return {
      isOpen: true,
    };
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length;
    },
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    changeType() {
      if (!this.isFolder) {
        this.model.children = [];
        this.addChild();
        this.isOpen = true;
      }
    },
    // addChild() {
    //   this.model.children.push({
    //     name: "new stuff",
    //   });
    // },
  },
};
</script>
<style></style>
