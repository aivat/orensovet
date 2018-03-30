<template>
  <div class="up-wrap" v-bind:class="{ 'up-wrap-active': isActive }" v-on:click="upDown()">
      <div class="up-circle">
            <svg v-bind:class="{ 'up': isVisibleUp }" fill="#FFFFFF" height="44" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            <svg v-bind:class="{ 'down': isVisibleDown }" fill="#FFFFFF" height="44" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
      </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
        isActive: false,
        status: 'up',
        isVisibleUp: false,
        isVisibleDown: true,
        pageYLabel: 0,
        isStatus: 0
    }
    },
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll (event) {
          //  let width = window.innerWidth
            let scrollTop = window.pageYOffset,
                listOffsetHeight = document.body.offsetHeight,
                listScrollHeight = document.body.scrollHeight,
                innerHeight = document.documentElement.clientHeight - 200
            if (scrollTop > innerHeight && this.isStatus == 0) {
                this.isActive = true
                this.isVisibleUp = false
                this.isVisibleDown = true
                this.isStatus = 1
                return
            }

            if (scrollTop < innerHeight && this.isStatus == 1) {
                this.isActive = false
                // this.isVisibleUp = false
                // this.isVisibleDown = true
                // this.isVisibleUp = false
                // this.isVisibleDown = true
                this.isStatus = 0
                return
            }
            
            if (scrollTop > innerHeight && this.isStatus == 2) {
                this.isActive = true
                this.isStatus = 1
                this.isVisibleUp = false
                this.isVisibleDown = true
                // this.isVisibleUp = false
                // this.isVisibleDown = true
            }
            if (scrollTop > 40 && this.isStatus == 2) {
                // this.isActive = true
                this.isStatus = 1
                // this.isVisibleUp = false
                // this.isVisibleDown = true
                // this.isVisibleUp = false
                // this.isVisibleDown = true
            }
            // if ((scrollTop > innerHeight && this.status == 'up')) {
            //     this.isActive = true;
            //     this.isVisibleUp = false
            //     this.isVisibleDown = true
            // }

            // if ((scrollTop < innerHeight && this.status == 'up')) {
            //     this.isActive = false;
            // }

            // if ((scrollTop < innerHeight && this.status == 'down')) {
            //     this.status = 'up';
            // }
            
            // if ((scrollTop > innerHeight && this.status == 'down')) {
            //     this.isActive = true;
            //     this.status = 'up';
            //     this.isVisibleUp = false
            //     this.isVisibleDown = true
            // }
        },
        upDown() {
            //let pageYLabel = 0
            let scrollTop = window.pageYOffset

            if (this.isStatus == 1) {
                this.pageYLabel = scrollTop;
                window.scrollTo(0, 0);
                // this.status = 'down';
                this.isStatus = 2
                this.isVisibleUp = true
                this.isVisibleDown = false
                return;          
            }

            if (this.isStatus == 2) {
                this.pageYLabel = this.pageYLabel;
                window.scrollTo(0, this.pageYLabel);
                // this.status = 'up';
                this.isVisibleUp = false
                this.isVisibleDown = true 
                this.isStatus = 1
                // this.pageYLabel = 0             
            }
        }
    }
}
</script>
 
<style scoped>
.up-wrap {
    z-index: 8888;
    display: block;
    position: fixed;
    bottom: 0px;
    transform: translateY(44px);
    right: 15px;
    -webkit-transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

/* .up-wrap:hover {
    transform: translateY(-15px);
} */

.up-wrap-active {
    transform: translateY(-15px);
    -webkit-transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.up-circle {
    background-color: #0070ba;
    /* border: 1px solid white; */
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0); -webkit-tap-highlight-color: transparent; 
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.up {
    display: none;
}
.down {
    display: none;
}
@media (min-width: 1200px) {
    .up-wrap {
        right: 70px;
    }
    .up-wrap-active {
        transform: translateY(-30px);
    }
}
</style>