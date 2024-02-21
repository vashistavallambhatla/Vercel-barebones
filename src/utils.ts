const MAX_LENGTH=5;

export function generate() {
    const str="1234567890qwertyuiopasdfghjklzxcvbnm";
    let ans="";
    for(let i=0;i<MAX_LENGTH;i++){
        ans+=str[Math.floor(Math.random() * str.length)];
    }
    return ans;
}