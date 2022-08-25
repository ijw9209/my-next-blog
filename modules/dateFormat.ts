const dateFormat = ( dateStr : string ): string => {
    
    let temp:string = dateStr.substring(0,10);
    //   console.log(temp);
    let arr:string[] = temp.split('-');
    //   console.log(arr);

    let returnStr:string = arr[0] + '. ' + arr[1] + '. ' + arr[2] + '. ';

    return returnStr;

}
export default dateFormat;