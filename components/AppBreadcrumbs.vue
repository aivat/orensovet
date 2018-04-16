<template>
    <nav itemscope itemtype="http://schema.org/BreadcrumbList">
        <div class="nav-sahar" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem" v-for="breadcrumb in bread" :key="breadcrumb.id">
            <nuxt-link class="link" v-bind:class="{ active: !breadcrumb.seen }" itemscope itemtype="http://schema.org/Thing" itemprop="item" v-bind:title="breadcrumb.name" v-bind:to="breadcrumb.link">
                <span itemprop="name"> {{ resizeBread(breadcrumb.name) }}</span> 
            </nuxt-link>
            <meta itemprop="position" v-bind:content="breadcrumb.id">
            <span v-if="breadcrumb.seen" class="slash">
                <svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </span>
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    props: {
        bread: {
            type: Array,
            default: function(){
                return {
                    breadcrumbs: [{
                        id: 1,
                        name: 'Главная',
                        link: '/',
                        seen: true
                    }, {
                        id: 2,
                        name: 'Подменю',
                        link: '/link',
                        seen: true
                    }, {
                        id: 3,
                        name: 'Подподменю',
                        link: '/link',
                        seen: true
                    }, {
                        id: 4,
                        name: 'Подменю',
                        link: '/link',
                        seen: true
                    }, {
                        id: 5,
                        name: 'Подподменю',
                        link: '/link',
                        seen: false
                    }]
                }
            }
        }
    },
    methods: {
        resizeBread(name) {
            if (process.browser) {
                let width = window.innerWidth
                if (width > 500) {
                    if ( name.length > 50 ) {
                        return name.substring(0,50) + ' ...'
                    } else return name
                } else {
                    if ( name.length > 20 ) {
                        return name.substring(0,21) + ' ...'
                    } else return name
                }
            }
        }
    }
}
</script>
 
<style scoped>
nav {
    width: 100%;
    color: black;
    display: flex;
    flex-wrap: wrap;
}

.nav-sahar {
    display: flex;
    justify-content: center;
}

.nav-sahar>a {
    display: flex;
    justify-content: center;
}

.link {
    text-decoration: none;
    color: black;
}

.link:hover {
    text-decoration: underline;
}
.slash>svg {
    fill: #94999f;
}

.active {
   color: #94999f;
}

@media all and (min-width: 500px) {

}
@media (min-width: 1200px) {

}
</style>
