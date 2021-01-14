const app = new Vue({
    el: '#app',
    data: {
       name:'',
       twitter:'',
       instagram:'',
       snapchat:'',
       email:'',
       loading:true
    },
    methods:{

    },
    mounted(){
        axios.get('https://hirng-x2021.glitch.me/api').then(res=>{
             this.name=res.data.name;
             this.twitter=`https://twitter.com/${res.data.social_media.twitter}`;
             this.instagram=`https://instagram.com/${res.data.social_media.instagram}`;  
             this.snapchat= `https://snapchat.com/add/${res.data.social_media.snapchat}`;
             this.email=`mailto: ${res.data.social_media.email}`;
             this.loading=false;
        })
    }
  })