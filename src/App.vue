<template>
  <div id="container-product-detail">
     <div class="column-2">
      <div class="top-content">
        <div class="container-cart">
          <span class="cart">Cart: {{store.state.count}} items</span>
        </div>
      </div>
       <button class="buy-btn"  @click="addToCart()">
          Buy for {{variantActive.price}}
        </button>
     </div>
  </div>
</template>

<script>
  const variants = [
      {
        sku: 't_porsche',
        color: 'red',
        name: 'Porsche-Diesel Master 419',
        image: 'images/tractor-red.jpg',
        thumb: 'images/tractor-red-thumb.jpg',
        price: '66,00 $',
      },
      {
        sku: 't_fendt',
        color: 'green',
        name: 'Fendt F20 Dieselroß',
        image: 'images/tractor-green.jpg',
        thumb: 'images/tractor-green-thumb.jpg',
        price: '54,00 $',
      },
      {
        sku: 't_eicher',
        color: 'blue',
        name: 'Eicher Diesel 215/16',
        image: 'images/tractor-blue.jpg',
        thumb: 'images/tractor-blue-thumb.jpg',
        price: '58,00 $',
      },
  ]
export default {
    props: ['store'],
    data: () => ({
      newTask: '',
      variants,
      name: 'Tractor',
      variantActive: variants[0]
    }),
    methods: {
      selectVariant(variant){
        this.variantActive = variant;
        this.store.dispatch('setSku', variant.sku);
      },
      addToCart(){
        this.store.dispatch('setCount');
      },
      getThumbImgUrl: function (imagePath) {
        return require('@/assets/' + imagePath);
      }
    }
}
</script>

<style>
#container-product-detail{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}

.column-1{
  display: table-cell;
  width: 50%;
}

.column-1 .title{
  padding: 12px;
  margin: 0px;
}

.column-2{
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
}

.column-2 .top-content{
  height: 30%;
  display: flex;
  flex-direction: column;
}

.column-2 .top-content .container-cart{
  text-align: end;
}

.column-2 .top-content .container-cart .cart{
  background: green;
  padding: 8px 15px;
  margin: 12px 12px 0 0;
  border-radius: 4px;
  color: #fff;
  box-sizing: border-box;
  line-height: 52px;
}

.column-2 .top-content .name-product{
  font-size: 23px;
  margin: auto 65px 0 65px;
}

.column-2 .bottom-content{
  text-align: center;
}

.column-2 .bottom-content .buy-btn{
  width: 60%;
  margin: 50px auto 20px auto;
  padding: 15px 25px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #4f4f4f;
  border-radius: 6px;
  transition: 0.4s;
}

.column-2 .bottom-content .buy-btn:hover{
  background-color: green;
  color: #fff;
  font-weight: bold;
}


.column-2 .img-thumb-custom{
  cursor: pointer;
  margin: 0 2px;
  border-bottom: 2px solid #fff;
}


.column-2 .active-img-thumb{
  border-color: green;
}


.column-2 .img-thumb-custom:hover{
  cursor: pointer;
  border-color: green;
}

</style>
