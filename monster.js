var monster_colors ="fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a".split("-").map(a=>"#"+a)

class Monster{  //宣告一個怪物類別，名稱為monster
    constructor(args){//預設值，基本資料(物件的顏色，移動的速度，大小，初始顯示位置......)
        this.r =args.r || random(50,100) //設計怪物的主體，如果傳參數args.r來設定怪物大小， 沒有傳參數，就已10為主
        this.p =args.p || createVector(random(width),random(height/2))    //建立一個向量，由電腦亂數抽取顯示的初始位置
        this.v =args.v || createVector(random(-1,1),random(-1,1)) //移動的速度，如果沒有傳args參數，就會利用亂數(-1,1)，抽出
        this.color =args.color || random(monster_colors) 
        this.mode = random(["happy","bad"])
        this.dead = false //代表活著
        this.timenum = 0 //延長時間，讓它顯示死亡後的畫面
    }

    draw(){  //劃出元件
        if(this.dead == false){
            push()   //重新設定圓點位置
                translate(this.p.x,this.p.y)  //把原點座標(0,0)座標一道物件中心位置
                fill(this.color)
                noStroke()
                ellipse(0,0,this.r)
                //stroke(this.color)
                //stroke(255)
                //line(-this.r/2,0,this.r,0)
                //+++++++++++++++++++++++
                if(this.color=="happy"){
                    fill(255)
                    ellipse(0,0,this.r/2)
                    fill(0)
                    ellipse(0,0,this.r/3)
                }else{
                    fill(255)
                    arc(0,0,this.r/2,this.r/2,0,PI)
                    fill(0)
                    arc(0,0,this.r/3,this.r/3,0,PI)
                }
                //+++++++++++++++++++++
                stroke(this.color)
                strokeWeight(4)
                noFill()
                // line(this.r/2,0,this.r,0)
                for(var j=0;j<10;j++){
                    rotate(PI/4)
                    beginShape()
                        for(var i=0;i<(this.r/2);i++){
                            vertex(this.r/2+i,sin(i/2+frameCount/10)*20)
                        }
                    endShape()
                    pop() //恢復原點到整個視窗的左上角
            }
        }
        else{ //怪物死亡的畫面

        }
       this.timenum=
    }

    update(){  //計算出移動元件後的位置
        this.p.add(this.v)
      if(this.p.x<=0 || this.p.x>=width){ //x軸碰到左邊(<=0)，或是碰到右邊(>=width)
        this.v.x = -this.v.x     //把x軸方向，速度方向改變
      }
      if(this.p.y<=0 || this.p.y>=height){  //y軸碰到上邊(<=0)，或是碰到下邊(>=height)
        this.v.y = -this.v.y     //把y軸方向，速度方向改變
      }
    } 
    isBallInRanger(x,y){  //功能：判斷滑鼠按下的位置是否在物件的範圍內
        let d = dist(x,y,this.p.x,this.p.y)   //計算兩點(滑鼠按下與物件中心點)之間的距離，放到d變數內
        if(d<4*this.r/2){
          return true   //飛彈(x,y)與物件的距離小於物件的寬度，代表碰觸了，則傳回true的值(碰觸)
        }else{
          return false //飛彈(x,y)與物件的距離大於物件的寬度，代表沒有碰觸，則傳回false的值(未碰觸)
        }
      }
      for(var j=0;j<10;j++){
        rotate(PI/4)
        beginShape()
             for(var i=0;i<(this.r/2);i++){
                 vertex(this.r/2+i,sin(i/2+frameCount/10)*20)
            }
        endShape()
    }
}