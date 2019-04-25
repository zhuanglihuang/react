// 全局js
const E = {
    /*
 *	获取一个链接中指定某一个字符串的值
 *	@param 要获取时指定的url的地址
 *	@param par要截取url中指定的字符串名字
 *	@expample E.getPar(url,'key')
 */
    getPar: function (url, par) {
        var get = url.indexOf(par + "=");
        if (get == -1) {
            return undefined;
        }
        var get_par = url.slice(par.length + get + 1);
        var nextPar = get_par.indexOf("&");
        if (nextPar != -1) {
            get_par = get_par.slice(0, nextPar);
        }
        var getArray = new Array();
        getArray = get_par.split("#");
        return getArray[0];
    },
}
export default E;