const getElement=(id)=>document.getElementById(id)
getElement('btnKhoi1').onclick=()=>{
const diemToan=Number(getElement('inpToan').value);
const diemLy=Number(getElement('inpLy').value);
const diemHoa=Number(getElement('inpHoa').value);

const ketqua1=tinhDiemTrungBinh(diemToan,diemLy,diemHoa,0,3)
getElement('tbKhoi1').innerHTML=ketqua1
}

getElement('btnKhoi2').onclick=()=>{

    const  diemVan=Number(getElement('inpVan').value);
    const  diemSu=Number(getElement('inpSu').value);
    const  diemDia=Number(getElement('inpDia').value);
    const  diemEnglish=Number(getElement('inpEnglish').value);

    const ketqua2=tinhDiemTrungBinh(diemVan,diemSu,diemDia,diemEnglish,4)
    getElement('tbKhoi2').innerHTML=ketqua2

}

tinhDiemTrungBinh=(mon1,mon2,mon3,mon4,value)=>{
    return (mon1+mon2+mon3+mon4)/value
}