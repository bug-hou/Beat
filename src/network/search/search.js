import axios from 'axios';
export function jsonp(data,res){
    axios.jsonp = () => {
    const url = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1427,21112,31424,31342,30905
        ,31463,31228,30823,31163,31471&wd=${data}&req=2&csor=2&pwd=1&cb=search`
    new Promise((resolve,reject) => {
        window.search =(result) => {
            resolve(result)
            res(result);
        }
        var JSONP=document.createElement("script");
        JSONP.type="text/javascript";
        JSONP.src= url;
        document.getElementsByTagName("head")[0].appendChild(JSONP);
        setTimeout(() => {
            document.getElementsByTagName("head")[0].removeChild(JSONP)
        },500)
    })
}
}