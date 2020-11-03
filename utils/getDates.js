const formatDate=(date)=>{
  let dd=date.getDate()
  let mm=date.getMonth()+1
  //let year=date.getFullYear()

  date=dd+'/'+mm
  return date
}

const getDates =()=>{

    let result=[]
    for(let i=0;i<=7;i++){
        let today=new Date()
        today.setDate(today.getDate()-i)
        result.push(formatDate(today))
    }
    return (result)
}

export default getDates
