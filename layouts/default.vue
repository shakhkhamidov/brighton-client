<template>
  <div id="default">
    <Nuxt />

    <bottom-links></bottom-links>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.scroll {
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  span {
  }
}

.fade-enter-active,
.fade-leave-active,
.height-enter-active,
.height-leave-active,
.bottom-top-enter-active,
.bottom-top-leave-active,
.transform-bottom-top-enter-active,
.transform-bottom-top-leave-active,
.top-bottom-enter-active,
.top-bottom-leave-active,
.left-enter-active,
.left-leave-active {
  transition: 0.3s ease;
}

.left-enter,
.left-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

form {
  display: flex;
  flex-direction: column;
  input,
  select,
  textarea {
    width: 100%;
    background-color: var(--bg);
    border-radius: 12px;
    height: 52px;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 16px;
  }
  label {
    font-size: 13px;
    color: #000;
    margin-bottom: 4px;
    font-weight: 500;
    margin-top: 16px;
  }
  button {
    margin-top: 16px;
  }
}

.height-enter,
.height-leave-to {
  opacity: 0;
  height: 0;
}

.bottom-top-enter,
.bottom-top-leave-to {
  margin-top: 30px;
  opacity: 0;
}

.top-bottom-enter,
.top-bottom-leave-to {
  margin-top: -30px;
  opacity: 0;
}

.transform-bottom-top-enter,
.transform-bottom-top-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

@font-face {
  font-display: swap;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 900;
  src: url("@/static/fonts/GILROY-BOLD.woff2") format("woff");
}

@font-face {
  font-display: swap;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  src: url("@/static/fonts/GILROY-SEMIBOLD.woff2") format("woff");
}

@font-face {
  font-display: swap;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  src: url("@/static/fonts/GILROY-MEDIUM.woff2") format("woff");
}

@font-face {
  font-display: swap;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  src: url("@/static/fonts/GILROY-REGULAR.woff2") format("woff");
}

:root {
  --grey: #9faac7;
  --dark-grey: #757c8c;
  --orange: #f55302;
  --bg: #f1f6fb;
  --blue: #daebff;
  --yellow: #f8dd7b;
  --accent: #f9cc28;
  --purple: #fde3d6;
  --pink: #ebd9f7;
  --dark: #7c828d;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  border: none;
  font-weight: normal;
  font-family: "Gilroy", sans-serif;
}

.h1,
h1 {
  display: block;
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
}

.h2,
h2 {
  display: block;
  font-size: 24px;
  font-weight: 900;
}

.h3,
h3 {
  display: block;
  font-size: 22px;
  font-weight: 900;
}

.h4,
h4 {
  margin: 28px 0 18px;
  display: block;
  font-size: 20px;
  font-weight: 700;
}

p {
  font-size: 16px;
  &.plus {
    font-size: 18px;
  }
}

.width {
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  margin: 0 auto;
}

.note {
  color: var(--grey);
}

.margin {
  height: 34px;
}

.full {
  width: 100%;
  margin-top: 17px;
  height: 58px;
}

button {
  color: #000;
  background-color: var(--yellow);
  font-size: 18px;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 500;
}

.item-img {
  display: flex;
  align-items: center;
  background-color: var(--bg);
  border-radius: 100px;
  margin-bottom: 12px;
  padding: 5px;
  font-size: 18px;
  &:last-child {
    margin-bottom: 0;
  }
  div {
    margin-right: 9px;
    background-color: #fff;
    border-radius: 100px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.fill {
  padding: 22px;
  border-radius: 10px;
  background-color: var(--bg);
}
</style>
