<template>
     <div id="container-product-cart">
      <div class="top-content">
        <div class="container-cart">
          <div class="cart-border">
            <span class="cart">Cart: {{store.state.count}} items</span>
          </div>
        </div>
      </div>
      <div class="bottom-content">
        <div class="container-btn-buy cart-border">
          <button class="buy-btn"  @click="addToCart()">
            Buy for {{priceList[store.state.currentSku]}}
          </button>
          <div class="pre-style show-store-payment-layout">
            Payment's Store: {{
              JSON.stringify(store.state, null, 4)
            }}
          </div>
        </div>
      </div>
     </div>
</template>

<script>
  const priceList = {
    t_porsche: '66,00 $',
    t_fendt: '54,00 $',
    t_eicher: '58,00 $',
  };

export default {
    props: ['store'],
    data: () => ({
      priceList,
    }),
    methods: {
      addToCart(){
        this.store.dispatch('setCount');
      }
    }
}
</script>

<style>
#container-product-cart{

}

.column-2 .top-content{
  height: 30%;
  display: flex;
  flex-direction: column;
}

.column-2 .top-content .container-cart{
  text-align: end;
}

.cart-border{
  display: inline-block;
  border: 2px dashed blue
}

.show-store-payment-layout{
  margin-top: 30px;
  color: blue;
  text-align: start;
}

.column-2 .top-content .container-cart .cart{
  background: green;
  padding: 8px 15px;
  margin: 12px;
  border-radius: 4px;
  color: #fff;
  box-sizing: border-box;
  line-height: 52px;
}

#container-product-cart .bottom-content{
  text-align: center;
}

.column-2 .bottom-content .container-btn-buy{
  position: absolute;
  top: 87%;
  left: 50%;
  transform: translate(-50%, 10px);
  padding: 10px;
}

.column-2 .bottom-content .buy-btn{
  padding: 15px 25px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #4f4f4f;
  border-radius: 6px;
  transition: 0.4s;
  width: 350px;
}

.column-2 .bottom-content .buy-btn:hover{
  background-color: green;
  color: #fff;
  font-weight: bold;
}

</style>
