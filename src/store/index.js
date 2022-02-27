import { createStore } from 'vuex'

export default createStore({
  state: {
    load : false,
    showBtn : true,
    headerType : 'home',
    currentPage : {
      count : null,
      path : 'M 20 2 L 4 2 C 1.789063 2 0 3.789063 0 6 L 0 16 C 0 18.210938 1.789063 20 4 20 L 19.5 20 L 24 23 L 24 6 C 24 3.789063 22.210938 2 20 2 Z M 20 16 L 11 16 L 11 14 L 20 14 Z M 20 12 L 4 12 L 4 10 L 20 10 Z M 20 8 L 4 8 L 4 6 L 20 6 Z ',
      options : [
        {name : "Nouveau groupe",url: "/"}
      ]
    },
    pageInfos : {
      disc : {
        count : null,
        path : 'M 20 2 L 4 2 C 1.789063 2 0 3.789063 0 6 L 0 16 C 0 18.210938 1.789063 20 4 20 L 19.5 20 L 24 23 L 24 6 C 24 3.789063 22.210938 2 20 2 Z M 20 16 L 11 16 L 11 14 L 20 14 Z M 20 12 L 4 12 L 4 10 L 20 10 Z M 20 8 L 4 8 L 4 6 L 20 6 Z ',
        options : [
          {name : "Nouveau groupe",url: "/"}
        ]
      },
      statut : {
        count : null,
        path : 'M 9 2 L 7 4 L 4 4 C 2.898438 4 2 4.898438 2 6 L 2 18 C 2 19.101563 2.898438 20 4 20 L 20 20 C 21.101563 20 22 19.101563 22 18 L 22 6 C 22 4.898438 21.101563 4 20 4 L 17 4 L 15 2 Z M 12 7 C 14.800781 7 17 9.199219 17 12 C 17 14.800781 14.800781 17 12 17 C 9.199219 17 7 14.800781 7 12 C 7 9.199219 9.199219 7 12 7 Z M 12 8.5 C 10.066406 8.5 8.5 10.066406 8.5 12 C 8.5 13.933594 10.066406 15.5 12 15.5 C 13.933594 15.5 15.5 13.933594 15.5 12 C 15.5 10.066406 13.933594 8.5 12 8.5 Z ',
        options : [
          {name : "Confidentialité du statut",url: "/"}
        ]
      },
      appel : {
        count : null,
        path : 'M 17 3 C 16.449219 3 16 3.449219 16 4 L 16 6 L 14 6 C 13.449219 6 13 6.449219 13 7 C 13 7.550781 13.449219 8 14 8 L 16 8 L 16 10 C 16 10.550781 16.449219 11 17 11 C 17.550781 11 18 10.550781 18 10 L 18 8 L 20 8 C 20.550781 8 21 7.550781 21 7 C 21 6.449219 20.550781 6 20 6 L 18 6 L 18 4 C 18 3.449219 17.550781 3 17 3 Z M 5.03125 3.007813 C 3.898438 3.007813 2.960938 3.949219 3.03125 5.078125 C 3.292969 9.347656 5.132813 13.1875 7.972656 16.027344 C 10.8125 18.867188 14.652344 20.707031 18.921875 20.96875 C 20.050781 21.039063 20.988281 20.101563 20.988281 18.96875 L 20.988281 17.238281 C 20.988281 16.21875 20.230469 15.371094 19.21875 15.25 L 16.699219 14.960938 C 16.089844 14.890625 15.492188 15.097656 15.0625 15.53125 L 13.210938 17.378906 C 11.792969 16.660156 10.503906 15.71875 9.390625 14.609375 C 8.28125 13.496094 7.339844 12.207031 6.617188 10.789063 L 8.46875 8.9375 C 8.902344 8.507813 9.109375 7.910156 9.039063 7.300781 L 8.75 4.78125 C 8.628906 3.769531 7.78125 3.007813 6.757813 3.007813 Z ',
        options : [
          {name : "Confidentialité du statut",url: "/"}
        ]
      }
    },
    chats : [
      {
        name : "Ariana",
        message : "I love You 😇🤗😘 , Tu es 🤤 🔥...",
        time : "12:20"
      },
      {
        name : "You",
        message : "Je vois ! 😏 Demain je  ...  ",
        time : "12:21"
      },
      {
        name : "Ariana",
        message : "Je viens encore demain b ?",
        time : "12:20"
      },
      {
        name : "You",
        message : "Mais demain je  ...  🙃 ",
        time : "12:21"
      },
      {
        name : "Ariana",
        message : "I love You 😇🤗😘 , Tu es 🤤 🔥...",
        time : "12:20"
      },
    ],
    allMessage : [
      {
        name : "Ariana 😍", 
        image:"https://static1.purepeople.com/articles/6/38/89/76/@/5595578-ariana-grande-62eme-soiree-annuelle-de-624x600-1.jpg",
        message : "I love You 😇🤗😘 , Tu es 🔥...",
        time : "11:40",
        count : 8
      },
      {
        name : "Franck ~ ", 
        image:"https://avatars.githubusercontent.com/u/82069062?v=4",
        message : "Yo ✨...",
        time : "Hier",
        count : 0
      },
      {
        name : "Clara", 
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafWQIZzrZ7rUXOfU4nz-kosFYQdqU2pFdrQ&usqp=CAU",
        message : "Lorem ipsum dolor ..",
        time : "23/02/2022",
        count : 1
      },
      {
        name : "Derulo", 
        image:"https://img.nrj.fr/4tlIxJY07ymsgvc6fCB_YT7tNdA=/800x450/smart/medias%2F2020%2F10%2Fderulo_5f91b1167ea67.jpg",
        message : "Lorem ipsum consectetur..",
        time : "23/02/2022",
        count : 0
      },
      {
        name : "Joyce Bb2 ~ ❤", 
        image:"https://i.pinimg.com/originals/1e/76/0b/1e760b6e7b2fce60eb3e5dd08931bc31.jpg",
        message : "🤣🤣 consectetur😘..",
        time : "23/02/2022",
        count : 3
      },
      {
        name : "Chris", 
        image:"https://i0.wp.com/www.starmag.com/wp-content/uploads/2022/01/chris-brown-une-femme-laccuse-de-lavoir-droguee-et-violee-lors-dune-soiree.jpg?resize=1200%2C900&ssl=1",
        message : "Lorem buy consectetur...",
        time : "23/02/2022",
        count : 0
      },
      {
        name : "Zendaya", 
        image:"https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/1200px-Zendaya_-_2019_by_Glenn_Francis.jpg",
        message : "😏 ipsum dolor consectetur...",
        time : "23/02/2022",
        count : 1
      },
      {
        name : "Claire Bb1 ~ ❤", 
        image:"https://i.pinimg.com/736x/a1/65/87/a1658745abf0e70d11a7eacffb5bce81.jpg",
        message : "😢 dolor consectetur...",
        time : "23/02/2022",
        count : 7
      }
    ]
  },
  mutations: {
    SET_LOAD : (state,value) => state.load = value,
    SET_CURRENT_PAGE : (state,value) => state.currentPage = state.pageInfos[value],
    SET_HEADER_TYPE: (state,type) => state.headerType = type,
    SET_SHOW_BTN : (state,type) => state.showBtn = type
  },
  actions: {
    setLoad : ({commit},value) => commit('SET_LOAD',value),
    setCurrentPage : ({commit},name) => commit('SET_CURRENT_PAGE',name),
    setHeaderType : ({commit},type)=> commit('SET_HEADER_TYPE',type),
    setShowBtn : ({commit},type) => commit('SET_SHOW_BTN',type)
  },
  getters: {
    currentPage : state => state.currentPage,
    load : state => state.load,
    headerType : state => state.headerType,
    chats : state => state.chats,
    allMessage : state => state.allMessage,
    showBtn : state => state.showBtn
  },
  modules: {
  }
})
