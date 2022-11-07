import {read,utils,writeFileXLSX} from 'xlsx';
export const objectCreator=(name,Cena,Tipo,Cantidad)=>{
    return {
        name,
        dinner:Cena.toLowerCase()==="si"?true:false,
        type:Tipo.toLowerCase()==="no"?"no":Tipo.toLowerCase(),
        quantity:Tipo.toLowerCase()==="no"?0:
            Cantidad.toLowerCase()==="mucho"?.75:
            Cantidad.toLowerCase()==="medio"?.5:
            Cantidad.toLowerCase()==="poco"?.25:
            parseInt(Cantidad)
    };
};
export const readUploadFile=async e=>{
    e.preventDefault();
    if(e.target.files){
        const reader = new FileReader();
        const array=[];
        reader.onload=e=>{
            const data=e.target.result;
            const wb=read(data, { type: "array" });
            const json=utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
            json.forEach(obj=>{
                const A=objectCreator(obj.Nombre,obj.Cena,obj.Tipo,obj.Cantidad);
                array.push(A);
            });
        };
        reader.readAsArrayBuffer(e.target.files[0]);
        return array;
    };
};
export const exportFile=(data,nights)=>{
    const excel=createFile(data,nights);
    const ws=utils.json_to_sheet(excel);
    const wb=utils.book_new();
    utils.book_append_sheet(wb,ws,"Data");
    writeFileXLSX(wb,"Output.xlsx");
};
const createFile=(data,nights)=>{
    let array=[],Vodka=0,Ron=0,Ginebra=0,Whisky=0,Otros=0,CenaP=0;
    const BebidaP=15;
    data.forEach(obj=>{
        const M=Math.ceil(nights*obj.quantity);
        const CENASP=(obj.dinner)?nights*5:0;
        CenaP+=CENASP;
        obj.type==="vodka"?Vodka+=M:
            obj.type==="ron"?Ron+=M:
            obj.type==="ginebra"?Ginebra+=M:
            obj.type==="whisky"?Whisky+=M:
            Otros+=M;
        const L={
            "Nombre":obj.name,
            "Cena Promedio":CENASP,
            "Bebida Tipo": obj.type,
            "Bebida Cantidad":M,
            "Bebida Promedio":M*BebidaP,
            "Total":CENASP+M*BebidaP
        };
        array.push(L);
    });
    const B={
        "Nombre":"",
        "Cena Promedio":"",
        "Bebida Tipo":"",
        "Bebida Cantidad":"",
        "Bebida Promedio":"",
        "Total":""
    };
    const LV={
        "Nombre":"Total Vodka",
        "Cena Promedio":"",
        "Bebida Tipo":"",
        "Bebida Cantidad":Vodka,
        "Bebida Promedio":Vodka*BebidaP,
        "Total":""
    };
    const LR={
        "Nombre":"Total Ron",
        "Cena Promedio":"",
        "Bebida Tipo":"",
        "Bebida Cantidad":Ron,
        "Bebida Promedio":Ron*BebidaP,
        "Total":""
    };
    const LG={
        "Nombre":"Total Ginebra",
        "Cena Promedio":"",
        "Bebida Tipo":"",
        "Bebida Cantidad":Ginebra,
        "Bebida Promedio":Ginebra*BebidaP,
        "Total":""
    };
    const LW={
        "Nombre":"Total Whisky",
        "Cena Promedio":"",
        "Bebida Tipo":"",
        "Bebida Cantidad":Whisky,
        "Bebida Promedio":Whisky*BebidaP,
        "Total":""
    };
    const LO={
        "Nombre":"Total Otros",
        "Cena Promedio":"",
        "Bebida Tipo":"",
        "Bebida Cantidad":Otros,
        "Bebida Promedio":Otros*BebidaP,
        "Total":""
    };
    const LT={
        "Nombre":"Total",
        "Cena Promedio":CenaP,
        "Bebida Tipo":"",
        "Bebida Cantidad":Vodka+Ron+Ginebra+Whisky+Otros,
        "Bebida Promedio":(Vodka+Ron+Ginebra+Whisky+Otros)*BebidaP,
        "Total":(Vodka+Ron+Ginebra+Whisky+Otros)*BebidaP+CenaP
    };
    const RR=[[1,B],[Vodka,LV],[Ron,LR],[Ginebra,LG],[Whisky,LW],[Otros,LO],[1,LT]];
    RR.forEach(obj=>{if(obj[0]>0)array.push(obj[1])});
    return array;
};