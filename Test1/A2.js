class Club{
    name;
    points;
    GD;
    
    constructor(name,points,GD){
        this.name = name;
        this.points = points;
        this.GD = GD;
        this.position = position;
    }

    sort(a, b) {
        var nameA = a.name.toUpperCase(); 
        var nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
              return 0;
      };

}
    


class Rank{
    club;
    constructor(club){
        this.club = Club;
    }
    

    sortRank(){

        for(let z =0;z<Club.length;z++){
            Club[z].position = z+1;
        }
        for (let i=0;i<Club.length;i++){
            for(j=0;j<Club.length;j++){
                if(Club[i].points>Club[j].points){
                    Club[i].position = Club.position[j];
                    Club[j].position = Club[i].position +1;
                }
                else if(Club[i].GD>Club[j].GD){
                    Club[i].position = Club.position[j];
                    Club[j].position = Club.position[i]+1;
                }
                else {
                    return 0;
                }                   
                }
            }
        }
    }   


clubEngland =[
    {
        name:"Arsenal",
        point:99,
        GD: 45
    },
    {
        name:"Mu",
        point:60,
        GD: 29
    },{
        name:"Chelsea",
        point:75,
        GD: 39
    },{
        name:"Liverpool",
        point:88,
        GD: 39
    },
]