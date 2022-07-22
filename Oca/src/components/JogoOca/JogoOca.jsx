import {Test,Chip,Res} from './JogoOca.styles';
import {useState} from 'react';
import Data from './Data/data';
const Jogo=({select})=>{
  const [info, setinfo] = useState("");
  const [casillas,setCasillas]=useState([0,0,0,0,0,0]);
  const [J,setJ]=useState(0);
  const fichas=[{id:0,color:"#f0c"},{id:1,color:"#ff0"},{id:2,color:"#f00"},{id:3,color:"#0f0"},{id:4,color:"#00f"},{id:5,color:"#0cf"}];
  const tirar=()=>{
    const R=Math.floor(Math.random()*(6-1)+1);
    const S=casillas[J]+R;
    if(S===4)casillas[J]=8;
    else if(S===5)casillas[J]=11;
    else if(S===8)casillas[J]=13;
    else if(S===13)casillas[J]=17;
    else if(S===17)casillas[J]=22;
    else if(S===22)casillas[J]=26;
    else if(S===25)casillas[J]=52;
    else if(S===26)casillas[J]=31;
    else if(S===31)casillas[J]=35;
    else if(S===35)casillas[J]=40;
    else if(S===40)casillas[J]=44;
    else if(S===44)casillas[J]=49;
    else if(S===49)casillas[J]=53;
    else if(S===53)casillas[J]=58;
    else if(S===58)casillas[J]=62;
    else if(S>62)casillas[J]=62;
    else casillas[J]=S;
    setinfo(Data[casillas[J]].Text);
    turno();
  };
  const turno=()=>{
    let P=J;
    while(true){
      (P===select-1)?P=0:P++;
      if(casillas[P]!==62){setJ(P);break};
      ganar();
    }
  }
  const ganar=()=>{
    if(casillas[0]===62){
      let S=casillas.filter(obj=>obj!==62);
      if(S.length===0)window.location.reload(false);
    };
    //if(casillas[0]===62&&casillas[0]===casillas[1]&&casillas[0]===casillas[2]&&casillas[0]===casillas[3]&&casillas[0]===casillas[4]&&casillas[0]===casillas[5])window.location.reload(false);
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
        {fichas.slice(0,select).map((obj,key)=><Chip key={key} color={obj.color} x={Data[casillas[obj.id]].X[obj.id]} y={Data[casillas[obj.id]].Y}>{obj.id+1}</Chip>)}
      </div>
    </Test>
    <Res>
      <input type="button" value="+" className='btn' onClick={tirar}/><br />
      <h4>Turno del jugador {J+1}</h4>
      <p>{info}</p>
    </Res>
  </>
};
export default Jogo;