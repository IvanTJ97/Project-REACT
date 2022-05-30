import {Test,Chip,Res} from './JogoOca.styles';
import {useState} from 'react';
import Data from './Data/data';
export default ()=>{ 
  const [info,setinfo]=useState("");
  const [j1,setj1]=useState(0);
  const [j2,setj2]=useState(0);
  const [j3,setj3]=useState(0);
  const [j4,setj4]=useState(0);
  const [j5,setj5]=useState(0);
  const [j6,setj6]=useState(0);
  const [J,setJ]=useState(1);
  const tirar=()=>{
    const R=Math.floor(Math.random()*(6-1)+1);
    if(J===1){
      if(j1+R===4)setj1(8);
      else if(j1+R===5)setj1(11);
      else if(j1+R===8)setj1(13);
      else if(j1+R===13)setj1(17);
      else if(j1+R===17)setj1(22);
      else if(j1+R===22)setj1(26);
      else if(j1+R===25)setj1(52);
      else if(j1+R===26)setj1(31);
      else if(j1+R===31)setj1(35);
      else if(j1+R===35)setj1(40);
      else if(j1+R===40)setj1(44);
      else if(j1+R===44)setj1(49);
      else if(j1+R===49)setj1(53);
      else if(j1+R===53)setj1(58);
      else if(j1+R===58)setj1(62);
      else if(j1+R>62)setj1(62);
      else setj1(j1+R);
      setinfo(Data[j1+R<62?j1+R:62].Text);
    }
    else if(J===2){
      if(j2+R===4)setj2(8);
      else if(j2+R===5)setj2(11);
      else if(j2+R===8)setj2(13);
      else if(j2+R===13)setj2(17);
      else if(j2+R===17)setj2(22);
      else if(j2+R===22)setj2(26);
      else if(j2+R===25)setj2(52);
      else if(j2+R===26)setj2(31);
      else if(j2+R===31)setj2(35);
      else if(j2+R===35)setj2(40);
      else if(j2+R===40)setj2(44);
      else if(j2+R===44)setj2(49);
      else if(j2+R===49)setj2(53);
      else if(j2+R===53)setj2(58);
      else if(j2+R===58)setj2(62);
      else if(j2+R>62)setj2(62);
      else setj2(j2+R);
      setinfo(Data[j2+R<62?j2+R:62].Text);
    }
    else if(J===3){
      if(j3+R===4)setj3(8);
      else if(j3+R===5)setj3(11);
      else if(j3+R===8)setj3(13);
      else if(j3+R===13)setj3(17);
      else if(j3+R===17)setj3(22);
      else if(j3+R===22)setj3(26);
      else if(j3+R===25)setj3(52);
      else if(j3+R===26)setj3(31);
      else if(j3+R===31)setj3(35);
      else if(j3+R===35)setj3(40);
      else if(j3+R===40)setj3(44);
      else if(j3+R===44)setj3(49);
      else if(j3+R===49)setj3(53);
      else if(j3+R===53)setj3(58);
      else if(j3+R===58)setj3(62);
      else if(j3+R>62)setj3(62);
      else setj3(j3+R);
      setinfo(Data[j3+R<62?j3+R:62].Text);
    }
    else if(J===4){
      if(j4+R===4)setj4(8);
      else if(j4+R===5)setj4(11);
      else if(j4+R===8)setj4(13);
      else if(j4+R===13)setj4(17);
      else if(j4+R===17)setj4(22);
      else if(j4+R===22)setj4(26);
      else if(j4+R===25)setj4(52);
      else if(j4+R===26)setj4(31);
      else if(j4+R===31)setj4(35);
      else if(j4+R===35)setj4(40);
      else if(j4+R===40)setj4(44);
      else if(j4+R===44)setj4(49);
      else if(j4+R===49)setj4(53);
      else if(j4+R===53)setj4(58);
      else if(j4+R===58)setj4(62);
      else if(j4+R>62)setj4(62);
      else setj4(j4+R);
      setinfo(Data[j4+R<62?j4+R:62].Text);
    }
    else if(J===5){
      if(j5+R===4)setj5(8);
      else if(j5+R===5)setj5(11);
      else if(j5+R===8)setj5(13);
      else if(j5+R===13)setj5(17);
      else if(j5+R===17)setj5(22);
      else if(j5+R===22)setj5(26);
      else if(j5+R===25)setj5(52);
      else if(j5+R===26)setj5(31);
      else if(j5+R===31)setj5(35);
      else if(j5+R===35)setj5(40);
      else if(j5+R===40)setj5(44);
      else if(j5+R===44)setj5(49);
      else if(j5+R===49)setj5(53);
      else if(j5+R===53)setj5(58);
      else if(j5+R===58)setj5(62);
      else if(j5+R>62)setj5(62);
      else setj5(j5+R);
      setinfo(Data[j5+R<62?j5+R:62].Text);
    }
    else{
      if(j6+R===4)setj6(8);
      else if(j6+R===5)setj6(11);
      else if(j6+R===8)setj6(13);
      else if(j6+R===13)setj6(17);
      else if(j6+R===17)setj6(22);
      else if(j6+R===22)setj6(26);
      else if(j6+R===25)setj6(52);
      else if(j6+R===26)setj6(31);
      else if(j6+R===31)setj6(35);
      else if(j6+R===35)setj6(40);
      else if(j6+R===40)setj6(44);
      else if(j6+R===44)setj6(49);
      else if(j6+R===49)setj6(53);
      else if(j6+R===53)setj6(58);
      else if(j6+R===58)setj6(62);
      else if(j6+R>62)setj6(62);
      else setj6(j6+R);
      setinfo(Data[j6+R<62?j6+R:62].Text);
    };
    ganar();
    (J===1)?setJ(2):(J===2)?setJ(3):(J===3)?setJ(4):(J===4)?setJ(5):(J===5)?setJ(6):setJ(1);
  };
  const ganar=()=>{
    if(j1===62&&j1===j2&&j1===j3&&j1===j4&&j1===j5&&j1===j6)window.location.reload(false);
  }
  return <>
  <Test>
      <div className="tablero">
        <div id="c26" onClick={()=>{setinfo(Data[25].Text)}}>26</div>
        <div id="c25" onClick={()=>{setinfo(Data[24].Text)}}>25</div>
        <div id="c24" onClick={()=>{setinfo(Data[23].Text)}}>24</div>
        <div id="c23" onClick={()=>{setinfo(Data[22].Text)}}>23</div>
        <div id="c22" onClick={()=>{setinfo(Data[21].Text)}}>22</div>
        <div id="c21" onClick={()=>{setinfo(Data[20].Text)}}>21</div>
        <div id="c20" onClick={()=>{setinfo(Data[19].Text)}}>20</div>
        <div id="c19" onClick={()=>{setinfo(Data[18].Text)}}>19</div>
        <div id="c18" onClick={()=>{setinfo(Data[17].Text)}}>18</div>
        <div id="c17" onClick={()=>{setinfo(Data[16].Text)}}>17</div>
        <div id="c27" onClick={()=>{setinfo(Data[26].Text)}}>27</div>
        <div id="c54" onClick={()=>{setinfo(Data[53].Text)}}>54</div>
        <div id="c53" onClick={()=>{setinfo(Data[52].Text)}}>53</div>
        <div id="c52" onClick={()=>{setinfo(Data[51].Text)}}>52</div>
        <div id="c51" onClick={()=>{setinfo(Data[50].Text)}}>51</div>
        <div id="c50" onClick={()=>{setinfo(Data[49].Text)}}>50</div>
        <div id="c49" onClick={()=>{setinfo(Data[48].Text)}}>49</div>
        <div id="c48" onClick={()=>{setinfo(Data[47].Text)}}>48</div>
        <div id="c47" onClick={()=>{setinfo(Data[46].Text)}}>47</div>
        <div id="c16" onClick={()=>{setinfo(Data[15].Text)}}>16</div>
        <div id="c28" onClick={()=>{setinfo(Data[27].Text)}}>28</div>
        <div id="c55" onClick={()=>{setinfo(Data[54].Text)}}>55</div>
        <div id="c63" className="centro">63</div>
        <div id="c46" onClick={()=>{setinfo(Data[45].Text)}}>46</div>
        <div id="c15" onClick={()=>{setinfo(Data[14].Text)}}>15</div>
        <div id="c29" onClick={()=>{setinfo(Data[28].Text)}}>29</div>
        <div id="c56" onClick={()=>{setinfo(Data[55].Text)}}>56</div>
        <div id="c45" onClick={()=>{setinfo(Data[44].Text)}}>45</div>
        <div id="c14" onClick={()=>{setinfo(Data[13].Text)}}>14</div>
        <div id="c30" onClick={()=>{setinfo(Data[29].Text)}}>30</div>
        <div id="c57" onClick={()=>{setinfo(Data[56].Text)}}>57</div>
        <div id="c44" onClick={()=>{setinfo(Data[43].Text)}}>44</div>
        <div id="c13" onClick={()=>{setinfo(Data[12].Text)}}>13</div>
        <div id="c31" onClick={()=>{setinfo(Data[30].Text)}}>31</div>
        <div id="c58" onClick={()=>{setinfo(Data[57].Text)}}>58</div>
        <div id="c43" onClick={()=>{setinfo(Data[42].Text)}}>43</div>
        <div id="c12" onClick={()=>{setinfo(Data[11].Text)}}>12</div>
        <div id="c32" onClick={()=>{setinfo(Data[31].Text)}}>32</div>
        <div id="c59" onClick={()=>{setinfo(Data[58].Text)}}>59</div>
        <div id="c60" onClick={()=>{setinfo(Data[59].Text)}}>60</div>
        <div id="c61" onClick={()=>{setinfo(Data[60].Text)}}>61</div>
        <div id="c62" onClick={()=>{setinfo(Data[61].Text)}}>62</div>
        <div className="blanco" id="blanco"></div>
        <div id="c42" onClick={()=>{setinfo(Data[41].Text)}}>42</div>
        <div id="c11" onClick={()=>{setinfo(Data[10].Text)}}>11</div>
        <div id="c33" onClick={()=>{setinfo(Data[32].Text)}}>33</div>
        <div id="c34" onClick={()=>{setinfo(Data[33].Text)}}>34</div>
        <div id="c35" onClick={()=>{setinfo(Data[34].Text)}}>35</div>
        <div id="c36" onClick={()=>{setinfo(Data[35].Text)}}>36</div>
        <div id="c37" onClick={()=>{setinfo(Data[36].Text)}}>37</div>
        <div id="c38" onClick={()=>{setinfo(Data[37].Text)}}>38</div>
        <div id="c39" onClick={()=>{setinfo(Data[38].Text)}}>39</div>
        <div id="c40" onClick={()=>{setinfo(Data[39].Text)}}>40</div>
        <div id="c41" onClick={()=>{setinfo(Data[40].Text)}}>41</div>
        <div id="c10" onClick={()=>{setinfo(Data[9].Text)}}>10</div>
        <div className="inicio" id="c1">1</div>
        <div id="c2" onClick={()=>{setinfo(Data[1].Text)}}>2</div>
        <div id="c3" onClick={()=>{setinfo(Data[2].Text)}}>3</div>
        <div id="c4" onClick={()=>{setinfo(Data[3].Text)}}>4</div>
        <div id="c5" onClick={()=>{setinfo(Data[4].Text)}}>5</div>
        <div id="c6" onClick={()=>{setinfo(Data[5].Text)}}>6</div>
        <div id="c7" onClick={()=>{setinfo(Data[6].Text)}}>7</div>
        <div id="c8" onClick={()=>{setinfo(Data[7].Text)}}>8</div>
        <div id="c9" onClick={()=>{setinfo(Data[8].Text)}}>9</div>
        <Chip color={"#ff00cc"} x={Data[j1].X[0]} y={Data[j1].Y}>1</Chip>
        <Chip color={"#ffff00"} x={Data[j2].X[1]} y={Data[j2].Y}>2</Chip>
        <Chip color={"#ff0000"} x={Data[j3].X[2]} y={Data[j3].Y}>3</Chip>
        <Chip color={"#00ff00"} x={Data[j4].X[3]} y={Data[j4].Y}>4</Chip>
        <Chip color={"#0000ff"} x={Data[j5].X[4]} y={Data[j5].Y}>5</Chip>
        <Chip color={"#00ccff"} x={Data[j6].X[5]} y={Data[j6].Y}>6</Chip>
      </div>
    </Test>
    <Res>
      <input type="button" value="+" className='btn' onClick={()=>{tirar()}}/><br/>
      <h4>Turno del jugador {J}</h4>
      <p>{info}</p>
    </Res>
  </>
};

