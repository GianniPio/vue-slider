var page = new Vue (
    {
        el: '#carousel', /*seleziono elemento*/
        data: {  /* dati da inserire */
            activeClass: 0,  /*contatore usato per la classe active */
            slides : [       /* array di ogetti */

                { 
                    items: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                { 
                    items: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum',
                },
                { 
                    items: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                { 
                    items: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                { 
                    items: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
            ],
        },

        // funzione che aumenta il contatore per le slide
        methods: {
            avanti: function(){
                if (this.activeClass === this.slides.length - 1) {

                    this.activeClass = 0;

                } else {

                    this.activeClass ++;
                }
            },

            // funzione che diminuisce il contatore per le slide
            indietro: function(){
                if (this.activeClass === 0) {
                    this.activeClass = this.slides.length - 1;
                }else {
                    this.activeClass --;
                }
            }
        }
    }
);