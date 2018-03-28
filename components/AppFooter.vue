<template>
  <div class="content content-background">
      <div class="gradient">
      <div class="container">
          <div class="content content-jobs">
Футер
          </div>
    </div>
    </div>
  </div>
</template>

<script>

</script>
 
<style scoped>
.container {
    width: 100%; 
}

.content {
  display: flex;
}
.gradient {
    width: 100vw;
    height: 100%;
    /* background: linear-gradient(to right, rgba(73, 9, 9, 0.603) 0%, rgba(9, 75, 12, 0.308) 100%); */
    display: flex;
    justify-content: center;
}

.content-jobs {
  flex-direction: column;
}
.content-title {
  display: flex;
  justify-content: center;
}
.content-title-h2 {
    color: white;
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 600;
}
.content-background {
    height: 553px;
	/* background-color: #f7f9fa; */
	padding: 0;
     /* background: url(~assets/img/fon7.jpg)  center center / cover no-repeat, linear-gradient(to right, rgba(9, 5, 47, .85) 0%, rgba(49, 29, 94, .85) 100%); */ */
   
    opacity: 1;
    background-position: center center / cover;
    background-repeat: no-repeat;
}

@media all and (min-width: 500px) {
    .digits-wrapper {
		flex-direction: row;
    }
}
@media (min-width: 1200px) {
    .content {
        justify-content: center;
    }
    .container {
        width: 1200px; 
    }
}
</style>
