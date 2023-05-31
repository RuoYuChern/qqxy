export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

export function formatDate(t:number) {
    t = t || Date.now();
    let time = new Date(t);
    return formatTime(time);
}

export const toUUID = (n: number) =>{
    const content : string = 'AaBbCcdDEeFfgGHh1234567890iIjJkKLMNlmnOPQopqRSTrstUVWuvwXYZxyz';
    let outString: string = "";
    for (let i = 0; i < 32; i++) {
        outString = outString + (content.charAt(Math.floor(Math.random()*content.length)));
    }
    var seq = n;
    var fmt = `${outString}-${seq}`
    return fmt;
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}
