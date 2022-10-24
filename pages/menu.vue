<template>
  <div id="page-menu">
    <top></top>

    <div class="width">
      <h1>Меню</h1>
    </div>

    <div class="scroll">
      <span class="active">Основные блюда</span>
      <span>Супы</span>
      <span>Завтраки</span>
      <span>Вторые блюда</span>
    </div>

    <div class="width">
      <menu-list></menu-list>
    </div>

    <footer-component></footer-component>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.scroll {
  margin: 9px 0 12px;
  overflow: scroll;
  display: flex;
  white-space: nowrap;
  padding-bottom: 12px;
  &::-webkit-scrollbar {
    display: none;
  }
  span {
    margin-right: 6px;
    display: inline-block;
    font-weight: 700;
    &.active {
      background-color: var(--bg);
      color: #000 !important;
    }
    border-radius: 100px;
    padding: 10px 16px;
    color: var(--dark-grey);
  }
}
</style>
