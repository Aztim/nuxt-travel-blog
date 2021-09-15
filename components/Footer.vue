<template>
  <section class="footer">
    <h1 class="credit"> created by <span> me </span> | all rights reserved </h1>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.footer{
  background:#333;
}

.footer .credit{
  text-align: center;
  /* padding:2rem 1rem; */
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: normal;
  color:#fff;
  border-top: .1rem solid rgba(255,255,255,.2);
}

.footer .credit span{
  color:var(--orange);
}

</style>